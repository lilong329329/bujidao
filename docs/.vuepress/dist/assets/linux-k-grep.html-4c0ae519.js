import{_ as a,W as n,X as e,Y as s}from"./framework-4b7e9ff4.js";const i={},l=s(`<h1 id="linux-grep文本搜索" tabindex="-1"><a class="header-anchor" href="#linux-grep文本搜索" aria-hidden="true">#</a> Linux-grep文本搜索</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1 简介</h2><p>Linux系统中grep命令是一种强大的<strong>文本搜索工具</strong>，它能使用<strong>正则表达式搜索文本</strong>，并把匹 <strong>配的行</strong>打印出来。grep全称是Global Regular Expression Print，表示全局正则表达式版本，它的使用权限是所有用户。</p><p>grep的工作方式是这样的，它在一个或多个文件中搜索字符串模板。如果模板包括空格，则必须被引用，模板后的所有字符串被看作文件名。搜索的结果被送到标准输出，不影响原文件内容。</p><p>grep可用于shell脚本，因为grep通过返回一个状态值来说明搜索的状态，如果<strong>模板搜索成功，则返回0，如果搜索不成功，则返回1</strong>，如果搜索的文件不存在，则返回2。我们利用这些返回值就可进行一些自动化的文本处理工作。</p><h2 id="_2-命令语法" tabindex="-1"><a class="header-anchor" href="#_2-命令语法" aria-hidden="true">#</a> 2 命令语法</h2><p>用于过滤/搜索的特定字符。可使用正则表达式能多种命令配合使用，使用上十分灵活。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> pattern <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-命令参数" tabindex="-1"><a class="header-anchor" href="#_3-命令参数" aria-hidden="true">#</a> 3 命令参数</h2><p>-? 同时显示匹配行上下的？行，如：grep -2 pattern filename 同时显示匹配行的上下2行。 -b，—byte-offset 打印匹配行前面打印该行所在的块号码。 -c,—count 只打印匹配的行数，不显示匹配的内容。 -f File，—file=File 从文件中提取模板。空文件中包含0个模板，所以什么都不匹配。 -h，—no-filename 当搜索多个文件时，不显示匹配文件名前缀。 -i，—ignore-case 忽略大小写差别。 -q，—quiet 取消显示，只返回退出状态。0则表示找到了匹配的行。 -l，—files-with-matches 打印匹配模板的文件清单。 -L，—files-without-match 打印不匹配模板的文件清单。 -n，—line-number 在匹配的行前面打印行号。 -s，—silent 不显示关于不存在或者无法读取文件的错误信息。 -v，—revert-match 反检索，只显示不匹配的行。 -w，—word-regexp 如果被&lt;和&gt;引用，就把表达式做为一个单词搜索。 -V，—version 显示软件版本信息。</p><h2 id="_4-pattern-规则表达式" tabindex="-1"><a class="header-anchor" href="#_4-pattern-规则表达式" aria-hidden="true">#</a> 4 pattern 规则表达式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>. 匹配任意一个字符
* 匹配0 个或多个*前的字符
^ 匹配行开头
$ 匹配行结尾
[] 匹配[ ]中的任意一个字符，[]中可用 - 表示范围，
例如[a-z]表示字母a 至z 中的任意一个
\\ 转意字符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-实例" tabindex="-1"><a class="header-anchor" href="#_5-实例" aria-hidden="true">#</a> 5 实例</h2><p>文件fruits.txt</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>i like apple
i like pineapple
i like Apple
i like banana
i like watermelon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-1-在文件中搜索模式" tabindex="-1"><a class="header-anchor" href="#_5-1-在文件中搜索模式" aria-hidden="true">#</a> 5.1 在文件中搜索模式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
<span class="token function">grep</span> <span class="token string">&quot;search_pattern&quot;</span> path/to/file
<span class="token comment"># 示例(查看文件中带有apple的行)</span>
<span class="token function">grep</span> apple fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412135702730.png" alt="image-20220412135702730" tabindex="0" loading="lazy"><figcaption>image-20220412135702730</figcaption></figure><h3 id="_5-2-or-条件" tabindex="-1"><a class="header-anchor" href="#_5-2-or-条件" aria-hidden="true">#</a> 5.2 or 条件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
<span class="token comment"># 方式一： -E (E需要大写)</span>
<span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;string1|string2&#39;</span> filename
<span class="token comment"># 方式二： egrep</span>
<span class="token function">egrep</span> <span class="token string">&#39;string1|string2&#39;</span> filename

<span class="token comment"># 示例</span>
<span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;apple|banana&#39;</span>  fruits.txt
<span class="token function">egrep</span> apple<span class="token operator">|</span>banana&#39;  fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412135839507.png" alt="image-20220412135839507" tabindex="0" loading="lazy"><figcaption>image-20220412135839507</figcaption></figure><h3 id="_5-3-忽略大小写" tabindex="-1"><a class="header-anchor" href="#_5-3-忽略大小写" aria-hidden="true">#</a> 5.3 忽略大小写</h3><p>默认情况下，grep区分大小写，这意味着您必须精确搜索大写的字符串。通过使用-i开关告诉grep忽略大小写，可以避免这种情况。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
<span class="token function">grep</span> <span class="token parameter variable">-i</span> string filename
<span class="token comment"># 示例</span>
<span class="token function">grep</span> <span class="token parameter variable">-i</span> apple fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412140005854.png" alt="image-20220412140005854" tabindex="0" loading="lazy"><figcaption>image-20220412140005854</figcaption></figure><h3 id="_5-4-搜索精确的字符串-禁用正则表达式" tabindex="-1"><a class="header-anchor" href="#_5-4-搜索精确的字符串-禁用正则表达式" aria-hidden="true">#</a> 5.4 搜索精确的字符串 (禁用正则表达式):</h3><p>在上面的示例中，每当我们在文档中搜索字符串“ apple”时，grep也会在输出中返回“ pineapple”。为了避免这种情况，并严格搜索“ apple”，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 示例</span>
<span class="token function">grep</span> <span class="token string">&quot;\\&lt;apple\\&gt;&quot;</span> fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412140216431.png" alt="image-20220412140216431" tabindex="0" loading="lazy"><figcaption>image-20220412140216431</figcaption></figure><h3 id="_5-5-带行号的grep" tabindex="-1"><a class="header-anchor" href="#_5-5-带行号的grep" aria-hidden="true">#</a> 5.5 <em><strong>带行号的Grep</strong></em></h3><p>要显示搜索字符串所在的行数，请使用-n开关。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
<span class="token function">grep</span> <span class="token parameter variable">-n</span> string filename
<span class="token comment"># 示例</span>
<span class="token function">grep</span> <span class="token parameter variable">-n</span>  apple  fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412140342553.png" alt="image-20220412140342553" tabindex="0" loading="lazy"><figcaption>image-20220412140342553</figcaption></figure><h3 id="_5-6-显示之前和之后的行" tabindex="-1"><a class="header-anchor" href="#_5-6-显示之前和之后的行" aria-hidden="true">#</a> 5.6 <em><strong>显示之前和之后的行</strong></em></h3><p>如果需要更多grep输出上下文，可以使用-c开关在指定的搜索字符串前后显示一行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法 大写的C</span>
<span class="token function">grep</span> <span class="token parameter variable">-C</span> <span class="token number">1</span> string filename
<span class="token comment"># 示例</span>
<span class="token function">grep</span> <span class="token parameter variable">-C</span> <span class="token number">1</span> banana fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412140621158.png" alt="image-20220412140621158" tabindex="0" loading="lazy"><figcaption>image-20220412140621158</figcaption></figure><h2 id="_6-与其他命令配合使用" tabindex="-1"><a class="header-anchor" href="#_6-与其他命令配合使用" aria-hidden="true">#</a> 6 与其他命令配合使用</h2><p>Linux命令的输出通过管道传输到grep，grep就可以仅显示您需要查看的输出。</p><h3 id="_6-1-查找文件是否存在" tabindex="-1"><a class="header-anchor" href="#_6-1-查找文件是否存在" aria-hidden="true">#</a> 6.1 查找文件是否存在</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查找当前目录 .sh结尾的文件</span>
<span class="token function">ls</span> <span class="token operator">|</span><span class="token function">grep</span> .sh
<span class="token comment">#查找当前目录 xx.sh结尾的文件，返回空则证明文件不存在</span>
bin <span class="token function">ls</span> <span class="token operator">|</span><span class="token function">grep</span> xx.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412151129285.png" alt="image-20220412151129285" tabindex="0" loading="lazy"><figcaption>image-20220412151129285</figcaption></figure>`,42),r=[l];function t(c,d){return n(),e("div",null,r)}const o=a(i,[["render",t],["__file","linux-k-grep.html.vue"]]);export{o as default};