import{_ as i,W as l,X as o,Z as n,$ as a,a0 as e,Y as t,D as p}from"./framework-4b7e9ff4.js";const c={},r=t(`<h1 id="hibernate实体类创建规则" tabindex="-1"><a class="header-anchor" href="#hibernate实体类创建规则" aria-hidden="true">#</a> Hibernate实体类创建规则</h1><h2 id="_1-注意事项" tabindex="-1"><a class="header-anchor" href="#_1-注意事项" aria-hidden="true">#</a> 1. 注意事项</h2><ol><li>为持久化类(实体类)提供无参构造</li><li>成员变量私有，提供get/set方法访问，需提供属性</li><li>持久化类中的属性应尽量用包装类型, 如Long 、String 因为基本类型不一定能用null</li><li>持久化类需提供唯一标志oid，与数据库中的主键列相对应</li><li>尽量不要用final修饰class。 //因为hibernate使用cglib代理生成代理对象，代理对象是即成被代理对象的，final会导致无法代理</li></ol><h2 id="_2-主键" tabindex="-1"><a class="header-anchor" href="#_2-主键" aria-hidden="true">#</a> 2. 主键</h2><h3 id="_2-1-主键类型" tabindex="-1"><a class="header-anchor" href="#_2-1-主键类型" aria-hidden="true">#</a> 2.1 主键类型</h3><p>自然主键(少见)和代理主键(常见)</p><pre><code>1. 自然主键：表的业务列中，某列必须有且不重复时，该列可当作主键使用
</code></pre><ol start="2"><li>代理主键：表的业务列中，没有某列必须有且不重复时，则需创建一个没有业务意义的列作为主键</li></ol><h3 id="_2-2-主键生成策略" tabindex="-1"><a class="header-anchor" href="#_2-2-主键生成策略" aria-hidden="true">#</a> 2.2 主键生成策略</h3><p>即每条记录录入时，主键的生成规则（位于orm元数据配置的id标签里的generator标签）</p><ol><li>identity：主键自增：有数据库来维护主键值，录入时不需指定主</li><li>sequence：Oracle的主键生成策略</li><li>increment：主键自增：由hibernate来维护，每次插入时先查询表中id最大值，+1作为主键(线程不安全，不用) //此时执行save方法，为了生成id，会执行查询id最大值的sql语句</li><li>hilo(了解)：主键自增，高低位算法，有hibernate来维护（不使用）</li><li><strong>native</strong>：hilo+sequence+identity，自动三选一策略</li><li><strong>uuid</strong>：产生随机字符串作为主键。主键类型必须为String</li><li>assigned：自然主键生成策略，hibernate不管理主键值，由开发人员自己控制录入</li></ol><h2 id="_3-实体类注解" tabindex="-1"><a class="header-anchor" href="#_3-实体类注解" aria-hidden="true">#</a> 3. 实体类注解</h2><h3 id="_3-1-id" tabindex="-1"><a class="header-anchor" href="#_3-1-id" aria-hidden="true">#</a> 3.1 @Id</h3>`,13),u={href:"http://lib.csdn.net/base/mysql",target:"_blank",rel:"noopener noreferrer"},d=n("h3",{id:"_3-2-generatedvalue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-2-generatedvalue","aria-hidden":"true"},"#"),a(" 3.2 @GeneratedValue")],-1),k={href:"http://lib.csdn.net/base/mysql",target:"_blank",rel:"noopener noreferrer"},m={href:"http://lib.csdn.net/base/oracle",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,"AUTO： JPA自动选择合适的策略，是默认选项；",-1),b=n("li",null,"SEQUENCE：通过序列产生主键，通过@SequenceGenerator 注解指定序列名，MySql不支持这种方式",-1),h=n("li",null,"TABLE：通过表产生主键，框架借由表模拟序列产生主键，使用该策略可以使应用更易于数据库移植。",-1),g=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
@Table(name=&quot;CUSTOMERS&quot;)
@Entity
public class Customer {
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Id
    private Integer id;
    private String name;
    private String email;
    private int age;
 
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-column" tabindex="-1"><a class="header-anchor" href="#_3-3-column" aria-hidden="true">#</a> 3.3 @Column</h3>`,2),_={href:"http://lib.csdn.net/base/mysql",target:"_blank",rel:"noopener noreferrer"},q=t(`<blockquote><ul><li>@Column 标注的常用属性是name，用于设置映射数据库表的列名。此外，该标注还包含其它多个属性，如：unique、nullable、length 等。</li><li>@Column 标注的columnDefinition属性: 表示该字段在数据库中的实际类型.通常 ORM 框架可以根据属性类型自动判断数据库中字段的类型,但是对于Date类型仍无法确定数据库中字段类型究竟是DATE,TIME还是TIMESTAMP.此外,String的默认映射类型为VARCHAR,如果要将 String 类型映射到特定数据库的 BLOB 或TEXT字段类型.</li></ul></blockquote><ul><li><p>name属性： name属性定义了被标注字段在数据库表中所对应字段的名称</p></li><li><p>unique属性： unique属性表示该字段是否为唯一标识，默认为false。 如果表中有一个字段需要唯一标识，则既可以使用该标记，也可以使用@Table注解中的@UniqueConstraint</p></li><li><p>nullable属性： nullable属性表示该字段是否可以为null值，默认为true</p></li><li><p>insertable属性： insertable属性表示在使用”INSERT”语句插入数据时，是否需要插入该字段的值</p></li><li><p>updateable属性： updateable属性表示在使用”UPDATE”语句插入数据时，是否需要更新该字段的值</p><p>insertable和updateable属性一般多用于只读的属性，例如主键和外键等，这些字段通常是自动生成的\\</p></li><li><p>columnDefinition属性： columnDefinition属性表示创建表时，该字段创建的SQL语句，一般用于通过Entity生成表定义时使用 如果数据库中表已经建好，该属性没有必要使用</p></li><li><p>table属性： table属性定义了包含当前字段的表名</p></li><li><p>length属性： length属性表示字段的长度，当字段的类型为varchar时，该属性才有效，默认为255个字符</p></li><li><p>precision属性和scale属性： precision属性和scale属性一起表示精度，当字段类型为double时，precision表示数值的总长度，scale表示小数点所占的位数</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Table</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;CUSTOMERS&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Entity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;ID&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Name&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Email&quot;</span><span class="token punctuation">,</span> nullable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> length <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Age&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Remark&quot;</span><span class="token punctuation">,</span> columnDefinition <span class="token operator">=</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> remark<span class="token punctuation">;</span>
 
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Salary1&quot;</span><span class="token punctuation">,</span> columnDefinition <span class="token operator">=</span> <span class="token string">&quot;decimal(5,2)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> salary1<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Salary2&quot;</span><span class="token punctuation">,</span> precision <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> scale <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> salary2<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Salary3&quot;</span><span class="token punctuation">,</span> columnDefinition <span class="token operator">=</span> <span class="token string">&quot;decimal(5,2)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> salary3<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Salary4&quot;</span><span class="token punctuation">,</span> precision <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> scale <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> salary4<span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,4),y={href:"https://sourceforge.net/projects/hibernate/files/hibernate-orm/",target:"_blank",rel:"noopener noreferrer"};function f(S,x){const s=p("ExternalLinkIcon");return l(),o("div",null,[r,n("p",null,[a("@Id 标注用于声明一个实体类的属性映射为"),n("a",u,[a("数据库"),e(s)]),a("的主键列。该属性通常置于属性声明语句之前，可与声明语句同行，也可写在单独行上。 @Id标注也可置于属性的getter方法之前。")]),d,n("p",null,[a("@GeneratedValue 用于标注主键的生成策略，通过strategy 属性指定。默认情况下，JPA 自动选择一个最适合底层数据库的主键生成策略：SqlServer对应identity，"),n("a",k,[a("MySQL"),e(s)]),a(" 对应 auto increment。 在javax.persistence.GenerationType中定义了以下几种可供选择的策略：")]),n("ul",null,[n("li",null,[a("IDENTITY：采用数据库ID自增长的方式来自增主键字段，"),n("a",m,[a("Oracle"),e(s)]),a(" 不支持这种方式；")]),v,b,h]),g,n("p",null,[a("当实体的属性与其映射的"),n("a",_,[a("数据库"),e(s)]),a("表的列不同名时需要使用@Column 标注说明，该属性通常置于实体的属性声明语句之前，还可与 @Id 标注一起使用。")]),q,n("p",null,[n("a",y,[a("Hibernate"),e(s)])])])}const C=i(c,[["render",f],["__file","hibernate-x-entity.html.vue"]]);export{C as default};
