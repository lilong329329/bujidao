import{_ as s,W as e,X as t,Z as a,$ as r,a0 as p,Y as o,D as i}from"./framework-4b7e9ff4.js";const c={},l=o(`<h1 id="vue-router动态路由匹配" tabindex="-1"><a class="header-anchor" href="#vue-router动态路由匹配" aria-hidden="true">#</a> Vue Router动态路由匹配</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><blockquote><p>我们经常需要把某种模式匹配到的所有路由，<strong>全都映射到同个组件</strong></p></blockquote><p>n 个url地址，映射到通过组件</p><h2 id="_2-动态路径参数-冒号开头" tabindex="-1"><a class="header-anchor" href="#_2-动态路径参数-冒号开头" aria-hidden="true">#</a> 2. 动态路径参数（冒号开头）</h2><p>我们有一个 <code>User</code> 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 <code>vue-router</code> 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User&lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 动态路径参数 以冒号开头</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在呢，像 <code>/user/foo</code> 和 <code>/user/bar</code> 都将映射到相同的路由。</p><h3 id="_2-1-获取路径参数-route-params" tabindex="-1"><a class="header-anchor" href="#_2-1-获取路径参数-route-params" aria-hidden="true">#</a> 2.1 获取路径参数（$route.params）</h3><p>一个“路径参数”使用冒号 <code>:</code> 标记。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/user/:id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当匹配到一个路由时，参数值会被设置到 <code>this.$route.params</code>，可以在每个组件内使用。于是，我们可以更新 <code>User</code> 的模板，输出当前用户的 ID：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-获取url查询参数-route-query" tabindex="-1"><a class="header-anchor" href="#_2-2-获取url查询参数-route-query" aria-hidden="true">#</a> 2.2 获取URL查询参数($route.query)</h3><p>例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/user?id=zsz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$route.query.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-获取hash值-route-hash" tabindex="-1"><a class="header-anchor" href="#_2-3-获取hash值-route-hash" aria-hidden="true">#</a> 2.3 获取hash值（$route.hash）</h3><p>用得偏少</p><h2 id="_3-响应-监听-路由参数的变化" tabindex="-1"><a class="header-anchor" href="#_3-响应-监听-路由参数的变化" aria-hidden="true">#</a> 3. 响应（监听）路由参数的变化</h2><p>当使用路由参数时，例如从 <code>/user/foo</code> 导航到 <code>/user/bar</code>，<strong>原来的组件实例会被复用</strong>。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。</p><p><strong>不过，这也意味着组件的生命周期钩子不会再被调用！！！</strong>。</p><h3 id="_3-1-方案1-watch-监测变化" tabindex="-1"><a class="header-anchor" href="#_3-1-方案1-watch-监测变化" aria-hidden="true">#</a> 3.1 方案1：watch (监测变化）</h3><p>复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) <code>$route</code> 对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">$route</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 对路由变化作出响应...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-方案2-beforerouteupdate-导航守卫" tabindex="-1"><a class="header-anchor" href="#_3-2-方案2-beforerouteupdate-导航守卫" aria-hidden="true">#</a> 3.2 方案2：<code>beforeRouteUpdate</code> 导航守卫</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// react to route changes...</span>
    <span class="token comment">// don&#39;t forget to call next()</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-匹配任意路径" tabindex="-1"><a class="header-anchor" href="#_4-匹配任意路径" aria-hidden="true">#</a> 4. 匹配任意路径</h2><p>常规参数只会匹配被 <code>/</code> 分隔的 URL 片段中的字符。如果想匹配<strong>任意路径</strong>，我们可以使用通配符 (<code>*</code>)：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// 会匹配所有路径</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 会匹配以 \`/user-\` 开头的任意路径</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user-*&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<em>通配符</em>路由时，请确保路由的顺序是正确的，也就是说含有<em>通配符</em>的路由应该放在最后。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,33),d={href:"https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96",target:"_blank",rel:"noopener noreferrer"};function u(v,m){const n=i("ExternalLinkIcon");return e(),t("div",null,[l,a("p",null,[a("a",d,[r("Vue官方文档"),p(n)])])])}const k=s(c,[["render",u],["__file","vuerouter-dynamic-route-matching.html.vue"]]);export{k as default};
