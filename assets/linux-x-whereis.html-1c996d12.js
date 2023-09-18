import{_ as e,W as a,X as i,Y as s}from"./framework-4b7e9ff4.js";const n={},r=s(`<h1 id="linux-whereis搜索二进制文件" tabindex="-1"><a class="header-anchor" href="#linux-whereis搜索二进制文件" aria-hidden="true">#</a> Linux-whereis搜索二进制文件</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1 简介</h2><p><strong>whereis命令只能用于程序名的搜索</strong>，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。</p><p>搜索来源是数据库索引</p><blockquote><p>在搜索一些进程位置时，</p><ul><li><p>如果是可执行文件，which的准确性会好一点</p></li><li><p>但如果只是普通程序，可能并不会加入PATH，可以使用whereis 搜索</p></li></ul></blockquote><h2 id="_2-文件支持" tabindex="-1"><a class="header-anchor" href="#_2-文件支持" aria-hidden="true">#</a> 2 文件支持</h2><ul><li>二进制文件</li><li>源文件</li><li>帮助文档</li></ul><h2 id="_3-实例" tabindex="-1"><a class="header-anchor" href="#_3-实例" aria-hidden="true">#</a> 3 实例</h2><h3 id="_3-1-java的二进制文件" tabindex="-1"><a class="header-anchor" href="#_3-1-java的二进制文件" aria-hidden="true">#</a> 3.1 java的二进制文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">whereis</span>  <span class="token function">java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220419105359735.png" alt="image-20220419105359735" tabindex="0" loading="lazy"><figcaption>image-20220419105359735</figcaption></figure><p>返回的结果就比which 多了很多</p><h3 id="_3-2-查找redis的二进制文件" tabindex="-1"><a class="header-anchor" href="#_3-2-查找redis的二进制文件" aria-hidden="true">#</a> 3.2 查找redis的二进制文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>whereis redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220419105732272.png" alt="image-20220419105732272" tabindex="0" loading="lazy"><figcaption>image-20220419105732272</figcaption></figure><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,16),d=[r];function l(h,t){return a(),i("div",null,d)}const o=e(n,[["render",l],["__file","linux-x-whereis.html.vue"]]);export{o as default};
