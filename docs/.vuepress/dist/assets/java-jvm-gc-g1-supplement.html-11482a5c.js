import{_ as o,W as i,X as p,Z as n,$ as e,a0 as s,Y as t,D as r}from"./framework-4b7e9ff4.js";const l={},c=t(`<h1 id="gc-java-垃圾回收器之g1-补充" tabindex="-1"><a class="header-anchor" href="#gc-java-垃圾回收器之g1-补充" aria-hidden="true">#</a> GC - Java 垃圾回收器之G1（补充）</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1. 前言</h2><blockquote><p>G1:满足高吞吐量的同时满足GC停顿的时间尽可能短</p></blockquote><p>G1收集器是一款在server端运行的垃圾收集器，专门针对于拥有多核处理器和大内存的机器，在JDK 7u4版本发行时被正式推出，在JDK9中更被指定为官方GC收集器。<strong>它满足高吞吐量的同时满足GC停顿的时间尽可能短</strong>。</p><h3 id="_1-1-g1-优势" tabindex="-1"><a class="header-anchor" href="#_1-1-g1-优势" aria-hidden="true">#</a> 1.1. G1 优势</h3><p>G1收集器专门针对以下应用场景设计</p><ul><li>可以像CMS收集器一样可以和应用并发运行</li><li>压缩空闲的内存碎片，却不需要冗长的GC停顿</li><li>对GC停顿可以做更好的预测</li><li>不想牺牲大量的吞吐量性能</li><li>不需要更大的Java Heap</li></ul><blockquote><p>Can operate concurrently with applications threads like the CMS collector. Compact free space without lengthy GC induced pause times. Need more predictable GC pause durations. Do not want to sacrifice a lot of throughput performance. Do not require a much larger Java heap.</p></blockquote><h3 id="_1-2-与cms不同点" tabindex="-1"><a class="header-anchor" href="#_1-2-与cms不同点" aria-hidden="true">#</a> 1.2 与CMS不同点</h3><p>G1从长期计划来看是以取代CMS为目标。与CMS相比有几个不同点使得G1成为GC的更好解决方案。</p><ul><li>第一点：G1会压缩空闲内存使之足够紧凑，做法<strong>是用regions代替细粒度的空闲列表进行分配</strong>，减少内存碎片的产生。</li><li>第二点：G1的STW更可控，G1在停顿时间上添加了<strong>预测机制</strong>，用户可以指定期望停顿时间。</li></ul><blockquote><p>G1 is planned as the long term replacement for the Concurrent Mark-Sweep Collector (CMS). Comparing G1 with CMS, there are differences that make G1 a better solution. One difference is that G1 is a compacting collector. G1 compacts sufficiently to completely avoid the use of fine-grained free lists for allocation, and instead relies on regions. This considerably simplifies parts of the collector, and mostly eliminates potential fragmentation issues. Also, G1 offers more predictable garbage collection pauses than the CMS collector, and allows users to specify desired pause targets.</p></blockquote><h2 id="_2-概览" tabindex="-1"><a class="header-anchor" href="#_2-概览" aria-hidden="true">#</a> 2. 概览</h2><p>在传统的GC收集器(serial,parallel,CMS)无一不例外都把heap分成固定大小连续的三个空间：young generation, old generation, and permanent generation</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221209111945943.png" alt="image-20221209111945943" tabindex="0" loading="lazy"><figcaption>image-20221209111945943</figcaption></figure><p>但G1却独辟蹊径，采用了一种全新的内存布局</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221209112005861.png" alt="image-20221209112005861" tabindex="0" loading="lazy"><figcaption>image-20221209112005861</figcaption></figure><p>在G1中堆被分成一块块大小相等的heap region，一般有2000多块，这些region在逻辑上是连续的。每块region都会被打唯一的分代标志(eden,survivor,old)。在逻辑上，eden regions构成Eden空间，survivor regions构成Survivor空间，old regions构成了old 空间。</p><h3 id="_2-1-分区region-各区比例" tabindex="-1"><a class="header-anchor" href="#_2-1-分区region-各区比例" aria-hidden="true">#</a> 2.1 分区region 各区比例</h3><p>通过命令行参数</p><ul><li><code>-XX:NewRatio=n</code>来配置新生代与老年代的比例，默认为2，即比例为2:1；</li><li><code>XX:SurvivorRatio=n</code>则可以配置Eden与Survivor的比例，默认为8。</li></ul><h3 id="_2-2-为什么叫g1-全局并发标记-优先回收" tabindex="-1"><a class="header-anchor" href="#_2-2-为什么叫g1-全局并发标记-优先回收" aria-hidden="true">#</a> 2.2 为什么叫G1（全局并发标记-&gt;优先回收）</h3><blockquote><p>全局并发标记-&gt;可回收对象多-&gt;优先回收</p></blockquote><p>GC时G1的运行方式与CMS方式类似，会有一个全局并发标记(concurrent global marking phase)的过程，去确定堆里对象的的存活情况。并发标记完成之后，G1知道哪些regions空闲空间多(可回收对象多),优先回收这些空的regions，释放出大量的空闲空间。这是为什么这种垃圾回收方式叫G1的原因(Garbage-First)。</p><h3 id="_2-3-暂停预测模型" tabindex="-1"><a class="header-anchor" href="#_2-3-暂停预测模型" aria-hidden="true">#</a> 2.3 暂停预测模型</h3><p>G1将其收集和压缩活动集中在堆中可能充满可回收对象(即垃圾)的区域，使用暂停预测模型来满足用户定义的暂停时间目标，并根据指定的暂停时间目标选择要收集的区域数量。</p><p>需要注意的是，G1不是实时收集器。它能够以较高的概率满足设定的暂停时间目标，但不是绝对确定的。根据以前收集的数据，G1估算出在用户指定的目标时间内可以收集多少个区域。因此，收集器对于收集区域的成本有一个相当准确的模型，它使用这个模型来确定在暂停时间目标内收集哪些区域和收集多少区域。</p><blockquote><p>It is important to note that G1 is not a real-time collector. It meets the set pause time target with high probability but not absolute certainty. Based on data from previous collections, G1 does an estimate of how many regions can be collected within the user specified target time. Thus, the collector has a reasonably accurate model of the cost of collecting the regions, and it uses this model to determine which and how many regions to collect while staying within the pause time target.</p></blockquote><h2 id="_3-g1中的region" tabindex="-1"><a class="header-anchor" href="#_3-g1中的region" aria-hidden="true">#</a> 3. G1中的Region</h2><p>G1中每个Region大小是固定相等的，Region的大小可以通过参数-XX:G1HeapRegionSize设定，取值范围从1M到32M，且是2的指数。如果不设定，那么G1会根据Heap大小自动决定。</p><p>决定逻辑:</p><p><code>size =（堆最小值+堆最大值）/ TARGET_REGION_NUMBER(2048)</code> ，然后size取最靠近2的幂次数值， 并将size控制在[1M,32M]之间。具体代码如下</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// share/vm/gc_implementation/g1/heapRegion.cpp</span>
<span class="token comment">// Minimum region size; we won&#39;t go lower than that.</span>
<span class="token comment">// We might want to decrease this in the future, to deal with small</span>
<span class="token comment">// heaps a bit more efficiently.</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MIN_REGION_SIZE</span>  <span class="token expression"><span class="token punctuation">(</span>      <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token punctuation">)</span></span></span>
<span class="token comment">// Maximum region size; we don&#39;t go higher than that. There&#39;s a good</span>
<span class="token comment">// reason for having an upper bound. We don&#39;t want regions to get too</span>
<span class="token comment">// large, otherwise cleanup&#39;s effectiveness would decrease as there</span>
<span class="token comment">// will be fewer opportunities to find totally empty regions after</span>
<span class="token comment">// marking.</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAX_REGION_SIZE</span>  <span class="token expression"><span class="token punctuation">(</span> <span class="token number">32</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token punctuation">)</span></span></span>
<span class="token comment">// The automatic region size calculation will try to have around this</span>
<span class="token comment">// many regions in the heap (based on the min heap size).</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">TARGET_REGION_NUMBER</span>          <span class="token expression"><span class="token number">2048</span></span></span>
<span class="token keyword">void</span> <span class="token class-name">HeapRegion</span><span class="token double-colon punctuation">::</span><span class="token function">setup_heap_region_size</span><span class="token punctuation">(</span>size_t initial_heap_size<span class="token punctuation">,</span> size_t max_heap_size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  uintx region_size <span class="token operator">=</span> G1HeapRegionSize<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">FLAG_IS_DEFAULT</span><span class="token punctuation">(</span>G1HeapRegionSize<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    size_t average_heap_size <span class="token operator">=</span> <span class="token punctuation">(</span>initial_heap_size <span class="token operator">+</span> max_heap_size<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    region_size <span class="token operator">=</span> <span class="token function">MAX2</span><span class="token punctuation">(</span>average_heap_size <span class="token operator">/</span> TARGET_REGION_NUMBER<span class="token punctuation">,</span>
                       <span class="token punctuation">(</span>uintx<span class="token punctuation">)</span> MIN_REGION_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">int</span> region_size_log <span class="token operator">=</span> <span class="token function">log2_long</span><span class="token punctuation">(</span><span class="token punctuation">(</span>jlong<span class="token punctuation">)</span> region_size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Recalculate the region size to make sure it&#39;s a power of</span>
  <span class="token comment">// 2. This means that region_size is the largest power of 2 that&#39;s</span>
  <span class="token comment">// &lt;= what we&#39;ve calculated so far.</span>
  region_size <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>uintx<span class="token punctuation">)</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> region_size_log<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Now make sure that we don&#39;t go over or under our limits.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>region_size <span class="token operator">&lt;</span> MIN_REGION_SIZE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    region_size <span class="token operator">=</span> MIN_REGION_SIZE<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>region_size <span class="token operator">&gt;</span> MAX_REGION_SIZE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    region_size <span class="token operator">=</span> MAX_REGION_SIZE<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-g1中的gc收集" tabindex="-1"><a class="header-anchor" href="#_4-g1中的gc收集" aria-hidden="true">#</a> 4. G1中的GC收集</h2><p><strong>G1保留了YGC并加上了一种全新的MIXGC用于收集老年代。G1中没有Full GC，G1中的Full GC是采用serial old Full GC。</strong></p><blockquote><p>Q:理解不了“G1中没有Full GC，G1中的Full GC是采用serial old Full GC。“这句话，不是说没有Full GC吗</p><p>A1: G1中实际是有full gc的只是非常慢，所以g1的优化目标是尽量避免full gc，因此才有如上说法</p><p>A2:如果mixed GC实在无法跟上程序分配内存的速度，导致old gen填满无法继续进行mixed GC，就会切换到&quot;G1之外的serial old GC&quot;来收集整个GC heap（注意，包括young、old、perm）。这才是真正的full GC。Full GC之所以叫full就是要收集整个堆，只选择old gen的部分region算不上full GC。进入这种状态的G1就跟-XX:+UseSerialGC的full GC一样</p></blockquote><h2 id="_5-ygc" tabindex="-1"><a class="header-anchor" href="#_5-ygc" aria-hidden="true">#</a> 5.YGC</h2><p>当Eden空间被占满之后，就会触发YGC。在G1中YGC依然采用复制存活对象到survivor空间的方式，当对象的存活年龄满足晋升条件时，把对象提升到old generation regions(老年代)。</p><p>G1控制YGC开销的手段是动态改变young region的个数，YGC的过程中依然会STW(stop the world 应用停顿)，并采用多线程并发复制对象，减少GC停顿时间。</p><h3 id="_5-1-ygc开始" tabindex="-1"><a class="header-anchor" href="#_5-1-ygc开始" aria-hidden="true">#</a> 5.1 YGC开始</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221209113334611.png" alt="image-20221209113334611" tabindex="0" loading="lazy"><figcaption>image-20221209113334611</figcaption></figure><h3 id="_5-2-ygc结束" tabindex="-1"><a class="header-anchor" href="#_5-2-ygc结束" aria-hidden="true">#</a> 5.2 YGC结束</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221209113401283.png" alt="image-20221209113401283" tabindex="0" loading="lazy"><figcaption>image-20221209113401283</figcaption></figure><p>我们从图中看到Eden区中存活对象被复制到新的Survior区。</p><h3 id="_5-3-ygc是否需要扫描整个老年代-rset" tabindex="-1"><a class="header-anchor" href="#_5-3-ygc是否需要扫描整个老年代-rset" aria-hidden="true">#</a> 5.3 YGC是否需要扫描整个老年代？Rset</h3><p>我们知道判断对象是否存活需要从GC ROOTS结点出发，从GC ROOTS结点可达的对象就是存活的。在YGC时，老年代中的对象是不回收的，也就意味着GC ROOTS里面应包含了老年代中的对象。<strong>但扫描整个老年代会很耗费时间，势必影响整个GC的性能！</strong>。所以在CMS中使用了Card Table的结构，里面记录了老年代对象到新生代引用。**Card Table的结构是一个连续的byte[]数组，扫描Card Table的时间比扫描整个老年代的代价要小很多！G1也参照了这个思路，不过采用了一种新的数据结构 Remembered Set 简称Rset。**RSet记录了其他Region中的对象引用本Region中对象的关系，属于points-into结构（谁引用了我的对象）。而Card Table则是一种points-out（我引用了谁的对象）的结构，每个Card 覆盖一定范围的Heap（一般为512Bytes）。G1的RSet是在Card Table的基础上实现的：每个Region会记录下别的Region有指向自己的指针，并标记这些指针分别在哪些Card的范围内。 这个RSet其实是一个Hash Table，Key是别的Region的起始地址，Value是一个集合，里面的元素是Card Table的Index。<strong>每个Region都有一个对应的Rset</strong>。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221209140929589.png" alt="image-20221209140929589" tabindex="0" loading="lazy"><figcaption>image-20221209140929589</figcaption></figure><p>RSet究竟是怎么辅助GC的呢？在做YGC的时候，只需要选定young generation region的RSet作为根集，这些RSet记录了<code>old-&gt;young</code>的跨代引用，避免了扫描整个old generation。 而mixed gc的时候，old generation中记录了<code>old-&gt;old</code>的RSet，<code>young-&gt;old</code>的引用由扫描全部young generation region得到，这样也不用扫描全部old generation region。所以RSet的引入大大减少了GC的工作量。</p><p><strong>所以G1中YGC不需要扫描整个老年代，只需要扫描Rset就可以知道老年代引用了哪些新生代中的对象。</strong></p><h2 id="_6-mixgc" tabindex="-1"><a class="header-anchor" href="#_6-mixgc" aria-hidden="true">#</a> 6. MIXGC</h2><p>G1中的MIXGC选定所有新生代里的Region，外加根据global concurrent marking统计得出收集收益高的若干老年代Region，在用户指定的开销目标范围内尽可能选择收益高的老年代Region进行回收。所以MIXGC回收的内存区域是新生代+老年代。</p><p>在介绍MIXGC之前我们需要先了解global concurrent marking，全局并发标记。因为老年代回收要依赖该过程。</p><h3 id="_6-1-全局并发标记" tabindex="-1"><a class="header-anchor" href="#_6-1-全局并发标记" aria-hidden="true">#</a> 6.1 全局并发标记</h3><p>全局并发标记过程分为五个阶段</p><p>(1) Initial Mark初始标记 STW</p><p>Initial Mark初始标记是一个STW事件，其完成工作是标记GC ROOTS 直接可达的对象。并将它们的字段压入扫描栈（marking stack）中等到后续扫描。G1使用外部的bitmap来记录mark信息，而不使用对象头的mark word里的mark bit。因为 STW，所以通常YGC的时候借用YGC的STW顺便启动Initial Mark，也就是启动全局并发标记，全局并发标记与YGC在逻辑上独立。</p><blockquote><p>(1) Initial Mark *(Stop the World Event)*This is a stop the world event. With G1, it is piggybacked on a normal young GC. Mark survivor regions (root regions) which may have references to objects in old generation.</p></blockquote><p>(2)Root Region Scanning 根区域扫描</p><p>根区域扫描是从Survior区的对象出发，标记被引用到老年代中的对象，并把它们的字段在压入扫描栈（marking stack）中等到后续扫描。与Initial Mark不一样的是，Root Region Scanning不需要STW与应用程序是并发运行。Root Region Scanning必须在YGC开始前完成。</p><blockquote><p>(2) Root Region Scanning Scan survivor regions for references into the old generation. This happens while the application continues to run. The phase must be completed before a young GC can occur.</p></blockquote><p>(3)Concurrent Marking 并发标记</p><p>不需要STW。不断从扫描栈取出引用递归扫描整个堆里的对象。每扫描到一个对象就会对其标记，并将其字段压入扫描栈。重复扫描过程直到扫描栈清空。过程中还会扫描SATB write barrier所记录下的引用。Concurrent Marking 可以被YGC中断</p><blockquote><p>(3) Concurrent Marking Find live objects over the entire heap. This happens while the application is running. This phase can be interrupted by young generation garbage collections.</p></blockquote><p>(4)Remark 最终标记 STW</p><p>STW操作。在完成并发标记后，每个Java线程还会有一些剩下的SATB write barrier记录的引用尚未处理。这个阶段就负责把剩下的引用处理完。同时这个阶段也进行弱引用处理（reference processing）。注意这个暂停与CMS的remark有一个本质上的区别，那就是这个暂停只需要扫描SATB buffer，而CMS的remark需要重新扫描mod-union table里的dirty card外加整个根集合，而此时整个young gen（不管对象死活）都会被当作根集合的一部分，因而CMS remark有可能会非常慢。</p><blockquote><p>(4) Remark Completes the marking of live object in the heap. Uses an algorithm called snapshot-at-the-beginning (SATB) which is much faster than what was used in the CMS collector.</p></blockquote><p>(5)Cleanup 清除 STW AND <em>Concurrent</em></p><p>STW操作，清点出有存活对象的Region和没有存活对象的Region(Empty Region)</p><p>STW操作，更新Rset</p><p>Concurrent操作，把Empty Region收集起来到可分配Region队列。</p><blockquote><p>(5) Cleanup Performs accounting on live objects and completely free regions. (Stop the world) Scrubs the Remembered Sets. (Stop the world) Reset the empty regions and return them to the free list. (Concurrent)</p></blockquote><h3 id="_6-2-全局并发标记总结" tabindex="-1"><a class="header-anchor" href="#_6-2-全局并发标记总结" aria-hidden="true">#</a> 6.2 全局并发标记总结</h3><p><strong>经过global concurrent marking，collector就知道哪些Region有存活的对象。并将那些完全可回收的Region(没有存活对象)收集起来加入到可分配Region队列，实现对该部分内存的回收。对于有存活对象的Region，G1会根据统计模型找处收益最高、开销不超过用户指定的上限的若干Region进行对象回收。这些选中被回收的Region组成的集合就叫做collection set 简称Cset！</strong></p><p><strong>在MIXGC中的Cset是选定所有young gen里的region，外加根据global concurrent marking统计得出收集收益高的若干old gen region。</strong></p><p><strong>在YGC中的Cset是选定所有young gen里的region。通过控制young gen的region个数来控制young GC的开销。</strong></p><p><strong>YGC与MIXGC都是采用多线程复制清除，整个过程会STW。 G1的低延迟原理在于其回收的区域变得精确并且范围变小了。</strong></p><h3 id="_6-3-stab-维持并发gc的正确性" tabindex="-1"><a class="header-anchor" href="#_6-3-stab-维持并发gc的正确性" aria-hidden="true">#</a> 6.3 STAB（维持并发GC的正确性）</h3><p>上面global concurrent marking提到了STAB算法，那这个STAB到底为何物？STAB全称为snapshot-at-the-beginning，其目的是了维持并发GC的正确性。<strong>GC的正确性是保证存活的对象不被回收，换句话来说就是保证回收的都是垃圾</strong>。如果标记过程是STW的话，那GC的正确性是一定能保证的。但如果一边标记，一边应用在变更堆里面对象的引用，那么标记的正确性就不一定能保证了。</p><p><strong>为了解决这个问题，STAB的做法在GC开始时对内存进行一个对象图的逻辑快照(snapshot)，通过GC Roots tracing 参照并发标记的过程，只要被快照到对象是活的，那在整个GC的过程中对象就被认定的是活的，即使该对象的引用稍后被修改或者删除。同时新分配的对象也会被认为是活的，除此之外其它不可达的对象就被认为是死掉了。这样STAB就保证了真正存活的对象不会被GC误回收，但同时也造成了某些可以被回收的对象逃过了GC，导致了内存里面存在浮动的垃圾(float garbage)。</strong></p><h3 id="_6-4-stab具体细节" tabindex="-1"><a class="header-anchor" href="#_6-4-stab具体细节" aria-hidden="true">#</a> 6.4 STAB具体细节</h3><p>每个Region中都有那么几个指针</p><p><code>|&lt;-- (1) --&gt;|&lt;-- (2) --&gt;|&lt;-- (3) --&gt;|&lt;-- (4) --&gt;|</code> bottom prevTAMS nextTAMS top end</p><p>其中top是该region的当前分配指针，[bottom, top)是当前该region已用（used）的部分，[top, end)是尚未使用的可分配空间（unused）。</p><p>(1): [bottom, prevTAMS): 这部分里的对象存活信息可以通过prevBitmap来得知</p><p>(2): [prevTAMS, nextTAMS): 这部分里的对象在第n-1轮concurrent marking是隐式存活的</p><p>(3): [nextTAMS, top): 这部分里的对象在第n轮concurrent marking是隐式存活的</p><p>为什么会用prevTAMS和nextTAMS两个指针？</p><p>因为G1的并发标记的过程用了两个bitmap：</p><p>一个prevBitmap记录第n-1轮concurrent mark所得的对象存活状态。由于第n－1轮concurrent marking已经完成，这个bitmap的信息可以直接使用。</p><p>一个nextBitmap记录第n轮concurrent mark的结果。这个bitmap是当前将要或正在进行的concurrent mark的结果，尚未完成，所以还不能使用。</p><p>所以Region会同时存在prevTAMS和nextTAMS两个指针，这两个指针是在 Initial Mark阶段就会设置好。</p><p>所以我们很容易知道哪些对象在一次GC开始之后新分配的：在TAMS以上的对象就是新分配的，因而被视为隐式marked，标记为存活。</p><p>切换到另外一个场景：如果在标记的过程中mark了某个对象但对象中某些引用这字段还没有被mark到,此时应用并发修改引用字段的值，那collecotr就拿不到完整的快照了，这不符合STAB的设想。</p><p>为了解决这个问题就有了SATB write barrier。G1 GC具体使用的是Yuasa式的SATB write barrier的变种。它的相关论文是：</p>`,94),u={href:"https://link.zhihu.com/?target=http%3A//dl.acm.org/citation.cfm%3Fid%3D82237",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>Write barrier是对“对引用类型字段赋值”这个动作的环切，也就是说赋值的前后都在barrier覆盖的范畴内。在赋值前的部分的write barrier叫做pre-write barrier，在赋值后的则叫做post-write barrier。</p><p>在HotSpot VM里，在引入G1 GC之前，其它GC都只用了post-write barrier，所以它在源码里没有特别的前后缀；而G1 GC特有的pre-write barrier则在源码里有_pre的后缀，可以留意一下。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">oop_field_store</span><span class="token punctuation">(</span>oop<span class="token operator">*</span> field<span class="token punctuation">,</span> oop value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">pre_write_barrier</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">*</span>field <span class="token operator">=</span> value<span class="token punctuation">;</span> <span class="token comment">// the actual store</span>
  <span class="token function">post_write_barrier</span><span class="token punctuation">(</span>field<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-1-pre-post-write-barrier与satb的关系" tabindex="-1"><a class="header-anchor" href="#_6-4-1-pre-post-write-barrier与satb的关系" aria-hidden="true">#</a> 6.4.1 Pre/Post-write barrier与SATB的关系</h4><p>前面提到SATB要维持“在GC开始时活的对象”的状态这个逻辑snapshot。除了从root出发把整个对象图mark下来之外，其实只需要用pre-write barrier把每次引用关系变化时旧的引用值记下来就好了。这样，等concurrent marker到达某个对象时，这个对象的所有引用类型字段的变化全都有记录在案，就不会漏掉任何在snapshot里活的对象。当然，很可能有对象在snapshot中是活的，但随着并发GC的进行它可能本来已经死了，但SATB还是会让它活过这次GC。</p><p>所以在G1 GC里，整个write barrier+oop_field_store是这样的：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">oop_field_store</span><span class="token punctuation">(</span>oop<span class="token operator">*</span> field<span class="token punctuation">,</span> oop new_value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">pre_write_barrier</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// pre-write barrier: for maintaining SATB invariant</span>
  <span class="token operator">*</span>field <span class="token operator">=</span> new_value<span class="token punctuation">;</span>                   <span class="token comment">// the actual store</span>
  <span class="token function">post_write_barrier</span><span class="token punctuation">(</span>field<span class="token punctuation">,</span> new_value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// post-write barrier: for tracking cross-region reference</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照Yuasa式SATB barrier的设计，pre-write barrier里面的抽象逻辑应当如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">pre_write_barrier</span><span class="token punctuation">(</span>oop<span class="token operator">*</span> field<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>$gc_phase <span class="token operator">==</span> GC_CONCURRENT_MARK<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// SATB invariant only maintained during concurrent marking</span>
    oop old_value <span class="token operator">=</span> <span class="token operator">*</span>field<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>old_value <span class="token operator">!=</span> null <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">is_marked</span><span class="token punctuation">(</span>old_value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">mark_object</span><span class="token punctuation">(</span>old_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      $mark_stack<span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span>old_value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// scan all of old_value&#39;s fields later</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这比原本的Yuasa式设计少了些东西：没有检查目标对象是否已经mark，也不去对目标对象做mark和扫描它的字段。实际上该做的事情还是得做，只是不在这里做而已。那放在那里做呢放到了后面的logging barrier，这个后面讲到。</p><p>Pre-write barrier的实际代码有好几个版本，其中最简单明白的版本是：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>  <span class="token comment">// This notes that we don&#39;t need to access any BarrierSet data</span>
  <span class="token comment">// structures, so this can be called from a static context.</span>
  <span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">write_ref_field_pre_static</span><span class="token punctuation">(</span>T<span class="token operator">*</span> field<span class="token punctuation">,</span> oop newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    T heap_oop <span class="token operator">=</span> oopDesc<span class="token double-colon punctuation">::</span><span class="token function">load_heap_oop</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>oopDesc<span class="token double-colon punctuation">::</span><span class="token function">is_null</span><span class="token punctuation">(</span>heap_oop<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">enqueue</span><span class="token punctuation">(</span>oopDesc<span class="token double-colon punctuation">::</span><span class="token function">decode_heap_oop</span><span class="token punctuation">(</span>heap_oop<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>enqueue动作的实际代码则在G1SATBCardTableModRefBS::enqueue(oop pre_val)。</p><p>它判断当前是否在concurrent marking phase用的是：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token class-name">JavaThread</span><span class="token double-colon punctuation">::</span><span class="token function">satb_mark_queue_set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is_active</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-4-2-logging-write-barrier" tabindex="-1"><a class="header-anchor" href="#_6-4-2-logging-write-barrier" aria-hidden="true">#</a> 6.4.2 logging write barrier</h4><p>为了尽量减少write barrier对应用mutator性能的影响，G1将一部分原本要在barrier里做的事情挪到别的线程上并发执行。 实现这种分离的方式就是通过logging形式的write barrier：mutator只在barrier里把要做的事情的信息记（log）到一个队列里，然后另外的线程从队列里取出信息批量完成剩余的动作。</p><p>以SATB write barrier为例，每个Java线程有一个独立的、定长的SATBMarkQueue，mutator在barrier里只把old_value压入该队列中。一个队列满了之后，它就会被加到全局的SATB队列集合SATBMarkQueueSet里等待处理，然后给对应的Java线程换一个新的、干净的队列继续执行下去。</p><p>并发标记（concurrent marker）会定期检查全局SATB队列集合的大小。当全局集合中队列数量超过一定阈值后，concurrent marker就会处理集合里的所有队列：把队列里记录的每个oop都标记上，并将其引用字段压到标记栈（marking stack）上等后面做进一步标记。</p><p>所以整个STAB过程讲完。</p><h2 id="_7-g1命令行选项与最佳实践" tabindex="-1"><a class="header-anchor" href="#_7-g1命令行选项与最佳实践" aria-hidden="true">#</a> 7. G1命令行选项与最佳实践</h2><h3 id="_7-1-命令行选项" tabindex="-1"><a class="header-anchor" href="#_7-1-命令行选项" aria-hidden="true">#</a> 7.1 命令行选项</h3><ul><li><p><strong><code>-XX:+UseG1GC</code></strong> 告诉JVM使用G1收集器</p></li><li><p><strong>-XX:MaxGCPauseMillis=200</strong> 设置最大GC目标最大停顿时间为200ms，这是一个软指标。JVM会最大努力去达到它，因此有时停顿时间会达不到设置目标。G1配置是200ms</p></li><li><p><strong>-XX:InitiatingHeapOccupancyPercent=45</strong> 启动并发标记标记百分比，当整堆内存使用量达到百分比时，G1使用它来触发一个基于整个堆的并发标记循环，而不仅仅是一个代。默念值是45%</p></li></ul><h3 id="_7-2-最佳实践" tabindex="-1"><a class="header-anchor" href="#_7-2-最佳实践" aria-hidden="true">#</a> 7.2 最佳实践</h3><p>下面有几个关于使用G1的最佳实践</p><h4 id="_7-2-1-不要设置young-generation大小" tabindex="-1"><a class="header-anchor" href="#_7-2-1-不要设置young-generation大小" aria-hidden="true">#</a> 7.2.1 <strong>不要设置Young Generation大小</strong></h4><p>因为显式通过-Xmn设置young generation大小将会干预G1收集器的默认行为</p><ul><li>G1将不再尊重设定的pause time,本质来说是因为设置young generation大小使得设定的pause time目标失效。</li><li>G1不再能够根据需要扩展和收缩young generation的空间。由于大小是固定的，所以不能更改大小。</li></ul><h4 id="_7-2-2-响应时间指标" tabindex="-1"><a class="header-anchor" href="#_7-2-2-响应时间指标" aria-hidden="true">#</a> 7.2.2 <strong>响应时间指标</strong></h4><p>不要使用平均响应时间(ART)作为指标来设置<code>XX:MaxGCPauseMillis=&lt;N&gt;</code>，而要考虑设置90%以上时间都能达到目标的值。这意味着90%发出请求的用户不会经历高于目标的响应时间。记住，暂停时间是一个目标，并不能保证总能达到。</p><h4 id="_7-2-3-什么是evacuation-failure" tabindex="-1"><a class="header-anchor" href="#_7-2-3-什么是evacuation-failure" aria-hidden="true">#</a> 7.2.3 <strong>什么是Evacuation Failure</strong></h4><p>当JVM在GC期间复制对象到Survior区或或者提升对象时，堆空间被耗尽，堆区域升级失败。堆无法扩展，因为它已经处于最大值。这种情况在-XX:+PrintGCDetails将会以TO空间溢出**(<code>to-space overflow</code>)**的形式表示。代价是十分昂贵的，因为</p><ul><li>GC仍然需要继续，所以必须释放空间</li><li>未成功复制的对象必须在适当的位置保留</li><li>对CSet中区域的rset的任何更新都必须重新生成</li><li>所有这些步骤都很昂贵。</li></ul><h4 id="_7-2-4-如何避免evacuation-failure" tabindex="-1"><a class="header-anchor" href="#_7-2-4-如何避免evacuation-failure" aria-hidden="true">#</a> 7.2.4 <strong>如何避免Evacuation Failure</strong></h4><p>为了避免Evacuation Failure，考虑以下选项。</p><ul><li><p>增大堆（内存)大小</p></li><li><ul><li>增大**<code>-XX:G1ReservePercent=n</code>**，默认是10</li><li>G1会预留一部分内存，制造一个假天花板，当真正Evacuation Failure时还有内存可用。</li></ul></li><li><p>早点启动标记周期</p></li><li><p>增大并行标记的线程数，使用**<code>-XX:ConcGCThreads=n</code>**选项。</p></li></ul><h3 id="_7-3-完整的g1-gc开关列表" tabindex="-1"><a class="header-anchor" href="#_7-3-完整的g1-gc开关列表" aria-hidden="true">#</a> 7.3 完整的G1 GC开关列表</h3><ul><li>-XX:+UseG1GC 使用G1 GC。</li><li>-XX:MaxGCPauseMillis=n 设置最大GC停顿时间，这是一个软目标，JVM会尽最大努力去达到它。</li><li>-XX:InitiatingHeapOccupancyPercent=n 启动并发标记循环的堆占用率的百分比，当整个堆的占用达到比例时，启动一个全局并发标记循环，0代表并发标记一直运行。默认值是45%。</li><li>-XX:NewRatio=n 新生代和老年代大小的比例，默认是2。</li><li>-XX:SurvivorRatio=n eden和survivor区域空间大小的比例，默认是8。</li><li>-XX:MaxTenuringThreshold=n 晋升的阈值，默认是15（一个存活对象经历多少次GC周期之后晋升到老年代)。</li><li>-XX:ParallelGCThreads=n 设置GC并发阶段的线程数，默认值与JVM运行平台相关。</li><li>-XX:ConcGCThreads=n 设置并发标记的线程数，默认值与JVM运行平台相关。</li><li>-XX:G1ReservePercent=n 设置保留java堆大小比例，用于防止晋升失败/Evacuation Failure,默认值是10%。</li><li>-XX:G1HeapRegionSize=n 设置Region的大小，默认是根据堆的大小动态决定，大小范围是[1M,32M]</li></ul><h2 id="_8-总结" tabindex="-1"><a class="header-anchor" href="#_8-总结" aria-hidden="true">#</a> 8. 总结</h2><ul><li>G1把内存分成一块块的Region，每块的Region的大小都是一样的。</li><li>G1保留了YGC并加上了一种全新的MIXGC用于收集老年代。G1中没有Full GC，G1中的Full GC是采用serial old Full GC。在MIXGC中的Cset是选定所有young gen里的region，外加根据global concurrent marking统计得出收集收益高的若干old gen region。在YGC中的Cset是选定所有young gen里的region。通过控制young gen的region个数来控制young GC的开销。YGC与MIXGC都是采用多线程复制清除，整个过程会STW。</li><li>G1的低延迟原理在于其回收的区域变得精确并且范围变小了。</li><li>全局并发标记分的五个阶段。</li><li>用STAB来维持并发GC的准确性。</li><li>使用G1的最佳实践</li><li>G1 GC日志打印</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,41),g={href:"https://zhuanlan.zhihu.com/p/52841787",target:"_blank",rel:"noopener noreferrer"};function h(k,m){const a=r("ExternalLinkIcon");return i(),p("div",null,[c,n("ul",null,[n("li",null,[n("a",u,[e("Real-time garbage collection on general-purpose"),s(a)])])]),d,n("p",null,[n("a",g,[e("G1 收集器原理理解与分析"),s(a)])])])}const v=o(l,[["render",h],["__file","java-jvm-gc-g1-supplement.html.vue"]]);export{v as default};