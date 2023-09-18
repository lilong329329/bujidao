import{_ as e,W as a,X as i,Y as d}from"./framework-4b7e9ff4.js";const c={},l=d(`<h1 id="linux-cpu监控" tabindex="-1"><a class="header-anchor" href="#linux-cpu监控" aria-hidden="true">#</a> Linux CPU监控</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>常用命令有top 和mpstat</p><h2 id="_2-命令" tabindex="-1"><a class="header-anchor" href="#_2-命令" aria-hidden="true">#</a> 2.命令</h2><h3 id="_2-1-top" tabindex="-1"><a class="header-anchor" href="#_2-1-top" aria-hidden="true">#</a> 2.1 top</h3><h4 id="_2-1-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-1-1-简介" aria-hidden="true">#</a> 2.1.1 简介</h4><p>top命令 可以实时动态地查看系统的整体运行情况。</p><h4 id="_2-1-2-语法" tabindex="-1"><a class="header-anchor" href="#_2-1-2-语法" aria-hidden="true">#</a> 2.1.2 语法：</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>top <span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项： <code>-b</code>：以批处理模式操作； <code>-c</code>：显示完整的治命令； <code>-d</code>：屏幕刷新间隔时间； <code>-I</code>：忽略失效过程； <code>-s</code>：保密模式； <code>-S</code>：累积模式； <code>-i&lt;时间&gt;</code>：设置间隔时间； <code>-u&lt;用户名&gt;</code>：指定用户名； <code>-p&lt;进程号&gt;</code>：指定进程； <code>-n&lt;次数&gt;</code>：循环显示的次数</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401142646239.png" alt="image-20220401142646239" tabindex="0" loading="lazy"><figcaption>image-20220401142646239</figcaption></figure><h4 id="_2-1-3-字段说明" tabindex="-1"><a class="header-anchor" href="#_2-1-3-字段说明" aria-hidden="true">#</a> 2.1.3 字段说明</h4><ul><li><code>top</code>：系统当前时间</li><li><code>up xxx days</code>：系统运行时间</li><li><code>1 users</code>：当前登录用户个数</li><li><code>load average</code>：系统负载。即任务队列的平均长度。三个数值分别为最近1分钟、最近5分钟、最近15分钟的平均负载。——超过N（CPU核数）说明系统满负荷运行。</li><li>Tasks <ul><li><code>total</code>：总进程数</li><li><code>running</code>：正在运行的进程数</li><li><code>sleeping</code>：睡眠的进程数</li><li><code>stopped</code>：停止的进程数</li><li><code>zombie</code>：冻结的进程数</li></ul></li><li>%Cpu(s) <ul><li><code>us</code>：用户进程消耗的CPU百分比</li><li><code>sy</code>：内核进程消耗的CPU百分比</li><li><code>ni</code>：改变过优先级的进程占用CPU的百分比</li><li><code>id</code>：空闲CPU的百分比</li><li><code>wa</code>：IO等待消耗的CPU百分比</li></ul></li><li>Mem <ul><li><code>total</code>：物理内存总量</li><li><code>free</code>：空闲物理内存总量</li><li><code>used</code>：已用物理内存总量</li><li><code>buff</code>：用作内核缓存内存总量</li></ul></li><li>Swap <ul><li><code>total</code>：虚拟内存总量</li><li><code>free</code>：空闲虚拟内存总量</li><li><code>used</code>：已用虚拟内存总量</li></ul></li></ul><h4 id="_2-1-4-实例" tabindex="-1"><a class="header-anchor" href="#_2-1-4-实例" aria-hidden="true">#</a> 2.1.4 实例</h4><h5 id="_2-1-4-1-默认top" tabindex="-1"><a class="header-anchor" href="#_2-1-4-1-默认top" aria-hidden="true">#</a> 2.1.4.1 默认top</h5><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401142646239.png" alt="image-20220401142646239" tabindex="0" loading="lazy"><figcaption>image-20220401142646239</figcaption></figure><h3 id="_2-2-mpstat" tabindex="-1"><a class="header-anchor" href="#_2-2-mpstat" aria-hidden="true">#</a> 2.2 mpstat</h3><h4 id="_2-2-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-2-1-简介" aria-hidden="true">#</a> 2.2.1 简介</h4><p>mpstat命令 指令主要用于多CPU环境下，它显示各个可用CPU的状态系你想。</p><h4 id="_2-2-2-语法" tabindex="-1"><a class="header-anchor" href="#_2-2-2-语法" aria-hidden="true">#</a> 2.2.2 语法：</h4><div class="language-erlang line-numbers-mode" data-ext="erlang"><pre class="language-erlang"><code><span class="token atom">mpstat</span> <span class="token punctuation">(</span>选项<span class="token punctuation">)</span> <span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>-P：指定CPU编号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数：</p><ul><li>间隔时间：每次报告的间隔时间（秒）；</li><li>次数：显示报告的次数。</li></ul><h4 id="_2-2-3-示例" tabindex="-1"><a class="header-anchor" href="#_2-2-3-示例" aria-hidden="true">#</a> 2.2.3 示例</h4><p>ALL表示显示所有CPUs，也可以指定某个CPU；2表示刷新间隔。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401143304219.png" alt="image-20220401143304219" tabindex="0" loading="lazy"><figcaption>image-20220401143304219</figcaption></figure>`,28),s=[l];function n(o,t){return a(),i("div",null,s)}const h=e(c,[["render",n],["__file","linux-j-cpu.html.vue"]]);export{h as default};
