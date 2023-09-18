import{_ as t,W as e,X as p,Z as n,a0 as a,$ as c,Y as o,D as l}from"./framework-4b7e9ff4.js";const i={},u=o(`<h1 id="hibernate的四种查询方式" tabindex="-1"><a class="header-anchor" href="#hibernate的四种查询方式" aria-hidden="true">#</a> Hibernate的四种查询方式</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1.简介</h2><ol><li>主键查询</li><li>HQL查询</li><li>QBC查询</li><li>本地SQL查询</li></ol><h2 id="_2-主键查询" tabindex="-1"><a class="header-anchor" href="#_2-主键查询" aria-hidden="true">#</a> 2. 主键查询</h2><p>通过主键来查询数据库的记录，从而返回一个JavaBean对象</p><ul><li><strong>session.get(javaBean.class, int id); 【传入对应的class和id就可以查询】</strong></li><li><strong>session.load(javaBean.class, int id); 【支持懒加载】</strong></li></ul><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>       User user1 = (User) session.get(User.class, 1);
        System.out.println(user1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-hql查询" tabindex="-1"><a class="header-anchor" href="#_3-hql查询" aria-hidden="true">#</a> 3. HQL查询</h2><p>HQL:hibernate query language 即hibernate提供的面向对象的查询语言</p><ul><li><p>优点：可读性好，功能强大效率高。</p></li><li><p>缺点：由于是字符串形式，只有在运行时才被解析，故扩展性差。</p></li></ul><h3 id="_3-1-hql简单示例" tabindex="-1"><a class="header-anchor" href="#_3-1-hql简单示例" aria-hidden="true">#</a> 3.1 HQL简单示例</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>        <span class="token class-name">Query</span> query <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createQuery</span><span class="token punctuation">(</span><span class="token string">&quot;FROM User WHERE id=?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//这里的？号是从0开始的，并不像JDBC从1开始的！</span>
        query<span class="token punctuation">.</span><span class="token function">setParameter</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span> list <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-hql详细操作" tabindex="-1"><a class="header-anchor" href="#_3-2-hql详细操作" aria-hidden="true">#</a> 3.2 HQL详细操作</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//1.书写HQL语句：</span>
    基本查询：<span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;对象的完整类名&quot;</span><span class="token punctuation">;</span> <span class="token comment">//查询所有的对象</span>
    条件查询：<span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;from 对象名 where 属性名=***&quot;</span><span class="token punctuation">;</span>
		     <span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;select ** from 对象名 where 属性名=***&quot;</span><span class="token punctuation">;</span>
		     <span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;from 对象名 where 属性名=*** order by ** desc/asc&quot;</span><span class="token punctuation">;</span> <span class="token comment">//排序</span>
		     <span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;select count(*) from 对象名 where 属性名=***&quot;</span><span class="token punctuation">;</span> <span class="token comment">//聚合函数</span>
              <span class="token comment">//其他聚合函数：sum(列名) avg(列名) max(列名) min(列名)</span>
    投影查询：<span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;select new 对象名(参数) from 对象名 &quot;</span><span class="token punctuation">;</span>
    多表查询：普通内连接：<span class="token class-name">String</span> hql <span class="token operator">=</span><span class="token string">&quot;from 对象名1 别名 inner join 别名.对象名2&quot;</span><span class="token punctuation">;</span>
            迫切内连接：<span class="token class-name">String</span> hql <span class="token operator">=</span><span class="token string">&quot;from 对象名1 别名 inner join fetch 别名.对象名2&quot;</span><span class="token punctuation">;</span>
            左外连接：<span class="token class-name">String</span> hql <span class="token operator">=</span><span class="token string">&quot;from 对象名1 别名 left  join 别名.对象名2&quot;</span><span class="token punctuation">;</span>
            右外连接：<span class="token class-name">String</span> hql <span class="token operator">=</span><span class="token string">&quot;from 对象名1 别名 right join 别名.对象名2&quot;</span><span class="token punctuation">;</span>
    <span class="token operator">?</span>号占位符：<span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;from 对象名 where 属性名=?&quot;</span><span class="token punctuation">;</span>
    <span class="token operator">:</span>号占位符：<span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;from 对象名 where 属性名=:***&quot;</span><span class="token punctuation">;</span>  <span class="token comment">//***为该&quot;:&quot;的名称</span>

<span class="token comment">//2.创建查询对象</span>
    <span class="token class-name">Quert</span> query <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createQuery</span><span class="token punctuation">(</span>hql<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">//3.设置查询参数</span>
    query<span class="token punctuation">.</span><span class="token function">setLong</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1l</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//?参数类型为Long</span>
    query<span class="token punctuation">.</span><span class="token function">setParameter</span><span class="token punctuation">(</span>索引号<span class="token punctuation">,</span>参数数据<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//?参数类型为任意</span>
    query<span class="token punctuation">.</span><span class="token function">setParameter</span><span class="token punctuation">(</span><span class="token string">&quot;:的名称&quot;</span><span class="token punctuation">,</span>参数数据<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    query<span class="token punctuation">.</span><span class="token function">setFirstResult</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//分页：开始查询的页数</span>
    query<span class="token punctuation">.</span><span class="token function">setMaxResults</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//分页：每页显示多少条数据</span>
<span class="token comment">//4.查询并获取结果</span>
    query<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回List&lt;Object[]&gt;   List&lt;对象名&gt;</span>
    query<span class="token punctuation">.</span><span class="token function">uniqueResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//唯一查询结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-qbc查询" tabindex="-1"><a class="header-anchor" href="#_4-qbc查询" aria-hidden="true">#</a> 4. QBC查询</h2><p><strong>QBC查询: query by criteria 完全面向对象的查询</strong></p><ul><li><p>QBC优点：提供面向对象的接口，编译时即可被解析，便于调试，扩展性好，允许用户扩展Criteria接口。</p></li><li><p>QBC缺点：可读性差；不支持报表查询和子查询。</p></li></ul><h3 id="_4-1-qbc简单示例" tabindex="-1"><a class="header-anchor" href="#_4-1-qbc简单示例" aria-hidden="true">#</a> 4.1 QBC简单示例</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>        <span class="token comment">//创建关于user对象的criteria对象</span>
        <span class="token class-name">Criteria</span> criteria <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//添加条件</span>
        criteria<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Restrictions</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//查询全部数据</span>
        <span class="token class-name">List</span> list <span class="token operator">=</span> criteria<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-qbc-详细操作" tabindex="-1"><a class="header-anchor" href="#_4-2-qbc-详细操作" aria-hidden="true">#</a> 4.2 QBC 详细操作</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//1.创建查询对象    </span>
    <span class="token comment">//创建Criteria查询对象</span>
    <span class="token class-name">Criteria</span> c<span class="token operator">=</span>session<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//查询所有的**对象。</span>
    <span class="token comment">//创建离线Criteria对象</span>
    <span class="token class-name">DetachedCriteria</span> dc <span class="token operator">=</span> <span class="token class-name">DetachedCriteria</span><span class="token punctuation">.</span><span class="token function">forClass</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Criteria</span> c <span class="token operator">=</span> dc<span class="token punctuation">.</span><span class="token function">getExecutableCriteria</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2.添加查询参数</span>
    c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Restrictions</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;属性名&quot;</span><span class="token punctuation">,</span>属性值<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//除了eq(==)，还有下面这些：</span>
    <span class="token comment">//（&gt;,gt） （&gt;=,ge） （&lt;,lt） （&lt;=,le）（!=,ne） （between and,between）（is null,isNull）</span>
    <span class="token comment">//（Nullis not null,isNotNull）还有几个一样的：in、like、or、and</span>
    c<span class="token punctuation">.</span><span class="token function">setFirstResult</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//分页信息</span>
    c<span class="token punctuation">.</span><span class="token function">setMaxResults</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//分页信息</span>
    c<span class="token punctuation">.</span><span class="token function">setProjection</span><span class="token punctuation">(</span><span class="token class-name">Projections</span><span class="token punctuation">.</span><span class="token function">rowCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//聚合函数，此处为查询总行数</span>
    c<span class="token punctuation">.</span><span class="token function">addOrder</span><span class="token punctuation">(</span><span class="token class-name">Order</span><span class="token punctuation">.</span><span class="token function">desc</span><span class="token punctuation">(</span><span class="token string">&quot;属性名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//排序。desc(降序)、asc(升序)</span>
<span class="token comment">//3.查询并获取结果</span>
    c<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//方式一</span>
    对象 <span class="token operator">*</span> <span class="token operator">=</span> <span class="token punctuation">(</span>强转<span class="token operator">*</span><span class="token punctuation">)</span>c<span class="token punctuation">.</span><span class="token function">uniqueResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//方式二</span>
    <span class="token class-name">List</span><span class="token operator">&lt;</span>泛型<span class="token operator">&gt;</span> list <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token operator">&lt;</span>泛型<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token function">getHibernateTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findByCriteria</span><span class="token punctuation">(</span>dc<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//方式三</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-本地sql查询-复杂的业务查询" tabindex="-1"><a class="header-anchor" href="#_5-本地sql查询-复杂的业务查询" aria-hidden="true">#</a> 5. 本地SQL查询 **(**复杂的业务查询)</h2><ul><li>适合场景：复杂的业务查询</li><li>缺点：无法跨平台</li></ul><h3 id="_5-1-原生sql简单实用" tabindex="-1"><a class="header-anchor" href="#_5-1-原生sql简单实用" aria-hidden="true">#</a> 5.1 原生SQL简单实用</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>        <span class="token comment">//将所有的记录封装成User对象存进List集合中</span>
        <span class="token class-name">SQLQuery</span> sqlQuery <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createSQLQuery</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEntity</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span> list <span class="token operator">=</span> sqlQuery<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-原生sql详细操作" tabindex="-1"><a class="header-anchor" href="#_5-2-原生sql详细操作" aria-hidden="true">#</a> 5.2 原生SQL详细操作</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//1.书写sql语句
    String sql = &quot;……limit ?,?&quot;;
//2.创建sql查询对象
    SQLQuery query = session.createSQLQuery(sql);
//3.设置查询参数
    query.addEntity(**.class); //指定结果集封装到某对象中
    query.setParameter(0,索引0的数据); //?参数
//4.查询并获取结果
    List&lt;类名&gt; list = query.list(); //设置步骤3
    List&lt;Object[]&gt; list = query.list(); //未设置步骤3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,29),r={href:"https://www.yuque.com/yiwang/java/sbvuni",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"Hibernate",-1),d={href:"https://cloud.tencent.com/developer/article/1010155",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const s=l("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",r,[k,a(s)])]),n("p",null,[n("a",d,[c("Hibernate的四种查询方式（主键查询，HQL查询，Criteria"),a(s)])])])}const q=t(i,[["render",m],["__file","hibernate-x-query.html.vue"]]);export{q as default};