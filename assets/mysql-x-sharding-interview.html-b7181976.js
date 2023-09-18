import{_ as e,W as n,X as r,Z as a,$ as o,a0 as t,Y as s,D as g}from"./framework-4b7e9ff4.js";const l={},p=s('<h1 id="mysql-分表分库-面试场景切入" tabindex="-1"><a class="header-anchor" href="#mysql-分表分库-面试场景切入" aria-hidden="true">#</a> MySQL - 分表分库（面试场景切入）</h1><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015102643032.png" alt="image-20221015102643032" tabindex="0" loading="lazy"><figcaption>image-20221015102643032</figcaption></figure><h2 id="_1-为什么要进行分库分表" tabindex="-1"><a class="header-anchor" href="#_1-为什么要进行分库分表" aria-hidden="true">#</a> 1. 为什么要进行分库分表？</h2><p><strong>面试官</strong>：小伙子，看到你的简历上面写了项目中有对MySQL进行分库分表，为什么要进行分库分表？</p><p><strong>我</strong>：当MySQL单表数据量过大，比如超过5千万条的时候，读写性能变得很差。而且常规的优化手段已经不起作用了，比如：SQL调优、添加索引、主从复制、读写分离。这时候就需要用到MySQL终极优化方案 — 分库分表。</p><h2 id="_2-怎么判断项目是需要分库还是要分表" tabindex="-1"><a class="header-anchor" href="#_2-怎么判断项目是需要分库还是要分表" aria-hidden="true">#</a> 2. 怎么判断项目是需要分库还是要分表？</h2><p><strong>面试官</strong>：不错，我该怎么判断项目是需要分库还是要分表？是先分库还是先分表？</p><p><strong>我</strong>：</p><ol><li>当数据库的QPS过高，数据库连接数不足的时候，就需要分库。</li><li>当单表数据量过大，读写性能较差，就需要分表。</li><li>当两者都有的时候，就需要分库分表。</li></ol><p>至于先分库还是先分表？建议先分表，如果分表能解决问题，就不需要分库了，毕竟需要单独服务器资源，成本更高。</p><h2 id="_3-分库分表有哪些拆分方案" tabindex="-1"><a class="header-anchor" href="#_3-分库分表有哪些拆分方案" aria-hidden="true">#</a> 3. 分库分表有哪些拆分方案？</h2><p><strong>面试官</strong>：小伙子，总结的挺全。分库分表有哪些拆分方案呢？</p><p><strong>我</strong>：分库分表有垂直拆分和水平拆分。垂直拆分又有垂直分库、垂直分表。</p><ol><li>垂直分库，不同的业务拆分到不同的数据库。</li><li>垂直分表，把长度较大或者访问频次较低的字段，拆分到扩展表中。</li><li>水平分表，单表数据量过大时，按照订单ID拆分到多张表中。</li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015101757167.png" alt="image-20221015101757167" tabindex="0" loading="lazy"><figcaption>image-20221015101757167</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015101814377.png" alt="image-20221015101814377" tabindex="0" loading="lazy"><figcaption>image-20221015101814377</figcaption></figure><h2 id="_4-分库分表缺点" tabindex="-1"><a class="header-anchor" href="#_4-分库分表缺点" aria-hidden="true">#</a> 4. 分库分表缺点？</h2><p><strong>面试官</strong>：小伙子，有点东西。都知道分库分表好使，就没有什么缺点吗？</p><p><strong>我</strong>：分库分表带来了低耦合、高性能的优点，可是缺点却是一大堆。</p><p><strong>垂直分库</strong>： 不同库多表之间无法join关联查询，只能通过接口聚合，复杂度直线上升。 横跨多个数据库导致无法使用本地事务，数据强一致性就别想了，只能引入更为复杂的分布式事务，勉强实现数据的最终一致性，可用性直线下降。</p><p><strong>垂直分表</strong>： 本来一张表能查出来的数据，现在需要多张表join关联查询，这不瞎耽误事。</p><p><strong>水平分表</strong>： 多张表关联查询时，无法实现分页、排序功能。</p><h2 id="_5-分库分表问题如何解决" tabindex="-1"><a class="header-anchor" href="#_5-分库分表问题如何解决" aria-hidden="true">#</a> 5. 分库分表问题如何解决？</h2><p><strong>面试官</strong>：分库分表带来这么多问题，你没有没考虑过相应的解决方案？</p><blockquote><p>我怎么可能没有解决方案，难道我提出问题给自己挖坑？</p></blockquote><p><strong>我</strong>：当然有考虑过，“有问题就会有答案”。</p><h3 id="_5-1-跨库查询问题" tabindex="-1"><a class="header-anchor" href="#_5-1-跨库查询问题" aria-hidden="true">#</a> 5.1 <strong>跨库查询问题：</strong></h3><p>采用<strong>字段冗余</strong>方案，比如订单表存储店铺ID、店铺名称，就不需要再查询商户数据库了。 不过这种方案要求冗余字段要很少变动，就算变动后，也能容忍返回旧数据。</p><h3 id="_5-2-多表分页查询问题" tabindex="-1"><a class="header-anchor" href="#_5-2-多表分页查询问题" aria-hidden="true">#</a> 5.2 <strong>多表分页查询问题：</strong></h3><p>这个处理起来就很需要技术含量了。 比如：订单表按照订单ID分片，(order_id % 128)，分成了128张表。 Leader看了说：每张表的数据量差不多，分的很均匀，以后不要再分了。</p><p>同一个用户的订单散落在不同的表，用户想查询自己的订单，根本无法做到分页查询。难道一次全部查询该用户的所有订单，然后做内存分页，多大的机器内存都让你搞挂。 想要实现用户订单分页查询，可以采用按照用户ID分片，(user_id % 128)，这样同一个用户的订单只会存储在一张表中，咋分页展示都行。</p><blockquote><p><strong>没有完美的分片方案，如果商户想要分页查看自己店铺的订单怎么办？</strong> 那就把订单再冗余存储一份，按照店铺ID分片，(shop_id % 128)。不过由于商户数量较少，可以搞个异步线程往商户订单分片表同步。</p><p><strong>订单按照用户ID分片后，发生数据倾斜怎么办？</strong> 因为不同用户的订单量是不同的，一个爱好购物的小姐姐的订单量抵得上几十个老爷们。导致一张表数据几百条，另一张表数据量千万级，这该咋整？ 做冷热数据分离，基础库只存储3个月内的订单，其他的移动到历史订单库。这个要跟产品商量好，3个月前的订单需要单独的查询页面。</p></blockquote><h3 id="_5-3-跨库事务问题" tabindex="-1"><a class="header-anchor" href="#_5-3-跨库事务问题" aria-hidden="true">#</a> 5.3 <strong>跨库事务问题：</strong></h3><p>这个问题就更复杂了。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015102445584.png" alt="image-20221015102445584" tabindex="0" loading="lazy"><figcaption>image-20221015102445584</figcaption></figure><p>下一个订单需要调用多个服务，只能使用分布式事务。 分布式事务的实现非常复杂，常用的有以下几种解决方案：</p><blockquote><ul><li><p>二阶段提交</p></li><li><p>TCC</p></li><li><p>本地消息表</p></li><li><p>MQ事务消息</p></li><li><p>分布式事务中间件</p></li></ul></blockquote><h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6. 总结</h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015102643032.png" alt="image-20221015102643032" tabindex="0" loading="lazy"><figcaption>image-20221015102643032</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',40),h={href:"https://zhuanlan.zhihu.com/p/455694017",target:"_blank",rel:"noopener noreferrer"};function c(d,u){const i=g("ExternalLinkIcon");return n(),r("div",null,[p,a("p",null,[a("a",h,[o("面试官竟然问我怎么分库分表？幸亏我总结了一套八股文"),t(i)])])])}const _=e(l,[["render",c],["__file","mysql-x-sharding-interview.html.vue"]]);export{_ as default};
