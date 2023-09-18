import{_ as s,W as n,X as i,Z as a,$ as r,a0 as d,Y as t,D as p}from"./framework-4b7e9ff4.js";const l={},c=t(`<h1 id="linux-swap交换分区" tabindex="-1"><a class="header-anchor" href="#linux-swap交换分区" aria-hidden="true">#</a> Linux Swap交换分区</h1><h2 id="_1-swap交换分区概念" tabindex="-1"><a class="header-anchor" href="#_1-swap交换分区概念" aria-hidden="true">#</a> 1. Swap交换分区概念</h2><p>Linux内核为了提高读写效率与速度，会将文件在内存中进行缓存，这部分内存就是Cache Memory(缓存内存)。<strong>即使你的程序运行结束后，Cache Memory也不会自动释放。<strong>这就会导致你再Linux系统中</strong>程序频繁读写文件</strong>后，你会发现<strong>可用内存变少</strong>。当系统的无力内存不够用的时候，就需要将无力内存的一部分释放出来，以供当前运行的程序使用。</p><p>那些被释放的空间可能来自一些很长时间没有什么操作的程序，这些**被释放的空间被临时保存到Swap空间中，**等到那些程序要运行时，再从Swap分区中恢复保存的数据到内存中。这样，系统总是在物理内存不够时，才进行Swap交换。</p><h2 id="_2-查看swap分区大小" tabindex="-1"><a class="header-anchor" href="#_2-查看swap分区大小" aria-hidden="true">#</a> 2. 查看Swap分区大小</h2><p>查看Swap分区的大小以及使用情况，一般使用free命令。当前我们并没设置swap分区</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200206122221579.png" alt="image-20200206122221579" tabindex="0" loading="lazy"><figcaption>image-20200206122221579</figcaption></figure><p>我们可以使用swapon命令查看当前swap相关信息：例如swap空间是swap partition，Swap size，使用情况等详细信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>swapon -s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200206130028437.png" alt="image-20200206130028437" tabindex="0" loading="lazy"><figcaption>image-20200206130028437</figcaption></figure><h2 id="_3-创建swap区分" tabindex="-1"><a class="header-anchor" href="#_3-创建swap区分" aria-hidden="true">#</a> 3. 创建swap区分</h2><h3 id="_3-1-创建swap文件" tabindex="-1"><a class="header-anchor" href="#_3-1-创建swap文件" aria-hidden="true">#</a> 3.1 创建swap文件</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code>cd <span class="token operator">/</span><span class="token keyword">var</span>
sudo mkdir swap
sudo dd <span class="token keyword">if</span><span class="token operator">=/</span>dev<span class="token operator">/</span>zero of<span class="token operator">=</span>swapfile bs<span class="token operator">=</span><span class="token number">1024</span> count<span class="token operator">=</span><span class="token number">2000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>count代表的是大小，我这里是2G。</p><h3 id="_3-2-把文件转换为swap文件" tabindex="-1"><a class="header-anchor" href="#_3-2-把文件转换为swap文件" aria-hidden="true">#</a> 3.2 把文件转换为swap文件</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code> sudo mkswap swapfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200206124047741.png" alt="image-20200206124047741" tabindex="0" loading="lazy"><figcaption>image-20200206124047741</figcaption></figure><h3 id="_3-3-激活swap文件" tabindex="-1"><a class="header-anchor" href="#_3-3-激活swap文件" aria-hidden="true">#</a> 3.3 激活swap文件</h3><p>这里可以直接用命令挂载上一个swap分区，但是重启后要重新挂载：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>挂载： sudo swapon <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>swapfile
如果不需要了，可以也可以卸载：
卸载：sudo swapoff <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>swapfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-开机启动后自动挂载" tabindex="-1"><a class="header-anchor" href="#_3-4-开机启动后自动挂载" aria-hidden="true">#</a> 3.4 开机启动后自动挂载</h3><p>如果需要开机启动后自动挂载的话，可以把它添加到/etc/fstab文件中。</p><p>开机自动挂载SWAP分区，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在文件末尾添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/var/swapfile   swap  swap  defaults  0  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-5-查看使用成功" tabindex="-1"><a class="header-anchor" href="#_3-5-查看使用成功" aria-hidden="true">#</a> 3.5 查看使用成功</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200206125218923.png" alt="image-20200206125218923" tabindex="0" loading="lazy"><figcaption>image-20200206125218923</figcaption></figure><h2 id="_4-swappiness属性" tabindex="-1"><a class="header-anchor" href="#_4-swappiness属性" aria-hidden="true">#</a> 4. swappiness属性</h2><h3 id="_4-1-swappiness属性介绍" tabindex="-1"><a class="header-anchor" href="#_4-1-swappiness属性介绍" aria-hidden="true">#</a> 4.1 swappiness属性介绍</h3><p>swappiness的值得大小对如何使用swap分区是有很大联系的。Linux下设置swappiness<strong>参数来配置内存使用到多少才开始使用swap分区</strong></p><ul><li>swappiness=0:表示最大限度使用物理内存，然后才是swap空间</li><li>swappiness＝100:表示积极的使用swap分区，并且把内存上的数据及时的搬运到swap空间里面</li></ul><h3 id="_4-2-永久更改方法" tabindex="-1"><a class="header-anchor" href="#_4-2-永久更改方法" aria-hidden="true">#</a> 4.2 永久更改方法</h3><p>修改 /etc/sysctl.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo vim /etc/sysctl.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在末尾加上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vm.swappiness = 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,40),o={href:"https://www.jianshu.com/p/04c7a9ab438c",target:"_blank",rel:"noopener noreferrer"};function u(g,h){const e=p("ExternalLinkIcon");return n(),i("div",null,[c,a("p",null,[a("a",o,[r("Linux 开启 Swap分区 教程"),d(e)])])])}const v=s(l,[["render",u],["__file","linux-z-swap.html.vue"]]);export{v as default};
