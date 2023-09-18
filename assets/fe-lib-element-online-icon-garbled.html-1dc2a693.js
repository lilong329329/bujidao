import{_ as t,W as o,X as r,Z as e,$ as a,a0 as n,Y as c,D as i}from"./framework-4b7e9ff4.js";const d={},l=c(`<h1 id="线上element的字体图标乱码" tabindex="-1"><a class="header-anchor" href="#线上element的字体图标乱码" aria-hidden="true">#</a> 线上element的字体图标乱码</h1><h2 id="_1-现象" tabindex="-1"><a class="header-anchor" href="#_1-现象" aria-hidden="true">#</a> 1. 现象</h2><p>本地开发测试都没有问题，部署到线上环境图标第一次显示不出来</p><h2 id="_2-问题原因" tabindex="-1"><a class="header-anchor" href="#_2-问题原因" aria-hidden="true">#</a> 2. 问题原因</h2><p>dart-sass编译时会将对应的unicode编码转换成对应unicode明文，所以通过伪元素来展示的图标如el-icon-arrow:before{ content: &quot;\\e6df&quot;}，编译之后就变成了el-icon-arrow:before{ content: &quot;&quot;}，“”便是一个双字节字符</p><ul><li>正常情况我们会在meta标签上设置：<code>&lt;meta charset=&quot;utf-8&quot; &gt;</code>，<strong>但这只对HTML内容解析有效，</strong></li><li>对于css内容中(外部样式表下)的双字节字符（如中文）解析并没有作用的，所以如果浏览器请求回来的css资源的HTTP响应头里的Content-Type未指明&quot;charset=utf-8&quot;的话，浏览器根据自身的嗅探机制来决定采用哪一种编码解析，结果就会概率出现双字节字符乱码的情况</li></ul><h2 id="_3-解决方法" tabindex="-1"><a class="header-anchor" href="#_3-解决方法" aria-hidden="true">#</a> 3. 解决方法</h2><h3 id="_3-1-改为node-sass编译-亲测有效" tabindex="-1"><a class="header-anchor" href="#_3-1-改为node-sass编译-亲测有效" aria-hidden="true">#</a> 3.1 改为node-sass编译(亲测有效)</h3><p>element-ui采用的时node-sass编译，可以把dart-sass换成node-sass，但是官网主推dart-sass，dart-sass会是未来主流</p><h3 id="_3-2-css-增加-charset-utf-8-响应头" tabindex="-1"><a class="header-anchor" href="#_3-2-css-增加-charset-utf-8-响应头" aria-hidden="true">#</a> 3.2 css 增加&quot;charset=utf-8&quot;响应头</h3><p>让css资源请求的响应头的Content-Type增加&quot;charset=utf-8&quot;声明，因为涉及到后端，所以具体笔者没试验过，不知道可不可行。</p><h3 id="_3-3-设置sassoptions不压缩" tabindex="-1"><a class="header-anchor" href="#_3-3-设置sassoptions不压缩" aria-hidden="true">#</a> 3.3 设置sassOptions不压缩</h3><p>因为 sass-loader 会检查运行环境的模式，给 dart-sass 传入 <code>{ outputStyle: &quot;compressed&quot; }</code>。 dart-sass 在这时会使用 BOM 而不是输出 <code>@charset</code>。</p><p>如果是通过 @vue/cli 搭建的环境，因为有 cssnano 处理压缩，所以可以给 vue.config.js 传入 sassOptions 避免 compressed。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">module</span><span class="token punctuation">.</span><span class="token keyword">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span> 
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    loaderOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      sass<span class="token operator">:</span> <span class="token punctuation">{</span>
        sassOptions<span class="token operator">:</span> <span class="token punctuation">{</span> outputStyle<span class="token operator">:</span> <span class="token string">&quot;expanded&quot;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,16),p={href:"https://www.cnblogs.com/shandou/p/14867943.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/PanJiaChen/vue-element-admin/issues/3526",target:"_blank",rel:"noopener noreferrer"};function h(m,_){const s=i("ExternalLinkIcon");return o(),r("div",null,[l,e("p",null,[e("a",p,[a("dart-sass编译element-ui打包出来的icon乱码的解决方案"),n(s)])]),e("p",null,[e("a",u,[a("用最新的框架，打包出来element的字体图标乱码了？"),n(s)])])])}const v=t(d,[["render",h],["__file","fe-lib-element-online-icon-garbled.html.vue"]]);export{v as default};
