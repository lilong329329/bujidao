import{_ as a,W as e,X as i,Y as n}from"./framework-4b7e9ff4.js";const s={},d=n(`<h1 id="linux-which查看可执行文件" tabindex="-1"><a class="header-anchor" href="#linux-which查看可执行文件" aria-hidden="true">#</a> Linux-which查看可执行文件</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1 简介</h2><p><strong>查看可执行文件的位置</strong></p><p>which命令的作用是，<strong>在PATH变量指定的路径中</strong>，搜索某个系统命令的位置，并且返回第一个搜索结果。</p><blockquote><p>也就是说，使用which命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。</p></blockquote><h2 id="_2-命令语法" tabindex="-1"><a class="header-anchor" href="#_2-命令语法" aria-hidden="true">#</a> 2 命令语法</h2><p>which 可执行文件名称</p><h2 id="_3-命令参数" tabindex="-1"><a class="header-anchor" href="#_3-命令参数" aria-hidden="true">#</a> 3 命令参数</h2><ul><li><p>-a 如果有多个匹配结果则打印所有结果:</p></li><li><p>-n 指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名。</p></li><li><p>-p 与-n参数相同，但此处的包括了文件的路径。</p></li><li><p>-w 指定输出时栏位的宽度。</p></li><li><p>-V 显示版本信息</p></li></ul><h2 id="_4-实例" tabindex="-1"><a class="header-anchor" href="#_4-实例" aria-hidden="true">#</a> 4 实例</h2><h3 id="_4-1-java-命令所在的位置" tabindex="-1"><a class="header-anchor" href="#_4-1-java-命令所在的位置" aria-hidden="true">#</a> 4.1 java 命令所在的位置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">which</span> <span class="token parameter variable">-a</span> <span class="token function">java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220418174207332.png" alt="image-20220418174207332" tabindex="0" loading="lazy"><figcaption>image-20220418174207332</figcaption></figure><h3 id="_4-2-找出-cd-这个命令" tabindex="-1"><a class="header-anchor" href="#_4-2-找出-cd-这个命令" aria-hidden="true">#</a> <strong>4.2 找出 cd 这个命令</strong></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">which</span> <span class="token builtin class-name">cd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220418174012154.png" alt="image-20220418174012154" tabindex="0" loading="lazy"><figcaption>image-20220418174012154</figcaption></figure><h3 id="_4-3-找出-xx这个命令" tabindex="-1"><a class="header-anchor" href="#_4-3-找出-xx这个命令" aria-hidden="true">#</a> 4.3 找出 xx这个命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">which</span> xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220418174248167.png" alt="image-20220418174248167" tabindex="0" loading="lazy"><figcaption>image-20220418174248167</figcaption></figure><h3 id="_4-4-找出-redis-这个命令" tabindex="-1"><a class="header-anchor" href="#_4-4-找出-redis-这个命令" aria-hidden="true">#</a> 4.4 找出 redis 这个命令</h3><p>redis 只是软件，并不是命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> which redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220419105639815.png" alt="image-20220419105639815" tabindex="0" loading="lazy"><figcaption>image-20220419105639815</figcaption></figure><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,24),r=[d];function c(h,l){return e(),i("div",null,r)}const o=a(s,[["render",c],["__file","linux-x-which.html.vue"]]);export{o as default};
