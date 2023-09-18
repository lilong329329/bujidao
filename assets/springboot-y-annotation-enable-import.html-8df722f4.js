import{_ as a,W as t,X as e,Z as n,$ as p,a0 as o,Y as c,D as i}from"./framework-4b7e9ff4.js";const l={},u=c(`<h1 id="springboot-自动配置之-enable-与-import注解" tabindex="-1"><a class="header-anchor" href="#springboot-自动配置之-enable-与-import注解" aria-hidden="true">#</a> SpringBoot 自动配置之@Enable*与@Import注解</h1><p>SpringBoot 的自动配置非常强大，我们经常使用的<code>@Enable*</code>注解来开启对某方面的支持，那么<code>@Enable*</code> 注解的原理是什么？</p><h2 id="_1-enable-注解与-import-注解之间的关系" tabindex="-1"><a class="header-anchor" href="#_1-enable-注解与-import-注解之间的关系" aria-hidden="true">#</a> 1. @Enable* 注解与 @Import 注解之间的关系</h2><p>@Enable*举例</p><ul><li>@EnableScheduling 开启计划任务的支持</li><li>@EnableAsync 开启异步方法的支持</li></ul><p>我们观察这些@Enable<em>源码可以看出，所有@Enable</em> 注解都是有@Import的组合注解，@Enable* 自助开启的实现其实就是导入例如一些自动配置的bean</p><p><strong>@Import 注解的最主要功能就是导入额外的配置信息</strong></p><h2 id="_2-import注解的用法" tabindex="-1"><a class="header-anchor" href="#_2-import注解的用法" aria-hidden="true">#</a> 2. @Import注解的用法</h2><h3 id="_2-1-方式一-直接导入配置类-configuration-类" tabindex="-1"><a class="header-anchor" href="#_2-1-方式一-直接导入配置类-configuration-类" aria-hidden="true">#</a> 2.1 方式一：直接导入配置类（@Configuration 类）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">SchedulingConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableScheduling</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到EnableScheduling 注解直接导入配置类 SchedulingConfiguration，这个类注解了@Configuration，且注册了一个scheduledAnnotationProcessor的Bean，SchedulingConfiguration的源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Role</span><span class="token punctuation">(</span><span class="token class-name">BeanDefinition</span><span class="token punctuation">.</span><span class="token constant">ROLE_INFRASTRUCTURE</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SchedulingConfiguration</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token class-name">TaskManagementConfigUtils</span><span class="token punctuation">.</span><span class="token constant">SCHEDULED_ANNOTATION_PROCESSOR_BEAN_NAME</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@Role</span><span class="token punctuation">(</span><span class="token class-name">BeanDefinition</span><span class="token punctuation">.</span><span class="token constant">ROLE_INFRASTRUCTURE</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">ScheduledAnnotationBeanPostProcessor</span> <span class="token function">scheduledAnnotationProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ScheduledAnnotationBeanPostProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-方式2-依据条件选择配置类-实现-importselector-接口" tabindex="-1"><a class="header-anchor" href="#_2-2-方式2-依据条件选择配置类-实现-importselector-接口" aria-hidden="true">#</a> 2.2 方式2：依据条件选择配置类（实现 ImportSelector 接口）</h3><p>如果并不确定引入哪个配置类，需要根据@Import注解所标识的类或者另一个注解（通常是注解）里的定义信息选择配置类的话，用这种方式。</p><p>ImportSelector接口只有一个方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">selectImports</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>AnnotationMetadata：用来获得当前配置类上的注解</p><p>例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">AsyncConfigurationSelector</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableAsync</span> <span class="token punctuation">{</span>

	<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Annotation</span><span class="token punctuation">&gt;</span></span> <span class="token function">annotation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Annotation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
	
	<span class="token keyword">boolean</span> <span class="token function">proxyTargetClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token class-name">AdviceMode</span> <span class="token function">mode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">AdviceMode</span><span class="token punctuation">.</span><span class="token constant">PROXY</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Ordered</span><span class="token punctuation">.</span><span class="token constant">LOWEST_PRECEDENCE</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AsyncConfigurationSelector继承AdviceModeImportSelector，AdviceModeImportSelector类实现ImportSelector接口 根据AdviceMode的不同来选择生明不同的Bean</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncConfigurationSelector</span> <span class="token keyword">extends</span> <span class="token class-name">AdviceModeImportSelector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">EnableAsync</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">ASYNC_EXECUTION_ASPECT_CONFIGURATION_CLASS_NAME</span> <span class="token operator">=</span>
			<span class="token string">&quot;org.springframework.scheduling.aspectj.AspectJAsyncConfiguration&quot;</span><span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">selectImports</span><span class="token punctuation">(</span><span class="token class-name">AdviceMode</span> adviceMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">switch</span> <span class="token punctuation">(</span>adviceMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token constant">PROXY</span><span class="token operator">:</span>
				<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token class-name">ProxyAsyncConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
			<span class="token keyword">case</span> <span class="token constant">ASPECTJ</span><span class="token operator">:</span>
				<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token constant">ASYNC_EXECUTION_ASPECT_CONFIGURATION_CLASS_NAME</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
			<span class="token keyword">default</span><span class="token operator">:</span>
				<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-方式3-动态注册bean-实现-importbeandefinitionregistrar-接口" tabindex="-1"><a class="header-anchor" href="#_2-3-方式3-动态注册bean-实现-importbeandefinitionregistrar-接口" aria-hidden="true">#</a> 2.3 方式3：动态注册Bean（实现 ImportBeanDefinitionRegistrar 接口）</h3><p>一般只要用户确切知道哪些Bean需要放入容器的话，自己可以通过spring 提供的注解来标识就可以了，比如@Component,@Service,@Repository,@Bean等。 如果是不确定的类，或者不是spring专用的，所以并不想用spring的注解进行侵入式标识，那么就可以通过@Import注解，实现ImportBeanDefinitionRegistrar接口来动态注册Bean。 比如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">AspectJAutoProxyRegistrar</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableAspectJAutoProxy</span> <span class="token punctuation">{</span>

	<span class="token keyword">boolean</span> <span class="token function">proxyTargetClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	
	<span class="token keyword">boolean</span> <span class="token function">exposeProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AspectJAutoProxyRegistrar实现了ImportBeanDefinitionRegistrar接口，ImportBeanDefinitionRegistrar的作用是在运行时自动添加Bean到已有的配置类，通过重写方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerBeanDefinitions</span><span class="token punctuation">(</span>
			<span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionRegistry</span> registry<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AnnotationMetadata 参数用来获得当前配置类上的注解</li><li>BeanDefinitionRegistry 参数用来注册Bean</li></ul><p>源码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerBeanDefinitions</span><span class="token punctuation">(</span>
		<span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token class-name">AopConfigUtils</span><span class="token punctuation">.</span><span class="token function">registerAspectJAnnotationAutoProxyCreatorIfNecessary</span><span class="token punctuation">(</span>registry<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token class-name">AnnotationAttributes</span> enableAspectJAutoProxy <span class="token operator">=</span>
			<span class="token class-name">AnnotationConfigUtils</span><span class="token punctuation">.</span><span class="token function">attributesFor</span><span class="token punctuation">(</span>importingClassMetadata<span class="token punctuation">,</span> <span class="token class-name">EnableAspectJAutoProxy</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>enableAspectJAutoProxy <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>enableAspectJAutoProxy<span class="token punctuation">.</span><span class="token function">getBoolean</span><span class="token punctuation">(</span><span class="token string">&quot;proxyTargetClass&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">AopConfigUtils</span><span class="token punctuation">.</span><span class="token function">forceAutoProxyCreatorToUseClassProxying</span><span class="token punctuation">(</span>registry<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>enableAspectJAutoProxy<span class="token punctuation">.</span><span class="token function">getBoolean</span><span class="token punctuation">(</span><span class="token string">&quot;exposeProxy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">AopConfigUtils</span><span class="token punctuation">.</span><span class="token function">forceAutoProxyCreatorToExposeProxy</span><span class="token punctuation">(</span>registry<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,30),r={href:"https://juejin.im/post/5c761c096fb9a049b41d2299",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=i("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[p("Spring Boot 自动配置之@Enable* 与@Import注解"),o(s)])])])}const b=a(l,[["render",d],["__file","springboot-y-annotation-enable-import.html.vue"]]);export{b as default};
