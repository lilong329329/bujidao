import{_ as s,W as t,X as e,Z as n,$ as o,a0 as i,Y as c,D as p}from"./framework-4b7e9ff4.js";const l={},d=c(`<h1 id="druid源码学习-一-druiddatasource数据结构" tabindex="-1"><a class="header-anchor" href="#druid源码学习-一-druiddatasource数据结构" aria-hidden="true">#</a> Druid源码学习（一）-DruidDataSource数据结构</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>DruidDataSource是DruidCP最关键的类之一，承载了连接池的启动、关闭、以及连接的获取和管理等功能。</p><h2 id="_2-druiddatasource的数据结构" tabindex="-1"><a class="header-anchor" href="#_2-druiddatasource的数据结构" aria-hidden="true">#</a> 2. DruidDataSource的数据结构</h2><p>DruidDataSource 其内部关键的的数据结构如下表:</p><table><thead><tr><th>name</th><th>type</th><th>说明</th></tr></thead><tbody><tr><td>connections</td><td>volatile DruidConnectionHolder[]</td><td>pool的关键数组，存放连接，实际上是DruidConnectionHolder的数组。Connection由DruidConnectionHolder持有</td></tr><tr><td>evictConnections</td><td>DruidConnectionHolder[]</td><td>被驱逐的Connection的pool,调用收缩方法shrink之后，被收缩的连接都会进入这个数组。</td></tr><tr><td>keepAliveConnections</td><td>DruidConnectionHolder[]</td><td>收缩方法shrink中，满足keepalive状态的连接都进入这个数组。</td></tr><tr><td>autoFilters</td><td>static List</td><td>这个list存全部的filter</td></tr><tr><td>enable</td><td>volatile boolean</td><td>默认值为true,标识连接池是否可用，调用close方法设置该值为false,当为false的时候，连接的error次数增加1,get连接或者其他操作会失败。</td></tr><tr><td>inited</td><td>volatile boolean</td><td>默认值为false,初始化完成的标识。</td></tr><tr><td>closing</td><td>volatile boolean</td><td>关闭过程中的状态。正在close</td></tr></tbody></table><p><strong>连接池最关键的数据结构是内部持有DruidConnectionHolder的数组，connections。</strong></p><h2 id="_3-druidconnectionholder的数据结构" tabindex="-1"><a class="header-anchor" href="#_3-druidconnectionholder的数据结构" aria-hidden="true">#</a> 3. DruidConnectionHolder的数据结构</h2><table><thead><tr><th>name</th><th>type</th><th>说明</th></tr></thead><tbody><tr><td>dataSource</td><td>final DruidAbstractDataSource</td><td>指向DataSource的指针。</td></tr><tr><td>conn</td><td>final Connection</td><td>指向真正的数据库连接，由数据库驱动实现。</td></tr><tr><td>connectionId</td><td>final long</td><td>连接编号。</td></tr><tr><td>connectionEventListeners</td><td>final List</td><td>连接事件监听器。</td></tr><tr><td>statementEventListeners</td><td>final List</td><td>statement事件监听器。</td></tr><tr><td>statementPool</td><td>PreparedStatementPool</td><td>其内部是一个LRUCache，对Statement做缓存。</td></tr><tr><td>statementTrace</td><td>final List</td><td>一个对Statement进行追踪的list,这个statementTrace的作用后面需要详细看看。</td></tr></tbody></table><p>DruidConnectionHolder是连接池中物理连接的载体，在DruidDataSource中，获取连接的getConnection方法，拿到的是DruidPooledConnection。</p><h2 id="_4-获取连接-getconnection" tabindex="-1"><a class="header-anchor" href="#_4-获取连接-getconnection" aria-hidden="true">#</a> 4. 获取连接 getConnection</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">DruidPooledConnection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getConnection</span><span class="token punctuation">(</span>maxWait<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">DruidPooledConnection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token keyword">long</span> maxWaitMillis<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token comment">//执行初始化</span>
        <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//如果filter存在 则执行filter,通过filter的代理类来得到连接。</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>filters<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//filter的chain</span>
            <span class="token class-name">FilterChainImpl</span> filterChain <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterChainImpl</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> filterChain<span class="token punctuation">.</span><span class="token function">dataSource_connect</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> maxWaitMillis<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果filter不存在，则直接获取连接。</span>
            <span class="token keyword">return</span> <span class="token function">getConnectionDirect</span><span class="token punctuation">(</span>maxWaitMillis<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终得到connection的方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>poolableConnection <span class="token operator">=</span> <span class="token function">getConnectionInternal</span><span class="token punctuation">(</span>maxWaitMillis<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个方法中，也是根据DruidConnectionHolder产生连接池：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token class-name">DruidPooledConnection</span> poolalbeConnection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DruidPooledConnection</span><span class="token punctuation">(</span>holder<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">return</span> poolalbeConnection<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看这个构造函数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token class-name">DruidPooledConnection</span><span class="token punctuation">(</span><span class="token class-name">DruidConnectionHolder</span> holder<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>holder<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>conn <span class="token operator">=</span> holder<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>holder <span class="token operator">=</span> holder<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lock <span class="token operator">=</span> holder<span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
        dupCloseLogEnable <span class="token operator">=</span> holder<span class="token punctuation">.</span><span class="token function">getDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDupCloseLogEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ownerThread <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectedTimeMillis <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上DruidPooledConnection内部持有了一个DruidConnectionHolder。 DruidPooledConnection的数据结构如下表：</p><table><thead><tr><th>name</th><th>type</th><th>说明</th></tr></thead><tbody><tr><td>conn</td><td>Connection</td><td>指向真实的数据库连接。</td></tr><tr><td>holder</td><td>volatile DruidConnectionHolder</td><td>指向DruidConnectionHolder。</td></tr><tr><td>transactionInfo</td><td>TransactionInfo</td><td>事务相关的信息</td></tr></tbody></table><h2 id="_5-类关系图" tabindex="-1"><a class="header-anchor" href="#_5-类关系图" aria-hidden="true">#</a> 5. 类关系图</h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220517224826098.png" alt="image-20220517224826098" tabindex="0" loading="lazy"><figcaption>image-20220517224826098</figcaption></figure><p>DruidConnectionHolder与DruidPooledConnection，实际上是对连接进行了分层。将频繁变更的内容抽象到了DruidConnectionHolder类。 而DruidPooledConnection则存放了Statement的的缓存pool。</p><h2 id="_6-相关知识点" tabindex="-1"><a class="header-anchor" href="#_6-相关知识点" aria-hidden="true">#</a> 6. 相关知识点</h2><h3 id="_6-1-volatile" tabindex="-1"><a class="header-anchor" href="#_6-1-volatile" aria-hidden="true">#</a> 6.1 volatile</h3><p><code>volatile</code> 在druid 中也非常常用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">// store</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token class-name">DruidConnectionHolder</span><span class="token punctuation">[</span><span class="token punctuation">]</span> connections<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span>                 closing                   <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span>                 closed                    <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-1-1-volatile-简介与作用" tabindex="-1"><a class="header-anchor" href="#_6-1-1-volatile-简介与作用" aria-hidden="true">#</a> 6.1.1 <code>volatile</code> 简介与作用</h4><p><code>volatile</code>通常被比喻成&quot;轻量级的<code>synchronized</code>，<code>synchronized</code>可以保证原子性、有序性和可见性。而<code>volatile</code>却只能保证有序性和可见性（不保证原子性）。</p><ul><li><p>保证了不同线程对这个变量进行操作时的可见性，即一个线程修改了某个变量的值，这新值对其他线程来说是立即可见的。</p></li><li><p>禁止进行指令重排序。</p></li></ul><h4 id="_6-1-2-什么场景下使用volatile" tabindex="-1"><a class="header-anchor" href="#_6-1-2-什么场景下使用volatile" aria-hidden="true">#</a> 6.1.2 什么场景下使用<code>volatile</code></h4><p>在以下两个场景中可以使用<code>volatile</code>来代替<code>synchronized</code>：</p><blockquote><p>1、运算结果并不依赖变量的当前值，或者能够确保只有单一的线程会修改变量的值。</p><p>2、变量不需要与其他状态变量共同参与不变约束。</p></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,34),r={href:"https://blog.csdn.net/dhaibo1986/article/details/121215459?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"};function u(k,v){const a=p("ExternalLinkIcon");return t(),e("div",null,[d,n("p",null,[n("a",r,[o("Druid源码阅读1-DruidDataSource数据结构"),i(a)])])])}const m=s(l,[["render",u],["__file","dbcp-y-druid-source-data-structure.html.vue"]]);export{m as default};