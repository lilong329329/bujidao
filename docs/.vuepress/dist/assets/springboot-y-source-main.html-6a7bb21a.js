import{_ as s,W as t,X as e,Z as n,$ as p,a0 as o,Y as c,D as i}from"./framework-4b7e9ff4.js";const l={},u=c(`<h1 id="为什么springboot中main方法执行完毕后程序不会直接退出呢" tabindex="-1"><a class="header-anchor" href="#为什么springboot中main方法执行完毕后程序不会直接退出呢" aria-hidden="true">#</a> 为什么SpringBoot中main方法执行完毕后程序不会直接退出呢</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>正常情况下我们main方法执行结束后，该进程就结束了。那为什么springboot main函数执行完不会退出呢？</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220515222654390.png" alt="image-20220515222654390" tabindex="0" loading="lazy"><figcaption>image-20220515222654390</figcaption></figure><p>针对这个问题我们可以转化一下思路：一个JVM进程，在什么情况下会正常退出？</p><h2 id="_2-什么情况jvm进程-在什么情况下会正常退出" tabindex="-1"><a class="header-anchor" href="#_2-什么情况jvm进程-在什么情况下会正常退出" aria-hidden="true">#</a> 2. 什么情况JVM进程，在什么情况下会正常退出？</h2><h3 id="_2-1-方式1-system-exit-或runtime-exit" tabindex="-1"><a class="header-anchor" href="#_2-1-方式1-system-exit-或runtime-exit" aria-hidden="true">#</a> 2.1 方式1：System.exit()<code>或</code>Runtime.exit()</h3><p>使用<code>System.exit()</code>或<code>Runtime.exit()</code>可以直接导致当前JVM进程退出，</p><p>但是仔细想想这个好像跟SpringBoot没啥关系哈</p><h3 id="_2-2-方式2-非daemon进程完全终止" tabindex="-1"><a class="header-anchor" href="#_2-2-方式2-非daemon进程完全终止" aria-hidden="true">#</a> 2.2 方式2：<strong>非daemon进程完全终止</strong></h3><p>另外一个可能会导致进程退出的是所有的<strong>非daemon进程完全终止</strong>，那么根据这个条件反推的话是不是说只要保证SpringBoot进程中包含1个以上的daemon进程就可以保证程序不会退出</p><h2 id="_3-springboot是如何实现" tabindex="-1"><a class="header-anchor" href="#_3-springboot是如何实现" aria-hidden="true">#</a> 3. SpringBoot是如何实现</h2><p>我们以SpringBoot默认使用的Tomcat容器为例，在我之前SpringBoot源码分析的文章中也提到过，在启动Tomcat的时候，会调用<code>TomcatWebServer</code>的<code>initialize</code>方法，在这个方法中会调用一个<code>startDaemonAwaitThread</code>方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">startDaemonAwaitThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> awaitThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token string">&quot;container-&quot;</span> <span class="token operator">+</span> containerCounter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">TomcatWebServer</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>tomcat<span class="token punctuation">.</span><span class="token function">getServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        awaitThread<span class="token punctuation">.</span><span class="token function">setContextClassLoader</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        awaitThread<span class="token punctuation">.</span><span class="token function">setDaemon</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        awaitThread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们在深挖一下，在Tomcat的<code>this.tomcat.getServer().await()</code>这个方法中，线程是如何实现不退出的。这里为了阅读方便，去掉了不相关的代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span> port<span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                awaitThread <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>stopAwait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span> <span class="token number">10000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span> <span class="token class-name">InterruptedException</span> ex <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// continue and check the flag</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                awaitThread <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在await方法中，实际上当前线程在一个while循环中每10秒检查一次 stopAwait这个变量，它是一个volatile类型变量，用于确保被另一个线程修改后，当前线程能够立即看到这个变化。如果没有变化，就会一直处于while循环中。这就是该线程不退出的原因，也就是整个spring-boot应用不退出的原因。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,18),r={href:"https://mp.weixin.qq.com/s?__biz=MzU5MDgzOTYzMw==&mid=2247484897&idx=1&sn=abe1f147fc9e574393523ee0930aba9b&chksm=fe396fdfc94ee6c95a8e428f012e8922a7b8719bea48ea8086680b74265358a2ffb7acde53a4&scene=178&cur_album_id=1344428721251598337#rd",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=i("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[p("科普：为什么SpringBoot中main方法执行完毕后程序不会直接退出呢"),o(a)])])])}const h=s(l,[["render",d],["__file","springboot-y-source-main.html.vue"]]);export{h as default};