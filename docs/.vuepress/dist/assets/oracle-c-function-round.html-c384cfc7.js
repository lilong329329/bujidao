import{_ as n,W as s,X as a,Y as p}from"./framework-4b7e9ff4.js";const t={},o=p(`<h1 id="oracle中四舍五入round函数的使用" tabindex="-1"><a class="header-anchor" href="#oracle中四舍五入round函数的使用" aria-hidden="true">#</a> Oracle中四舍五入Round函数的使用</h1><h1 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h1><p>Round 函数</p><p>​ 语法：ROUND(number，num_digits)</p><p>其中Number 是需要进行四舍五入的数字，Num_digits为指定的位置，按此位数进行四舍五入。</p><ul><li>如何num_digits 大于0，则四舍五入到指定的小数位</li><li>如果num_digits等于0，则四舍五入到最接近的整数</li><li>如果num_digits小于0，则在小数点左侧进行四舍五入</li></ul><h2 id="_2-案例" tabindex="-1"><a class="header-anchor" href="#_2-案例" aria-hidden="true">#</a> 2. 案例</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span>
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> r0 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> r1 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> r2 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> r3 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> r4 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> r5 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> r_1 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> r_2 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span> r_3 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span> r_4 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span> r_5 
 <span class="token keyword">from</span>  hd_agent_voice_seq a 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><p>SUM(A.LONG_TIME)/3 R0 R1 R2 R3 R4 R5 R_1 R_2 R_3 R_4 R_5 4001.33333333333 4001 4001.3 4001.33 4001.333 4001.3333 4001.33333 4000 4000 4000 0 0</p>`,10),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(t,[["render",e],["__file","oracle-c-function-round.html.vue"]]);export{k as default};
