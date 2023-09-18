import{_ as s,W as e,X as t,Z as n,a0 as o,Y as i,D as p}from"./framework-4b7e9ff4.js";const c={},l=i(`<h1 id="spring进阶-spring-ioc实现原理详解之ioc体系结构设计" tabindex="-1"><a class="header-anchor" href="#spring进阶-spring-ioc实现原理详解之ioc体系结构设计" aria-hidden="true">#</a> Spring进阶- Spring IOC实现原理详解之IOC体系结构设计</h1><blockquote><p>在对IoC有了初步的认知后，我们开始对IOC的实现原理进行深入理解。本文将帮助你站在设计者的角度去看IOC最顶层的结构设计。</p></blockquote><h2 id="_1-站在设计者的角度考虑设计ioc容器" tabindex="-1"><a class="header-anchor" href="#_1-站在设计者的角度考虑设计ioc容器" aria-hidden="true">#</a> 1. 站在设计者的角度考虑设计IOC容器</h2><blockquote><p>如果让你来设计一个IoC容器，你会怎么设计？我们初步的通过这个问题，来帮助我们更好的理解IOC的设计。</p></blockquote><p>在设计时，首先需要考虑的是IOC容器的功能（输入和输出), 承接前面的文章，我们初步的画出IOC容器的整体功能。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220711211622924.png" alt="image-20220711211622924" tabindex="0" loading="lazy"><figcaption>image-20220711211622924</figcaption></figure><p>在此基础上，我们初步的去思考，如果作为一个IOC容器的设计者，主体上应该包含哪几个部分：</p><ul><li>加载Bean的配置（比如xml配置） <ul><li>比如不同类型资源的加载，解析成生成统一Bean的定义</li></ul></li><li>根据Bean的定义加载生成Bean的实例，并放置在Bean容器中 <ul><li>比如Bean的依赖注入，Bean的嵌套，Bean存放（缓存）等</li></ul></li><li>除了基础Bean外，还有常规针对企业级业务的特别Bean <ul><li>比如国际化Message，事件Event等生成特殊的类结构去支撑</li></ul></li><li>对容器中的Bean提供统一的管理和调用 <ul><li>比如用工厂模式管理，提供方法根据名字/类的类型等从容器中获取Bean</li></ul></li><li>...</li></ul><blockquote><p>这种思考的过程才是建设性的，知识体系的构建才是高效的</p></blockquote><h2 id="_2-spring-ioc的体系结构设计" tabindex="-1"><a class="header-anchor" href="#_2-spring-ioc的体系结构设计" aria-hidden="true">#</a> 2. Spring IoC的体系结构设计</h2><blockquote><p>那么我们来看下Spring设计者是如何设计IoC并解决这些问题的。</p></blockquote><h3 id="_2-1-beanfactory和beanregistry-ioc容器功能规范和bean的注册" tabindex="-1"><a class="header-anchor" href="#_2-1-beanfactory和beanregistry-ioc容器功能规范和bean的注册" aria-hidden="true">#</a> 2.1 BeanFactory和BeanRegistry：IOC容器功能规范和Bean的注册</h3><blockquote><p>Spring Bean的创建是典型的工厂模式，这一系列的Bean工厂，也即IOC容器为开发者管理对象间的依赖关系提供了很多便利和基础服务，在Spring中有许多的IOC容器的实现供用户选择和使用，这是IOC容器的基础；在顶层的结构设计主要围绕着BeanFactory和xxxRegistry进行：</p><ul><li><strong>BeanFactory： 工厂模式定义了IOC容器的基本功能规范</strong></li><li><strong>BeanRegistry： 向IOC容器手工注册 BeanDefinition 对象的方法</strong></li></ul></blockquote><p>其相互关系如下：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220711212057979.png" alt="image-20220711212057979" tabindex="0" loading="lazy"><figcaption>image-20220711212057979</figcaption></figure><p>我们再通过几个问题来辅助理解。</p><h4 id="_2-1-1-beanfactory定义了ioc-容器基本功能规范" tabindex="-1"><a class="header-anchor" href="#_2-1-1-beanfactory定义了ioc-容器基本功能规范" aria-hidden="true">#</a> 2.1.1 BeanFactory定义了IOC 容器基本功能规范？</h4><p><strong>BeanFactory作为最顶层的一个接口类，它定义了IOC容器的基本功能规范</strong>，BeanFactory 有三个子类：ListableBeanFactory、HierarchicalBeanFactory 和AutowireCapableBeanFactory。我们看下BeanFactory接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BeanFactory</span> <span class="token punctuation">{</span>    
      
    <span class="token comment">//用于取消引用实例并将其与FactoryBean创建的bean区分开来。例如，如果命名的bean是FactoryBean，则获取将返回Factory，而不是Factory返回的实例。</span>
    <span class="token class-name">String</span> <span class="token constant">FACTORY_BEAN_PREFIX</span> <span class="token operator">=</span> <span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">;</span> 
        
    <span class="token comment">//根据bean的名字和Class类型等来得到bean实例    </span>
    <span class="token class-name">Object</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span><span class="token punctuation">;</span>    
    <span class="token class-name">Object</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Class</span> requiredType<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span><span class="token punctuation">;</span>    
    <span class="token class-name">Object</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span><span class="token punctuation">;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> requiredType<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span><span class="token punctuation">;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> requiredType<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span><span class="token punctuation">;</span>

    <span class="token comment">//返回指定bean的Provider</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">ObjectProvider</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getBeanProvider</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> requiredType<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">ObjectProvider</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getBeanProvider</span><span class="token punctuation">(</span><span class="token class-name">ResolvableType</span> requiredType<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//检查工厂中是否包含给定name的bean，或者外部注册的bean</span>
    <span class="token keyword">boolean</span> <span class="token function">containsBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//检查所给定name的bean是否为单例/原型</span>
    <span class="token keyword">boolean</span> <span class="token function">isSingleton</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">isPrototype</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span><span class="token punctuation">;</span>

    <span class="token comment">//判断所给name的类型与type是否匹配</span>
    <span class="token keyword">boolean</span> <span class="token function">isTypeMatch</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">ResolvableType</span> typeToMatch<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">isTypeMatch</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> typeToMatch<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span><span class="token punctuation">;</span>

    <span class="token comment">//获取给定name的bean的类型</span>
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span><span class="token punctuation">;</span>

    <span class="token comment">//返回给定name的bean的别名</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getAliases</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
     
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-beanfactory为何要定义这么多层次的接口-定义了哪些接口" tabindex="-1"><a class="header-anchor" href="#_2-1-2-beanfactory为何要定义这么多层次的接口-定义了哪些接口" aria-hidden="true">#</a> 2.1.2 BeanFactory为何要定义这么多层次的接口？定义了哪些接口？</h4><p>主要是为了<strong>区分在 Spring 内部在操作过程中对象的传递和转化过程中，对对象的数据访问所做的限制</strong>。</p><p>有哪些接口呢？</p><ul><li><strong>ListableBeanFactory</strong>：该接口定义了访问容器中 Bean 基本信息的若干方法，如查看Bean 的个数、获取某一类型 Bean 的配置名、查看容器中是否包括某一 Bean 等方法；</li><li><strong>HierarchicalBeanFactory</strong>：父子级联 IoC 容器的接口，子容器可以通过接口方法访问父容器； 通过 HierarchicalBeanFactory 接口， Spring 的 IoC 容器可以建立父子层级关联的容器体系，子容器可以访问父容器中的 Bean，但父容器不能访问子容器的 Bean。Spring 使用父子容器实现了很多功能，比如在 Spring MVC 中，展现层 Bean 位于一个子容器中，而业务层和持久层的 Bean 位于父容器中。这样，展现层 Bean 就可以引用业务层和持久层的 Bean，而业务层和持久层的 Bean 则看不到展现层的 Bean。</li><li><strong>ConfigurableBeanFactory</strong>：是一个重要的接口，增强了 IoC 容器的可定制性，它定义了设置类装载器、属性编辑器、容器初始化后置处理器等方法；</li><li><strong>ConfigurableListableBeanFactory</strong>: ListableBeanFactory 和 ConfigurableBeanFactory的融合；</li><li><strong>AutowireCapableBeanFactory</strong>：定义了将容器中的 Bean 按某种规则（如按名字匹配、按类型匹配等）进行自动装配的方法；</li></ul><h4 id="_2-1-3-如何将bean注册到beanfactory中-beanregistry" tabindex="-1"><a class="header-anchor" href="#_2-1-3-如何将bean注册到beanfactory中-beanregistry" aria-hidden="true">#</a> 2.1.3 如何将Bean注册到BeanFactory中？BeanRegistry</h4><p>Spring 配置文件中每一个<code>&lt;bean&gt;</code>节点元素在 Spring 容器里都通过一个 BeanDefinition 对象表示，它描述了 Bean 的配置信息。而 BeanDefinitionRegistry 接口提供了向容器手工注册 BeanDefinition 对象的方法。</p><h3 id="_2-2-beandefinition-各种bean对象及其相互的关系" tabindex="-1"><a class="header-anchor" href="#_2-2-beandefinition-各种bean对象及其相互的关系" aria-hidden="true">#</a> 2.2 BeanDefinition：各种Bean对象及其相互的关系</h3><blockquote><p>Bean对象存在依赖嵌套等关系，所以设计者设计了BeanDefinition，它用来对Bean对象及关系定义；我们在理解时只需要抓住如下三个要点：</p><ul><li><strong>BeanDefinition 定义了各种Bean对象及其相互的关系</strong></li><li><strong>BeanDefinitionReader 这是BeanDefinition的解析器</strong></li><li><strong>BeanDefinitionHolder 这是BeanDefination的包装类，用来存储BeanDefinition，name以及aliases等。</strong></li></ul></blockquote><ul><li><strong>BeanDefinition</strong></li></ul><p>SpringIOC容器管理了我们定义的各种Bean对象及其相互的关系，Bean对象在Spring实现中是以BeanDefinition来描述的，其继承体系如下</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220711212932428.png" alt="image-20220711212932428" tabindex="0" loading="lazy"><figcaption>image-20220711212932428</figcaption></figure><ul><li><strong>BeanDefinitionReader</strong></li></ul><p>Bean 的解析过程非常复杂，功能被分的很细，因为这里需要被扩展的地方很多，必须保证有足够的灵活性，以应对可能的变化。Bean 的解析主要就是对 Spring 配置文件的解析。这个解析过程主要通过下图中的类完成</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220711213017946.png" alt="image-20220711213017946" tabindex="0" loading="lazy"><figcaption>image-20220711213017946</figcaption></figure><ul><li><strong>BeanDefinitionHolder</strong></li></ul><p>BeanDefinitionHolder 这是BeanDefination的包装类，用来存储BeanDefinition，name以及aliases等</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220711213038289.png" alt="image-20220711213038289" tabindex="0" loading="lazy"><figcaption>image-20220711213038289</figcaption></figure><h3 id="_2-3-applicationcontext-ioc接口设计和实现" tabindex="-1"><a class="header-anchor" href="#_2-3-applicationcontext-ioc接口设计和实现" aria-hidden="true">#</a> 2.3 ApplicationContext：IOC接口设计和实现</h3><blockquote><p>IoC容器的接口类是ApplicationContext，很显然它必然继承BeanFactory对Bean规范（最基本的ioc容器的实现）进行定义。而ApplicationContext表示的是应用的上下文，除了对Bean的管理外，还至少应该包含了</p><ul><li><strong>访问资源</strong>： 对不同方式的Bean配置（即资源）进行加载。(实现ResourcePatternResolver接口)</li><li><strong>国际化</strong>: 支持信息源，可以实现国际化。（实现MessageSource接口）</li><li><strong>应用事件</strong>: 支持应用事件。(实现ApplicationEventPublisher接口)</li></ul></blockquote><h4 id="_2-3-1-applicationcontext接口的设计" tabindex="-1"><a class="header-anchor" href="#_2-3-1-applicationcontext接口的设计" aria-hidden="true">#</a> 2.3.1 ApplicationContext接口的设计</h4><p>我们来看下ApplicationContext整体结构</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220711213226561.png" alt="image-20220711213226561" tabindex="0" loading="lazy"><figcaption>image-20220711213226561</figcaption></figure><ul><li><strong>HierarchicalBeanFactory 和 ListableBeanFactory</strong>： ApplicationContext 继承了 HierarchicalBeanFactory 和 ListableBeanFactory 接口，在此基础上，还通过多个其他的接口扩展了 BeanFactory 的功能：</li><li><strong>ApplicationEventPublisher</strong>：让容器拥有发布应用上下文事件的功能，包括容器启动事件、关闭事件等。实现了 ApplicationListener 事件监听接口的 Bean 可以接收到容器事件 ， 并对事件进行响应处理 。 在 ApplicationContext 抽象实现类AbstractApplicationContext 中，我们可以发现存在一个 ApplicationEventMulticaster，它负责保存所有监听器，以便在容器产生上下文事件时通知这些事件监听者。</li><li><strong>MessageSource</strong>：为应用提供 i18n 国际化消息访问的功能；</li><li><strong>ResourcePatternResolver</strong> ： 所 有 ApplicationContext 实现类都实现了类似于PathMatchingResourcePatternResolver 的功能，可以通过带前缀的 Ant 风格的资源文件路径装载 Spring 的配置文件。</li><li><strong>LifeCycle</strong>：该接口是 Spring 2.0 加入的，该接口提供了 start()和 stop()两个方法，主要用于控制异步处理过程。在具体使用时，该接口同时被 ApplicationContext 实现及具体 Bean 实现， ApplicationContext 会将 start/stop 的信息传递给容器中所有实现了该接口的 Bean，以达到管理和控制 JMX、任务调度等目的。</li></ul><h4 id="_2-3-2-applicationcontext接口的实现" tabindex="-1"><a class="header-anchor" href="#_2-3-2-applicationcontext接口的实现" aria-hidden="true">#</a> 2.3.2 ApplicationContext接口的实现</h4><p>在考虑ApplicationContext接口的实现时，关键的点在于，不同Bean的配置方式（比如xml,groovy,annotation等）有着不同的资源加载方式，这便衍生除了众多ApplicationContext的实现类。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220711213419379.png" alt="image-20220711213419379" tabindex="0" loading="lazy"><figcaption>image-20220711213419379</figcaption></figure><p><strong>第一，从类结构设计上看， 围绕着是否需要Refresh容器衍生出两个抽象类</strong>：</p><ul><li><strong>GenericApplicationContext</strong>： 是初始化的时候就创建容器，往后的每次refresh都不会更改</li><li><strong>AbstractRefreshableApplicationContext</strong>： AbstractRefreshableApplicationContext及子类的每次refresh都是先清除已有(如果不存在就创建)的容器，然后再重新创建；AbstractRefreshableApplicationContext及子类无法做到GenericApplicationContext<strong>混合搭配从不同源头获取bean的定义信息</strong></li></ul><p><strong>第二， 从加载的源来看（比如xml,groovy,annotation等）， 衍生出众多类型的ApplicationContext, 典型比如</strong>:</p><ul><li><strong>FileSystemXmlApplicationContext</strong>： 从文件系统下的一个或多个xml配置文件中加载上下文定义，也就是说系统盘符中加载xml配置文件。</li><li><strong>ClassPathXmlApplicationContext</strong>： 从类路径下的一个或多个xml配置文件中加载上下文定义，适用于xml配置的方式。</li><li><strong>AnnotationConfigApplicationContext</strong>： 从一个或多个基于java的配置类中加载上下文定义，适用于java注解的方式。</li><li><strong>ConfigurableApplicationContext</strong>： 扩展于 ApplicationContext，它新增加了两个主要的方法： refresh()和 close()，让 ApplicationContext 具有启动、刷新和关闭应用上下文的能力。在应用上下文关闭的情况下调用 refresh()即可启动应用上下文，在已经启动的状态下，调用 refresh()则清除缓存并重新装载配置信息，而调用close()则可关闭应用上下文。这些接口方法为容器的控制管理带来了便利，但作为开发者，我们并不需要过多关心这些方法。</li></ul><p><strong>第三， 更进一步理解</strong>：</p><p><em><strong>设计者在设计时AnnotationConfigApplicationContext为什么是继承GenericApplicationContext</strong></em>？ 因为基于注解的配置，是不太会被运行时修改的，这意味着不需要进行动态Bean配置和刷新容器，所以只需要GenericApplicationContext。</p><p>而基于XML这种配置文件，这种文件是容易修改的，需要动态性刷新Bean的支持，所以XML相关的配置必然继承AbstractRefreshableApplicationContext； 且存在多种xml的加载方式（位置不同的设计），所以必然会设计出AbstractXmlApplicationContext, 其中包含对XML配置解析成BeanDefination的过程。</p><p>那么细心的你从上图可以发现AnnotationWebConfigApplicationContext却是继承了AbstractRefreshableApplicationContext而不是GenericApplicationContext， <em><strong>为什么AnnotationWebConfigApplicationContext继承自AbstractRefreshableApplicationContext呢</strong></em> ？ 因为用户可以通过ApplicationContextInitializer来设置contextInitializerClasses（context-param / init-param）， 在这种情况下用户倾向于刷新Bean的，所以设计者选择让AnnotationWebConfigApplicationContext继承了AbstractRefreshableApplicationContext。（如下是源码中Spring设计者对它的解释）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token operator">*</span> <span class="token generics"><span class="token punctuation">&lt;</span>p<span class="token punctuation">&gt;</span></span><span class="token class-name">As</span> an alternative <span class="token keyword">to</span> <span class="token namespace">setting</span> the <span class="token string">&quot;contextConfigLocation&quot;</span> parameter<span class="token punctuation">,</span> users may
 <span class="token operator">*</span> implement an <span class="token punctuation">{</span><span class="token annotation punctuation">@link</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span>ApplicationContextInitializer</span>
 <span class="token operator">*</span> <span class="token class-name">ApplicationContextInitializer</span><span class="token punctuation">}</span> and set the
 <span class="token operator">*</span> <span class="token punctuation">{</span><span class="token annotation punctuation">@linkplain</span> <span class="token class-name">ContextLoader</span>#<span class="token constant">CONTEXT_INITIALIZER_CLASSES_PARAM</span> <span class="token string">&quot;contextInitializerClasses&quot;</span><span class="token punctuation">}</span>
 <span class="token operator">*</span> context<span class="token operator">-</span>param <span class="token operator">/</span> init<span class="token operator">-</span><span class="token class-name"><span class="token namespace">param<span class="token punctuation">.</span></span> In</span> such cases<span class="token punctuation">,</span> users should favor the <span class="token punctuation">{</span><span class="token annotation punctuation">@link</span> #<span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
 <span class="token operator">*</span> and <span class="token punctuation">{</span><span class="token annotation punctuation">@link</span> #<span class="token function">scan</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">}</span> methods over the <span class="token punctuation">{</span><span class="token annotation punctuation">@link</span> #<span class="token function">setConfigLocation</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
 <span class="token operator">*</span> method<span class="token punctuation">,</span> which is primarily <span class="token keyword">for</span> use by <span class="token punctuation">{</span><span class="token annotation punctuation">@code</span> <span class="token class-name">ContextLoader</span><span class="token punctuation">}</span><span class="token punctuation">.</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们把之前的设计要点和设计结构结合起来看：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220711213732293.png" alt="image-20220711213732293" tabindex="0" loading="lazy"><figcaption>image-20220711213732293</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,57),r={href:"https://pdai.tech/md/spring/spring-x-framework-ioc-source-1.html",target:"_blank",rel:"noopener noreferrer"},u=n("strong",null,"Spring进阶- Spring IOC实现原理详解之IOC体系结构设计",-1);function k(g,d){const a=p("ExternalLinkIcon");return e(),t("div",null,[l,n("p",null,[n("a",r,[u,o(a)])])])}const b=s(c,[["render",k],["__file","spring-x-framework-ioc-source-1.html.vue"]]);export{b as default};