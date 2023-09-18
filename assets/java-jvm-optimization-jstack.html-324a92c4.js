import{_ as e,W as o,X as c,Z as s,$ as n,a0 as t,Y as p,D as i}from"./framework-4b7e9ff4.js";const l={},u=p('<h1 id="jstack等命令的实现原理" tabindex="-1"><a class="header-anchor" href="#jstack等命令的实现原理" aria-hidden="true">#</a> jstack等命令的实现原理</h1><h2 id="_1-实现原理" tabindex="-1"><a class="header-anchor" href="#_1-实现原理" aria-hidden="true">#</a> 1. 实现原理</h2><ol><li>jstack等命令会与jvm进程建立socket连接</li><li>发送对应的指令（jstack发送了threaddump执行）</li><li>然后再读取返回的数据</li></ol><h2 id="_2-jstack使用场景" tabindex="-1"><a class="header-anchor" href="#_2-jstack使用场景" aria-hidden="true">#</a> 2. jstack使用场景</h2><p>**场景：**Java应用持续占用很高CPU，需要排查一下</p>',5),r={href:"https://chenyongjun.vip/",target:"_blank",rel:"noopener noreferrer"},k=p(`<p><code>top</code> 命令查下系统运行情况，进程31951占用CPU 80.6%。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326145102943.png" alt="image-20220326145102943" tabindex="0" loading="lazy"><figcaption>image-20220326145102943</figcaption></figure><p><code>jps -l</code> 确认一下，31951就是博客的进程ID，或 <code>cat /proc/31951/cmdline</code> 看下进程的启用命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@iZ94dcq8q6jZ:~# jps -l
28416 sun.tools.jps.Jps
31951 blog.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>top -Hp 3379</code> 以线程模式查看下进程31951的所有线程情况</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326145242586.png" alt="image-20220326145242586" tabindex="0" loading="lazy"><figcaption>image-20220326145242586</figcaption></figure><p>假设想看下第二个线程31998的情况，31998是操作系统的线程ID，先转成16进制。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>printf <span class="token string">&#39;%x&#39;</span> <span class="token number">31998</span> #值为7cfe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取该线程的信息(匹配7cf3后取20行差不多)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>jstack <span class="token number">31951</span> <span class="token operator">|</span> grep 7cfe <span class="token operator">-</span><span class="token constant">A</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中部分数据如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;Tomcat JDBC Pool Cleaner[11483240:1532362388783]&quot;</span> #<span class="token number">31</span> daemon prio<span class="token operator">=</span><span class="token number">5</span> os_prio<span class="token operator">=</span><span class="token number">0</span> tid<span class="token operator">=</span><span class="token number">0x0a29dc00</span> nid<span class="token operator">=</span><span class="token number">0x7cfe</span> <span class="token keyword">in</span> Object<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token number">0xa2a69000</span><span class="token punctuation">]</span>
   java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>State<span class="token operator">:</span> <span class="token constant">TIMED_WAITING</span> <span class="token punctuation">(</span>on object monitor<span class="token punctuation">)</span>
    at java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Object<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>
    at java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>TimerThread<span class="token punctuation">.</span><span class="token function">mainLoop</span><span class="token punctuation">(</span>Timer<span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">552</span><span class="token punctuation">)</span>
    <span class="token operator">-</span> locked <span class="token operator">&lt;</span><span class="token number">0xaadc5a60</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>a java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>TaskQueue<span class="token punctuation">)</span>
    at java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>TimerThread<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>Timer<span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">505</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：nid=0x7cfe中的nid指native id，是OS中线程ID，对应上面31998线程的16进制值7cfe；tid为Java中线程的ID。</p>`,13),d={href:"https://www.jianshu.com/p/6690f7e92f27",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.tianshouzhi.com/api/tutorials/jvm/351",target:"_blank",rel:"noopener noreferrer"},v=p(`<h2 id="_3-jstack实现原理" tabindex="-1"><a class="header-anchor" href="#_3-jstack实现原理" aria-hidden="true">#</a> 3. jstack实现原理</h2><p>先以一段简单代码打印threaddump，和stack命令效果一样，下面的类基本来自 <strong>tools.jar</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@Test
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">jstack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> throws Exception <span class="token punctuation">{</span>
    RuntimeMXBean runtimeMXBean <span class="token operator">=</span> ManagementFactory<span class="token punctuation">.</span><span class="token function">getRuntimeMXBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    String pid <span class="token operator">=</span> runtimeMXBean<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;@&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    VirtualMachine virtualMachine <span class="token operator">=</span> VirtualMachine<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    HotSpotVirtualMachine hotSpotVirtualMachine <span class="token operator">=</span> <span class="token punctuation">(</span>HotSpotVirtualMachine<span class="token punctuation">)</span> virtualMachine<span class="token punctuation">;</span>

    InputStream inputStream <span class="token operator">=</span> hotSpotVirtualMachine<span class="token punctuation">.</span><span class="token function">remoteDataDump</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    String threadDump <span class="token operator">=</span> IOUtils<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// IOUtils from commons-io</span>
    System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>threadDump<span class="token punctuation">)</span><span class="token punctuation">;</span>
    virtualMachine<span class="token punctuation">.</span><span class="token function">detach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印的部分数据如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Full thread dump Java <span class="token function">HotSpot</span><span class="token punctuation">(</span><span class="token constant">TM</span><span class="token punctuation">)</span> <span class="token number">64</span><span class="token operator">-</span>Bit Server <span class="token constant">VM</span> <span class="token punctuation">(</span><span class="token number">25.101</span><span class="token operator">-</span>b13 mixed mode<span class="token punctuation">)</span><span class="token operator">:</span>

