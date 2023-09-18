import{_ as i,W as l,X as r,Z as e,$ as t,a0 as p,Y as o,D as n}from"./framework-4b7e9ff4.js";const s={},c=o('<h1 id="rabbitmq消息如何保障100-投递成功" tabindex="-1"><a class="header-anchor" href="#rabbitmq消息如何保障100-投递成功" aria-hidden="true">#</a> RabbitMQ消息如何保障100%投递成功</h1><h2 id="_1-保证可靠性投递需具备的条件" tabindex="-1"><a class="header-anchor" href="#_1-保证可靠性投递需具备的条件" aria-hidden="true">#</a> 1. 保证可靠性投递需具备的条件</h2><ol><li><p>保障消息的成功发出</p></li><li><p>保障MQ节点的成功接收</p></li><li><p>发送端收到MQ节点（broker）确认应答</p></li><li><p>完善的消息补偿机制</p></li></ol><p>在实际生产中，很难保障前三点的完全可靠，比如在极端的环境中，生产者发送消息失败了，发送端在接受确认应答时突然发生网络闪断等等情况，很难保障可靠性投递，所以就需要有第四点完善的消息补偿机制。</p><h2 id="_2-互联网大厂的解决方案" tabindex="-1"><a class="header-anchor" href="#_2-互联网大厂的解决方案" aria-hidden="true">#</a> 2. <strong>互联网大厂的解决方案</strong></h2><ul><li><p>第一种：消息落库，对消息状态进行打标。具体来说就是将消息持久化到数据库并设置状态值，收到消费端的应答就改变当前记录的状态。再用轮询去重新发送没接收到应答的消息，注意这里要设置重试次数。</p></li><li><p>第二种：消息的延迟投递，做二次确认，回调检查。</p></li></ul><h2 id="_3-方案一-消息落库-对消息状态进行打标" tabindex="-1"><a class="header-anchor" href="#_3-方案一-消息落库-对消息状态进行打标" aria-hidden="true">#</a> 3. 方案一：<strong>消息落库，对消息状态进行打标</strong></h2><p>消息落库的流程图</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210514102652979.png" alt="image-20210514102652979" tabindex="0" loading="lazy"><figcaption>image-20210514102652979</figcaption></figure><p>以我们用户下单成功为例：</p><ol><li><p>step1: 对我的业务数据进行入库，业务数据入库完毕（这里要特别注意一定要保证业务数据入库）再对要发送的消息进行入库，</p><blockquote><p>图中采用了两个数据库，可以根据实际业务场景来确定是否采用两个数据库，如果采用了两个数据库，有人可能就像到了采用分布式事务来保证数据的一致性，但是在大型互联网中，基本很少采用事务，都是采用补偿机制</p></blockquote></li><li><p>setp2&amp; Step3 &amp; Step 4:</p><ol><li>Step2: 对业务数据和消息入库完毕就进入 setp2，发送消息到 MQ 服务上</li><li>Step3: 按照正常的流程就是消费者监听到该消息，就根据唯一 id 修改该消息的状态为已消费，并给一个确认应答 ack 到 Listener。</li><li>Step4: 修改msg 数据库，更改状态</li></ol></li><li><p>Step5 &amp; Step6 :</p><ol><li>Step5: 如果出现意外情况，消费者未接收到或者 Listener 接收确认时发生网络闪断，接收不到，这时候就需要用到我们的<strong>分布式定时任务来从 msg 数据库抓取那些超时了还未被消费的消息</strong>，</li><li>Step6: <strong>重新发送一遍</strong>。</li></ol><blockquote><p>重试机制里面要设置重试次数限制，因为一些外部的原因导致一直发送失败的，不能重试太多次，要不然会拖垮整个服务。</p></blockquote></li><li><p>Step7: 例如重试三次还是失败的，就把消息的 status 设置成 2，然后通过补偿机制，人工去处理。实际生产中，这种情况还是比较少的，但是你不能没有这个补偿机制，要不然就做不到可靠性了。</p></li></ol><h2 id="_4-方案二-延迟投递-做二次确认-回调检查。" tabindex="-1"><a class="header-anchor" href="#_4-方案二-延迟投递-做二次确认-回调检查。" aria-hidden="true">#</a> 4. 方案二：<strong>延迟投递，做二次确认，回调检查。</strong></h2><h3 id="_4-1-方案一的问题" tabindex="-1"><a class="header-anchor" href="#_4-1-方案一的问题" aria-hidden="true">#</a> 4.1 方案一的问题：</h3><p>生产端既要对业务数据入库，又要对消息数据入库，这种设计在高并发场景下，真的合适吗？在核心链路上，每一次持久化都是需要很精心考量的，持久化一次就花费 100 - 200 毫秒，这在高并发场景下是忍受不了的。</p><h3 id="_4-2-流程" tabindex="-1"><a class="header-anchor" href="#_4-2-流程" aria-hidden="true">#</a> 4.2 流程</h3><p>这时候需要我们的第二种方案了，流程图如下。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210514092618725.png" alt="image-20210514092618725" tabindex="0" loading="lazy"><figcaption>image-20210514092618725</figcaption></figure><ol><li><p>Step1 &amp; Step2:</p><p>upstream Server 就是我们的上游服务，也就是生产者，生产者将业务数据入库成功后，生成两条消息</p><ol><li>Step1: 一条是立即发送出去给到下游服务 downstream Server的</li><li>Step2: 一条是延迟消息给到 补偿服务 callback Server的。</li></ol></li><li><p>Setp3 &amp; Step4:</p><ol><li>Step3:正常情况下，下游服务监听到这个即时的消息</li><li>Step4: 会发送一条消息给到 callback Server，注意这里不是采用第一种方案里面的返回 ack 方式，而是发送了一条消息给回去。</li></ol></li><li><p>Step5 &amp; Step6</p><ol><li>Step5: callback Server 监听到这个消息，知道了刚才有一条消息消费成功了，然后把这个持久化到数据库中</li><li>Step6: 当上游服务发送的延迟消息到达 callback Server 时，callback Server 就会去数据库查询，刚才下游服务是否有处理过这个对应的消息，如果其 msg DB 里面有这个记录就说明这条消息是已经被消费了，如果不存在这个记录，那么 callback Server 就会发起一个 RPC 请求给到上游服务，告诉上游服务，你刚才这个消息没发送成功，需要重新发送一遍，上游服务就重新发送即时和延迟的两条消息出去，按照之前的流程继续走一遍。</li></ol></li></ol><p>虽然第二种方案也是无法做到 100% 的可靠传递，在特别极端的情况，还是需要定时任务和补偿机制进行辅助的。但是第二种方案的核心是减少数据库操作，这个点很重要！</p><p>在高并发场景下，我考虑的不是百分百的可靠性了，而是考虑可用性，性能能否扛得住这个流量，所以我能减少一次数据库操作就减少一次。我上游服务减少了一次数据库操作，我的服务性能相对而言就提高了一些，而且又能把异步 callback Server 补偿服务解耦出来。</p><h2 id="_5-结论" tabindex="-1"><a class="header-anchor" href="#_5-结论" aria-hidden="true">#</a> 5. 结论</h2><p>这两种方案都是可行的，需要根据实际业务来进行选择，大型的超高并发的场景会选择第二种方案，普通的就采用第一种即可。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',23),d={href:"https://www.jianshu.com/p/1a95ad12dc9d",target:"_blank",rel:"noopener noreferrer"};function h(b,g){const a=n("ExternalLinkIcon");return l(),r("div",null,[c,e("p",null,[e("a",d,[t("RabbitMQ 100% 投递成功方案详解"),p(a)])])])}const S=i(s,[["render",h],["__file","rabbitmq-x-success100.html.vue"]]);export{S as default};
