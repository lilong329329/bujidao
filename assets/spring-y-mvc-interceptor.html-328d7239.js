import{_ as a,W as e,X as t,Z as n,$ as p,a0 as l,Y as o,D as c}from"./framework-4b7e9ff4.js";const i={},r=o(`<h1 id="springmvc拦截器" tabindex="-1"><a class="header-anchor" href="#springmvc拦截器" aria-hidden="true">#</a> SpringMVC拦截器</h1><h2 id="_1-详细介绍下-spring-mvc-拦截器" tabindex="-1"><a class="header-anchor" href="#_1-详细介绍下-spring-mvc-拦截器" aria-hidden="true">#</a> 1. 详细介绍下 Spring MVC 拦截器？</h2><p><code>org.springframework.web.servlet.HandlerInterceptor</code> ，拦截器接口。代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// HandlerInterceptor.java</span>

<span class="token doc-comment comment">/**
 * 拦截处理器，在 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">HandlerAdapter</span><span class="token punctuation">#</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> 执行之前
 */</span>
<span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span>
		<span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 拦截处理器，在 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">HandlerAdapter</span><span class="token punctuation">#</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> 执行成功之后
 */</span>
<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span>
		<span class="token annotation punctuation">@Nullable</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 拦截处理器，在 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">HandlerAdapter</span><span class="token punctuation">#</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> 执行完之后，无论成功还是失败
 *
 * 并且，只有该处理器 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> 执行成功之后，才会被执行
 */</span>
<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span>
		<span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>一共有三个方法，分别为：</p><ul><li>preHandle（...）方法，调用Controller方法之<strong>前</strong>执行</li><li>postHandle（...）方法，调用Controller方法之<strong>后</strong>执行</li><li>afterCompletion(...)方法，处理完Controller 方法返回结果之后执行 <ul><li>例如：页面渲染后</li><li>注意：<strong>无论调用Controller方法是否成功，都会执行</strong></li></ul></li></ul></li><li><p>举个例子：</p><ul><li>当两个拦截器都实现放行操作是，执行顺序<code>preHandle[1] =&gt; preHandle[2] =&gt; postHandle[2] =&gt; postHandle[1] =&gt; afterCompletion[2] =&gt; afterCompletion[1]</code> 。</li><li>当第一个拦截器preHandle(...)返回false 的时候，也就是对其进行拦截时，第二个拦截器是完全不执行的，第一个拦截器只执行 <code>#preHandle(...)</code> 部分。</li><li>当第一个拦截器 <code>#preHandle(...)</code> 方法返回 <code>true</code> ，第二个拦截器 <code>#preHandle(...)</code> 返回 <code>false</code> ，执行顺序为 <code>preHandle[1] =&gt; preHandle[2] =&gt; afterCompletion[1]</code> 。</li></ul></li><li><p>总结：</p><ul><li>preHandle(...)方法，按拦截器定义<strong>顺序</strong>调用，若任一拦截器返回false，则Controller方法不再调用</li><li><code>#postHandle(...)</code> 和 <code>#afterCompletion(...)</code> 方法，按拦截器定义<strong>逆序</strong>调用。</li><li><code>#postHandler(...)</code> 方法，在调用 Controller 方法之<strong>后</strong>执行。</li><li><code>#afterCompletion(...)</code> 方法，只有该拦截器在 <code>#preHandle(...)</code> 方法返回 <code>true</code> 时，才能够被调用，且一定会被调用。为什么“且一定会被调用”呢？即使 <code>#afterCompletion(...)</code> 方法，按拦截器定义<strong>逆序</strong>调用时，前面的拦截器发生异常，后面的拦截器还能够调用，<strong>即无视异常</strong>。</li></ul></li></ul><h2 id="_2-spring-mvc-的拦截器可以做哪些事情" tabindex="-1"><a class="header-anchor" href="#_2-spring-mvc-的拦截器可以做哪些事情" aria-hidden="true">#</a> 2. Spring MVC 的拦截器可以做哪些事情？</h2><p>拦截器能做的事情非常非常多，例如：</p><ul><li>记录访问日志</li><li>记录异常日志</li><li>需要登录的请求操作，拦截未登录的用户</li><li>...</li></ul><h2 id="_3-spring-mvc-的拦截器和filter-过滤器有什么差别" tabindex="-1"><a class="header-anchor" href="#_3-spring-mvc-的拦截器和filter-过滤器有什么差别" aria-hidden="true">#</a> 3. Spring MVC 的拦截器和Filter 过滤器有什么差别</h2><ul><li><strong>功能相同</strong>：拦截器和Filter 都能实现相应的功能，谁都不比谁强</li><li><strong>容器不同</strong>：拦截器构建在Spring MVC 体系中，Filter 构建在 Servlet 容器之上</li><li><strong>使用便利性不同</strong>：拦截器提供了三个方法，分别在不同的时机执行；过滤器仅提供一个方法，当然也能现实拦截器的执行时机的效果，就是麻烦一些</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,11),d={href:"http://svip.iocoder.cn/Spring-MVC/Interview/",target:"_blank",rel:"noopener noreferrer"};function u(k,m){const s=c("ExternalLinkIcon");return e(),t("div",null,[r,n("p",null,[n("a",d,[p("过滤器(Filter)和拦截器(Interceptor)的区别"),l(s)])])])}const g=a(i,[["render",u],["__file","spring-y-mvc-interceptor.html.vue"]]);export{g as default};