<span class="token string">&quot;Attach Listener&quot;</span> #<span class="token number">10</span> daemon prio<span class="token operator">=</span><span class="token number">9</span> os_prio<span class="token operator">=</span><span class="token number">31</span> tid<span class="token operator">=</span><span class="token number">0x00007f816293c800</span> nid<span class="token operator">=</span><span class="token number">0x5b0f</span> waiting on condition <span class="token punctuation">[</span><span class="token number">0x0000000000000000</span><span class="token punctuation">]</span>
   java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>State<span class="token operator">:</span> <span class="token constant">RUNNABLE</span>

<span class="token string">&quot;Service Thread&quot;</span> #<span class="token number">9</span> daemon prio<span class="token operator">=</span><span class="token number">9</span> os_prio<span class="token operator">=</span><span class="token number">31</span> tid<span class="token operator">=</span><span class="token number">0x00007f8162827000</span> nid<span class="token operator">=</span><span class="token number">0x5303</span> runnable <span class="token punctuation">[</span><span class="token number">0x0000000000000000</span><span class="token punctuation">]</span>
   java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>State<span class="token operator">:</span> <span class="token constant">RUNNABLE</span>

<span class="token string">&quot;C1 CompilerThread3&quot;</span> #<span class="token number">8</span> daemon prio<span class="token operator">=</span><span class="token number">9</span> os_prio<span class="token operator">=</span><span class="token number">31</span> tid<span class="token operator">=</span><span class="token number">0x00007f8164834800</span> nid<span class="token operator">=</span><span class="token number">0x5103</span> waiting on condition <span class="token punctuation">[</span><span class="token number">0x0000000000000000</span><span class="token punctuation">]</span>
   java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>State<span class="token operator">:</span> <span class="token constant">RUNNABLE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>核心的**hotSpotVirtualMachine.remoteDataDump()**代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">public</span> InputStream <span class="token function">remoteDataDump</span><span class="token punctuation">(</span>Object<span class="token operator">...</span> var1<span class="token punctuation">)</span> throws IOException <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">executeCommand</span><span class="token punctuation">(</span><span class="token string">&quot;threaddump&quot;</span><span class="token punctuation">,</span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> InputStream <span class="token function">executeCommand</span><span class="token punctuation">(</span>String var1<span class="token punctuation">,</span> Object<span class="token operator">...</span> var2<span class="token punctuation">)</span> throws IOException <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>var1<span class="token punctuation">,</span> var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>AgentLoadException var4<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InternalError</span><span class="token punctuation">(</span><span class="token string">&quot;Should not get here&quot;</span><span class="token punctuation">,</span> var4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),b=s("strong",null,"executeCommand",-1),h={href:"https://github.com/frohoff/jdk8u-jdk/blob/master/src/solaris/classes/sun/tools/attach/BsdVirtualMachine.java",target:"_blank",rel:"noopener noreferrer"},g=p(`<p>为了便于阅读，源码我有较大删减，看看execute()中的原英文注释即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Execute the given command in the target VM.
 */</span>
InputStream <span class="token function">execute</span><span class="token punctuation">(</span>String cmd<span class="token punctuation">,</span> Object <span class="token operator">...</span> args<span class="token punctuation">)</span> throws AgentLoadException<span class="token punctuation">,</span> IOException <span class="token punctuation">{</span>
    <span class="token comment">// did we detach?</span>
    String p<span class="token punctuation">;</span>
    <span class="token function">synchronized</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">this</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>path <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IOException</span><span class="token punctuation">(</span><span class="token string">&quot;Detached from target VM&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>path<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// create UNIX socket</span>
    int s <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// connect to target VM</span>
    <span class="token function">connect</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>

    IOException ioe <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// connected - write request</span>
    <span class="token comment">// &lt;ver&gt; &lt;cmd&gt; &lt;args...&gt;</span>
    <span class="token function">writeString</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token constant">PROTOCOL_VERSION</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">writeString</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> cmd<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>int i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> args<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> args<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">writeString</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token punctuation">(</span>String<span class="token punctuation">)</span>args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">writeString</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Create an input stream to read reply</span>
    SocketInputStream sis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SocketInputStream</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Read the command completion status</span>
    int completionStatus <span class="token operator">=</span> <span class="token function">readInt</span><span class="token punctuation">(</span>sis<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Return the input stream so that the command output can be read</span>
    <span class="token keyword">return</span> sis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码是最好的手册，通过代码可以知道：<strong>jstack等命令会与jvm进程建立socket连接，发送对应的指令(jstack发送了threaddump指令)，然后再读取返回的数据</strong>。</p>`,3);function j(f,x){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("**模拟：**造个场景简单模拟下，没什么实际意义，仅作演示。我启动了100个线程持续访问 "),s("a",r,[n("我的博客"),t(a)]),n("，博客部署在Ubuntu 16.04上，是一个简单的Spring Boot应用，以jar包直接运行的。")]),k,s("p",null,[n("至于如何利用jstack的数据分析线程情况，可以看看 "),s("a",d,[n("如何使用jstack分析线程状态"),t(a)]),n(" 和 "),s("a",m,[n("jstack"),t(a)]),n("。")]),v,s("p",null,[n("很多命令都是通过 "),b,n(" 来实现的，例如：datadump、threaddump、dumpheap、inspectheap、jcmd等，而最终的execute()在Mac机器上是由 "),s("a",h,[n("BsdVirtualMachine"),t(a)]),n(" 类来完成。")]),g])}const _=e(l,[["render",j],["__file","java-jvm-optimization-jstack.html.vue"]]);export{_ as default};
