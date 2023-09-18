import{_ as s,W as e,X as t,Z as n,$ as o,a0 as p,Y as c,D as i}from"./framework-4b7e9ff4.js";const l={},u=c(`<h1 id="线上oom-记一次oom排查过程" tabindex="-1"><a class="header-anchor" href="#线上oom-记一次oom排查过程" aria-hidden="true">#</a> 线上OOM-记一次OOM排查过程</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>项目中有个需求是将爬虫爬取到的网页数据（存放在mongodb）, 做数据清理后放入搜索引擎（solr）中。总共350w的网页数据，如果按正常速度同步10个小时即可完成。但我们实际测试发现，随着时间推移，同步时间越来越长，挂了一天只同步了100w数据。且后面越来越慢。领导找到我，让我帮忙排查解决</p><h2 id="_2-解决一-mongodb-大数据量分页查询效率问题" tabindex="-1"><a class="header-anchor" href="#_2-解决一-mongodb-大数据量分页查询效率问题" aria-hidden="true">#</a> 2. 解决一: mongodb 大数据量分页查询效率问题</h2><p>通过查阅资料了解到</p><p>虽然MongoDB提供了skip()和limit()方法。看起来，分页已经实现了，但是官方文档并不推荐，说会扫描全部文档，然后再返回结果。</p><blockquote><p>The cursor.skip() method requires the server to scan from the beginning of the input results set before beginning to return results. As the offset increases, cursor.skip() will become slower.</p><p>cursor.skip() 方法要求服务器先从输入结果集开始扫描，然后再开始返回结果。随着偏移量的增加，cursor.skip() 会变慢。</p></blockquote><p>所以，需要一种更快的方式。其实和mysql数量大之后不推荐用limit m,n一样，解决方案是先查出当前页的第一条，然后顺序数pageSize条。MongoDB官方也是这样推荐的。</p><h3 id="_2-1-解决方案1-通过-id-比较取分页" tabindex="-1"><a class="header-anchor" href="#_2-1-解决方案1-通过-id-比较取分页" aria-hidden="true">#</a> 2.1 解决方案1：通过_id 比较取分页</h3><p>我们假设基于_id的条件进行查询比较。事实上，这个比较的基准字段可以是任何你想要的有序的字段，比如时间戳。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//Page <span class="token number">1</span>
db.users.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
//Find the <span class="token function">id</span> of the last document <span class="token keyword">in</span> this page
last_id <span class="token operator">=</span> <span class="token punctuation">..</span>.
 
//Page <span class="token number">2</span>
<span class="token function">users</span> <span class="token operator">=</span> db.users.find<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&#39;_id&#39;</span> :<span class="token punctuation">{</span> <span class="token string">&quot;<span class="token variable">$gt</span>&quot;</span> :ObjectId<span class="token punctuation">(</span><span class="token string">&quot;5b16c194666cd10add402c87&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
//Update the last <span class="token function">id</span> with the <span class="token function">id</span> of the last document <span class="token keyword">in</span> this page
last_id <span class="token operator">=</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显然，第一页和后面的不同。对于构建分页API, 我们可以要求用户必须传递pageSize, lastId。</p><ul><li>pageSize 页面大小</li><li>lastId 上一页的最后一条记录的id，如果不传，则将强制为第一页</li></ul><h3 id="_2-2-解决方案2-通过游标来查询" tabindex="-1"><a class="header-anchor" href="#_2-2-解决方案2-通过游标来查询" aria-hidden="true">#</a> 2.2 解决方案2：通过游标来查询</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>        <span class="token class-name">FindIterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> findIterable <span class="token operator">=</span> mongoTemplate<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span>mongoTemplate<span class="token punctuation">.</span><span class="token function">getCollectionName</span><span class="token punctuation">(</span>tClass<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">noCursorTimeout</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">batchSize</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">MongoCursor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> cursor <span class="token operator">=</span> findIterable<span class="token punctuation">.</span><span class="token function">cursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-优化成果" tabindex="-1"><a class="header-anchor" href="#_2-3-优化成果" aria-hidden="true">#</a> 2.3 优化成果</h3><p>最终我采用游标的方式来查询，在做数据清理的时候，非常稳定，不会随着深度增加而越来越慢，花费9小时左右完成同步</p><h2 id="_3-oom引发-通过多线程来优化" tabindex="-1"><a class="header-anchor" href="#_3-oom引发-通过多线程来优化" aria-hidden="true">#</a> 3. OOM引发：通过多线程来优化</h2><p>花费9个小时还是太久了，大部分时间都浪费在数据清理和上传到solr 上。我们希望通过多线程来优化</p><p>但改成多线程版本后发现OOM 了</p><h3 id="_3-1-oom-gc-overhead-limit-exceeded" tabindex="-1"><a class="header-anchor" href="#_3-1-oom-gc-overhead-limit-exceeded" aria-hidden="true">#</a> 3.1 OOM: GC overhead limit exceeded</h3><p>我们知道 OOM: GC overhead limit exceeded ，意味着超过98%的时间用来做GC并且回收了不到2%的堆内存</p><blockquote><p>并行/并发回收器在GC回收时间过长时会抛出OutOfMemroyError。过长的定义是，超过98%的时间用来做GC并且回收了不到2%的堆内存。用来避免内存过小造成应用不能正常工作。</p></blockquote><p>我们查看gc日志分析，后期gc特别频繁</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220729133633739.png" alt="image-20220729133633739" tabindex="0" loading="lazy"><figcaption>image-20220729133633739</figcaption></figure><h3 id="_3-2-查看-gc-roots-引用链" tabindex="-1"><a class="header-anchor" href="#_3-2-查看-gc-roots-引用链" aria-hidden="true">#</a> 3.2 查看 GC-Roots 引用链</h3><p>我们知道OOM 堆内存溢出，主要因为 Java 堆中不断的创建对象，并且 <code>GC-Roots</code> 到对象之间存在引用链，这样 <code>JVM</code> 就不会回收对象。才导致内存溢出</p><p>我们查看 GC-Roots 引用链 ，查看对象和 <code>GC-Roots</code> 是如何进行关联的，是否存在对象的生命周期过长等问题</p><p>我们使用JProfiler 可以看到 堆中存在大量我们爬取的网页内容，并且远超的我们的堆内存范围</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220827140237927.png" alt="image-20220827140237927" tabindex="0" loading="lazy"><figcaption>image-20220827140237927</figcaption></figure><h3 id="_3-3-分析我们的代码-查找原因" tabindex="-1"><a class="header-anchor" href="#_3-3-分析我们的代码-查找原因" aria-hidden="true">#</a> 3.3 分析我们的代码，查找原因</h3><p>通过gcroot 我们已经知道是的对象无法回收。</p><p>我们350w的网页内容直接放到堆中处理，肯定会存在OOM。但我们使用了线程池，线程池中带有阻塞队列，按理应该会阻塞才对。消费完才能再生产，现在不生效肯定是线程池的问题</p><p>通过排查发现，我们用spring bean 引的全局线程池，他的阻塞队列并没有设置拒绝策略，采用了默认的拒绝策略</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 构建一个10核心线程，20最大线程，最大队列为1000</span>
<span class="token class-name">ThreadPoolExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>默认的拒绝策略是ThreadPoolExecutor.AbortPolicy:丢弃任务并抛出RejectedExecutionException异常</p></blockquote><p>我们加上了拒绝策略,<strong>ThreadPoolExecutor.CallerRunsPolicy：由调用线程处理该任务 。</strong></p><blockquote><p>ps: <strong>加了CallerRunsPolicy 阻塞队列才能发挥阻塞作用</strong>。</p></blockquote><h3 id="_3-4-优化成功" tabindex="-1"><a class="header-anchor" href="#_3-4-优化成功" aria-hidden="true">#</a> 3.4 优化成功</h3><p>我们加入拒绝策略后，阻塞队列产生了效果。产生和消费处于平衡状态，生产一批，消费一批。内存稳定。最终花费3小时完成了数据清理工作</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,41),r={href:"https://www.cnblogs.com/woshimrf/p/mongodb-pagenation-performance.html",target:"_blank",rel:"noopener noreferrer"};function d(k,h){const a=i("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",r,[o("MongoDB分页的Java实现和分页需求的思考"),p(a)])])])}const b=s(l,[["render",d],["__file","online-oom-thread-oom2.html.vue"]]);export{b as default};
