import{_ as n,W as a,X as s,Y as e}from"./framework-4b7e9ff4.js";const t={},o=e(`<h1 id="oracle取出-号分割的id对应中文名" tabindex="-1"><a class="header-anchor" href="#oracle取出-号分割的id对应中文名" aria-hidden="true">#</a> oracle取出，号分割的id对应中文名</h1><h2 id="_1-需求" tabindex="-1"><a class="header-anchor" href="#_1-需求" aria-hidden="true">#</a> 1. 需求</h2><p>我们部门表中存着祖籍列表，我们希望能直接查出所有祖籍部门的中文名</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220302144445229.png" alt="image-20220302144445229" tabindex="0" loading="lazy"><figcaption>image-20220302144445229</figcaption></figure><p>如：这几个部门的祖籍都是什么</p><h2 id="_2-实现" tabindex="-1"><a class="header-anchor" href="#_2-实现" aria-hidden="true">#</a> 2.实现</h2><h3 id="_2-1-达梦数据库" tabindex="-1"><a class="header-anchor" href="#_2-1-达梦数据库" aria-hidden="true">#</a> 2.1 达梦数据库</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> D<span class="token punctuation">.</span>DEPT_ID<span class="token punctuation">,</span>D<span class="token punctuation">.</span>PARENT_ID<span class="token punctuation">,</span>D<span class="token punctuation">.</span>ANCESTORS<span class="token punctuation">,</span>D<span class="token punctuation">.</span>DEPT_NAME<span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token keyword">SELECT</span> WM_CONCAT<span class="token punctuation">(</span>T<span class="token punctuation">.</span>DEPT_NAME<span class="token punctuation">)</span>
        <span class="token keyword">FROM</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> DEPT_NAME
              <span class="token keyword">FROM</span> SYS_DEPT S <span class="token keyword">START</span>
              <span class="token keyword">WITH</span> S<span class="token punctuation">.</span>DEPT_ID<span class="token operator">=</span>D<span class="token punctuation">.</span>DEPT_ID
              <span class="token keyword">CONNECT</span> <span class="token keyword">BY</span> NOCYCLE PRIOR S<span class="token punctuation">.</span>PARENT_ID <span class="token operator">=</span> S<span class="token punctuation">.</span>DEPT_ID<span class="token punctuation">)</span> T<span class="token punctuation">)</span> DEPT_URL
<span class="token keyword">from</span> SYS_DEPT <span class="token keyword">AS</span> D<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[o];function c(i,l){return a(),s("div",null,p)}const d=n(t,[["render",c],["__file","oracle-i-split.html.vue"]]);export{d as default};
