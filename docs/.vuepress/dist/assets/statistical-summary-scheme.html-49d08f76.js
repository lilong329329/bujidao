import{_ as a,W as s,X as n,Y as e}from"./framework-4b7e9ff4.js";const t={},i=e(`<h1 id="统计汇总方案总结" tabindex="-1"><a class="header-anchor" href="#统计汇总方案总结" aria-hidden="true">#</a> 统计汇总方案总结</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1 简介</h2><p>统计方式</p><ol><li>实时统计</li><li>新建汇总表</li><li>添加进搜索引擎</li></ol><h2 id="_2-适用场景" tabindex="-1"><a class="header-anchor" href="#_2-适用场景" aria-hidden="true">#</a> 2. 适用场景</h2><h3 id="_2-1-实时统计" tabindex="-1"><a class="header-anchor" href="#_2-1-实时统计" aria-hidden="true">#</a> 2.1 实时统计</h3><p>适合那些比较逻辑简单的统计查询。如单表查询或简单的连表查询</p><h4 id="_2-1-1-示例" tabindex="-1"><a class="header-anchor" href="#_2-1-1-示例" aria-hidden="true">#</a> 2.1.1 示例</h4><ul><li><p>单表查询示例</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 统计用户数</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> userCount
<span class="token keyword">from</span> sys_user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>简单的连表查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 统计部门下的用户数</span>
<span class="token keyword">select</span> d<span class="token punctuation">.</span>dept_name<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>user_id<span class="token punctuation">)</span> userCount
<span class="token keyword">from</span> sys_dept d
<span class="token keyword">left</span> <span class="token keyword">join</span> sys_user u <span class="token keyword">on</span> d<span class="token punctuation">.</span>dept_id <span class="token operator">=</span> u<span class="token punctuation">.</span>dept_id
<span class="token keyword">group</span> <span class="token keyword">by</span> d<span class="token punctuation">.</span>dept_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-2-新建汇总表" tabindex="-1"><a class="header-anchor" href="#_2-2-新建汇总表" aria-hidden="true">#</a> 2.2 新建汇总表</h3><p>汇总表适合逻辑相对复杂的查询。</p><ul><li>数据来源可能<strong>来源于多张表</strong></li><li>这些数据可能并不能直接使用，需要对其<strong>进行一定的逻辑处理</strong>，提前将数据分析后的结构添加到记录表</li><li>数据是<strong>一对多的关系</strong>，且还需要过滤多的这一方条件</li></ul><h4 id="_2-2-1-示例" tabindex="-1"><a class="header-anchor" href="#_2-2-1-示例" aria-hidden="true">#</a> 2.2.1 示例</h4><p>不是特别好举例，比如说我们商城中需要统计使用优惠卷的人数，</p><h3 id="_2-3-添加进搜索引擎" tabindex="-1"><a class="header-anchor" href="#_2-3-添加进搜索引擎" aria-hidden="true">#</a> 2.3 添加进搜索引擎</h3><ul><li>适合那些对<strong>性能要求比较高</strong>的场景</li><li>需要模糊搜索、分词搜索的场景</li></ul>`,16),l=[i];function d(r,o){return s(),n("div",null,l)}const p=a(t,[["render",d],["__file","statistical-summary-scheme.html.vue"]]);export{p as default};
