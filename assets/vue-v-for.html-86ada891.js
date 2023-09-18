import{_ as s,W as t,X as e,Z as a,$ as p,a0 as o,Y as i,D as l}from"./framework-4b7e9ff4.js";const c={},u=i(`<h1 id="vue指令v-for之遍历输出javascript数组-json对象的几种方式" tabindex="-1"><a class="header-anchor" href="#vue指令v-for之遍历输出javascript数组-json对象的几种方式" aria-hidden="true">#</a> Vue指令v-for之遍历输出JavaScript数组，json对象的几种方式</h1><h2 id="_1-基础准备" tabindex="-1"><a class="header-anchor" href="#_1-基础准备" aria-hidden="true">#</a> 1. 基础准备</h2><ol><li><p>定义数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">list</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">web</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token string-property property">&quot;百度&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;搜狐&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://www.sohu.com&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;新浪&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://www.sina.com&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;淘宝&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://www.taobao.com&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>html结构</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ list }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ web }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>输出结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210162547578.png" alt="image-20201210162547578" tabindex="0" loading="lazy"><figcaption>image-20201210162547578</figcaption></figure></li></ol><h2 id="_2-v-for对-json-数组-几种输出方式" tabindex="-1"><a class="header-anchor" href="#_2-v-for对-json-数组-几种输出方式" aria-hidden="true">#</a> 2. v-for对 JSON 数组 几种输出方式</h2><h3 id="_2-1-只输出value" tabindex="-1"><a class="header-anchor" href="#_2-1-只输出value" aria-hidden="true">#</a> 2.1 只输出value</h3><p>html 代码</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210164049745.png" alt="image-20201210164049745" tabindex="0" loading="lazy"><figcaption>image-20201210164049745</figcaption></figure><h3 id="_2-2-输出value值且输出对应的索引值" tabindex="-1"><a class="header-anchor" href="#_2-2-输出value值且输出对应的索引值" aria-hidden="true">#</a> 2.2 输出value值且输出对应的索引值</h3><p>html代码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>(item,index) in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item }}的索引值是{{ index }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210164215652.png" alt="image-20201210164215652" tabindex="0" loading="lazy"><figcaption>image-20201210164215652</figcaption></figure><h2 id="_3-v-for对json格式的几种输出方式" tabindex="-1"><a class="header-anchor" href="#_3-v-for对json格式的几种输出方式" aria-hidden="true">#</a> 3. v-for对json格式的几种输出方式</h2><h3 id="_3-1-只输出value值" tabindex="-1"><a class="header-anchor" href="#_3-1-只输出value值" aria-hidden="true">#</a> 3.1 只输出value值</h3><p>html代码</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>value in web<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210164447098.png" alt="image-20201210164447098" tabindex="0" loading="lazy"><figcaption>image-20201210164447098</figcaption></figure><h3 id="_3-2-输出value值和key值" tabindex="-1"><a class="header-anchor" href="#_3-2-输出value值和key值" aria-hidden="true">#</a> 3.2 输出value值和key值</h3><p>html 代码</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>(value,key) in web<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ key }} 的网址是 ： {{ value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210164606587.png" alt="image-20201210164606587" tabindex="0" loading="lazy"><figcaption>image-20201210164606587</figcaption></figure><h2 id="_3-输出value值-key值和索引值index" tabindex="-1"><a class="header-anchor" href="#_3-输出value值-key值和索引值index" aria-hidden="true">#</a> 3.输出value值，key值和索引值index</h2><p>html代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;div id=&quot;test&quot;&gt;
        &lt;div v-for = &quot;(value,key,index) in web&quot; :key=&quot;index&quot;&gt;{{ index }}__{{ key }} 的网址是 ： {{ value }}&lt;/div&gt;
    &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210164817986.png" alt="image-20201210164817986" tabindex="0" loading="lazy"><figcaption>image-20201210164817986</figcaption></figure><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4. 总结</h2><ul><li><p>在数组里面，小括号里面的参数第一位是value值，第二位是索引值</p></li><li><p>在json里面，第一位是value值，第二位是key值，第三位是索引值</p></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,33),r={href:"https://www.cnblogs.com/mmzuo-798/p/9435215.html",target:"_blank",rel:"noopener noreferrer"};function d(k,g){const n=l("ExternalLinkIcon");return t(),e("div",null,[u,a("p",null,[a("a",r,[p("Vue指令v-for之遍历输出JavaScript数组，json对象的几种方式"),o(n)])])])}const m=s(c,[["render",d],["__file","vue-v-for.html.vue"]]);export{m as default};
