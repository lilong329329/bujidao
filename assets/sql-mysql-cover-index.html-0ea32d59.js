import{_ as a,W as e,X as p,Z as n,$ as t,a0 as o,Y as c,D as l}from"./framework-4b7e9ff4.js";const i={},k=c(`<h1 id="mysql-覆盖索引" tabindex="-1"><a class="header-anchor" href="#mysql-覆盖索引" aria-hidden="true">#</a> MySQL - 覆盖索引</h1><h2 id="_1-覆盖索引" tabindex="-1"><a class="header-anchor" href="#_1-覆盖索引" aria-hidden="true">#</a> 1. 覆盖索引</h2><p>覆盖索引：<strong>SQL只需要通过索引就可以返回查询所需要的数据，而不必通过二级索引查到主键之后再去查询数据。</strong></p><blockquote><p>首先要了解覆盖索引之前，你必须要了解</p><ul><li><p>什么是聚簇索引和非聚簇索引，</p></li><li><p>回表，覆盖索引其实就是跟到底需不需要回表有直接的关系的。</p></li></ul></blockquote><h3 id="_1-1-什么是回表" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是回表" aria-hidden="true">#</a> 1.1 什么是回表?</h3><p>什么是回表呢? 通俗的讲就是，如果索引的列在 select 所需获得的列中 或者根据一次索引查询就能获得记录就不需要回表，<strong>如果 select 所需获得列中有大量的非索引列，索引就需要到表中找到相应的列的信息，这就叫回表</strong>。只有非聚簇索引是需要回表的，所以如果你懂得非聚簇索引的存储的结构，你自然就知道为啥需要回表了。</p><blockquote><p>注意：不是所有类型的索引都可以成为覆盖索引。覆盖索引必须要存储索引的列，而哈希索引、空间索引和全文索引等都不存储索引列的值，所以MySQL只能使用B-Tree索引做覆盖索引</p></blockquote><h2 id="_2-举例" tabindex="-1"><a class="header-anchor" href="#_2-举例" aria-hidden="true">#</a> 2. 举例</h2><p>我这里举一个例子你就可以很快明白了。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> t1
<span class="token punctuation">(</span>
    a <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">,</span>
    b <span class="token keyword">int</span><span class="token punctuation">,</span>
    c <span class="token keyword">int</span><span class="token punctuation">,</span>
    d <span class="token keyword">int</span><span class="token punctuation">,</span>
    e <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">InnoDB</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;h&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">index</span> idx_t1_bcd <span class="token keyword">on</span> t1<span class="token punctuation">(</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">-- 创建复合索引</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们来看这些SQL，看看哪些SQL满足了覆盖索引。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- 回表</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> e <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- 回表</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> b <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- 不用回表 Using index  覆盖索引</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> b<span class="token punctuation">,</span>c <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- 不用回表 Using index  覆盖索引</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> b<span class="token punctuation">,</span>d <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- 不用回表 Using index  覆盖索引</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- 不用回表 Using index  覆盖索引</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- 不用回表 Using index  覆盖索引</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实上面已经给出答案了。</p><p>我们通过执行计划就可以知道是不是满足了覆盖索引的条件了。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221204214426240.png" alt="image-20221204214426240" tabindex="0" loading="lazy"><figcaption>image-20221204214426240</figcaption></figure><p>如果Extra使用了<strong>Using index</strong>，就说明了他是满足了覆盖索引了，这个就是覆盖索引的标志了。</p><p>而下面这种很明显就是不满足索引覆盖了。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221204214458013.png" alt="image-20221204214458013" tabindex="0" loading="lazy"><figcaption>image-20221204214458013</figcaption></figure><p>因为我们建立的是复合索引，所以就是非聚簇索引，非聚簇索引的叶子节点上会存放键的值，也就是我们的(b,c,d) 这三个字段，还会存放主键a字段用于回表操作。</p><p>所以只要查询的列是你建立的索引字段再加上主键字段，都是满足索引覆盖的，这个时候我们在非聚簇索引的叶子节点就能给够获取到这些数据，不需要回表操作。</p><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结" aria-hidden="true">#</a> 3. 总结</h2><p>如果要使用覆盖索引，一定要注意SELECT 列表值取出需要的列(并且这些列是有索引的)，不可以是SELECT *，但有的人说可以全部列都加索引，但如果将所有字段一起做索引会导致索引文件过大，查询性能下降，不能为了利用覆盖索引而这么做。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,23),u={href:"https://blog.csdn.net/cckevincyh/article/details/119655516",target:"_blank",rel:"noopener noreferrer"};function r(d,m){const s=l("ExternalLinkIcon");return e(),p("div",null,[k,n("p",null,[n("a",u,[t("五分钟告诉你什么是MySQL的覆盖索引"),o(s)])])])}const y=a(i,[["render",r],["__file","sql-mysql-cover-index.html.vue"]]);export{y as default};
