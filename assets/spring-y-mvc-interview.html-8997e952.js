import{_ as n,W as e,X as a,Y as s}from"./framework-4b7e9ff4.js";const t={},l=s(`<h1 id="springmvc常见知识点" tabindex="-1"><a class="header-anchor" href="#springmvc常见知识点" aria-hidden="true">#</a> SpringMVC常见知识点</h1><h2 id="_1-spring-mvc-简介" tabindex="-1"><a class="header-anchor" href="#_1-spring-mvc-简介" aria-hidden="true">#</a> 1. Spring MVC 简介</h2><p>Spring MVC 提供”模型-视图-控制器“（Model - View - Controller） 架构和随时可用的组件，用于开发灵活且松散耦合的Web应用程序。</p><p>MVC 模式有助于分离应用程序的不同方面，如输入逻辑，业务逻辑和UI逻辑，同时在所有这些元素之间提供松散耦合</p><h2 id="_2-介绍下-spring-mvc-的核心组件" tabindex="-1"><a class="header-anchor" href="#_2-介绍下-spring-mvc-的核心组件" aria-hidden="true">#</a> 2. 介绍下 Spring MVC 的核心组件？</h2><p>Spring MVC 一共有九大核心组件，分别是：</p><ul><li>MultipartResolver</li><li>LocaleResolver</li><li>ThemeResolver</li><li><strong>HandlerMapping</strong></li><li><strong>HandlerAdapter</strong></li><li><strong>HandlerExceptionResolver</strong></li><li>RequestToViewNameTransalator</li><li>ViewResolver</li><li>FlashMapManager</li></ul><p>虽然很多，但是最关键的只有HandlerMapping+HandlerAdapter+HandlerExceptionResolver</p><h2 id="_3-描述一下-dispatcherservlet的工作流程" tabindex="-1"><a class="header-anchor" href="#_3-描述一下-dispatcherservlet的工作流程" aria-hidden="true">#</a> 3. 描述一下 DispatcherServlet的工作流程？</h2><p>DiapatcherServlet 的工作流程可以用一副图来说明</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191101235522013.png" alt="image-20191101235522013" tabindex="0" loading="lazy"><figcaption>image-20191101235522013</figcaption></figure><ol><li><p>发送请求</p><p>用户向服务器发送HTTP请求，请求被 Spring MVC 的调度器 DispatherServlet 捕获</p></li><li><p>映射处理器（HandlerMapping）</p><p><strong>DispatcherServlet 根据请求 URL,调用 HandlerMapping 获取该 Handler 配置的所有相关的对象</strong>（包括 Handler 对象以及 Handler 对象对应的拦截器），<strong>最后以 HandlerExecutionChain 对象的形式返回。</strong></p><ul><li>既 HandlerExecutionChain 中，包含对应的Handler 对象和拦截器门</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HandlerExecutionChain</span> <span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>处理器适配（HandlerAdapter）</p><p><strong>DispatcherServlet 根据获得的 Handler，选择一个合适的HandlerAdapter</strong>（注：如果成功获得HandlerAdapter后，此时将开始执行拦截器的#preHandler(...)方法）</p><p>提取请求 Request 中的模型数据，填充 Handler 入参，开始执行Handler（Controller）。在填充Handler的入参过程中，根据你的配置，Spring 将帮你做一些额外的操作</p><ul><li>HttpMessageConverter：会将请求消息（如 JSON,XML 等数据）转换成一个对象</li><li>数据转换：对请求消息进行数据转换。如String 转换成Integer，Double等</li><li>数据格式化：对请求消息进行数据格式化。如将字符串转换成格式化数字或格式化日期等</li><li>数据验证： 验证数据的有效性（长度、格式等），验证结果存储到 BindingResult 或 Error 中。</li></ul><p><strong>Handler(Controller) 执行完成后，向 DispatcherServlet 返回一个 ModelAndView 对象</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ModelAndView</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>调用处理器方法</p></li><li><p>解析视图</p><p>根据返回的ModelAndView，选择一个合适的ViewResolver（必须是已经注册到Spring容器中的ViewResolver），解析出View 对象，然后返回给DispatcherServlet</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">View</span> <span class="token function">resolveViewName</span><span class="token punctuation">(</span><span class="token class-name">String</span> viewName<span class="token punctuation">,</span> <span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>7渲染视图+响应请求</p><p>ViewResolver 结合Model 和View，来渲染视图，并写回给用户（浏览器）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">void</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> model<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_3-1-前后端分离的spring-mvc-流程" tabindex="-1"><a class="header-anchor" href="#_3-1-前后端分离的spring-mvc-流程" aria-hidden="true">#</a> 3.1 前后端分离的Spring MVC 流程</h3><p>对于前后端分离的架构，Spring MVC 只负责 Model 和 Controller 两块，而将View 移交给了前端，所以，上图中的步骤5，6 两步，就不需要了</p><p><strong>那么会变成什么样？</strong></p><p>步骤3中，如果Handler（Controller）执行完后，如果判断方法有@ResponseBody 注解，则直接将结果写回给浏览器</p><p><strong>返回的是Java POJO 对象，HTTP是不支持的，怎么办？</strong></p><p>需要将结果使用HttpMessageConverter 进行转换后，才能返回。例如说，大家锁熟悉的 FastJsonHttpMessage，将POJO 转换成JSON 字符串返回</p><h2 id="_4-controller-注解有什么用" tabindex="-1"><a class="header-anchor" href="#_4-controller-注解有什么用" aria-hidden="true">#</a> 4. @Controller 注解有什么用？</h2><p>@Controller 注解，他将一个类标记为Spring MVC 控制器Controller</p><h2 id="_5-restcontroller-和-controller-有什么区别" tabindex="-1"><a class="header-anchor" href="#_5-restcontroller-和-controller-有什么区别" aria-hidden="true">#</a> 5. RestController 和 @Controller 有什么区别？</h2><p>@RestController 注解，在@Controller 基础上，增加了@ResponseBody 注解，更加适合目前前后端分离的架构下，提供Restful API，返回例如JSON 数据格式。当然，<strong>返回什么样的格式</strong>，根据<strong>客户端的”Accept“请求头来决定</strong></p><h2 id="_6-reuqestmapping-注解有什么用" tabindex="-1"><a class="header-anchor" href="#_6-reuqestmapping-注解有什么用" aria-hidden="true">#</a> 6. @ReuqestMapping 注解有什么用？</h2><p>@RequestMapping 注解，用于将特定 HTTP 请求方法映射到将处理相应请求的控制器中的特定类/方法。此注解可应用于两个级别：</p><ul><li>类级别：映射请求的URL</li><li>方法级别：映射 URL 以及HTTP 请求方法</li></ul><h2 id="_7-requestmapping-和-getmapping-注解的不同之处在哪里" tabindex="-1"><a class="header-anchor" href="#_7-requestmapping-和-getmapping-注解的不同之处在哪里" aria-hidden="true">#</a> 7. @RequestMapping 和@GetMapping 注解的不同之处在哪里</h2><ul><li><p>@RequestMapping 可注解在类和方法上，@GetMapping 仅可注册在方法上</p></li><li><p>@RequestMapping 可进行 GET、POST、PUT、DELETE 等请求方法;</p><p>@GetMapping 是 @RequestMapping 的GET 请求与方法的特例，目的是为了提高清晰度</p></li></ul><h2 id="_8-返回json-格式使用什么注解" tabindex="-1"><a class="header-anchor" href="#_8-返回json-格式使用什么注解" aria-hidden="true">#</a> 8. 返回JSON 格式使用什么注解？</h2><p>可以使用@Response 注解，或者使用包含@ResponseBody 注解的@RestController 注解。</p><p>当然，还是需要配合相应的支持JSON格式化的HttpMessageConverter 实现类。例如，Spring MVC 默认使用MappingJackson2HttpMessageConverter</p><h2 id="_9-介绍一下webapplicationcontext" tabindex="-1"><a class="header-anchor" href="#_9-介绍一下webapplicationcontext" aria-hidden="true">#</a> 9. 介绍一下WebApplicationContext？</h2><p>WebApplicationContext 是实现ApplicationContext 接口的子类，专门为Web应用准备的</p><ul><li>他允许从相对于Web 根目录的路径中<strong>加载配置文件，完成初始化Spring MVC 组件的工作</strong></li><li>从WebApplicationContext中，可以获取ServletContext 引用，整个Web 应用上下文对象将作为属性放置在SerletContext中，一遍Web 应用环境可以访问Spring 上下文</li></ul><h2 id="_10-spirng-mvc-的异常处理" tabindex="-1"><a class="header-anchor" href="#_10-spirng-mvc-的异常处理" aria-hidden="true">#</a> 10.Spirng MVC 的异常处理？</h2><p>Spring MVC 提供了异常解析器 HandlerExceptionResolver 接口，将处理器（handler）执行时发生的异常，解析（转换）成对应的ModelAndView 结果，代码如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">HandlerExceptionResolver</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 解析异常，转换成对应的 ModelAndView 结果
     */</span>
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token class-name">ModelAndView</span> <span class="token function">resolveException</span><span class="token punctuation">(</span>
            <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-spring-mvc-有什么优点" tabindex="-1"><a class="header-anchor" href="#_11-spring-mvc-有什么优点" aria-hidden="true">#</a> 11. Spring MVC 有什么优点？</h2><ol><li>使用非常<strong>方便</strong>，无论是添加HTTP请求方法映射的方法，还是不同数据格式的响应</li><li>提供<strong>拦截器机制</strong>，可以方便的对请求进行拦截处理</li><li>提供<strong>异常机制</strong>，可以方便的对异常做统一的处理</li><li>可以任意使用各种<strong>视图</strong>技术，而不仅仅局限于JSP，例如Freemarker、Thymeleaf等等</li><li>不依赖于Servlet API(目标虽是如此，但是在实现的时候确实是依赖于 Servlet 的，当然仅仅依赖 Servlet ，而不依赖 Filter、Listener )。</li></ol><h2 id="_12-spring-mvc怎样设定重定向和转发" tabindex="-1"><a class="header-anchor" href="#_12-spring-mvc怎样设定重定向和转发" aria-hidden="true">#</a> 12. Spring MVC怎样设定重定向和转发？</h2><ul><li>结果转发：在返回值的前面加 <code>&quot;forward:/&quot;</code> 。</li><li>重定向：在返回值的前面加上 <code>&quot;redirect:/&quot;</code> 。</li></ul><p>当然，目前前后端分离之后，我们作为后端开发，已经很少有机会用上这个功能了。</p><h2 id="_13-spring-mvc-的-controller-是不是单例" tabindex="-1"><a class="header-anchor" href="#_13-spring-mvc-的-controller-是不是单例" aria-hidden="true">#</a> 13. Spring MVC 的 Controller 是不是单例？</h2><p>绝大多数情况下,Controller <strong>是单例</strong>。</p><p>那么，Controller 里一般<strong>不建议存在共享的变量</strong></p>`,44),p=[l];function i(r,o){return e(),a("div",null,p)}const d=n(t,[["render",i],["__file","spring-y-mvc-interview.html.vue"]]);export{d as default};
