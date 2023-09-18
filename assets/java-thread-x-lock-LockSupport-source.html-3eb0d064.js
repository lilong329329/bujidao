import{_ as p,W as t,X as c,Z as n,$ as s,a0 as e,Y as o,D as l}from"./framework-4b7e9ff4.js";const i={},u=o(`<h1 id="juc锁-locksupport源码分析" tabindex="-1"><a class="header-anchor" href="#juc锁-locksupport源码分析" aria-hidden="true">#</a> JUC锁: LockSupport源码分析</h1><h2 id="_1-类的属性" tabindex="-1"><a class="header-anchor" href="#_1-类的属性" aria-hidden="true">#</a> 1. 类的属性</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LockSupport</span> <span class="token punctuation">{</span>
    <span class="token comment">// Hotspot implementation via intrinsics API</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>Unsafe</span> <span class="token constant">UNSAFE</span><span class="token punctuation">;</span>
    <span class="token comment">// parkBlocker字段的内存偏移地址</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> parkBlockerOffset<span class="token punctuation">;</span>
    <span class="token comment">//threadLocalRandomSeed字段的内存偏移地址</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> <span class="token constant">SEED</span><span class="token punctuation">;</span>
    <span class="token comment">// threadLocalRandomProbe字段的内存偏移地址</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> <span class="token constant">PROBE</span><span class="token punctuation">;</span>
    <span class="token comment">// threadLocalRandomSecondarySeed字段的内存偏移地址</span>
    
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 获取Unsafe实例</span>
            <span class="token constant">UNSAFE</span> <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>Unsafe</span><span class="token punctuation">.</span><span class="token function">getUnsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 线程类类型</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> tk <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取Thread的parkBlocker字段的内存偏移地址</span>
            parkBlockerOffset <span class="token operator">=</span> <span class="token constant">UNSAFE</span><span class="token punctuation">.</span>objectFieldOffset
                <span class="token punctuation">(</span>tk<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;parkBlocker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取Thread的threadLocalRandomSeed字段的内存偏移地址</span>
            <span class="token constant">SEED</span> <span class="token operator">=</span> <span class="token constant">UNSAFE</span><span class="token punctuation">.</span>objectFieldOffset
                <span class="token punctuation">(</span>tk<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;threadLocalRandomSeed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取Thread的threadLocalRandomProbe字段的内存偏移地址</span>
            <span class="token constant">PROBE</span> <span class="token operator">=</span> <span class="token constant">UNSAFE</span><span class="token punctuation">.</span>objectFieldOffset
                <span class="token punctuation">(</span>tk<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;threadLocalRandomProbe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取Thread的threadLocalRandomSecondarySeed字段的内存偏移地址</span>
            <span class="token constant">SECONDARY</span> <span class="token operator">=</span> <span class="token constant">UNSAFE</span><span class="token punctuation">.</span>objectFieldOffset
                <span class="token punctuation">(</span>tk<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;threadLocalRandomSecondarySeed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UNSAFE字段表示sun.misc.Unsafe类，一般程序中不允许直接调用</li><li>而long型的表示实例对象相应字段在内存中的偏移地址，可以通过该偏移地址获取或者设置该字段的值。</li></ul><h2 id="_2-类的构造函数" tabindex="-1"><a class="header-anchor" href="#_2-类的构造函数" aria-hidden="true">#</a> 2. 类的构造函数</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 私有构造函数，无法被实例化</span>
<span class="token keyword">private</span> <span class="token class-name">LockSupport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>私有构造函数，无法被实例化。所以所有的方法都是静态的</p><h2 id="_3-unsafe类中的park和unpark函数" tabindex="-1"><a class="header-anchor" href="#_3-unsafe类中的park和unpark函数" aria-hidden="true">#</a> 3. Unsafe类中的park和unpark函数</h2><p>在分析LockSupport函数之前，先引入sun.misc.Unsafe类中的park和unpark函数，因为LockSupport的核心函数都是基于Unsafe类中定义的park和unpark函数，下面给出两个函数的定义:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> isAbsolute<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">unpark</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> thread<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明: 对两个函数的说明如下:</p><ul><li>park函数，阻塞线程，并且该线程在下列情况发生之前都会被阻塞: ① 调用unpark函数，释放该线程的许可。② 该线程被中断。③ 设置的时间到了。并且，当time为绝对时间时，isAbsolute为true，否则，isAbsolute为false。当time为0时，表示无限等待，直到unpark发生。</li><li>unpark函数，释放线程的许可，即激活调用park后阻塞的线程。这个函数不是安全的，调用这个函数时要确保线程依旧存活</li></ul><h2 id="_4-核心函数分析" tabindex="-1"><a class="header-anchor" href="#_4-核心函数分析" aria-hidden="true">#</a> 4. 核心函数分析</h2><h3 id="_4-1-park函数" tabindex="-1"><a class="header-anchor" href="#_4-1-park函数" aria-hidden="true">#</a> 4.1 park函数</h3><p>park函数有两个重载版本，方法摘要如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token punctuation">)</span>；
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token class-name">Object</span> blocker<span class="token punctuation">)</span>；    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明: 两个函数的区别在于park()函数没有没有blocker，即没有设置线程的parkBlocker字段。park(Object)型函数如下。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token class-name">Object</span> blocker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取当前线程</span>
    <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置Blocker</span>
    <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> blocker<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取许可</span>
    <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 重新可运行后再此设置Blocker</span>
    <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>调用park函数时，首先获取当前线程</li><li>然后设置当前线程的parkBlocker字段，即调用setBlocker函数</li><li>之后调用Unsafe类的park函数</li><li>之后再调用setBlocker函数。</li></ol><h4 id="_4-1-1-为什么要在此park函数中要调用两次setblocker函数" tabindex="-1"><a class="header-anchor" href="#_4-1-1-为什么要在此park函数中要调用两次setblocker函数" aria-hidden="true">#</a> 4.1.1 为什么要在此park函数中要调用两次setBlocker函数?</h4><p>原因其实很简单，调用park函数时，当前线程首先设置好parkBlocker字段，然后再调用Unsafe的park函数.</p><p>此后，<strong>当前线程就已经阻塞了</strong>，等待该线程的unpark函数被调用，所以后面的一个setBlocker函数无法运行</p><p>unpark函数被调用，该线程获得许可后，就可以继续运行了，也就运行第二个setBlocker，把该线程的parkBlocker字段设置为null，这样就完成了整个park函数的逻辑。</p><p>如果没有第二个setBlocker，那么之后没有调用park(Object blocker)，而直接调用getBlocker函数，得到的还是前一个park(Object blocker)设置的blocker，显然是不符合逻辑的。</p><p>总之，必须要保证在park(Object blocker)整个函数执行完后，该线程的parkBlocker字段又恢复为null。所以，park(Object)型函数里必须要调用setBlocker函数两次。</p><h4 id="_4-1-2-setblocker方法" tabindex="-1"><a class="header-anchor" href="#_4-1-2-setblocker方法" aria-hidden="true">#</a> 4.1.2 setBlocker方法</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setBlocker</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t<span class="token punctuation">,</span> <span class="token class-name">Object</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置线程t的parkBlocker字段的值为arg</span>
    <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">putObject</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> parkBlockerOffset<span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明: 此方法用于设置线程t的parkBlocker字段的值为arg。</p><h3 id="_4-2-无参重载版本-park-函数" tabindex="-1"><a class="header-anchor" href="#_4-2-无参重载版本-park-函数" aria-hidden="true">#</a> 4.2 无参重载版本，park()函数</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取许可，设置时间为无限长，直到可以获取许可</span>
    <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明: 调用了park函数后，会禁用当前线程，除非许可可用。在以下三种情况之一发生之前，当前线程都将处于休眠状态，即下列情况发生时，当前线程会获取许可，可以继续运行。</p><ul><li>其他某个线程将当前线程作为目标调用 unpark。</li><li>其他某个线程中断当前线程。</li><li>该调用不合逻辑地(即毫无理由地)返回。</li></ul><h3 id="_4-3-parknanos函数" tabindex="-1"><a class="header-anchor" href="#_4-3-parknanos函数" aria-hidden="true">#</a> 4.3 parkNanos函数</h3><p>此函数表示在许可可用前禁用当前线程，并最多等待指定的等待时间。具体函数如下。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">parkNanos</span><span class="token punctuation">(</span><span class="token class-name">Object</span> blocker<span class="token punctuation">,</span> <span class="token keyword">long</span> nanos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nanos <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 时间大于0</span>
        <span class="token comment">// 获取当前线程</span>
        <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置Blocker</span>
        <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> blocker<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取许可，并设置了时间</span>
        <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> nanos<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置许可</span>
        <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明: 该函数也是调用了两次setBlocker函数，nanos参数表示相对时间，表示等待多长时间。</p><h3 id="_4-4-parkuntil函数" tabindex="-1"><a class="header-anchor" href="#_4-4-parkuntil函数" aria-hidden="true">#</a> 4.4 parkUntil函数</h3><p>此函数表示在指定的时限前禁用当前线程，除非许可可用, 具体函数如下:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">parkUntil</span><span class="token punctuation">(</span><span class="token class-name">Object</span> blocker<span class="token punctuation">,</span> <span class="token keyword">long</span> deadline<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取当前线程</span>
    <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置Blocker</span>
    <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> blocker<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> deadline<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置Blocker为null</span>
    <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明: 该函数也调用了两次setBlocker函数，deadline参数表示绝对时间，表示指定的时间。</p><h3 id="_4-5-unpark函数" tabindex="-1"><a class="header-anchor" href="#_4-5-unpark函数" aria-hidden="true">#</a> 4.5 unpark函数</h3><p>此函数表示如果给定线程的许可尚不可用，则使其可用。如果线程在 park 上受阻塞，则它将解除其阻塞状态。否则，保证下一次调用 park 不会受阻塞。如果给定线程尚未启动，则无法保证此操作有任何效果。具体函数如下:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">unpark</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> thread<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>thread <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 线程为不空</span>
        <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>thread<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 释放该线程许可</span>
<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,44),k={href:"https://www.jianshu.com/p/f1f2cd289205",target:"_blank",rel:"noopener noreferrer"},r={href:"https://pdai.tech/md/java/thread/java-thread-x-lock-LockSupport.html",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const a=l("ExternalLinkIcon");return t(),c("div",null,[u,n("p",null,[n("a",k,[s("LockSupport的用法及原理"),e(a)])]),n("p",null,[n("a",r,[s("JUC锁: LockSupport详解"),e(a)])])])}const h=p(i,[["render",d],["__file","java-thread-x-lock-LockSupport-source.html.vue"]]);export{h as default};
