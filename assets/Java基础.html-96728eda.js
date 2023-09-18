import{_ as i,W as t,X as p,Z as n,$ as s,a0 as l,Y as a,D as c}from"./framework-4b7e9ff4.js";const d={},o=a(`<h1 id="day01-java基础语法" tabindex="-1"><a class="header-anchor" href="#day01-java基础语法" aria-hidden="true">#</a> day01 -Java基础语法</h1><h2 id="_1、java概述" tabindex="-1"><a class="header-anchor" href="#_1、java概述" aria-hidden="true">#</a> 1、Java概述</h2><h3 id="_1-1-java的起源" tabindex="-1"><a class="header-anchor" href="#_1-1-java的起源" aria-hidden="true">#</a> 1.1 Java的起源</h3><p>​ 语言：计算机有自己独特的语言：比如，java、C（面向过程）C++ （C plus plus cpp）Python、go语言、ruby、erlang、scla</p><p>​ java语言：java语言的由来 詹姆斯·高斯林（James Gosling）</p><p>​ 图灵奖：姚期智 获取图灵奖 （计算机方面的最高奖项，图灵 是一个人，发明计算机）</p><p>跨平台： java 实际上是 jdk这个工具具有跨平台性，jdk可以安装在不同的系统上面</p><p>​ 平台：Windows系统</p><p>​ mac系统</p><p>​ linux系系统</p><h3 id="_1-2-jdk是什么-jre又是什么-java为什么具有跨平台性-java如何配置环境变量" tabindex="-1"><a class="header-anchor" href="#_1-2-jdk是什么-jre又是什么-java为什么具有跨平台性-java如何配置环境变量" aria-hidden="true">#</a> 1.2 JDK是什么？JRE又是什么？java为什么具有跨平台性？Java如何配置环境变量</h3><p>​ JRE：JRE就是JDK里面的编译工具，把java语言，编译成了.class文件</p><p>​ JDK：JDK相当于一些列的工具集，里面包含有JRE、javac javap</p><p>​ JVM: java虚拟机,具有跨平台性,把.class 文件 进行加载、翻译、执行 变成====》计算机可以识别的 二进制 0101010 （字节码）</p><h3 id="_1-3-java通过什么进行编译-notepad-、idea" tabindex="-1"><a class="header-anchor" href="#_1-3-java通过什么进行编译-notepad-、idea" aria-hidden="true">#</a> 1.3 Java通过什么进行编译（NotePad++ 、idea）</h3><p>​ 1.4 动手操作部分</p><ul><li>安装绿色版的JDK1.8 （环境变量的配置）</li><li>安装NotePad++ (记事本Puls)</li><li>idea（强大的Java编译工具,对idea的破解）</li></ul><h2 id="_2、java的第一个程序" tabindex="-1"><a class="header-anchor" href="#_2、java的第一个程序" aria-hidden="true">#</a> 2、Java的第一个程序</h2><p>​ 2.1 Dos命令(和linux系统是有一定区别)</p><p>在Windows系统下</p><table><thead><tr><th>操作</th><th>说明</th></tr></thead><tbody><tr><td>切换盘符</td><td>盘符切换。d:回车，表示切换到d盘</td></tr><tr><td>查看所有的文件</td><td>dir</td></tr><tr><td>进入某一个文件</td><td>cd 文件名称</td></tr><tr><td>退出某一个文件</td><td>cd ..</td></tr><tr><td>进入多级目录</td><td>cd \\aa\\bb</td></tr><tr><td>清屏</td><td>cls</td></tr><tr><td>进入根目录</td><td>cd \\</td></tr><tr><td>退出</td><td>exit</td></tr></tbody></table><p>在Idea中新建文件步骤： 1、先创建一个项目，找到Create new Project 2、新建一个空工程 empty Project 新建一个实际的项目</p><p>​ 在空文件夹下面</p><p>​ project(项目 ，空文件夹)</p><p>​ module1（项目一）</p><p>​ module2（项目二）</p><h3 id="_2-1-第一个helloworld程序" tabindex="-1"><a class="header-anchor" href="#_2-1-第一个helloworld程序" aria-hidden="true">#</a> 2.1 第一个HelloWorld程序</h3><p>​ 规则：(阿里巴巴规范)</p><p>​ 包名：其实也是一个文件夹，命名规则：都是小写字母，一般使用所在公司的网址 倒写</p><p>​ 类名： 也是需要自己定义，首字母需要大写</p><p>​ 方法名：</p><h3 id="_2-2-注释" tabindex="-1"><a class="header-anchor" href="#_2-2-注释" aria-hidden="true">#</a> 2.2 注释</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//什么是注释？   对一段代码进行解释说明  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注释的分类：</p><ul><li><mark>单行注释 // ctrl+/ 定位到需要注释代码的当前行</mark></li><li><mark>多行注释 /* dshifaof*/ Ctrl+shift+/ 此时需要选中 被注释的代码</mark></li><li>文档注释 /** fsdahifds */</li></ul><p>注意：单行注释 可以进行嵌套</p><p>​ 多行注释 是否可以嵌套多行注释呢？</p><p>​ 多行注释，不能嵌套多行注释 可以嵌套单行注释</p><p>注释：被注释的代码或者文字，不会被编译器编译、解释</p><h3 id="_2-3-关键字" tabindex="-1"><a class="header-anchor" href="#_2-3-关键字" aria-hidden="true">#</a> 2.3 关键字</h3><p>什么是关键字， 关键字其实就是jdk里面自带的，不需要认为的自己定义，jdk1.8 里面 有很多的jar包 这些都是java官方自己提供的，不需要使用者自己定义。</p><p>特点：</p><ul><li>所有的关键字都是小写</li><li>关键字在idea编译器中，都会高亮显示，例如第一个Helloworld程序中的public class static 等</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>ygtong</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/06/16:10
 * @Description: 此编辑页面是做社么得
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//什么是注释？   //对一段代码进行解释说明</span>

        <span class="token comment">/*fdsajff dsf as fds
                //fdsaiofnas

         */</span>

        <span class="token comment">//System.out.println(&quot;fdsaafasf &quot;);</span>
      <span class="token comment">/*  System.out.println(&quot;fadskfa fadsf dsah f&quot;);
        fdashifasd fdsafjo
                jfadsfdsa
                        jsdakgsad */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-常量" tabindex="-1"><a class="header-anchor" href="#_2-4-常量" aria-hidden="true">#</a> 2.4 常量</h3><p>​ 概念：在程序运行过程中，值不会发生改变</p><p>常量的分类：</p><p>​ 字符串常量 例 “发大水发你双方都” “ab”</p><p>​ 字符常量：‘a’ ‘b’</p><p>​ 整型常量 23 -12 55</p><p>​ 小数常量：0.1 2.3</p><p>​ 布尔常量： true false 对 错</p><h3 id="_2-5-java的基本数据类型" tabindex="-1"><a class="header-anchor" href="#_2-5-java的基本数据类型" aria-hidden="true">#</a> 2.5 Java的基本数据类型</h3><p>​ 计算机最小的信息单元 bit</p><p>​ 计算机最小的存储单元 ：byte</p><p>换算关系：</p><p>​ 1byte = 8bit位</p><p>byte kb mb gb Tb pb 。。。。换算关系</p><p>1kb = 1024byte</p><p>mb = 1024kb</p><p>gb = 1024mb</p><p>tb = 1024gb</p><p>pb = 1024tb</p><p>计算机组成原理里面：</p><p>​ 01010110 换算成10进制 0<em>20 +1</em></p><p>​</p><p><mark>java的基本数据类型</mark></p><table><thead><tr><th>类型</th><th>（内存占用）</th><th>取值范围</th></tr></thead><tbody><tr><td>byte 字节</td><td>1</td><td>（-128） - 127</td></tr><tr><td>short （短整型）</td><td>2</td><td></td></tr><tr><td>int （整型）</td><td>4</td><td></td></tr><tr><td>long（长整形）</td><td>8</td><td></td></tr><tr><td>float （1.3L 此时表示是float类型的）</td><td>4</td><td></td></tr><tr><td>double （1.3 默认是double类型的）</td><td>8</td><td></td></tr><tr><td>char （‘ ’）</td><td>2</td><td></td></tr><tr><td>boolean （true false）</td><td>1</td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table><h3 id="_2-6-变量" tabindex="-1"><a class="header-anchor" href="#_2-6-变量" aria-hidden="true">#</a> 2.6 变量</h3><ul><li>变量的定义格式： 基本数据类型 变量名 = 初始值； （变量名，其中变量名可以自己定义）</li></ul><p>需要会的：变量的定义 然后使用，并在控制台上进行打印输出</p><p>回顾：</p><ol><li>java发展历史 java之父 高斯林 常见的编程语言 ：C C++、Python、java、erlang</li><li><mark>jdk1.8的安装 和环境变量的配置</mark> （实在实在不会了，利用百度，自己手动操作一下如何配置jdk的环境变量）</li><li><mark>idea2020.1 版本的安装和激活破解</mark></li><li>利用idea第一个Helloworld代码的编写 1.如何创建项目 创建empty Project Module(项目) 2 .包名的创建规则 3.类名的创建规则，首字母大写</li><li>注释 （单行注释、多行注释、文档注释）</li><li>关键字 关键字是java公司自己提供的，不需要人为的定义、都是小写，而且在编译器中高亮显示 public static void 等都是关键字。</li><li>常量 (字符串常量、字符常量、小数常量、整数常量、布尔常量等) 值不会发生改变的量，就叫做常量</li><li><mark>java中的数据类型：分为两种，基本数据类型，引用数据类型（String、集合等等）</mark></li><li>java中的基本数据类型（四类八种） <ol><li>整型：byte（1） short（2） int （4） long （8） 整型：默认是int类型</li><li>小数： float（4） double(8) 默认：double类型</li><li>字符类型：char（2）</li><li>布尔类型：boolean (1) 默认值：false</li></ol></li><li>变量： <ol><li>变量的定义格式：</li></ol></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>基本数据类型 变量的名字<span class="token punctuation">(</span>可以自己随意定义，但是尽量做到见名知意<span class="token punctuation">)</span> <span class="token operator">=</span> 初始值<span class="token punctuation">;</span>   <span class="token comment">//分号表示 语句结束</span>
举例：
    <span class="token keyword">int</span> num  <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>   <span class="token comment">//实际读法：把10 赋值给整型变量 num</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>今日：</p><h3 id="_2-7-标识符" tabindex="-1"><a class="header-anchor" href="#_2-7-标识符" aria-hidden="true">#</a> 2.7 标识符</h3><p>​ 概念：用户自己给 类、方法、变量、常量等自己定义的名字</p><p>标识符命名规则：</p><p>​ 1、标识符命名是由大小写字母、数字、下划线、$（英文状态下的美元符号）组成。</p><p>​ <mark>其中</mark> 标识符的首字母不能是 数字</p><p>​ 标识符不能使用关键字、保留字（现在java中暂时没有使用，未来可能会使用的 goto 、const）</p><p>​ ==<mark>第一个字符可以是下划线或者$美元符号（确定）</mark></p><p>​ 标识符 不能使用两个单词 中间 有空格 a b</p><p>例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>jiupai<span class="token punctuation">.</span>day01</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/07/16:05
 * @Description:
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>


       <span class="token comment">//大小写字母、数字  下划线   $</span>
        <span class="token keyword">int</span> <span class="token constant">NUM</span>  <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token comment">//在同一个作用域中 {}   不能够出现两个相同的变量名</span>
<span class="token comment">//        int num = 20;</span>
        <span class="token keyword">int</span> $num <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token comment">//        int 2num =20;     标识符的第一个字符不能是数字</span>
<span class="token comment">//        int a a =20;   //标识符如果有多个单词，中间不能使用空格</span>

<span class="token comment">//        long static = 10;  //关键字不能够做标识符(变量名)</span>
<span class="token comment">//        long goto =10;    //保留字不能够做标识符</span>
<span class="token comment">//        long  const =10;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-java基本数据类型转换" tabindex="-1"><a class="header-anchor" href="#_2-8-java基本数据类型转换" aria-hidden="true">#</a> 2.8 java基本数据类型转换</h3><ol><li><h4 id="自动类型转换" tabindex="-1"><a class="header-anchor" href="#自动类型转换" aria-hidden="true">#</a> 自动类型转换</h4><ol><li>表示从内存范围小的转换成大的</li></ol></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>把一个表示数据范围小的数值或者变量赋值给另一个表示数据范围大的变量。这种转换方式是自动的，直接书写即
可
例如：
    
        <span class="token keyword">int</span>  a <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">//内存4</span>
        <span class="token keyword">double</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><h4 id="强制类型转换" tabindex="-1"><a class="header-anchor" href="#强制类型转换" aria-hidden="true">#</a> 强制类型转换</h4><p>1、把一个表示数据范围大的数值或者变量赋值给另一个表示数据范围小的变量。 强制类型转换格式：<mark>目标数据类型 变量名 = (目标数据类型)值或者变量;</mark></p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
        <span class="token keyword">double</span> c <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c:&quot;</span><span class="token operator">+</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> d <span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>c<span class="token punctuation">;</span>  <span class="token comment">//强制类型转换 会丢失精度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>特殊情况  long(大)====&gt;float
//long ==》folat类型的

long f = 10;

float g = f;
double h = f;
double ff =g;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="day02-java基础语法" tabindex="-1"><a class="header-anchor" href="#day02-java基础语法" aria-hidden="true">#</a> day02 Java基础语法</h1><h1 id="_1、运算符" tabindex="-1"><a class="header-anchor" href="#_1、运算符" aria-hidden="true">#</a> 1、运算符</h1><h3 id="_1-1-算数运算符" tabindex="-1"><a class="header-anchor" href="#_1-1-算数运算符" aria-hidden="true">#</a> 1.1 算数运算符</h3><p>算数运算符：数学上 + - * / 取余（取模）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span>  a  <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> c  <span class="token operator">=</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test2</span> <span class="token punctuation">{</span>
    <span class="token comment">//main方法是程序的入口,程序启动，先找的 main</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1、算数表达式</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

        <span class="token comment">//+</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//-</span>
        <span class="token keyword">int</span> d <span class="token operator">=</span> a<span class="token operator">-</span>b<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//*</span>
        <span class="token keyword">int</span> e <span class="token operator">=</span> a<span class="token operator">*</span>b<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//*</span>
        <span class="token keyword">int</span> f <span class="token operator">=</span> b<span class="token operator">/</span>a<span class="token punctuation">;</span>

        <span class="token keyword">float</span> ff <span class="token operator">=</span> b<span class="token operator">/</span>a<span class="token punctuation">;</span> <span class="token comment">//保留几位小数  1.81 （）学完APi之后</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ff<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//% 取余（取模）  a =1  b =2</span>

        <span class="token keyword">int</span> fff <span class="token operator">=</span> b<span class="token operator">%</span>a<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>fff<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

注意：<span class="token operator">/</span>   和 <span class="token operator">%</span> 
    <span class="token number">1</span> <span class="token operator">/</span>  表示除法 ，在java中 结果取整数取商
    <span class="token number">2</span> <span class="token operator">%</span>  表示取余 ，在java中 结果取余数
    
<span class="token comment">//  字符串的拼接：</span>
    

        <span class="token comment">//不同的数据类型操作呢?</span>
        <span class="token keyword">char</span> aaa <span class="token operator">=</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> bbb <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">// 不同数据类型操作，先把小的自动转换成大的 ，然后再进行操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aaa<span class="token operator">+</span>bbb<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//字符串的操作</span>

        <span class="token keyword">int</span> aaaa <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> aaaaa <span class="token operator">=</span><span class="token number">107</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">+</span><span class="token char">&#39;a&#39;</span><span class="token operator">+</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//表示字符串的拼接  &quot;107&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>回顾：</mark></p><ul><li>标识符（命名规则,由大小写英文字母、数字、__、$可以做标识符，标识符中的大小写是区分的）</li><li>开头不能使用数字 不能使用关键字、保留字（goto、const 现在暂时不使用，未来可能会使用）</li><li>如果标识符用2个单词命名，中间不能有空格</li><li>其他命名规则基本都符合</li></ul><p>java中数据类型：基本数据类型和引用数据类型。</p><p>基本数据类型：</p><p>​ 整型：byte short int long 默认是 ：int类型</p><p>​ 浮点型：float double 默认是 double类型</p><p>​ 字符型： char（2）</p><p>​ 布尔：boolean （1）</p><p>基本数据类型的转换规则：</p><p>​ 自动转换 （小-》大） byte short <mark>&gt;int <mark>&gt;long</mark></mark>==&gt;&gt;float======》double类型的</p><p>​ 特殊的：char <mark>》int long</mark>=》float</p><p>​ ‘a’ 97 A 65 0 48</p><p>​ 强制类型转换：</p><p>​ 强制类型转换：从大的变成小的 规则：int a = （int）8L</p><p>1、把一个表示数据范围大的数值或者变量赋值给另一个表示数据范围小的变量。 强制类型转换格式：<mark>目标数据类型 变量名 = (目标数据类型)值或者变量;</mark></p><p>运算符：算数运算符：</p><p>​ 除法：取得结果是 商</p><p>​ 取余：取得结果是余数</p><h3 id="_1-2-赋值运算符" tabindex="-1"><a class="header-anchor" href="#_1-2-赋值运算符" aria-hidden="true">#</a> 1.2 赋值运算符</h3><table><thead><tr><th>符号</th><th>作用</th><th>说明</th></tr></thead><tbody><tr><td>=</td><td>赋值（右边赋值给左边）</td><td>int a =10;把10赋值给变量 a</td></tr><tr><td>-=</td><td>减后赋值</td><td>int a -=10 把a-10的值重新赋值给a</td></tr><tr><td>+=</td><td>加后赋值</td><td>int a +=10 把a+10的值重新赋值给a</td></tr><tr><td>*=</td><td>乘后赋值</td><td>int a <em>=10 把a</em>10的值重新赋值给a</td></tr><tr><td>/=</td><td>除后赋值</td><td>int a /=10 把a/10的值重新赋值给a</td></tr><tr><td>%=</td><td>取余后赋值</td><td>int a %=10 把a%10的值重新赋值给a</td></tr></tbody></table><p>单个值的话：</p><p>int a =10；</p><p>++a a 的值是11</p><p>a++ a的结果也是 11</p><p><mark>注意：</mark></p><ol><li>扩展运算符，隐含了强制类型转换</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>short s =10;
s =(short) (s+10);  //不能够自己主动进行强制转换

//扩展运算符：+=   -=   *= 等等,隐含了强制转换

s+=10;    //s=s+10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多个值计算：</p><p>int x =10；</p><p>int y =x++; //求 x = 11 y=10</p><p>int y2 =++x x=11 y2 = 12</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int x  =10;

int y =x++;   //求  x =  11            y=10

System.out.println(x);
System.out.println(y);


System.out.println(&quot;======================&quot;);


int y2 =++x;  //       x=11            y2 = 11

System.out.println(x);

System.out.println(y2);

//   练习题

=======================================================================================================

public class Test3 {
    public static void main(String[] args) {


        int x = 10;
        int a =x++;   //a  10  x  11
        int b =x++;   //b   11  x 12 
        int c =x++;   //c 12   x 13
        

        int y = x++ + x++ + x++;    //30   33     33
        
        
        int y1 =a+b+c;

        System.out.println(y);

        System.out.println(x);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-关系运算符" tabindex="-1"><a class="header-anchor" href="#_1-3-关系运算符" aria-hidden="true">#</a> 1.3 关系运算符</h3><ul><li>== != &gt; &gt;= &lt; &lt;= 比较的结果 是boolean类型，结果要么true 要么false</li></ul><p>注意：= 和 ==</p><p>​ = 表示的是赋值 运算</p><p>== 表示 等于 就是关系表达式</p><h3 id="_1-4-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_1-4-逻辑运算符" aria-hidden="true">#</a> 1.4 逻辑运算符</h3><p>逻辑运算符： 与 或 非 &amp; | ! 举例 ：true &amp; true true true | false 有一个为true即为true</p><p>int i = 10; int j = 20; int k = 30;</p><p>&amp;&amp; 和 &amp;有什么区别？ a&amp;&amp;b</p><p>​ &amp;&amp; 具有短路效果，a为false b不用再判断，直接输出false 当a为true的时候，需要判断第二个。</p><p>​ &amp; a&amp;b 不管a的结果是啥，b都需要进行判断</p><p>|| 和| 有什么区别？</p><p>a||b 当a为true的时候，b不需要判断，直接可以输出结果，当a为false的时候，b需要判断</p><p>a|b 不管a为何值，b都需要判断。</p><p>符号 作用 说明 &amp;&amp; 短路与 作用和&amp;相同，但是有短路效果 || 短路或 作用和|相同，但是有短路效果 短路逻辑运算符 在逻辑与运算中，只要有一个表达式的值为false，那么结果就可以判定为false了，没有必要将所有表达式的值都 计算出来，短路与操作就有这样的效果，可以提高效率。同理在逻辑或运算中，一旦发现值为true，右边的表达式 将不再参与运算。 逻辑与&amp;，无论左边真假，右边都要执行。 短路与&amp;&amp;，如果左边为真，右边执行；如果左边为假，右边不执行。 逻辑或|，无论左边真假，右边都要执行。 短路或||，如果左边为假，右边执行；如果左边为真，右边不执行。</p><p>优点：节省计算机资源(&amp;&amp; ||)</p><h3 id="_1-5-三元运算符" tabindex="-1"><a class="header-anchor" href="#_1-5-三元运算符" aria-hidden="true">#</a> 1.5 三元运算符</h3><p>​ 格式：</p><p>​ 关系表达式 ? 表达式1：表达式2</p><p>int a =10； int b =11；</p><p>​ // 语言解释：a&gt;b？ true ：false</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Test5 {
    public static void main(String[] args) {

        int i = 10;
        int j = 20;

        String s = i &gt; j ? &quot;111&quot; : &quot;222&quot;;

        System.out.println(s);


    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 案例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package cn.jiupai.day01;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/08/15:55
 * @Description:
 * 、需求：一座寺庙里住着三个和尚，已知他们的身高分别为150cm、210cm、165cm，
 * 请用程序实现获取这三个和尚的最高身高，求三个和尚身高最高的
 */
public class Test7 {
    public static void main(String[] args) {




        int a =150;
        int b =210;
        int c =165;





      int heshagn1 =a;
      int heshagn2 =b;
      int heshagn3 =c;


      //求的是和尚1 和和尚2之间的最大值
         int tempWeight = heshagn1 &gt; heshagn2 ? heshagn1 : heshagn2;


         int  max = tempWeight&gt;heshagn3?tempWeight:heshagn3;

        System.out.println(max);

//        int tempWeight = heshagn1 &gt; heshagn2 ? heshagn1 : heshagn2;
//
//        int maxWeight = tempWeight &gt; heshagn3 ? tempWeight : heshagn3;
//
//        System.out.println(&quot;三个和尚中身高最高的是&quot;+maxWeight);


//        int s1 = heshagn1 &gt; heshagn2 ? heshagn1 : heshagn2;


    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2、键盘录入" tabindex="-1"><a class="header-anchor" href="#_2、键盘录入" aria-hidden="true">#</a> 2、键盘录入</h1><p>​ 键盘录入的三步：</p><p>​ 1、创建Scanner对象</p>`,155),u={href:"http://System.in",target:"_blank",rel:"noopener noreferrer"},r=a('<p>​ 2、System.out.println(&quot;请输入XXXX&quot;)</p><p>​ 3、通过变量名 接收键盘录入的值</p><p>​ int a = scanner.nextInt（）</p><p>题目：请键盘录入三个数，并比较三个数中的最大值？</p><p>回顾：</p><p>​ 运算符：</p><p>​ 算数运算符</p><p>​ 关系运算符</p><p>​ 逻辑运算符 (&amp; | ! ^ &amp;&amp; ||) 其中 双与和双或在一定条件下，是有短路效果的</p><p>​ 赋值运算符（i++ ++i） i++先赋值 再自增1 ++i 先自增1 在 赋值</p><p>​ 三运运算符(格式a&gt;b?a:b)</p><h1 id="_3、流程控制语句" tabindex="-1"><a class="header-anchor" href="#_3、流程控制语句" aria-hidden="true">#</a> 3、流程控制语句</h1><h3 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句" aria-hidden="true">#</a> if语句</h3>',13),v=n("ul",null,[n("li",null,[s("顺序结构 (代码从上到下执行) "),n("ul",null,[n("li",null,"分支结构（if switch） 可以控制语句执行的步骤"),n("li",{"语句体;":""},"格式：if(关系表达式)")])])],-1),m=a(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span>（关系表达式）<span class="token punctuation">{</span>

​		sout。。。

<span class="token punctuation">}</span>	<span class="token keyword">else</span><span class="token punctuation">{</span>

fjkasjfl

<span class="token punctuation">}</span>

<span class="token comment">//第三种格式</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>关系表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
	语句体<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span>（关系表达式）<span class="token punctuation">{</span>
    语句体；
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>
<span class="token punctuation">.</span>
<span class="token keyword">else</span><span class="token punctuation">{</span>
    语句体
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="switch语句" tabindex="-1"><a class="header-anchor" href="#switch语句" aria-hidden="true">#</a> switch语句</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>格式：

   <span class="token keyword">switch</span><span class="token punctuation">(</span>关系表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>

		case1<span class="token operator">:</span> 
           语句体<span class="token punctuation">;</span>
           <span class="token keyword">break</span><span class="token punctuation">;</span><span class="token comment">//表示结束当前的switch语句</span>
           
         case2：
             语句体；
             <span class="token keyword">break</span>
             
          <span class="token keyword">default</span>：
             	语句体；
             	<span class="token keyword">break</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for循环结构" tabindex="-1"><a class="header-anchor" href="#for循环结构" aria-hidden="true">#</a> for循环结构</h3><p>for循环 while循环 do while循环 都是循环语句</p><p>格式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">for</span>（初始条件；判断条件；结束条件）<span class="token punctuation">{</span>
        循环体<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回顾：</p><ol><li>水仙花数：</li></ol><p>789 （分别求个位、十位、百位）</p><p>个位：789 %10</p><p>十位：789/10%10</p><p>百位：789/100</p><ol><li>for循环的格式</li></ol><p>for(初始化语句；结束条件；控制语句){</p><p>​ 方法体</p><p>}</p><p>求1-10之间的偶数和</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> sum <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        sum <span class="token operator">=</span>sum<span class="token operator">+</span>i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h3><p>格式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>初始化语句<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>条件判断语句<span class="token punctuation">)</span> <span class="token punctuation">{</span>
循环体语句<span class="token punctuation">;</span>
条件控制语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>                            
<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>                      
    sum <span class="token operator">=</span> sum<span class="token operator">+</span>i；  循环体语句
        i<span class="token operator">++</span>；
<span class="token punctuation">}</span>


<span class="token keyword">do</span><span class="token punctuation">{</span>

​	sum <span class="token operator">=</span>sum<span class="token operator">+</span>i<span class="token punctuation">;</span>

​	i<span class="token operator">++</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">)</span>




<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    sum<span class="token operator">=</span>sum<span class="token operator">+</span>i；
        
        <span class="token keyword">break</span><span class="token punctuation">;</span>  表示结束当前的循环
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="do-while循环" tabindex="-1"><a class="header-anchor" href="#do-while循环" aria-hidden="true">#</a> do While循环</h3><p>初始化语句</p><p>do{</p><p>​ sum =sum+i;</p><p>​ i++;</p><p>}while(i&lt;=10)</p><p>回忆：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span>、<span class="token keyword">for</span>循环
<span class="token number">2</span>、<span class="token keyword">while</span>循环
<span class="token number">3</span>、<span class="token keyword">do</span>  <span class="token keyword">while</span>循环
 
    对比三种循环方式：

<span class="token keyword">for</span>循环和<span class="token keyword">while</span>循环先判断条件是否成立，然后决定是否执行循环体（先判断后执行）
<span class="token keyword">do</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">while</span>循环先执行一次循环体，然后判断条件是否成立，是否继续执行循环体（先执行后判断）
<span class="token keyword">for</span>循环和<span class="token keyword">while</span>的区别
条件控制语句所控制的自增变量，因为归属<span class="token keyword">for</span>循环的语法结构中，在<span class="token keyword">for</span>循环结束后，就不能再次被访
问到了
条件控制语句所控制的自增变量，对于<span class="token keyword">while</span>循环来说不归属其语法结构中，在<span class="token keyword">while</span>循环结束后，该变
量还可以继续使用
死循环（无限循环）的三种格式
<span class="token number">1.</span> <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token number">2.</span> <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token number">3.</span> <span class="token keyword">do</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何跳出循环以及结束循环</p><p>​ 结束本次循环，继续下次循环 continue；</p><p>​ 直接结束循环; break;</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>jiupai<span class="token punctuation">.</span>day01</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/12/15:41
 * @Description:
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test18</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>



    <span class="token comment">//continue  只能用在循环里面,结束本次循环，继续下一次循环</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token operator">==</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//                continue;  结束当前本次循环，继续下一次循环</span>

                <span class="token keyword">break</span><span class="token punctuation">;</span>  直接跳出循环语句
            <span class="token punctuation">}</span>


            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环嵌套概述" tabindex="-1"><a class="header-anchor" href="#循环嵌套概述" aria-hidden="true">#</a> 循环嵌套概述：</h3><p>在for循环里面，还有一个for循环;</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>jiupai<span class="token punctuation">.</span>day01</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/12/15:41
 * @Description:
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test18</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>



    <span class="token comment">//continue  只能用在循环里面,结束本次循环，继续下一次循环</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token operator">==</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//                continue;</span>

                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>


            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、生成随机数" tabindex="-1"><a class="header-anchor" href="#_4、生成随机数" aria-hidden="true">#</a> 4、生成随机数</h2><p>1、创建生成随机数的对象</p><p>Random rd = new Random()；</p><h1 id="day04-数组" tabindex="-1"><a class="header-anchor" href="#day04-数组" aria-hidden="true">#</a> day04 数组</h1><h2 id="_1-数组" tabindex="-1"><a class="header-anchor" href="#_1-数组" aria-hidden="true">#</a> 1 数组</h2><p>1.1 什么是数组？</p><p>数组就是存储同一种数据类型的容器、长度是固定的，不可变。例如：</p><p>数组的定义格式：</p><p>​ 动态数组的初始化方式定义： 数据类型[] 数组的变量名 = new 数据类型[长度]</p><p>​ int[] arr = new int[10]; 默认存储的值为：都是0</p><p>静态的数组定义方式： 基本数据类型 [] 数组的变量名字 ={2,1,3,4,5,7};</p><p>​ int[] arr = {1,2,3,4,5,6,7}；</p><h2 id="_1-2-数组的索引" tabindex="-1"><a class="header-anchor" href="#_1-2-数组的索引" aria-hidden="true">#</a> 1.2 数组的索引</h2><p>动态数组：</p><p>​ int[] arr = new int[10]</p><p>​ 位置、索引的概念：在数组里面存的每一个数据，都有一个编号.</p><p>数组中的两个经典错误：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token comment">//        System.out.println(arr[3]);   //ArrayIndexOutOfBoundsException: 3  索引越界异常</span>

        <span class="token comment">//报错</span>

        arr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//空指针异常   NullPointerException</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、数组的定义方式（会）</p><p>2、数组的值和索引（位置）</p><p>3、会求数组的长度</p><p>5、会利用for循环，遍历出数组中的每一个值。</p><h2 id="_1-3-for循环遍历数组" tabindex="-1"><a class="header-anchor" href="#_1-3-for循环遍历数组" aria-hidden="true">#</a> 1.3 for循环遍历数组</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>jiupai<span class="token punctuation">.</span>day04<span class="token punctuation">.</span>test01</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/14/14:31
 * @Description:
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


       <span class="token comment">/*
       这样从数组中取值，不可取
       System.out.println(arr[0]);
        System.out.println(arr[1]);
        System.out.println(arr[2]);
        System.out.println(arr[3]);
        System.out.println(arr[4]);
        System.out.println(arr[5]);
        System.out.println(arr[6]);
        System.out.println(arr[7]);
        System.out.println(arr[8]);*/</span>


       <span class="token comment">/* //利用for循环的方式 循环遍历

        //如何获取数组的长度呢
        System.out.println(arr.length);
        //length表示数组的一个属性,求出的是数组的长度

        System.out.println(&quot;===============================&quot;);

        for (int i=0;i&lt;arr.length;i++){

            System.out.println(arr[i]);
        }*/</span>



    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4 案例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> int[] arr = {2,22,4,8,99,34};
 最大值获取：从数组的所有元素中找出最大值。
* 实现思路：
* 定义变量，保存数组0索引上的元素
* 遍历数组，获取出数组中的每个元素
* 将遍历到的元素和保存数组0索引上值的变量进行比较
* 如果数组元素的值大于了变量的值，变量记录住新的值
* 数组循环遍历结束，变量保存的就是数组中的最大值
public class Test3 {
    public static void main(String[] args) {

        //静态初始化定义数组
        int[] arr = {2,22,4,8,99,34};
        //求出数组中的最大值，利用数组的思想求最大值
        int max = arr[4];
        for (int i = 0; i &lt; arr.length; i++) {
            //取出来每一个值，相互进行比较
            //利用if语句比较大小
            if (arr[i]&gt;max) {
                max = arr[i];
            }
        }
        System.out.println(&quot;最大值为：&quot;+max);

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,63);function k(b,h){const e=c("ExternalLinkIcon");return t(),p("div",null,[o,n("p",null,[s("​ Scanner scanner = new Scanner("),n("a",u,[s("System.in"),l(e)]),s(") //Scanner对象是java本身就有的")]),r,v,m])}const g=i(d,[["render",k],["__file","Java基础.html.vue"]]);export{g as default};
