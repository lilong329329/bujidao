import{_ as s,W as t,X as e,Z as n,$ as p,a0 as o,Y as c,D as l}from"./framework-4b7e9ff4.js";const u={},i=c(`<h1 id="rabbitmq进阶-死信队列dlx" tabindex="-1"><a class="header-anchor" href="#rabbitmq进阶-死信队列dlx" aria-hidden="true">#</a> RabbitMQ进阶 - 死信队列DLX</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>Dead Letter Exchange 简称 DLX，可称为死信交换器，当消息在一个 <strong>队列中变成死信（dead message）<strong>之后，它能</strong>被重新发送到另一个交换器中</strong>，这个交换器就是 <strong>DLX</strong>，绑定在 DLX 上的队列就称为 <strong>死信队列</strong>。</p><p>消息变成死信一般有以下几种情况：</p><ul><li><p>消息被拒绝，并设置 requeue 参数为 false</p><p><code>Basic.Reject 或 Basic.Nack</code></p></li><li><p>消息过期</p></li><li><p>队列达到最大长度</p></li></ul><h2 id="_2-为什么需要死信队列" tabindex="-1"><a class="header-anchor" href="#_2-为什么需要死信队列" aria-hidden="true">#</a> 2. 为什么需要死信队列</h2><p>为了保证订单业务的消息数据不丢失，需要使用到RabbitMQ的死信队列机制，当消息消费发生异常时，将消息投入死信队列中。</p><h2 id="_3-如何设置" tabindex="-1"><a class="header-anchor" href="#_3-如何设置" aria-hidden="true">#</a> 3. 如何设置</h2><p>DLX 是一个普通的交换器，可以在任何队列上设置，当死信消息出现时，RabbitMQ 自动将这个 <strong>消息重新发布到设置的 DLX 上</strong>，从而被路由到另一个队列，即 <strong>死信队列</strong></p><p>在队列定义时，使用 <code>x-dead-letter-exchange</code> 参数来为这个队列添加 DLX</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 定义 dlx</span>
channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;exchange.dlx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 定义 dlx queue</span>
channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;queue.dlx&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span><span class="token string">&quot;queue.dlx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;exchange.dlx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dlx-routing-key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定义正常的交换器</span>
channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;exchange.normal&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fanout&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> arguments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 定义队列事，通过该属性给该队列设置 DLX</span>
arguments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;x-dead-letter-exchange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;exchange.dlx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 还可以通过该属性重新消息的路由键，否则使用原消息的路由键</span>
arguments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;x-dead-letter-routing-key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dlx-routing-key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置该队列的 ttl</span>
arguments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;x-message-ttl&quot;</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;queue.normal&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span><span class="token string">&quot;queue.normal&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;exchange.normal&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码分为两部分：</p><ol><li><p>定义一个 DLX（其实就是普通的交换器），但是会把他绑定在正常的交换器上；</p><p>为该 DLX 绑定一个队列，用来接收死信消息</p></li><li><p>定义正常的交换器，并设置 DLX 交换器与路由键</p></li></ol><p>在 web 管理界面中如下图所示：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220923202344462.png" alt="image-20220923202344462" tabindex="0" loading="lazy"><figcaption>image-20220923202344462</figcaption></figure><ul><li>D：durable 持久化队列</li><li>TTL：消息有过期时间</li><li>DLX：绑定了死信交换器</li><li>DLK：是这个 <code>x-dead-letter-routing-key</code> 死信交换器设置了路由键</li></ul><h2 id="_4-死信消息流程" tabindex="-1"><a class="header-anchor" href="#_4-死信消息流程" aria-hidden="true">#</a> 4. 死信消息流程</h2><p>一条消息过期时，就如下图所示，被转发到 DLX 交换器中</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220923202651510.png" alt="image-20220923202651510" tabindex="0" loading="lazy"><figcaption>image-20220923202651510</figcaption></figure><p>对于 RabbitMQ 来说， DLX 是非常有用的一个特性。还可以配合 TTL 实现延迟队列的功能。下一节讲解</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,21),r={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/03.html",target:"_blank",rel:"noopener noreferrer"};function k(d,g){const a=l("ExternalLinkIcon");return t(),e("div",null,[i,n("p",null,[n("a",r,[p("死信队列"),o(a)])])])}const h=s(u,[["render",k],["__file","rabbitmq-x-dead-letter.html.vue"]]);export{h as default};
