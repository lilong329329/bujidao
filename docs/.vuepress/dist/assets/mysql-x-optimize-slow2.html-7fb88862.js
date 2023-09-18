import{_ as a,W as i,X as e,Y as s}from"./framework-4b7e9ff4.js";const l={},n=s(`<h1 id="如何调优慢查询sql" tabindex="-1"><a class="header-anchor" href="#如何调优慢查询sql" aria-hidden="true">#</a> 如何调优慢查询SQL</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>我们在写程序的时候如何定位并优化慢查询呢？具体场景具体分析，大体思路如下</p><ol><li>根据慢日志定位慢查询sql</li><li>使用explain等工具分析sql</li><li>修改sql或者尽量让sql走索引</li></ol><h2 id="_2-根据慢日志定位慢查询sql" tabindex="-1"><a class="header-anchor" href="#_2-根据慢日志定位慢查询sql" aria-hidden="true">#</a> 2. 根据慢日志定位慢查询sql</h2><ol><li><p>查看慢日志配置情况</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> VARIABLES <span class="token operator">like</span> <span class="token string">&#39;%query%&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果如下</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405231229429.png" alt="image-20210405231229429" tabindex="0" loading="lazy"><figcaption>image-20210405231229429</figcaption></figure></li></ol><ul><li>Long_query_time: 默认是10s就算是慢日志了</li><li>Show_query_log: 慢日志的开启状态</li><li>show_query_log_file: 慢日志所在的地址</li></ul><ol start="2"><li><p>慢日志的数量</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">status</span> <span class="token operator">like</span> <span class="token string">&#39;%slow_queries%&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果如下</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405231632132.png" alt="image-20210405231632132" tabindex="0" loading="lazy"><figcaption>image-20210405231632132</figcaption></figure></li><li><p>慢日志打开</p><ul><li>方式一：会话中更改（重启后会恢复默认）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#慢日志打开</span>
<span class="token keyword">set</span> <span class="token keyword">global</span> slow_query_log <span class="token operator">=</span> <span class="token keyword">on</span>
<span class="token comment">#慢查询的时间设置成1s</span>
<span class="token keyword">set</span> <span class="token keyword">global</span>  long_query_time <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405231723049.png" alt="image-20210405231723049" tabindex="0" loading="lazy"><figcaption>image-20210405231723049</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405231849634.png" alt="image-20210405231849634" tabindex="0" loading="lazy"><figcaption>image-20210405231849634</figcaption></figure></li></ol><ul><li><p>方式二：修改配置文件（重启后配置还在）</p><p>修改配置文件my.cnf，在[mysqld]下的下方加入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
slow_query_log = ON
long_query_time = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol start="4"><li><p>重启MySQL服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service mysqld restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看设置后的参数</p><p>show VARIABLES like &#39;%query%&#39;</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405233551896.png" alt="image-20210405233551896" tabindex="0" loading="lazy"><figcaption>image-20210405233551896</figcaption></figure></li><li><p>查看慢日志</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">vim</span> /var/lib/mysql/iZwz914d1peizv4h7laju4Z-slow.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234141934.png" alt="image-20210405234141934" tabindex="0" loading="lazy"><figcaption>image-20210405234141934</figcaption></figure></li></ol><h2 id="_3-使用explain等工具分析sql" tabindex="-1"><a class="header-anchor" href="#_3-使用explain等工具分析sql" aria-hidden="true">#</a> 3. 使用explain等工具分析sql</h2><ol><li>在查询语句前面加上explain</li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234252604.png" alt="image-20210405234252604" tabindex="0" loading="lazy"><figcaption>image-20210405234252604</figcaption></figure><p>其中两个字段非常重要</p><ul><li><p>type：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234357173.png" alt="image-20210405234357173" tabindex="0" loading="lazy"><figcaption>image-20210405234357173</figcaption></figure></li><li><p>extra：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234420498.png" alt="image-20210405234420498" tabindex="0" loading="lazy"><figcaption>image-20210405234420498</figcaption></figure></li></ul><h2 id="_4-修改sql或者尽量让sql走索引" tabindex="-1"><a class="header-anchor" href="#_4-修改sql或者尽量让sql走索引" aria-hidden="true">#</a> 4. 修改sql或者尽量让sql走索引</h2><h3 id="_4-1-方案一-查询其他有索引的字段" tabindex="-1"><a class="header-anchor" href="#_4-1-方案一-查询其他有索引的字段" aria-hidden="true">#</a> 4.1 方案一：查询其他有索引的字段</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234611399.png" alt="image-20210405234611399" tabindex="0" loading="lazy"><figcaption>image-20210405234611399</figcaption></figure><h3 id="_4-2-方案二-添加索引" tabindex="-1"><a class="header-anchor" href="#_4-2-方案二-添加索引" aria-hidden="true">#</a> 4.2 方案二：添加索引</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234645956.png" alt="image-20210405234645956" tabindex="0" loading="lazy"><figcaption>image-20210405234645956</figcaption></figure>`,20),g=[n];function o(t,r){return i(),e("div",null,g)}const d=a(l,[["render",o],["__file","mysql-x-optimize-slow2.html.vue"]]);export{d as default};
