import{_ as s,W as t,X as e,Z as n,$ as o,a0 as c,Y as p,D as i}from"./framework-4b7e9ff4.js";const l={},u=p(`<h1 id="transactional注解的失效场景" tabindex="-1"><a class="header-anchor" href="#transactional注解的失效场景" aria-hidden="true">#</a> @Transactional注解的失效场景</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p><code>@Transactional</code> 注解相信大家并不陌生，平时开发中很常用的一个注解，它能保证方法内多个数据库操作要么同时成功、要么同时失败。使用<code>@Transactional</code>注解时需要注意许多的细节，不然你会发现<code>@Transactional</code>总是莫名其妙的就失效了。</p><h2 id="_2-事务" tabindex="-1"><a class="header-anchor" href="#_2-事务" aria-hidden="true">#</a> 2. 事务</h2><p>事务管理在系统开发中是不可缺少的一部分，<code>Spring</code>提供了很好事务管理机制，主要分为<code>编程式事务</code>和<code>声明式事务</code>两种。</p><p><strong>编程式事务</strong>：是指在代码中手动的管理事务的提交、回滚等操作，代码侵入性比较强，如下示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">//TODO something</span>
     transactionManager<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    transactionManager<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InvoiceApplyException</span><span class="token punctuation">(</span><span class="token string">&quot;异常失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明式事务</strong>：基于<code>AOP</code>面向切面的，它将具体业务与事务处理部分解耦，代码侵入性很低，所以在实际开发中声明式事务用的比较多。声明式事务也有两种实现方式，一是基于<code>TX</code>和<code>AOP</code>的xml配置文件方式，二种就是基于@Transactional注解了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Transactional</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
        <span class="token keyword">int</span> insert <span class="token operator">=</span> cityInfoDictMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>cityInfoDict<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-transactional介绍" tabindex="-1"><a class="header-anchor" href="#_3-transactional介绍" aria-hidden="true">#</a> 3. @Transactional介绍</h2><h3 id="_3-1-transactional注解可以作用于哪些地方" tabindex="-1"><a class="header-anchor" href="#_3-1-transactional注解可以作用于哪些地方" aria-hidden="true">#</a> 3.1 @Transactional注解可以作用于哪些地方？</h3><p>@Transactional 可以作用在<code>接口</code>、<code>类</code>、<code>类方法</code>。</p><ul><li><strong>作用于类</strong>：当把@Transactional 注解放在类上时，表示所有该类的<code>public</code>方法都配置相同的事务属性信息。</li><li><strong>作用于方法</strong>：当类配置了@Transactional，方法也配置了@Transactional，方法的事务会覆盖类的事务配置信息。</li><li><strong>作用于接口</strong>：不推荐这种使用方法，因为一旦标注在Interface上并且配置了Spring AOP 使用CGLib动态代理，将会导致@Transactional注解失效</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">CityInfoDictMapper</span> cityInfoDictMapper<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>rollbackFor <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">CityInfoDict</span> cityInfoDict <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CityInfoDict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cityInfoDict<span class="token punctuation">.</span><span class="token function">setParentCityId</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cityInfoDict<span class="token punctuation">.</span><span class="token function">setCityName</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cityInfoDict<span class="token punctuation">.</span><span class="token function">setCityLevel</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cityInfoDict<span class="token punctuation">.</span><span class="token function">setCityCode</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> insert <span class="token operator">=</span> cityInfoDictMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>cityInfoDict<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> insert <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-transactional注有哪些属性" tabindex="-1"><a class="header-anchor" href="#_3-2-transactional注有哪些属性" aria-hidden="true">#</a> 3.2 @Transactional注有哪些属性？</h3><h4 id="_3-2-1-propagation属性" tabindex="-1"><a class="header-anchor" href="#_3-2-1-propagation属性" aria-hidden="true">#</a> <strong>3.2.1 propagation属性</strong></h4><p><code>propagation</code> 代表事务的传播行为，默认值为 <code>Propagation.REQUIRED</code>，其他的属性信息如下：</p><ul><li><code>Propagation.REQUIRED</code>：如果当前存在事务，则加入该事务，如果当前不存在事务，则创建一个新的事务。<strong>(</strong> 也就是说如果A方法和B方法都添加了注解，在默认传播模式下，A方法内部调用B方法，会把两个方法的事务合并为一个事务 <strong>）</strong></li><li><code>Propagation.SUPPORTS</code>：如果当前存在事务，则加入该事务；如果当前不存在事务，则以非事务的方式继续运行。</li><li><code>Propagation.MANDATORY</code>：如果当前存在事务，则加入该事务；如果当前不存在事务，则抛出异常。</li><li><code>Propagation.REQUIRES_NEW</code>：重新创建一个新的事务，如果当前存在事务，暂停当前的事务。<strong>(</strong> 当类A中的 a 方法用默认<code>Propagation.REQUIRED</code>模式，类B中的 b方法加上采用 <code>Propagation.REQUIRES_NEW</code>模式，然后在 a 方法中调用 b方法操作数据库，然而 a方法抛出异常后，b方法并没有进行回滚，因为<code>Propagation.REQUIRES_NEW</code>会暂停 a方法的事务 <strong>)</strong></li><li><code>Propagation.NOT_SUPPORTED</code>：以非事务的方式运行，如果当前存在事务，暂停当前的事务。</li><li><code>Propagation.NEVER</code>：以非事务的方式运行，如果当前存在事务，则抛出异常。</li><li><code>Propagation.NESTED</code> ：和 Propagation.REQUIRED 效果一样。</li></ul><h4 id="_3-2-2isolation-属性" tabindex="-1"><a class="header-anchor" href="#_3-2-2isolation-属性" aria-hidden="true">#</a> <strong>3.2.2isolation 属性</strong></h4><p><code>isolation</code> ：事务的隔离级别，默认值为 <code>Isolation.DEFAULT</code>。</p><ul><li>Isolation.DEFAULT：使用底层数据库默认的隔离级别。</li><li>Isolation.READ_UNCOMMITTED</li><li>Isolation.READ_COMMITTED</li><li>Isolation.REPEATABLE_READ</li><li>Isolation.SERIALIZABLE</li></ul><h4 id="_3-2-3-timeout-属性" tabindex="-1"><a class="header-anchor" href="#_3-2-3-timeout-属性" aria-hidden="true">#</a> 3.2.3 <strong>timeout 属性</strong></h4><p><code>timeout</code> ：事务的超时时间，默认值为 -1。如果超过该时间限制但事务还没有完成，则自动回滚事务。</p><h4 id="_3-2-4-readonly-属性" tabindex="-1"><a class="header-anchor" href="#_3-2-4-readonly-属性" aria-hidden="true">#</a> 3.2.4 readOnly 属性**</h4><p><code>readOnly</code> ：指定事务是否为只读事务，默认值为 false；为了忽略那些不需要事务的方法，比如读取数据，可以设置 read-only 为 true。</p><h4 id="_3-2-5-rollbackfor-属性" tabindex="-1"><a class="header-anchor" href="#_3-2-5-rollbackfor-属性" aria-hidden="true">#</a> 3.2.5 rollbackFor 属性</h4><p><code>rollbackFor</code> ：用于指定能够触发事务回滚的异常类型，可以指定多个异常类型。</p><h4 id="_3-2-6-norollbackfor属性" tabindex="-1"><a class="header-anchor" href="#_3-2-6-norollbackfor属性" aria-hidden="true">#</a> 3.2.6 <strong>noRollbackFor</strong>属性**</h4><p><code>noRollbackFor</code>：抛出指定的异常类型，不回滚事务，也可以指定多个异常类型。</p><h2 id="_4-transactional失效场景" tabindex="-1"><a class="header-anchor" href="#_4-transactional失效场景" aria-hidden="true">#</a> 4. @Transactional失效场景</h2><p>接下来我们结合具体的代码分析一下哪些场景下，@Transactional 注解会失效。</p><h4 id="_4-1-transactional-应用在非-public-修饰的方法上" tabindex="-1"><a class="header-anchor" href="#_4-1-transactional-应用在非-public-修饰的方法上" aria-hidden="true">#</a> 4.1 @Transactional 应用在非 public 修饰的方法上</h4><p>如果<code>Transactional</code>注解应用在非<code>public</code> 修饰的方法上，Transactional将会失效。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211201224539139.png" alt="image-20211201224539139" tabindex="0" loading="lazy"><figcaption>image-20211201224539139</figcaption></figure><p>之所以会失效是因为在Spring AOP 代理时，如上图所示 <code>TransactionInterceptor</code> （事务拦截器）在目标方法执行前后进行拦截，<code>DynamicAdvisedInterceptor</code>（CglibAopProxy 的内部类）的 intercept 方法或 <code>JdkDynamicAopProxy</code> 的 invoke 方法会间接调用 <code>AbstractFallbackTransactionAttributeSource</code>的 <code>computeTransactionAttribute</code> 方法，获取Transactional 注解的事务配置信息。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">TransactionAttribute</span> <span class="token function">computeTransactionAttribute</span><span class="token punctuation">(</span><span class="token class-name">Method</span> method<span class="token punctuation">,</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> targetClass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Don&#39;t allow no-public methods as required.</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">allowPublicMethodsOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token class-name">Modifier</span><span class="token punctuation">.</span><span class="token function">isPublic</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getModifiers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此方法会检查目标方法的修饰符是否为 public，不是 public则不会获取@Transactional 的属性配置信息。</p><p><strong>注意：<code>protected</code>、<code>private</code> 修饰的方法上使用 <code>@Transactional</code> 注解，虽然事务无效，但不会有任何报错，这是我们很容犯错的一点。</strong></p><h4 id="_4-2-transactional-注解属性-propagation-设置错误" tabindex="-1"><a class="header-anchor" href="#_4-2-transactional-注解属性-propagation-设置错误" aria-hidden="true">#</a> 4.2 @Transactional 注解属性 propagation 设置错误</h4><p>这种失效是由于配置错误，若是错误的配置以下三种 propagation，事务将不会发生回滚。</p><p><code>TransactionDefinition.PROPAGATION_SUPPORTS</code>：如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。 <code>TransactionDefinition.PROPAGATION_NOT_SUPPORTED</code>：以非事务方式运行，如果当前存在事务，则把当前事务挂起。 <code>TransactionDefinition.PROPAGATION_NEVER</code>：以非事务方式运行，如果当前存在事务，则抛出异常。</p><h3 id="_4-3-transactional-注解属性-rollbackfor-设置错误" tabindex="-1"><a class="header-anchor" href="#_4-3-transactional-注解属性-rollbackfor-设置错误" aria-hidden="true">#</a> 4.3 @Transactional 注解属性 rollbackFor 设置错误</h3><p><code>rollbackFor</code> 可以指定能够触发事务回滚的异常类型。Spring默认抛出了未检查<code>unchecked</code>异常（继承自 <code>RuntimeException</code> 的异常）或者 <code>Error</code>才回滚事务；其他异常不会触发回滚事务。如果在事务中抛出其他类型的异常，但却期望 Spring 能够回滚事务，就需要指定 <strong>rollbackFor</strong>属性。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211201224728984.png" alt="image-20211201224728984" tabindex="0" loading="lazy"><figcaption>image-20211201224728984</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 希望自定义的异常可以进行回滚</span>
<span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation<span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span><span class="token constant">REQUIRED</span><span class="token punctuation">,</span>rollbackFor<span class="token operator">=</span> <span class="token class-name">MyException</span><span class="token punctuation">.</span><span class="token keyword">class</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>若在目标方法中抛出的异常是 <code>rollbackFor</code> 指定的异常的子类，事务同样会回滚。Spring源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">getDepth</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> exceptionClass<span class="token punctuation">,</span> <span class="token keyword">int</span> depth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>exceptionClass<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>exceptionName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Found it!</span>
            <span class="token keyword">return</span> depth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
        <span class="token comment">// If we&#39;ve gone as far as we can go and haven&#39;t found it...</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>exceptionClass <span class="token operator">==</span> <span class="token class-name">Throwable</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>exceptionClass<span class="token punctuation">.</span><span class="token function">getSuperclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-同一个类中方法调用-导致-transactional失效" tabindex="-1"><a class="header-anchor" href="#_4-4-同一个类中方法调用-导致-transactional失效" aria-hidden="true">#</a> 4.4 同一个类中方法调用，导致@Transactional失效</h4><p>开发中避免不了会对同一个类里面的方法调用，比如有一个类Test，它的一个方法A，A再调用本类的方法B（不论方法B是用public还是private修饰），但方法A没有声明注解事务，而B方法有。则外部调用方法A之后，方法B的事务是不会起作用的。这也是经常犯错误的一个地方。</p><p>那为啥会出现这种情况？其实这还是由于使用<code>Spring AOP</code>代理造成的，因为只有当事务方法被当前类以外的代码调用时，才会由<code>Spring</code>生成的代理对象来管理。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//@Transactional</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">CityInfoDict</span> cityInfoDict <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CityInfoDict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cityInfoDict<span class="token punctuation">.</span><span class="token function">setCityName</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * B 插入字段为 3的数据
         */</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insertB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * A 插入字段为 2的数据
         */</span>
        <span class="token keyword">int</span> insert <span class="token operator">=</span> cityInfoDictMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>cityInfoDict<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> insert<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">insertB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">CityInfoDict</span> cityInfoDict <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CityInfoDict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cityInfoDict<span class="token punctuation">.</span><span class="token function">setCityName</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cityInfoDict<span class="token punctuation">.</span><span class="token function">setParentCityId</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> cityInfoDictMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>cityInfoDict<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-异常被你的-catch-吃了-导致-transactional失效" tabindex="-1"><a class="header-anchor" href="#_4-5-异常被你的-catch-吃了-导致-transactional失效" aria-hidden="true">#</a> 4.5 异常被你的 catch“吃了”导致@Transactional失效</h2><p>这种情况是最常见的一种@Transactional注解失效场景，</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Transactional</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> insert <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">CityInfoDict</span> cityInfoDict <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CityInfoDict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cityInfoDict<span class="token punctuation">.</span><span class="token function">setCityName</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cityInfoDict<span class="token punctuation">.</span><span class="token function">setParentCityId</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token doc-comment comment">/**
             * A 插入字段为 2的数据
             */</span>
            insert <span class="token operator">=</span> cityInfoDictMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>cityInfoDict<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token doc-comment comment">/**
             * B 插入字段为 3的数据
             */</span>
            b<span class="token punctuation">.</span><span class="token function">insertB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果B方法内部抛了异常，而A方法此时try catch了B方法的异常，那这个事务还能正常回滚吗？</p><p>答案：不能！</p><p>会抛出异常：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>org.springframework.transaction.UnexpectedRollbackException: Transaction rolled back because it has been marked as rollback-only
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为当ServiceB中抛出了一个异常以后，ServiceB标识当前事务需要rollback。但是ServiceA中由于你手动的捕获这个异常并进行处理，ServiceA认为当前事务应该正常commit。此时就出现了前后不一致，也就是因为这样，抛出了前面的UnexpectedRollbackException异常。</p><p><code>spring</code>的事务是在调用业务方法之前开始的，业务方法执行完毕之后才执行<code>commit</code> or <code>rollback</code>，事务是否执行取决于是否抛出<code>runtime异常</code>。如果抛出<code>runtime exception</code> 并在你的业务方法中没有catch到的话，事务会回滚。</p><p>在业务方法中一般不需要catch异常，如果非要catch一定要抛出<code>throw new RuntimeException()</code>，或者注解中指定抛异常类型<code>@Transactional(rollbackFor=Exception.class)</code>，否则会导致事务失效，数据commit造成数据不一致，所以有些时候try catch反倒会画蛇添足。</p><h3 id="_4-6-数据库引擎不支持事务" tabindex="-1"><a class="header-anchor" href="#_4-6-数据库引擎不支持事务" aria-hidden="true">#</a> 4.6 数据库引擎不支持事务</h3><p>这种情况出现的概率并不高，事务能否生效数据库引擎是否支持事务是关键。常用的MySQL数据库默认使用支持事务的<code>innodb</code>引擎。一旦数据库引擎切换成不支持事务的<code>myisam</code>，那事务就从根本上失效了。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,64),r={href:"https://juejin.cn/post/6844904096747503629",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const a=i("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[o("一口气说出 6种，@Transactional注解的失效场景"),c(a)])])])}const b=s(l,[["render",d],["__file","spring-y-transactional-fail.html.vue"]]);export{b as default};
