import{_ as i,W as t,X as o,Z as e,$ as a,a0 as r,Y as n,D as l}from"./framework-4b7e9ff4.js";const d={},c=n('<h1 id="aspose-word部署linux服务器中文乱码问题" tabindex="-1"><a class="header-anchor" href="#aspose-word部署linux服务器中文乱码问题" aria-hidden="true">#</a> aspose.word部署linux服务器中文乱码问题</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>aspose.word部署linux服务器字体乱码问题。在本地开发因为本地环境本身就有相关字体文件，而服务器上并没有相关中文字体库。导致出现乱码</p><blockquote><p>Ps: 本来想截图的，但已经处理好了。不想再改回去了。有机会再补</p></blockquote><h2 id="_2-解决" tabindex="-1"><a class="header-anchor" href="#_2-解决" aria-hidden="true">#</a> 2. 解决</h2>',5),u=e("p",null,"解压[字体.rar]压缩包中的字体",-1),h={href:"https://pan.baidu.com/s/17_IRhFZXkbQ7Ee2TeqEaaw",target:"_blank",rel:"noopener noreferrer"},p=n(`<li><p>将常用字体文件复制到linux系统的字体文件夹下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/share/fonts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220527093805649.png" alt="image-20220527093805649" tabindex="0" loading="lazy"><figcaption>image-20220527093805649</figcaption></figure></li><li><p>刷新字体缓存</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fc-cache -fv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,2);function _(x,f){const s=l("ExternalLinkIcon");return t(),o("div",null,[c,e("ol",null,[e("li",null,[u,e("p",null,[a("链接:"),e("a",h,[a("https://pan.baidu.com/s/17_IRhFZXkbQ7Ee2TeqEaaw"),r(s)]),a(" 密码:s708")])]),p])])}const m=i(d,[["render",_],["__file","office-x-aspose-cn-garbled.html.vue"]]);export{m as default};
