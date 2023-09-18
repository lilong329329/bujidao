import{_ as p,W as i,X as l,Z as a,$ as n,a0 as e,Y as t,D as o}from"./framework-4b7e9ff4.js";const c={},r=t(`<h1 id="gc日志分析" tabindex="-1"><a class="header-anchor" href="#gc日志分析" aria-hidden="true">#</a> gc日志分析</h1><h2 id="_1-什么时候会发生垃圾收集" tabindex="-1"><a class="header-anchor" href="#_1-什么时候会发生垃圾收集" aria-hidden="true">#</a> 1. 什么时候会发生垃圾收集</h2><p>首先我们来看一个问题，那就是什么时候会发生垃圾回收？ 在Java中，GC是由JVM自动完成的，根据JVM系统环境而定，所以时机是不确定的。 当然，我们可以手动进行垃圾回收， 比如调用System.gc()方法通知JVM进行一次垃圾回收，但是具体什么时刻运行也无法控制。也就是说System.gc()只是通知要回收，什么时候回收由JVM决定。 一般以下几种情况会发生垃圾回收：</p><ol><li>当Eden区或者S区不够用时</li><li>老年代空间不够用了时</li><li>方法区空间不够用时</li><li>System.gc() 时</li></ol><blockquote><p>注意：<strong>可能有些人会以为方法区是不会发生垃圾回收的，其实方法区也是会发生垃圾回收的，只不过大部分情况下，方法区发生垃圾回收之后效率不是很高，大部分内存都回收不掉，所以我们一般讨论垃圾回收的时候也只讨论堆内的回收</strong></p></blockquote><h2 id="_2-怎么拿到gc日志" tabindex="-1"><a class="header-anchor" href="#_2-怎么拿到gc日志" aria-hidden="true">#</a> 2. 怎么拿到GC日志</h2><p>发生GC之后，我们要分析GC日志，当然就首先要拿到GC日志，JVM参数分类及常用参数分析时有提到，打印GC日志可以通过如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-XX:+PrintGCDetails</span> <span class="token parameter variable">-XX:+PrintGCTimeStamps</span> <span class="token parameter variable">-XX:+PrintGCDateStamps</span> -Xloggc:./gc.log 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429154545836.png" alt="image-20220429154545836" tabindex="0" loading="lazy"><figcaption>image-20220429154545836</figcaption></figure><p>找到gc.log文件，注意，刚开始如果一次GC都没发生日志是空的，可以等到发生GC之后再打开：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429154804961.png" alt="image-20220429154804961" tabindex="0" loading="lazy"><figcaption>image-20220429154804961</figcaption></figure><p>从日志上可以看出来，jdk1.8中默认使用的是Parallel Scavenge+Parallel Old收集器，当然我们也可以通过参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:+PrintCommandLineFlags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进行打印：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429154946996.png" alt="image-20220429154946996" tabindex="0" loading="lazy"><figcaption>image-20220429154946996</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:-BytecodeVerificationLocal -XX:-BytecodeVerificationRemote -XX:InitialHeapSize=268435456 -XX:+ManagementServer -XX:MaxHeapSize=4294967296 -XX:+PrintCommandLineFlags -XX:+PrintGC -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:TieredStopAtLevel=1 -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-gc日志分析" tabindex="-1"><a class="header-anchor" href="#_3-gc日志分析" aria-hidden="true">#</a> 3. gc日志分析</h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429160003832.png" alt="image-20220429160003832" tabindex="0" loading="lazy"><figcaption>image-20220429160003832</figcaption></figure><h3 id="_3-1-环境信息" tabindex="-1"><a class="header-anchor" href="#_3-1-环境信息" aria-hidden="true">#</a> 3.1 环境信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前所使用的的HotSpot虚拟机及其对应版本号；</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span><span class="token number">25.231</span>-b11<span class="token punctuation">)</span> <span class="token keyword">for</span> bsd-amd64 JRE <span class="token punctuation">(</span><span class="token number">1.8</span>.0_231-b11<span class="token punctuation">)</span>, built on Oct  <span class="token number">5</span> <span class="token number">2019</span> 03:15:25 by <span class="token string">&quot;java_re&quot;</span> with gcc <span class="token number">4.2</span>.1 <span class="token punctuation">(</span>Based on Apple Inc. build <span class="token number">5658</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>LLVM build <span class="token number">2336.11</span>.00<span class="token punctuation">)</span>
<span class="token comment"># 操作系统相关的内存信息；</span>
Memory: 4k page, physical 16777216k<span class="token punctuation">(</span>2322260k <span class="token function">free</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-配置的参数信息" tabindex="-1"><a class="header-anchor" href="#_3-2-配置的参数信息" aria-hidden="true">#</a> 3.2 配置的参数信息</h3><ul><li>初始堆大小：268435456B=&gt;256M</li><li>最大堆大小：4294967296B=&gt;4096M=&gt;4G</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前Java服务启动后配置的参数信息：</span>
CommandLine flags: <span class="token parameter variable">-XX:-BytecodeVerificationLocal</span> <span class="token parameter variable">-XX:-BytecodeVerificationRemote</span> <span class="token parameter variable">-XX:InitialHeapSize</span><span class="token operator">=</span><span class="token number">268435456</span> <span class="token parameter variable">-XX:+ManagementServer</span> <span class="token parameter variable">-XX:MaxHeapSize</span><span class="token operator">=</span><span class="token number">4294967296</span> <span class="token parameter variable">-XX:+PrintCommandLineFlags</span> <span class="token parameter variable">-XX:+PrintGC</span> <span class="token parameter variable">-XX:+PrintGCDateStamps</span> <span class="token parameter variable">-XX:+PrintGCDetails</span> <span class="token parameter variable">-XX:+PrintGCTimeStamps</span> <span class="token parameter variable">-XX:TieredStopAtLevel</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-XX:+UseCompressedClassPointers</span> <span class="token parameter variable">-XX:+UseCompressedOops</span> <span class="token parameter variable">-XX:+UseParallelGC</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>包括了堆空间打印，以及使用的垃圾收集器及我们自己配置的打印GC日志相关参数等一些信息。</p><h3 id="_3-3-真正的gc日志" tabindex="-1"><a class="header-anchor" href="#_3-3-真正的gc日志" aria-hidden="true">#</a> 3.3 真正的GC日志</h3><p>我们把第7行还有第11行复制出来分析一下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第7行</span>
<span class="token number">2022</span>-04-29T15:49:04.317-0800: <span class="token number">6.159</span>: <span class="token punctuation">[</span>GC <span class="token punctuation">(</span>Allocation Failure<span class="token punctuation">)</span> <span class="token punctuation">[</span>PSYoungGen: 65536K-<span class="token operator">&gt;</span>4671K<span class="token punctuation">(</span>76288K<span class="token punctuation">)</span><span class="token punctuation">]</span> 65536K-<span class="token operator">&gt;</span>4743K<span class="token punctuation">(</span>251392K<span class="token punctuation">)</span>, <span class="token number">0.0045293</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.01</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.01</span> secs<span class="token punctuation">]</span> 
<span class="token comment"># 第11行</span>
<span class="token number">2022</span>-04-29T15:49:15.162-0800: <span class="token number">17.005</span>: <span class="token punctuation">[</span>Full GC <span class="token punctuation">(</span>Metadata GC Threshold<span class="token punctuation">)</span> <span class="token punctuation">[</span>PSYoungGen: 8154K-<span class="token operator">&gt;</span>0K<span class="token punctuation">(</span>141824K<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>ParOldGen: 541K-<span class="token operator">&gt;</span>7884K<span class="token punctuation">(</span>79360K<span class="token punctuation">)</span><span class="token punctuation">]</span> 8696K-<span class="token operator">&gt;</span>7884K<span class="token punctuation">(</span>221184K<span class="token punctuation">)</span>, <span class="token punctuation">[</span>Metaspace: 20482K-<span class="token operator">&gt;</span>20482K<span class="token punctuation">(</span>1067008K<span class="token punctuation">)</span><span class="token punctuation">]</span>, <span class="token number">0.0263932</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.09</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.01</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.02</span> secs<span class="token punctuation">]</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),u=a("li",null,[a("p",null,"最前面一个时间2022-04-29T15:49:04.317-0800 代表的是垃圾回收发生的时间。")],-1),d=a("li",null,[a("p",null,"紧接着下面的一个数字：6.159 表示的是从Java虚拟机启动以来经过的秒数。")],-1),m=a("li",null,[a("p",null,"再往下一个GC (Allocation Failure)表示发生GC的原因，这里是表示分配空间失败而发生了GC。")],-1),g=a("li",null,[a("p",null,"PSYoungGen，PS表示的是Parallel Scavenge收集器，YoungGen表示的是当前发生GC的地方是年轻代，注意，这里不同收集器会有不同的名字，如ParNew收集器就会显示为ParNew等。")],-1),k=a("li",null,[a("p",null,"中括号之内的一个数字65536K->4671K(76288K)这个表示的是：GC前当前内存区域使用空间64MB->GC后当前内存区域使用的内存空间4.56M(当前区域的总内存空间74.5M)。从这里可以看到，一次GC之后，大部分空间都被回收掉了。")],-1),b=a("strong",null,"S区如果空间不够的话会利用担保机制向老年代借用空间，所以借来的空间时可能被释放的",-1),v={href:"https://blog.csdn.net/zwx900102/article/details/108108555",target:"_blank",rel:"noopener noreferrer"},h=a("blockquote",null,[a("p",null,"简单点说就是：GC回收前年轻代和老年代大小，回收后大小，（年轻代和老年代总大小）；"),a("p",null,[a("strong",null,"注意：Minor GC堆内存总容量 = 9/10年轻代 + 老年代。原因是Survivor区只计算from部分，而JVM默认年轻代中Eden区和Survivor区的比例关系，Eden:S0:S1=8:1:1。")])],-1),f=a("li",null,[a("p",null,"0.0045293 secs这个表示的是GC所花费时间，secs表示单位是秒。")],-1),C=a("li",null,[a("p",null,"[Times: user=0.01 sys=0.00, real=0.01 secs] 这一部分并不是所有的垃圾收集器都会打印，user=0.01表示用户态消耗的CPU时间，sys=0.00表示内核态消耗的CPU时间和操作从开始到结束所经过的墙钟时间。")],-1),X=a("li",null,[a("p",null,"最后再看看其他行ParOldGen表示Parallel Old收集器在回收老年代，Metaspace表示的是方法区(jdk1.7是永久代)")],-1),G=a("li",null,[a("p",null,"我们看到第11行Full GC表示发生了Full GC，FullGC=Minor GC+Major GC+Metaspace GC，所以后面可以看到PSYoungGen，ParOldGen，Metaspace三个区域的回收信息，而且第11行对比非常明显，新生代全部回收掉了，老年代回收了一小部分，而方法区一点都没有回收掉，这也体现了三个区域内所存对象的区别。")],-1),M=t(`<h4 id="_3-3-1-gc日志情况" tabindex="-1"><a class="header-anchor" href="#_3-3-1-gc日志情况" aria-hidden="true">#</a> 3.3.1 gc日志情况</h4><h5 id="_3-2-1-1-默认情况" tabindex="-1"><a class="header-anchor" href="#_3-2-1-1-默认情况" aria-hidden="true">#</a> 3.2.1.1 默认情况</h5><p>由该gc日志可知：初始堆256M，最大堆4G 的情况下</p><blockquote><p>以下值并不是固定的，在初始值不够时还会向jvm申请</p></blockquote><ul><li>年轻代：76288K=74.5M</li><li>老年代：221184K = 216M</li><li>元空间：1067008K=1042M</li></ul><h5 id="_3-2-1-2-堆设置为512-新生代与老年代比值设为1" tabindex="-1"><a class="header-anchor" href="#_3-2-1-2-堆设置为512-新生代与老年代比值设为1" aria-hidden="true">#</a> 3.2.1.2 堆设置为512,新生代与老年代比值设为1</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2022</span>-05-05T15:45:14.545-0800: <span class="token number">52.326</span>: <span class="token punctuation">[</span>Full GC <span class="token punctuation">(</span>Metadata GC Threshold<span class="token punctuation">)</span> <span class="token punctuation">[</span>PSYoungGen: 25963K-<span class="token operator">&gt;</span>0K<span class="token punctuation">(</span>207872K<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>ParOldGen: 83587K-<span class="token operator">&gt;</span>105673K<span class="token punctuation">(</span>262144K<span class="token punctuation">)</span><span class="token punctuation">]</span> 109551K-<span class="token operator">&gt;</span>105673K<span class="token punctuation">(</span>470016K<span class="token punctuation">)</span>, <span class="token punctuation">[</span>Metaspace: 94852K-<span class="token operator">&gt;</span>94852K<span class="token punctuation">(</span>1136640K<span class="token punctuation">)</span><span class="token punctuation">]</span>, <span class="token number">0.4118760</span> secs<span class="token punctuation">]</span> <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">2.08</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.03</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.41</span> secs<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>新生代：207872K=203M</li><li>老年代：262144K= 256M= 正好是总堆的一半</li><li>元空间：1136640K=1110M</li></ul><blockquote><p><strong>注意：Minor GC堆内存总容量 = 9/10年轻代 + 老年代。原因是Survivor区只计算from部分，而JVM默认年轻代中Eden区和Survivor区的比例关系，Eden:S0:S1=8:1:1。</strong></p></blockquote><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220505155043126.png" alt="image-20220505155043126" tabindex="0" loading="lazy"><figcaption>image-20220505155043126</figcaption></figure><h2 id="_4-墙钟时间和cpu时间" tabindex="-1"><a class="header-anchor" href="#_4-墙钟时间和cpu时间" aria-hidden="true">#</a> 4. 墙钟时间和cpu时间</h2><p>墙钟时间(Wall Clock Time)包括各种非运算的等待耗时，例如等待磁盘I/O、等待线程阻塞，而CPU时间不包括这些不需要消耗CPU的时间。</p><h2 id="_5-cms日志分析" tabindex="-1"><a class="header-anchor" href="#_5-cms日志分析" aria-hidden="true">#</a> 5. CMS日志分析</h2><p>我们垃圾收集器切换为CMS</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseConcMarkSweepGC</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，CMS也是一款老年代收集器，使用这个参数后新生代默认会使用ParNew收集器 然后重启服务，等候垃圾回收之后，打开gc.log文件。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429161025196.png" alt="image-20220429161025196" tabindex="0" loading="lazy"><figcaption>image-20220429161025196</figcaption></figure><p>前面两行和上面一样，我们把第6行复制出来看看垃圾收集器是否切换成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CommandLine flags: -XX:-BytecodeVerificationLocal -XX:-BytecodeVerificationRemote -XX:InitialHeapSize=268435456 -XX:+ManagementServer -XX:MaxHeapSize=4294967296 -XX:MaxNewSize=697933824 -XX:MaxTenuringThreshold=6 -XX:OldPLABSize=16 -XX:+PrintCommandLineFlags -XX:+PrintGC -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:TieredStopAtLevel=1 -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseConcMarkSweepGC -XX:+UseParNewGC 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，CMS和ParNew两个收集器都启用了。打开第7行日志：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2022-04-29T16:09:11.428-0800: 5.777: [GC (Allocation Failure) 2022-04-29T16:09:11.433-0800: 5.782: [ParNew: 69952K-&gt;4668K(78656K), 0.0045270 secs] 69952K-&gt;4668K(253440K), 0.0093551 secs] [Times: user=0.02 sys=0.00, real=0.01 secs] 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的回收信息和上面一样，也就是新生代名字不一样，这里叫ParNew。我们主要看看老年代CMS的GC日志，我们把一个完成的老年代回收日志复制出来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2020-08-23T17:00:47.650+0800: 18.182: [GC (CMS Initial Mark) [1 CMS-initial-mark: 30298K(86016K)] 34587K(124736K), 0.0014342 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2020-08-23T17:00:47.651+0800: 18.183: [CMS-concurrent-mark-start]
2020-08-23T17:00:47.712+0800: 18.244: [CMS-concurrent-mark: 0.061/0.061 secs] [Times: user=0.13 sys=0.00, real=0.06 secs] 
2020-08-23T17:00:47.712+0800: 18.244: [CMS-concurrent-preclean-start]
2020-08-23T17:00:47.714+0800: 18.245: [CMS-concurrent-preclean: 0.001/0.001 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2020-08-23T17:00:47.714+0800: 18.246: [CMS-concurrent-abortable-preclean-start]
2020-08-23T17:00:48.143+0800: 18.674: [GC (Allocation Failure) 2020-08-23T17:00:48.143+0800: 18.674: [ParNew: 38720K-&gt;4111K(38720K), 0.0101415 secs] 69018K-&gt;38573K(124736K), 0.0102502 secs] [Times: user=0.06 sys=0.00, real=0.01 secs] 
2020-08-23T17:00:48.451+0800: 18.983: [CMS-concurrent-abortable-preclean: 0.274/0.737 secs] [Times: user=0.94 sys=0.13, real=0.74 secs] 
2020-08-23T17:00:48.451+0800: 18.983: [GC (CMS Final Remark) [YG occupancy: 23345 K (38720 K)]2020-08-23T17:00:48.451+0800: 18.983: [Rescan (parallel) , 0.0046112 secs]2020-08-23T17:00:48.456+0800: 18.987: [weak refs processing, 0.0006259 secs]2020-08-23T17:00:48.457+0800: 18.988: [class unloading, 0.0062187 secs]2020-08-23T17:00:48.463+0800: 18.994: [scrub symbol table, 0.0092387 secs]2020-08-23T17:00:48.472+0800: 19.004: [scrub string table, 0.0006408 secs][1 CMS-remark: 34461K(86016K)] 57806K(124736K), 0.0219024 secs] [Times: user=0.05 sys=0.01, real=0.02 secs] 
2020-08-23T17:00:48.473+0800: 19.005: [CMS-concurrent-sweep-start]
2020-08-23T17:00:48.489+0800: 19.020: [CMS-concurrent-sweep: 0.015/0.015 secs] [Times: user=0.01 sys=0.00, real=0.02 secs] 
2020-08-23T17:00:48.489+0800: 19.020: [CMS-concurrent-reset-start]
2020-08-23T17:00:48.492+0800: 19.023: [CMS-concurrent-reset: 0.003/0.003 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>CMS Initial Mark对应的是CMS工作机制的第一步<strong>初始标记</strong>，主要是寻找GCRoot对象</p></li><li><p>中括号内10443K(86016K)表示的是当前区域已经使用大小和总空间大小</p></li><li><p>中括号外13477K(124736K)表示的是堆内已使用空间大小和堆内总空间大小</p></li><li><p>CMS-concurrent-mark-start这里对应了CMS工作机制中的第二步<strong>并发标记</strong>。这个阶段主要是根据GCRoot对象遍历整个引用链</p></li><li><p>再往后面一行CMS-concurrent-mark: 0.052/0.052 secs，这里的两个时间，第一个表示该阶段持续的cpu时间和墙钟时间</p></li><li><p>后面的CMS-concurrent-preclean和CMS-concurrent-abortable-preclean对应了预清理和可中断预清理阶段</p></li><li><p>CMS-concurrent-sweep-start对应最终标记，此阶段需要STW，可以看到，在此阶段前发生了一次Young GC,这是为了减少STW时间。</p></li><li><p>CMS-concurrent-sweep并发清除垃圾，CMS-concurrent-reset重置线程</p></li></ol><h2 id="_6-g1日志分析" tabindex="-1"><a class="header-anchor" href="#_6-g1日志分析" aria-hidden="true">#</a> 6. G1日志分析</h2><p>切换到G1垃圾收集器：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseG1GC</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后重启服务，等待发生垃圾回收之后打开gc.log文件：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429161709649.png" alt="image-20220429161709649" tabindex="0" loading="lazy"><figcaption>image-20220429161709649</figcaption></figure><p>可以看到，这个文件相比较于其他垃圾收集器要复杂的多。我们还是先看下第6行，确认是否使用了G1收集器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CommandLine flags: <span class="token parameter variable">-XX:-BytecodeVerificationLocal</span> <span class="token parameter variable">-XX:-BytecodeVerificationRemote</span> <span class="token parameter variable">-XX:InitialHeapSize</span><span class="token operator">=</span><span class="token number">268435456</span> <span class="token parameter variable">-XX:+ManagementServer</span> <span class="token parameter variable">-XX:MaxHeapSize</span><span class="token operator">=</span><span class="token number">4294967296</span> <span class="token parameter variable">-XX:+PrintCommandLineFlags</span> <span class="token parameter variable">-XX:+PrintGC</span> <span class="token parameter variable">-XX:+PrintGCDateStamps</span> <span class="token parameter variable">-XX:+PrintGCDetails</span> <span class="token parameter variable">-XX:+PrintGCTimeStamps</span> <span class="token parameter variable">-XX:TieredStopAtLevel</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-XX:+UseCompressedClassPointers</span> <span class="token parameter variable">-XX:+UseCompressedOops</span> <span class="token parameter variable">-XX:+UseG1GC</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到确实使用了G1收集器。我们找到一次完整的G1日志，复制出来：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2020</span>-08-23T18:44:39.787+0800: <span class="token number">2.808</span>: <span class="token punctuation">[</span>GC pause <span class="token punctuation">(</span>G1 Evacuation Pause<span class="token punctuation">)</span> <span class="token punctuation">(</span>young<span class="token punctuation">)</span>, <span class="token number">0.0029103</span> secs<span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Parallel Time: <span class="token number">1.9</span> ms, GC Workers: <span class="token number">4</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>GC Worker Start <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>: Min: <span class="token number">2807.7</span>, Avg: <span class="token number">2807.8</span>, Max: <span class="token number">2807.8</span>, Diff: <span class="token number">0.1</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Ext Root Scanning <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>: Min: <span class="token number">0.3</span>, Avg: <span class="token number">0.6</span>, Max: <span class="token number">0.8</span>, Diff: <span class="token number">0.5</span>, Sum: <span class="token number">2.2</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Update RS <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>: Min: <span class="token number">0.0</span>, Avg: <span class="token number">0.0</span>, Max: <span class="token number">0.0</span>, Diff: <span class="token number">0.0</span>, Sum: <span class="token number">0.0</span><span class="token punctuation">]</span>
         <span class="token punctuation">[</span>Processed Buffers: Min: <span class="token number">0</span>, Avg: <span class="token number">0.0</span>, Max: <span class="token number">0</span>, Diff: <span class="token number">0</span>, Sum: <span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Scan RS <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>: Min: <span class="token number">0.0</span>, Avg: <span class="token number">0.0</span>, Max: <span class="token number">0.0</span>, Diff: <span class="token number">0.0</span>, Sum: <span class="token number">0.0</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Code Root Scanning <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>: Min: <span class="token number">0.0</span>, Avg: <span class="token number">0.0</span>, Max: <span class="token number">0.0</span>, Diff: <span class="token number">0.0</span>, Sum: <span class="token number">0.0</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Object Copy <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>: Min: <span class="token number">0.9</span>, Avg: <span class="token number">1.2</span>, Max: <span class="token number">1.4</span>, Diff: <span class="token number">0.5</span>, Sum: <span class="token number">4.6</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Termination <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>: Min: <span class="token number">0.0</span>, Avg: <span class="token number">0.0</span>, Max: <span class="token number">0.0</span>, Diff: <span class="token number">0.0</span>, Sum: <span class="token number">0.0</span><span class="token punctuation">]</span>
         <span class="token punctuation">[</span>Termination Attempts: Min: <span class="token number">1</span>, Avg: <span class="token number">2.5</span>, Max: <span class="token number">4</span>, Diff: <span class="token number">3</span>, Sum: <span class="token number">10</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>GC Worker Other <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>: Min: <span class="token number">0.0</span>, Avg: <span class="token number">0.0</span>, Max: <span class="token number">0.0</span>, Diff: <span class="token number">0.0</span>, Sum: <span class="token number">0.2</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>GC Worker Total <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>: Min: <span class="token number">1.7</span>, Avg: <span class="token number">1.8</span>, Max: <span class="token number">1.8</span>, Diff: <span class="token number">0.1</span>, Sum: <span class="token number">7.1</span><span class="token punctuation">]</span>
      <span class="token punctuation">[</span>GC Worker End <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>: Min: <span class="token number">2809.5</span>, Avg: <span class="token number">2809.5</span>, Max: <span class="token number">2809.5</span>, Diff: <span class="token number">0.0</span><span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Code Root Fixup: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Code Root Purge: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Clear CT: <span class="token number">0.1</span> ms<span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Other: <span class="token number">1.0</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Choose CSet: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Ref Proc: <span class="token number">0.8</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Ref Enq: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Redirty Cards: <span class="token number">0.1</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Humongous Register: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Humongous Reclaim: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
      <span class="token punctuation">[</span>Free CSet: <span class="token number">0.0</span> ms<span class="token punctuation">]</span>
   <span class="token punctuation">[</span>Eden: <span class="token number">6144</span>.0K<span class="token punctuation">(</span><span class="token number">6144</span>.0K<span class="token punctuation">)</span>-<span class="token operator">&gt;</span><span class="token number">0</span>.0B<span class="token punctuation">(</span><span class="token number">12</span>.0M<span class="token punctuation">)</span> Survivors: <span class="token number">0</span>.0B-<span class="token operator">&gt;</span><span class="token number">1024</span>.0K Heap: <span class="token number">6144</span>.0K<span class="token punctuation">(</span><span class="token number">126</span>.0M<span class="token punctuation">)</span>-<span class="token operator">&gt;</span><span class="token number">1520</span>.0K<span class="token punctuation">(</span><span class="token number">126</span>.0M<span class="token punctuation">)</span><span class="token punctuation">]</span>
 <span class="token punctuation">[</span>Times: <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">0.00</span> <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token number">0.00</span>, <span class="token assign-left variable">real</span><span class="token operator">=</span><span class="token number">0.00</span> secs<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>[GC pause (G1 Evacuation Pause) (young), 0.0029103 secs]这里表示发生GC的区域是Young区，后面就是总共耗费的时间。 注意：<strong>G1虽然在物理上取消了区域的划分，但是逻辑上依然保留了，所以日志中还是会显示young，Full GC会用mixed来表示。</strong></li><li>[Parallel Time: 1.9 ms, GC Workers: 4] 这句表示线程的并行时间和并行的线程数</li><li>[GC Worker Start (ms): Min: 2807.7, Avg: 2807.8, Max: 2807.8, Diff: 0.1]这个表示并行的每个线程的开始时间最小值，平均值和最大值以及时间差(Max-Min)。</li></ul>`,34),S={href:"https://dzone.com/articles/understanding-g1-gc-log-format",target:"_blank",rel:"noopener noreferrer"},_=t('<figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429170801285.png" alt="image-20220429170801285" tabindex="0" loading="lazy"><figcaption>image-20220429170801285</figcaption></figure><h2 id="_7-利用工具分析gc日志" tabindex="-1"><a class="header-anchor" href="#_7-利用工具分析gc日志" aria-hidden="true">#</a> 7. 利用工具分析GC日志</h2><p>虽然说我们从日志上能看懂GC日志，但是如果需要进行调优，我们最关注的是2个点：</p><ul><li>1、吞吐量(Throughput) 吞吐量=运行用户代码时间/(运行用户代码时间+GC时间)</li><li>2、GC暂停时间(Pause Time) Stop The World时间</li></ul><p>那么我们直接从GC日志上很难看出来这两个指标，如果要靠自己计算去确认问题，我觉得这会是一个噩梦。所以同样的，我们需要有工具来帮助我们分析，下面就介绍2款常用的工具。</p><h3 id="_7-1-gceasy" tabindex="-1"><a class="header-anchor" href="#_7-1-gceasy" aria-hidden="true">#</a> 7.1 gceasy</h3>',6),x={href:"https://gceasy.io/",target:"_blank",rel:"noopener noreferrer"},z=a("li",null,"2、上传gc日志",-1),y=t('<figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429162028875.png" alt="image-20220429162028875" tabindex="0" loading="lazy"><figcaption>image-20220429162028875</figcaption></figure><p>然后可以进入主页面：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429162344093.png" alt="image-20220429162344093" tabindex="0" loading="lazy"><figcaption>image-20220429162344093</figcaption></figure><p>这里已经帮我们把吞吐量和GC暂停时间统计出来了，当然还有其他指标也有统计，有了工具我们就可以对比指标来确认哪种收集器适合自己的系统了。</p><h3 id="_7-2-gcviewer" tabindex="-1"><a class="header-anchor" href="#_7-2-gcviewer" aria-hidden="true">#</a> 7.2 GCViewer</h3><ul><li>1、下载gcviewer的jar包</li><li>2、执行命令java -jar gcviewer-1.36-SNAPSHOT.jar</li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429162437651.png" alt="image-20220429162437651" tabindex="0" loading="lazy"><figcaption>image-20220429162437651</figcaption></figure><p>打开主界面：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429162453125.png" alt="image-20220429162453125" tabindex="0" loading="lazy"><figcaption>image-20220429162453125</figcaption></figure><p>点击File–&gt;Open File</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429162516855.png" alt="image-20220429162516855" tabindex="0" loading="lazy"><figcaption>image-20220429162516855</figcaption></figure><p>在右边的第一个Summary概要里面可以看到吞吐量的统计。 切换到第三个标签Pause：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429162529885.png" alt="image-20220429162529885" tabindex="0" loading="lazy"><figcaption>image-20220429162529885</figcaption></figure><p>可以查看到各种停顿时间的统计。</p><h2 id="_8-各gc收集器对比报告" tabindex="-1"><a class="header-anchor" href="#_8-各gc收集器对比报告" aria-hidden="true">#</a> 8. 各GC收集器对比报告</h2><p>该对比是我比较复杂的一个项目，启动初始化环节的简单对比</p><table><thead><tr><th>对比项目</th><th>新生代Parallel Scavenge+老年代Parallel Old</th><th>新生代ParNew 老年代 CMS</th><th>G1收集器</th><th>总结</th></tr></thead><tbody><tr><td>吞吐量</td><td>98.444%</td><td>98.758%</td><td>98.713%</td><td>吞吐量都为98%，差别不大</td></tr><tr><td>平均GC时间</td><td>51.1ms</td><td>10.1ms</td><td>12.4ms</td><td>Parallel 平均时间慢不少</td></tr><tr><td>最长gc时间</td><td>360ms</td><td>110ms</td><td>30ms</td><td>G1 还是挺强的</td></tr></tbody></table><h3 id="_8-1-新生代parallel-scavenge-老年代parallel-old" tabindex="-1"><a class="header-anchor" href="#_8-1-新生代parallel-scavenge-老年代parallel-old" aria-hidden="true">#</a> 8.1 新生代Parallel Scavenge+老年代Parallel Old</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429163708425.png" alt="image-20220429163708425" tabindex="0" loading="lazy"><figcaption>image-20220429163708425</figcaption></figure><h3 id="_8-2-新生代parnew-老年代-cms" tabindex="-1"><a class="header-anchor" href="#_8-2-新生代parnew-老年代-cms" aria-hidden="true">#</a> 8.2 新生代ParNew 老年代 CMS</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429164043614.png" alt="image-20220429164043614" tabindex="0" loading="lazy"><figcaption>image-20220429164043614</figcaption></figure><h3 id="_8-3-g1收集器-独立完成" tabindex="-1"><a class="header-anchor" href="#_8-3-g1收集器-独立完成" aria-hidden="true">#</a> 8.3 G1收集器（独立完成）</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429164317116.png" alt="image-20220429164317116" tabindex="0" loading="lazy"><figcaption>image-20220429164317116</figcaption></figure><h2 id="_9-gc原因" tabindex="-1"><a class="header-anchor" href="#_9-gc原因" aria-hidden="true">#</a> 9. GC原因</h2><ul><li>Allocation Failure：表明本次引起GC的原因是因为新生代中没有足够的区域存放需要分配的数据；</li><li>Metadata GC Threshold：Metaspace区不够用了；</li><li>FErgonomics：JVM自适应调整导致的GC；</li><li>System：调用了System.gc()方法；</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本文主要介绍了常用的垃圾收集器的GC日志应该如何进行分析，并且介绍了两款常用的工具来帮助我们更好更直观的分析GC日志。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',28),P={href:"http://blog.sikacode.com/article/32",target:"_blank",rel:"noopener noreferrer"};function K(T,j){const s=o("ExternalLinkIcon");return i(),l("div",null,[r,a("ol",null,[u,d,m,g,k,a("li",null,[a("p",null,[n("中括号之外的数字65536K->4743K(251392K)这个表示的是：GC前Java堆已使用容量64MB->GC后Java堆已使用容量4.6MB(Java堆使用的总容量245M) 这里需要注意的是5和6中的这两组数字相减得到的值一般是不相等的，这是因为总空间下面还包括了老年代发生回收后释放的空间大小，可能有人会觉得奇怪，这里明明只有新生代发生了GC，为什么老年代会有空间释放？ 不知道大家还记不记得我在前两篇文章中提到了，"),b,n("，如果想详细了解的S区的担保机制的话可以"),a("a",v,[n("点击这里"),e(s)]),n("。")]),h]),f,C,X,G]),M,a("p",null,[a("a",S,[n("详细日志介绍"),e(s)])]),_,a("ul",null,[a("li",null,[n("1、打开官网地址："),a("a",x,[n("https://gceasy.io/"),e(s)])]),z]),y,a("p",null,[a("a",P,[n("【JVM系列7】GC日志都不会看，还怎么进行JVM调优?"),e(s)])])])}const A=p(c,[["render",K],["__file","java-jvm-gc-log.html.vue"]]);export{A as default};
