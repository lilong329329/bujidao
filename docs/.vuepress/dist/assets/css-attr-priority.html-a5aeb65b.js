import{_ as i,W as t,X as s,Z as e,$ as r,a0 as n,Y as o,D as l}from"./framework-4b7e9ff4.js";const c={},d=o('<h1 id="css样式权重和优先级" tabindex="-1"><a class="header-anchor" href="#css样式权重和优先级" aria-hidden="true">#</a> css样式权重和优先级</h1><h2 id="_1-总结" tabindex="-1"><a class="header-anchor" href="#_1-总结" aria-hidden="true">#</a> 1. 总结</h2><ol><li><strong>常用选择器权重优先级：!important &gt; id &gt; class &gt; tag</strong></li><li>!important可以提升样式优先级，但不建议使用。如果!important被用于一个简写的样式属性，那么这条简写的样式属性所代表的子属性都会被应用上!important。 例如：<em>background: blue !important;</em></li><li>如果两条样式都使用!important，则权重值高的优先级更高</li><li>在css样式表中，同一个CSS样式你写了两次，后面的会覆盖前面的</li><li>样式指向同一元素，权重规则生效，权重大的被应用</li><li>样式指向同一元素，权重规则生效，权重相同时，就近原则生效，后面定义的被应用</li><li>样式不指向同一元素时，权重规则失效，就近原则生效，离目标元素最近的样式被应用</li></ol><h2 id="_2-什么是权重" tabindex="-1"><a class="header-anchor" href="#_2-什么是权重" aria-hidden="true">#</a> 2. 什么是权重</h2><ol><li>权重决定了你css规则怎样被浏览器解析直到生效。“css权重关系到你的css规则是怎样显示的”。</li><li>当很多的样式被应用到某一个元素上时，权重是一个决定哪种样式生效，或者是优先级的过程。</li><li>每个选择器都有自己的权重。你的每条css规则，都包含一个权重级别。 这个级别是由不同的选择器加权计算的，通过权重，不同的样式最终会作用到你的网页中 。</li><li>如果两个选择器同时作用到一个元素上，权重高者生效。</li></ol><p><strong>权重记忆口诀</strong>：<em>从0开始，一个行内样式+1000，一个id选择器+100，一个属性选择器、class或者伪类+10，一个元素选择器，或者伪元素+1，通配符+0。</em></p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201013153629997.png" alt="image-20201013153629997" tabindex="0" loading="lazy"><figcaption>image-20201013153629997</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',8),h={href:"https://zhuanlan.zhihu.com/p/41604775",target:"_blank",rel:"noopener noreferrer"};function m(g,p){const a=l("ExternalLinkIcon");return t(),s("div",null,[d,e("p",null,[e("a",h,[r("你必须懂的css样式权重和优先级"),n(a)])])])}const f=i(c,[["render",m],["__file","css-attr-priority.html.vue"]]);export{f as default};