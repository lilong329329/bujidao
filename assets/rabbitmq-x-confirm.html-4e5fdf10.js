import{_ as a,W as t,X as p,Z as n,$ as e,a0 as o,Y as c,D as i}from"./framework-4b7e9ff4.js";const l={},u=c(`<h1 id="rabbitmq进阶-消息确认机制-事务-confirm" tabindex="-1"><a class="header-anchor" href="#rabbitmq进阶-消息确认机制-事务-confirm" aria-hidden="true">#</a> RabbitMQ进阶 - 消息确认机制（事务+Confirm）</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>生产者将消息发送出去之后，消息到底有没有正确到达服务器？如果不进行特殊配置，默认情况下发送消息的操作是不会返回任何信息给生产者的。也就是说默认情况下，生产者不知道消息是否正确到达服务器。</p><p>RabbitMQ 针对这个问题，提供了两种解决方式：</p><ul><li>事物机制</li><li>发送方确认（publisher confirm）机制</li></ul><h2 id="_2-事物机制" tabindex="-1"><a class="header-anchor" href="#_2-事物机制" aria-hidden="true">#</a> 2. 事物机制</h2><p>RabbitMQ 客户端中与事物机制相关的方法有三个：</p><ul><li><code>channel.txSelect</code>：将当前的信道设置为 <strong>事物模式</strong></li><li><code>channel.txCommit</code>：提交事物</li><li><code>channel.txRollback</code>：回滚事物</li></ul><p>开启事物（设置为事物模式）后，可以发送消息，然后提交事物，如果在提交事物前 RabbitMQ 异常崩溃或则其他原因抛出异常，可以将其捕获，然后再执行回滚事物。</p><p>这里事物与数据库中的事物概念并不同。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 开启事物</span>
channel<span class="token punctuation">.</span><span class="token function">txSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 发送消息</span>
channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 提交事物</span>
channel<span class="token punctuation">.</span><span class="token function">txCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AMQP 协议流转过程如下图所示</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210514144523551.png" alt="image-20210514144523551" tabindex="0" loading="lazy"><figcaption>image-20210514144523551</figcaption></figure><ol><li>客户端发送 Tx.Select 开启事物</li><li>Broker 回复 Tx.Select-Ok，确认事物开启</li><li>发送消息后，客户端 Tx.Commit 提交事物</li><li>Broker 回复 Tx.Commit-Ok ，确认事物提交</li></ol><p>事物回滚的代码则如下所示</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>

        channel<span class="token punctuation">.</span><span class="token function">txSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 故意制造异常</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">txCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token comment">// 回滚事物1</span>
        channel<span class="token punctuation">.</span><span class="token function">txRollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>交互流程如下</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210514144758771.png" alt="image-20210514144758771" tabindex="0" loading="lazy"><figcaption>image-20210514144758771</figcaption></figure><p>如果要发送多条消息，则如下做</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>channel<span class="token punctuation">.</span><span class="token function">txSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">txCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        channel<span class="token punctuation">.</span><span class="token function">txRollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事物机制解决了 <strong>消息发送方</strong> 和 RabbitMQ 之间消息确认的问题，只有消息成功被 RabbitMQ 接收，事物才能提交成功。但是事物机制对 RabbitMQ 的性能影响很大。所以提供了一个改进机制：发送方确认机制</p><h2 id="_3-confirm-发送方确认机制" tabindex="-1"><a class="header-anchor" href="#_3-confirm-发送方确认机制" aria-hidden="true">#</a> 3. Confirm 发送方确认机制</h2><p>在 AMQP 协议层面提供了事物机制解决消息是否有正确到达 RabbitMQ 这个问题，但是事物机制会严重降低 RabbitMQ 的消息吞吐量。</p><p>发送方确认机制（publisher confirm）是一种轻量级的方式。</p><p><strong>生产者将信道设置为 confirm（确认）模式</strong>，所有再该信道上 <strong>发布的消息</strong> 都会被 <strong>指派一个唯一的 ID</strong>（从 1 开始），当消息被匹配到队列后，RabbitMQ 会 <strong>发送一个确认（Basic.ack）给生产者</strong>（包含消息的唯一 ID），这就使得生产者知道消息已经正确到达了目的地了。如果消息和队列是 <strong>可持久化</strong>的，那么确认消息会在 <strong>消息写入磁盘</strong>后 发出。</p><p>RabbitMQ 回传给生产者的确认消息中的 deliveryTag 包含了确认消息的序号，此外还可以设置 <code>channel.basicAck 方法中的 multple 参数</code>，表示在这个序号之前的所有消息都已经得到了处理。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210514145114090.png" alt="image-20210514145114090" tabindex="0" loading="lazy"><figcaption>image-20210514145114090</figcaption></figure><p>如上图所示：生产者发送了 3 条消息，开启了 mutilple，那么 RabbitMQ 回调确认时，deliveryTag = 3，表示前面的 2 条消息，包含自己都已经正确到达 RabbitMQ 了。</p><ul><li><p>事物机制：发送方是同步的</p><p>发送一条消息后，发送端阻塞，等待 RabbitMQ 回应后，才能继续下一条消息的发送</p></li><li><p>发送方确认机制：可以是异步的</p></li></ul><p>发送方确认有两种方式：</p><ul><li>同步方式：发送消息后，调用 channel.waitForConfirms 方法，等待服务器的确认返回</li><li>异步方式：提供一个回调方法，服务端确认了一条或多条消息后客户端会收到回调事件</li></ul><h3 id="_3-1-同步方式" tabindex="-1"><a class="header-anchor" href="#_3-1-同步方式" aria-hidden="true">#</a> 3.1 同步方式</h3><p>与事物机制使用类似，不过可以发布多条消息，再等待确认</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 将信道设置为生产者确认模式</span>
channel<span class="token punctuation">.</span><span class="token function">confirmSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 发布消息</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>channel<span class="token punctuation">.</span><span class="token function">waitForConfirms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 发送的 5 条消息成功</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 发送失败，这一批消息都需要重发？</span>
            <span class="token comment">// 不清楚他的机制，全部失败？</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 发送失败，这一批消息都需要重发？</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到如上的代码，批量发送后再等待并确认发送成功。但是有一个问题，当失败时（Basic.Nack 或 超时）时，就需要将这一批消息重新发送；这种情况过多的时候，性能不升返降</p><h3 id="_3-2-异步方式" tabindex="-1"><a class="header-anchor" href="#_3-2-异步方式" aria-hidden="true">#</a> 3.2 异步方式</h3><p>通过添加 ConfirmListener 的方式，来知晓是否成功还是失败</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将信道设置为生产者确认模式</span>
channel<span class="token punctuation">.</span><span class="token function">confirmSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">addConfirmListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConfirmListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
             * 处理 RabbitMQ 的 Basic.Ack 指令
             * <span class="token keyword">@param</span> <span class="token parameter">deliveryTag</span> 那一条消息
             * <span class="token keyword">@param</span> <span class="token parameter">multiple</span>
             * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
             */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleAck</span><span class="token punctuation">(</span><span class="token keyword">long</span> deliveryTag<span class="token punctuation">,</span> <span class="token keyword">boolean</span> multiple<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发送成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
             * 处理 RabbitMQ 的 Basic.Nack 指令
             * <span class="token keyword">@param</span> <span class="token parameter">deliveryTag</span>
             * <span class="token keyword">@param</span> <span class="token parameter">multiple</span>
             * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
             */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleNack</span><span class="token punctuation">(</span><span class="token keyword">long</span> deliveryTag<span class="token punctuation">,</span> <span class="token keyword">boolean</span> multiple<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发送失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 可进行消息的重发处理</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 发布消息</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-性能对比" tabindex="-1"><a class="header-anchor" href="#_4-性能对比" aria-hidden="true">#</a> 4. 性能对比</h2><p>在性能方面，QPS 对比如下</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210514145538216.png" alt="image-20210514145538216" tabindex="0" loading="lazy"><figcaption>image-20210514145538216</figcaption></figure><p>普通 confirm 就是发送一条就 waitForConfirms 一次。可见异步方式效率是最高的</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,43),k={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/08.html#%E4%BA%8B%E7%89%A9%E6%9C%BA%E5%88%B6",target:"_blank",rel:"noopener noreferrer"};function r(d,m){const s=i("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",k,[e("生产者确认"),o(s)])])])}const b=a(l,[["render",r],["__file","rabbitmq-x-confirm.html.vue"]]);export{b as default};
