import{_ as n,W as a,X as s,Y as e}from"./framework-4b7e9ff4.js";const t={},o=e(`<h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h2><h3 id="_1、电脑翻墙之后-出现无法pull-和-push代码问题解决" tabindex="-1"><a class="header-anchor" href="#_1、电脑翻墙之后-出现无法pull-和-push代码问题解决" aria-hidden="true">#</a> 1、电脑翻墙之后，出现无法pull 和 push代码问题解决</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>问题：
 <span class="token class-name">Failed</span> <span class="token keyword">to</span> <span class="token namespace">connect</span> <span class="token keyword">to</span> <span class="token namespace">github<span class="token punctuation">.</span>com</span> port <span class="token number">443</span><span class="token operator">:</span>connection timed out
解决：
<span class="token number">1</span>、查询是否使用代理：git config <span class="token operator">--</span>global http<span class="token punctuation">.</span>proxy 
<span class="token number">2</span>、取消全局代理：
git config <span class="token operator">--</span>global <span class="token operator">--</span>unset http<span class="token punctuation">.</span>proxy
git config <span class="token operator">--</span>global <span class="token operator">--</span>unset https<span class="token punctuation">.</span>proxy
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function c(l,i){return a(),s("div",null,p)}const d=n(t,[["render",c],["__file","科技相关.html.vue"]]);export{d as default};
