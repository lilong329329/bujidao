import{_ as a,W as n,X as s,Y as e}from"./framework-4b7e9ff4.js";const t={},i=e(`<h1 id="mybatis-pagehelper源码分析" tabindex="-1"><a class="header-anchor" href="#mybatis-pagehelper源码分析" aria-hidden="true">#</a> Mybatis-PageHelper源码分析</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>项目中分页是非常常见的需求，在项目中我们一般集成第三方的分页插件，避免在业务层嵌入过多业务代码。</p><p>分页插件，我们项目中是采用<code>Mybatis-PageHelper </code>，作为一款轻量级的插件，源码应该不难，我们就来分析分析他的源码</p><h2 id="_2-分页插件实现原理与基础" tabindex="-1"><a class="header-anchor" href="#_2-分页插件实现原理与基础" aria-hidden="true">#</a> 2. 分页插件实现原理与基础</h2><h3 id="_2-1-拦截器" tabindex="-1"><a class="header-anchor" href="#_2-1-拦截器" aria-hidden="true">#</a> 2.1 拦截器</h3><p>Mybatis 提供了拦截器接口<code>Interceptor(org.apache.ibatis.plugin.Interceptor)</code>, 我们仅需要在实现类中对拦截对象和方法进行处理即可</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023103716074.png" alt="image-20211023103716074" tabindex="0" loading="lazy"><figcaption>image-20211023103716074</figcaption></figure><h4 id="_2-1-1-object-intercept-invocation-invocation" tabindex="-1"><a class="header-anchor" href="#_2-1-1-object-intercept-invocation-invocation" aria-hidden="true">#</a> 2.1.1 Object intercept(Invocation invocation)</h4><p><strong>intercept 是mybatis 运行时要执行的方法</strong>。通过该方法的参数<code>invocation</code> 可以得到很多有用的信息，该参数的方法常用如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZszInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">Interceptor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Invocation</span> invocation<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> target <span class="token operator">=</span> invocation<span class="token punctuation">.</span><span class="token function">getTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Method</span> method <span class="token operator">=</span> invocation<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args <span class="token operator">=</span> invocation<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> invocation<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>getTarget ():</p><p>获取当前拦截的对象</p></li><li><p>getMethod()：</p><p>获取当前被拦截的方法</p></li><li><p>getArgs()：</p><p>可以返回被拦截方法中的参数</p></li><li><p>invocation.proceed()：</p><p>proceed() 方法实际上执行了method.invoke(target,args)方法，上面的代码中没有做任何处理，直接返回了结果</p></li></ul><h4 id="_2-1-2-plugin-object-target" tabindex="-1"><a class="header-anchor" href="#_2-1-2-plugin-object-target" aria-hidden="true">#</a> 2.1.2 plugin(Object target)</h4><p>这个方法的参数target 就是拦截器要拦截的对象，该方法会在创建被拦截的接口实现类时被调用。</p><p>听起来有点绕，其实现其实我们只需要调用mybatis 提供的 <code>Plugin.wrap(target, this)</code> 静态方法就可以通过java的动态代理拦截目标对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>		<span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">plugin</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Plugin</span><span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-setproperties-properties-properties" tabindex="-1"><a class="header-anchor" href="#_2-1-3-setproperties-properties-properties" aria-hidden="true">#</a> 2.1.3 setProperties(Properties properties)</h4><p>传递插件的参数，可以通过参数来改变插件的行为</p><ul><li><p>如何配置参数：</p><p>我们在配置拦截器的时候，就需要配置</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span> <span class="token attr-name">interceptor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.github.pagehelper.PageInterceptor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- 支持通过Mapper接口参数来传递分页参数 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>helperDialect<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mysql<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>supportMethodsArguments<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rowBoundsWithCount<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-2-拦截器签名" tabindex="-1"><a class="header-anchor" href="#_2-2-拦截器签名" aria-hidden="true">#</a> 2.2 拦截器签名</h3><p><code>@Intercepts</code> 和 注解签名 <code>@Signature</code> 用来配置拦截器要拦截的接口的方法</p><p><code>@Intercepts</code> 注解中的属性是一个 <code>@Signature</code>签名数组，可以在同一个拦截器中同时拦截不同的接口和方法</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023111853954.png" alt="image-20211023111853954" tabindex="0" loading="lazy"><figcaption>image-20211023111853954</figcaption></figure><p><code>@Signature</code> 注解包含以下三个属性</p><ul><li><p>type: 配置拦截器的接口，可选值是</p><ul><li>Executor()</li><li>ParameterHandler()</li><li>ResultSetHandler()</li><li>StatementHandler()</li></ul></li><li><p>Method: 设置拦截器中的方法名，可选值是上面4个接口中对应的方法，需要和接口匹配</p><p>例如Executor 中能选query，update等</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023112540386.png" alt="image-20211023112540386" tabindex="0" loading="lazy"><figcaption>image-20211023112540386</figcaption></figure></li><li><p>args：设置拦截方法的参数类型数组，通过方法名和参数类型可以确定唯一一个方法</p></li></ul><h2 id="_3-pagehelper源码实现" tabindex="-1"><a class="header-anchor" href="#_3-pagehelper源码实现" aria-hidden="true">#</a> 3. PageHelper源码实现</h2><h3 id="_3-1-拦截器与拦截器签名" tabindex="-1"><a class="header-anchor" href="#_3-1-拦截器与拦截器签名" aria-hidden="true">#</a> 3.1 拦截器与拦截器签名</h3><p>这样我们就能拦截到sql 查询语句</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023164728249.png" alt="image-20211023164728249" tabindex="0" loading="lazy"><figcaption>image-20211023164728249</figcaption></figure><h3 id="_3-2-获取拦截参数" tabindex="-1"><a class="header-anchor" href="#_3-2-获取拦截参数" aria-hidden="true">#</a> 3.2 获取拦截参数</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023164930142.png" alt="image-20211023164930142" tabindex="0" loading="lazy"><figcaption>image-20211023164930142</figcaption></figure><h3 id="_3-3-分页判断" tabindex="-1"><a class="header-anchor" href="#_3-3-分页判断" aria-hidden="true">#</a> 3.3 分页判断</h3><ol><li>判断是否需要分页</li><li>判断是否需要进行count 查询 <ol><li>查询总数</li></ol></li><li>分页查询</li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023165357858.png" alt="image-20211023165357858" tabindex="0" loading="lazy"><figcaption>image-20211023165357858</figcaption></figure><h3 id="_3-4-计算总数" tabindex="-1"><a class="header-anchor" href="#_3-4-计算总数" aria-hidden="true">#</a> 3.4 计算总数</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023165640099.png" alt="image-20211023165640099" tabindex="0" loading="lazy"><figcaption>image-20211023165640099</figcaption></figure><p>计算总数实现</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023165903830.png" alt="image-20211023165903830" tabindex="0" loading="lazy"><figcaption>image-20211023165903830</figcaption></figure><p>获取方言count sql</p><p>此时还贴心的去除了order by</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023170153258.png" alt="image-20211023170153258" tabindex="0" loading="lazy"><figcaption>image-20211023170153258</figcaption></figure><p>获取普通的Count-sql</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023170559536.png" alt="image-20211023170559536" tabindex="0" loading="lazy"><figcaption>image-20211023170559536</figcaption></figure><h3 id="_3-5-分页查询" tabindex="-1"><a class="header-anchor" href="#_3-5-分页查询" aria-hidden="true">#</a> 3.5 分页查询</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023170703110.png" alt="image-20211023170703110" tabindex="0" loading="lazy"><figcaption>image-20211023170703110</figcaption></figure><ul><li>boundSql 包含了执行的sql 和对应的参数</li></ul><p>调用方言获取分页 sql</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023171056962.png" alt="image-20211023171056962" tabindex="0" loading="lazy"><figcaption>image-20211023171056962</figcaption></figure><ol><li><code>String sql = boundSql.getSql()</code> 方言sql</li><li>其中<code>Page page = this.getLocalPage();</code> 就是获得分页的参数</li><li>判断是否需要排序，添加orderby 语句</li></ol><p>获取分页的 getPageSql</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023171543077.png" alt="image-20211023171543077" tabindex="0" loading="lazy"><figcaption>image-20211023171543077</figcaption></figure><p>转换为分页语句</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023171621305.png" alt="image-20211023171621305" tabindex="0" loading="lazy"><figcaption>image-20211023171621305</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023171656921.png" alt="image-20211023171656921" tabindex="0" loading="lazy"><figcaption>image-20211023171656921</figcaption></figure><h3 id="_3-6-添加order-by-语句" tabindex="-1"><a class="header-anchor" href="#_3-6-添加order-by-语句" aria-hidden="true">#</a> 3.6 添加order by 语句</h3><p>在做分页查询的时候校验了是否需要order by 语句</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023171330695.png" alt="image-20211023171330695" tabindex="0" loading="lazy"><figcaption>image-20211023171330695</figcaption></figure><p>添加order 语句</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023171410950.png" alt="image-20211023171410950" tabindex="0" loading="lazy"><figcaption>image-20211023171410950</figcaption></figure><h2 id="_4-dialect-方言接口" tabindex="-1"><a class="header-anchor" href="#_4-dialect-方言接口" aria-hidden="true">#</a> 4. Dialect 方言接口</h2><p>Dialect 方言 包含了数据库支持的类型</p><p>我们可以看到几个关键节点上都调用了Dialect</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023173219075.png" alt="image-20211023173219075" tabindex="0" loading="lazy"><figcaption>image-20211023173219075</figcaption></figure><h3 id="_4-1-dialect-接口" tabindex="-1"><a class="header-anchor" href="#_4-1-dialect-接口" aria-hidden="true">#</a> 4.1 dialect 接口</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023173328549.png" alt="image-20211023173328549" tabindex="0" loading="lazy"><figcaption>image-20211023173328549</figcaption></figure><h3 id="_4-2-dialect-实例" tabindex="-1"><a class="header-anchor" href="#_4-2-dialect-实例" aria-hidden="true">#</a> 4.2 dialect 实例</h3><h4 id="_4-2-1-oracle-版本" tabindex="-1"><a class="header-anchor" href="#_4-2-1-oracle-版本" aria-hidden="true">#</a> 4.2.1 oracle 版本</h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023173426394.png" alt="image-20211023173426394" tabindex="0" loading="lazy"><figcaption>image-20211023173426394</figcaption></figure><h4 id="_4-2-2-mysql版本" tabindex="-1"><a class="header-anchor" href="#_4-2-2-mysql版本" aria-hidden="true">#</a> 4.2.2 mysql版本</h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211023173527432.png" alt="image-20211023173527432" tabindex="0" loading="lazy"><figcaption>image-20211023173527432</figcaption></figure>`,70),p=[i];function o(c,l){return n(),s("div",null,p)}const r=a(t,[["render",o],["__file","mybatis-z-pageHelper-source.html.vue"]]);export{r as default};
