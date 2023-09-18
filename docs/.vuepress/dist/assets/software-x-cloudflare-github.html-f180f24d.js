import{_ as n,W as g,X as o,Z as e,$ as i,a0 as t,Y as l,D as s}from"./framework-4b7e9ff4.js";const r={},c=l('<h1 id="使用cloudflare免费加速github-page" tabindex="-1"><a class="header-anchor" href="#使用cloudflare免费加速github-page" aria-hidden="true">#</a> 使用cloudflare免费加速github page</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>我的博客是挂载在github 的page下，但是github访问实在太慢了，而且因为github 属于一个半墙的状态，所以还有些用户压根访问不了。</p><p>尝试过的方案</p><ul><li>将github 上的内容放在gitee码云上，速度是快了好多，但是竟然不支持自定义域名了！！！只有企业版支持。</li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001220335021.png" alt="image-20211001220335021" tabindex="0" loading="lazy"><figcaption>image-20211001220335021</figcaption></figure><p>我们用站长工具测试</p><table><thead><tr><th>Github</th><th>Gitee</th></tr></thead><tbody><tr><td>2420ms</td><td>561ms</td></tr></tbody></table><p>访问速度真的差了好多。但是不支持域名也是硬伤。一番搜索后找到了cloudflare CDN加速。</p><p>实现原理就是在github page 上套一层 cloudflare CDN。不过要注意的是免费版本是有请求次数限制的，每天 10W 次。不过我的博客也没什么人访问</p><h2 id="_2-使用cloudflare-cdn" tabindex="-1"><a class="header-anchor" href="#_2-使用cloudflare-cdn" aria-hidden="true">#</a> 2. 使用cloudflare CDN</h2>',11),d={href:"https://dash.cloudflare.com/sign-up%E9%93%BE%E6%8E%A5%E8%BF%9B%E8%A1%8C%E6%B3%A8%E5%86%8C",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[e("p",null,"添加站点，把对应的域名填写进去"),e("figure",null,[e("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001221040546.png",alt:"image-20211001221040546",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20211001221040546")])],-1),u=e("li",null,[e("p",null,"选择免费的版本就可以了"),e("figure",null,[e("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001221140025.png",alt:"image-20211001221140025",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20211001221140025")])],-1),p=e("li",null,[e("p",null,"提交之后会自动扫描域名对应的解析记录：")],-1),h=l(`<figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001221304689.png" alt="image-20211001221304689" tabindex="0" loading="lazy"><figcaption>image-20211001221304689</figcaption></figure><ol start="5"><li><p>通过域名的运营商修改对应的 NS 记录，这里每个运营商的修改方式都不一样，我这里是用的阿里云的：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001222009805.png" alt="image-20211001222009805" tabindex="0" loading="lazy"><figcaption>image-20211001222009805</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001222114836.png" alt="image-20211001222114836" tabindex="0" loading="lazy"><figcaption>image-20211001222114836</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001222042251.png" alt="image-20211001222042251" tabindex="0" loading="lazy"><figcaption>image-20211001222042251</figcaption></figure></li><li><p>验证</p><p>这样就设置完毕了，等一段时间再用命令行验证一下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ dig isture.com +noall +answer
&gt; monkeywie.cn.		600	IN	A	104.28.28.212
&gt; monkeywie.cn.		600	IN	A	172.67.169.202
&gt; monkeywie.cn.		600	IN	A	104.28.29.212
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 dns 解析的 ip 已经变了，已经被 cloudflare 接管了，</p></li><li><p>然后清除下浏览器 DNS 缓存，chrome 浏览器输入<code>chrome://net-internals/#dns</code>进入清除页：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001222337283.png" alt="image-20211001222337283" tabindex="0" loading="lazy"><figcaption>image-20211001222337283</figcaption></figure></li><li><p>再次访问<code>https://java.isture.com/</code>，F12 打开网络面板可以看到已经用上了 CDN 了：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001222513243.png" alt="image-20211001222513243" tabindex="0" loading="lazy"><figcaption>image-20211001222513243</figcaption></figure></li></ol><h2 id="_3-结果对比" tabindex="-1"><a class="header-anchor" href="#_3-结果对比" aria-hidden="true">#</a> 3. 结果对比</h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001222756708.png" alt="image-20211001222756708" tabindex="0" loading="lazy"><figcaption>image-20211001222756708</figcaption></figure><table><thead><tr><th>Github</th><th>Gitee</th></tr></thead><tbody><tr><td>815ms</td><td>723ms</td></tr></tbody></table><p>虽然加速后还是不如gitee ，但是成效已经很明显了。而且被墙的问题也不会那么严重了</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,7),b={href:"https://monkeywie.cn/2020/08/20/fast-github-page-with-cloudflare/",target:"_blank",rel:"noopener noreferrer"};function f(z,_){const a=s("ExternalLinkIcon");return g(),o("div",null,[c,e("ol",null,[e("li",null,[e("p",null,[i("先通过"),e("a",d,[i("https://dash.cloudflare.com/sign-up链接进行注册"),t(a)])])]),m,u,p]),h,e("p",null,[e("a",b,[i("使用cloudflare免费加速github page"),t(a)])])])}const x=n(r,[["render",f],["__file","software-x-cloudflare-github.html.vue"]]);export{x as default};