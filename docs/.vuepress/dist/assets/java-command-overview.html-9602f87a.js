import{_ as s,W as n,X as l,Z as e,$ as a,a0 as d,Y as r,D as t}from"./framework-4b7e9ff4.js";const c={},o=r(`<h1 id="java命令参数" tabindex="-1"><a class="header-anchor" href="#java命令参数" aria-hidden="true">#</a> Java命令参数</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p><code>java</code> 命令用于启动 java 应用：它首先会启动 java 运行时环境（JRE），然后加载指定的类，调用类的 <code>main()</code> 方法。<code>main()</code> 方法必须定义为 <code>public</code> 和 <code>static</code> 的，并且不返回任何值，参数是 String 类型的数组，该方法的形式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static void main(String[] args)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在通过 <code>java</code> 命令启动应用时，有一系列的可选参数，使用时需根据应用场景选择合适的参数</p><h2 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法" aria-hidden="true">#</a> 2. 语法</h2><p><code>java</code> 命令支持两种启动方式：</p><ol><li><p>一种是指定要执行的 java 类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java [options] classname [args]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>另一种是指定要执行的 jar 包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java [options] -jar filename [args]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>其中每一项的含义如下：</p><ul><li>options 是可选项，选项之间使用空格分割</li><li>classname 是要加载的类的名字</li><li>filename 是要执行的 java 压缩文件（JAR）的名字，需要和 <code>-jar</code> 搭配使用</li><li>args 是传递给 <code>main()</code> 方法的参数，使用空格分割</li></ul><h2 id="_3-选项" tabindex="-1"><a class="header-anchor" href="#_3-选项" aria-hidden="true">#</a> 3. 选项</h2><p><code>java</code> 命令支持一系列选项，它们可以分为如下几类：</p><ul><li>标准选项</li><li>非标准选项</li><li>运行时高级选项</li><li>JIT 编译器高级选项</li><li>可服务性高级选项</li><li>垃圾回收器高级选项</li></ul><h3 id="_3-1-如何定义选项分类" tabindex="-1"><a class="header-anchor" href="#_3-1-如何定义选项分类" aria-hidden="true">#</a> 3.1 如何定义选项分类</h3><ul><li><p>标准选项</p><p>所有 java 虚拟机（JVM）都要保证支持标准选项，这些选项用于通用类型的操作，例如检查 JRE 版本、设置 class path 等。</p></li><li><p>非标准选项</p><p>非标准选项以 <code>-X</code> 开头，是适用于 java HotSpot 虚拟机的通用选项，其他虚拟机不保证支持，并且以后还可能会变化。</p></li><li><p>高级选项</p><p>高级选项以 <code>-XX</code> 开头，是开发者选项，用于调节 Java HotSpot 虚拟机的特定功能，通常对系统有特定的要求，并且可能还需要访问系统配置参数的特权。并非所有的虚拟机都支持的这些选项，以后还可能会变化。</p></li></ul><p>Boolean 型选项用于开启或关闭特定功能，这种类型的选项不需要参数。对于 <code>-XX</code> 选项来说，<code>-XX:+OptionName</code> 表示开启功能，<code>-XX:-OptionName</code> 表示关闭功能。</p><h2 id="_4-标准选项" tabindex="-1"><a class="header-anchor" href="#_4-标准选项" aria-hidden="true">#</a> 4. 标准选项</h2><h3 id="_4-1-agentlib-libname-options" tabindex="-1"><a class="header-anchor" href="#_4-1-agentlib-libname-options" aria-hidden="true">#</a> 4.1 -agentlib:libname[=options]</h3><p>用于加载指定的本地代理库，选项（options）之间使用逗号（,）分隔。</p><p>例如指定 <code>-agentlib:foo</code> 参数后，JVM 会尝试到 <code>LD_LIBRARY_PATH</code> 系统变量指定的路径（OS X 系统下变量是 <code>DYLD_LIBRARY_PATH</code>）下加载 <code>libfoo.so</code> 类库。</p><p>如下的示例展示了如何加载 HPROF（heap profiling tool）库，并且每隔 20 ms 获取一次 CPU 信息，栈深度为 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-agentlib:hprof=cpu=samples,interval=20,depth=3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这一个示例展示了如何加载 JDWP（Java Debug Wire Protocol），并且在 8000 端口监听 socket 连接，在 main 类加载前暂停：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-agentlib:jdwp=transport=dt_socket,server=y,address=8000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更多本地代理库相关的信息请参考</p>`,25),h=e("p",null,[e("code",null,"java.lang.instrument"),a(" 包的说明")],-1),p={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/instrument/package-summary.html",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"JVM Tools Interface 手册中「本地代理命令行选项」部分",-1),x={href:"http://docs.oracle.com/javase/8/docs/platform/jvmti/jvmti.html#starting",target:"_blank",rel:"noopener noreferrer"},m=r('<h3 id="_4-2-agentpath-pathname-options" tabindex="-1"><a class="header-anchor" href="#_4-2-agentpath-pathname-options" aria-hidden="true">#</a> 4.2 -agentpath:pathname[=options]</h3><p>在指定的绝对路径下加载本地代理库，和 <code>-agentlib</code> 的区别是使用的全路径和类库的文件名</p><h3 id="_4-3-client" tabindex="-1"><a class="header-anchor" href="#_4-3-client" aria-hidden="true">#</a> 4.3 -client</h3><p>选择 Java HotSpot Client 虚拟机。64 位的 JDK（Java SE Development Kit）会忽略该选项，并且使用 Server 虚拟机。</p><h3 id="_4-4-server" tabindex="-1"><a class="header-anchor" href="#_4-4-server" aria-hidden="true">#</a> 4.4 -server</h3><p>选择 Java HotSpot Server 虚拟机。64 位的 JDK 仅支持 Server 虚拟机，所以该选项是默认值。</p><p>要了解不同类型机器默认选择的 JVM，可查看如下页面</p>',7),v={href:"http://docs.oracle.com/javase/8/docs/technotes/guides/vm/server-class.html",target:"_blank",rel:"noopener noreferrer"},g=r(`<h3 id="_4-5-dproperty-value" tabindex="-1"><a class="header-anchor" href="#_4-5-dproperty-value" aria-hidden="true">#</a> 4.5 -Dproperty=value</h3><p>用于设置系统属性（property）值。例如：<code>-Dfoo=&quot;foo bar&quot;</code></p><blockquote><p>-Dname=$AppName -Duser.timezone=Asia/Shanghai</p></blockquote><h3 id="_4-6-d32" tabindex="-1"><a class="header-anchor" href="#_4-6-d32" aria-hidden="true">#</a> 4.6 -d32</h3><p>在 32 位环境下运行程序，如果未安装 32 位环境或者不支持，系统会报告一个错误。</p><h3 id="_4-7-d64" tabindex="-1"><a class="header-anchor" href="#_4-7-d64" aria-hidden="true">#</a> 4.7 -d64</h3><p>在 64 位环境下运行程序。<code>-server</code> 选项会隐式地包含 <code>-d64</code> 选项。</p><h3 id="_4-8-jar-filename" tabindex="-1"><a class="header-anchor" href="#_4-8-jar-filename" aria-hidden="true">#</a> 4.8 -jar filename</h3><p>执行封装在 JAR 文件中的程序。JAR 文件需包含 manifest，其中一行格式为 <code>Main-Class:classname</code>，指定了一个包含 <code>public static void main(String[] args)</code> 方法的类，作为该程序的启动点。</p><p>当使用了 <code>-jar</code> 选项时，所有的用户类都从 JAR 文件中读取，忽略其他的 class path 设置。</p><h3 id="_4-9-showversion" tabindex="-1"><a class="header-anchor" href="#_4-9-showversion" aria-hidden="true">#</a> 4.9 -showversion</h3><p>显示版本信息并且继续执行程序。</p><h3 id="_4-10-version" tabindex="-1"><a class="header-anchor" href="#_4-10-version" aria-hidden="true">#</a> 4.10 -version</h3><p>显示版本信息然后退出程序。</p><h3 id="_4-11-splash-imgname" tabindex="-1"><a class="header-anchor" href="#_4-11-splash-imgname" aria-hidden="true">#</a> 4.11 -splash:imgname</h3><p>显示指定的闪屏图片。例如：要在启动程序时显示 <code>image</code> 目录下的 <code>splash.gif</code> 图片，可使用如下参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-splash:images/splash.gif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-12-verbose-class" tabindex="-1"><a class="header-anchor" href="#_4-12-verbose-class" aria-hidden="true">#</a> 4.12 -verbose:class</h3><p>显示每一次加载类的信息。</p><h3 id="_4-13-verbose-gc" tabindex="-1"><a class="header-anchor" href="#_4-13-verbose-gc" aria-hidden="true">#</a> 4.13 -verbose:gc</h3><p>显示每一次垃圾回收（GC）事件的信息。</p><h3 id="_4-14-verbose-jni" tabindex="-1"><a class="header-anchor" href="#_4-14-verbose-jni" aria-hidden="true">#</a> 4.14 -verbose:jni</h3><p>显示使用的本地方法信息和其他的 JNI（Java Native Interface）活动信息。</p><h2 id="_5-非标准选项" tabindex="-1"><a class="header-anchor" href="#_5-非标准选项" aria-hidden="true">#</a> 5. 非标准选项</h2><p>这些是 Java HotSpot 虚拟机的通用目的选项。</p><h3 id="_5-1-x" tabindex="-1"><a class="header-anchor" href="#_5-1-x" aria-hidden="true">#</a> 5.1 -X</h3><p>显示所有适用于 <code>-X</code> 选项的帮助信息。</p><h3 id="_5-2-xbatch" tabindex="-1"><a class="header-anchor" href="#_5-2-xbatch" aria-hidden="true">#</a> 5.2 -Xbatch</h3><p>禁用后台编译，该参数等价于 <code>-XX:-BackgroundCompilation</code>。默认情况下，JVM 使用一个后台任务进行编译，在编译完成前使用解释模式执行方法。加上该参数后将会在前台编译所有的方法。</p><h3 id="_5-3-xbootclasspath-path" tabindex="-1"><a class="header-anchor" href="#_5-3-xbootclasspath-path" aria-hidden="true">#</a> 5.3 -Xbootclasspath:path</h3><p>设置 boot class 的路径，<code>path</code> 可以是目录、JAR 文件、ZIP 压缩包，中间使用 <code>:</code> 分割。不要使用该选项覆盖 <code>rt.jar</code> 里的类，因为这会违反「JRE binary code license」。另外 <code>-Xbootclasspath/a:path</code> 用于添加路径到默认路径的后面，<code>-Xbootclasspath/p:path</code> 用于添加路径到默认路径的前面。</p><h3 id="_5-4-xcheck-jni" tabindex="-1"><a class="header-anchor" href="#_5-4-xcheck-jni" aria-hidden="true">#</a> 5.4 -Xcheck:jni</h3><p>对 JNI（Java Native Interface）函数执行额外的检查。具体来讲，在处理 JNI 请求前，它会检查传递给 JNI 函数的参数和运行时环境数据。如果检查到任何的不合法数据，JVM 会抛出不可恢复的错误并结束执行。该参数会降低性能。</p><h3 id="_5-5-xcomp" tabindex="-1"><a class="header-anchor" href="#_5-5-xcomp" aria-hidden="true">#</a> 5.5 -Xcomp</h3><p>强制在方法的第一次调用时进行编译。默认情况下，Client 虚拟机（使用 -client 参数）会先执行 1000 次解释执行，Server 虚拟机（-server）是 10000 次，以便获取到足够的信息用于编译。还可以使用 <code>-XX:CompileThreshold</code> 指定编译前解释执行的次数。</p><h3 id="_5-6-xint" tabindex="-1"><a class="header-anchor" href="#_5-6-xint" aria-hidden="true">#</a> 5.6 -Xint</h3><p>仅使用解释模式执行程序。所有的代码都在解释模式下执行，这将无法体验到 JIT（just in time）编译器带来的性能提升。</p><h3 id="_5-7-xinternalversion" tabindex="-1"><a class="header-anchor" href="#_5-7-xinternalversion" aria-hidden="true">#</a> 5.7 -Xinternalversion</h3><p>显示比 <code>-version</code> 更详细的版本信息。</p><h3 id="_5-8-xloggc-filename" tabindex="-1"><a class="header-anchor" href="#_5-8-xloggc-filename" aria-hidden="true">#</a> 5.8 -Xloggc:filename</h3><p>重定向 GC 事件输出信息到指定的文件。该参数和 <code>-verbose:gc</code> 输出的信息类似，如果同时指定则会覆盖后者。使用示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Xloggc:garbage-collection.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-9-xmaxjitcodesize-size" tabindex="-1"><a class="header-anchor" href="#_5-9-xmaxjitcodesize-size" aria-hidden="true">#</a> 5.9 -Xmaxjitcodesize=size</h3><p>指定最大的代码缓存，用于保存 JIT 编译后的代码，该选项和 <code>-XX:ReservedCodeCacheSize</code> 相等。默认的大小是 240 MB。如果使用 <code>-XX:-TieredCompilation</code> 禁用了分层编译，则默认大小是 48M。</p><h3 id="_5-10-xmixed" tabindex="-1"><a class="header-anchor" href="#_5-10-xmixed" aria-hidden="true">#</a> 5.10 -Xmixed</h3><p>使用混合模式执行。热点代码使用编译模式，其他使用解释模式。</p><h3 id="_5-11-xmnsize" tabindex="-1"><a class="header-anchor" href="#_5-11-xmnsize" aria-hidden="true">#</a> 5.11 -Xmnsize</h3><p>设置年轻代的初始容量和最大容量，默认单位是字节。如下是一些示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Xmn256m
-Xmn262144k
-Xmn268435456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，你也可以使用 <code>-XX:NewSize</code> 指定初始容量，使用 <code>-XX:MaxNewSize</code> 指定最大容量。</p><h3 id="_5-12-xmssize" tabindex="-1"><a class="header-anchor" href="#_5-12-xmssize" aria-hidden="true">#</a> 5.12 -Xmssize</h3><p>设置堆的初始容量，默认单位是字节。必须是 1024 的倍数且大于 1 MB。如下是一些示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Xms6291456
-Xms6144k
-Xms6m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果未设置该选项，则初始堆大小为老年代和年轻代分批的容量之和。</p><h3 id="_5-13-xmxsize" tabindex="-1"><a class="header-anchor" href="#_5-13-xmxsize" aria-hidden="true">#</a> 5.13 -Xmxsize</h3><p>设置堆可分配的最大容量，默认单位是字节，该选项和 <code>-XX:MaxHeapSize</code> 相等。必须是 1024 的倍数且大于 2 MB。对于服务器来说，通常将 <code>-Xms</code> 和 <code>-Xmx</code> 设置为相同值。如下是一些示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Xmx83886080
-Xmx81920k
-Xmx80m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57),X={href:"https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/index.html",target:"_blank",rel:"noopener noreferrer"},b=r(`<h3 id="_5-14-xnoclassgc" tabindex="-1"><a class="header-anchor" href="#_5-14-xnoclassgc" aria-hidden="true">#</a> 5.14 -Xnoclassgc</h3><p>禁用类的 GC。这可以节省一些 GC 时间，减少应用程序被打断的次数。开启该参数后，GC 期间不会处理类对象，类对象会一直存活，这将导致更多的永久内存占用，因此需小心使用。</p><h3 id="_5-15-xprof" tabindex="-1"><a class="header-anchor" href="#_5-15-xprof" aria-hidden="true">#</a> 5.15 -Xprof</h3><p>分析正在执行的程序，把分析数据发送到标准输出。该参数可在开发时使用，不要用到生产环境。</p><h3 id="_5-16-xrs" tabindex="-1"><a class="header-anchor" href="#_5-16-xrs" aria-hidden="true">#</a> 5.16 -Xrs</h3><p>减少 JVM 对操作系统信号的使用。</p><p>使用 shutdown hook 可以在应用程序退出（包括 JVM 异常退出）时按顺序执行一些清理工作（比如关闭数据库连接）。JVM 通过捕获系统信号来实现异常退出时的 shutdown hook，它使用 <code>SIGHUP</code>、<code>SIGINT</code> 和 <code>SIGTERM</code> 来初始化正在运行的 shutdown hook。</p><p>JVM 使用了类似的机制实现了 dump 线程栈的功能，它使用的是 <code>SIGQUIT</code> 信号。</p><p>嵌入到 JVM 的程序经常需要捕获 <code>SIGINT</code> 或 <code>SIGTERM</code> 之类的信号，这可能会干扰 JVM 信号处理的 handler，该选项可用于解决此类问题。</p><p>当使用该选项时，JVM 不会修改 <code>SIGINT</code>、<code>SIGHUP</code>、<code>SIGTERM</code> 和 <code>SIGQUIT</code> 信号的掩码（mask），也不会设置用于处理这些信号的 handler。因此使用该参数后：</p><ul><li><code>SIGQUIT</code> 将不会导致线程 dump</li><li>用户代码负责触发 shutdown hook，例如在退出前调用 <code>System.exit()</code></li></ul><h3 id="_5-17-xsssize" tabindex="-1"><a class="header-anchor" href="#_5-17-xsssize" aria-hidden="true">#</a> 5.17 -Xsssize</h3><p>设置线程栈的大小，默认单位为字节，该选项与 <code>-XX:ThreadStackSize</code> 相等。如下是不同平台的默认值：</p><ul><li>Linux/ARM (32-bit): 320 KB</li><li>Linux/i386 (32-bit): 320 KB</li><li>Linux/x64 (64-bit): 1024 KB</li><li>OS X (64-bit): 1024 KB</li><li>Oracle Solaris/i386 (32-bit): 320 KB</li><li>Oracle Solaris/x64 (64-bit): 1024 KB</li></ul><p>如下是将栈大小设置为 1024 KB 的示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Xss1m
-Xss1024k
-Xss1048576
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-运行时高级选项" tabindex="-1"><a class="header-anchor" href="#_6-运行时高级选项" aria-hidden="true">#</a> 6. 运行时高级选项</h2><p>这些选项用于控制 Java HotSpot 虚拟机运行时的行为。</p><h3 id="_6-1-xx-printflagsinitial" tabindex="-1"><a class="header-anchor" href="#_6-1-xx-printflagsinitial" aria-hidden="true">#</a> 6.1 -XX:+PrintFlagsInitial</h3><p>打印 JVM flag 参数的初始值。</p><h3 id="_6-2-xx-printcommandlineflags" tabindex="-1"><a class="header-anchor" href="#_6-2-xx-printcommandlineflags" aria-hidden="true">#</a> 6.2 -XX:+PrintCommandLineFlags</h3><p>打印出现在命令行中的 JVM flag 参数。</p><h3 id="_6-3-xx-disableattachmechanism" tabindex="-1"><a class="header-anchor" href="#_6-3-xx-disableattachmechanism" aria-hidden="true">#</a> 6.3 -XX:+DisableAttachMechanism</h3><p>启用该选项后会禁用 attach 到 JVM 的机制，使得无法使用 <code>jcmd</code>、 <code>jstack</code>、 <code>jmap</code> 、<code>jinfo</code> 等工具。</p><h3 id="_6-4-xx-maxdirectmemorysize-size" tabindex="-1"><a class="header-anchor" href="#_6-4-xx-maxdirectmemorysize-size" aria-hidden="true">#</a> 6.4 -XX:MaxDirectMemorySize=size</h3><p>设置 NIO 可分配的 direct-buffer 的最大容量，默认单位为字节。</p><h3 id="_6-5-xx-usebiasedlocking" tabindex="-1"><a class="header-anchor" href="#_6-5-xx-usebiasedlocking" aria-hidden="true">#</a> 6.5 -XX:-UseBiasedLocking</h3>`,27),_={href:"http://www.oracle.com/technetwork/java/tuning-139912.html#section4.2.5",target:"_blank",rel:"noopener noreferrer"},f=r(`<h3 id="_6-6-xx-usecompressedoops" tabindex="-1"><a class="header-anchor" href="#_6-6-xx-usecompressedoops" aria-hidden="true">#</a> 6.6 -XX:-UseCompressedOops</h3><p>禁用压缩指针。该选项默认开启。压缩指针用于堆内存小于 32 GB 的情况。当开启压缩指针时，使用 32 位的偏移（代替 64 位的指针）表示对象引用。若要在堆大小超过 32 GB 时使用压缩指针，需使用 <code>-XX:ObjectAlignmentInBytes</code> 选项。</p><h2 id="_7-jit-编译器高级选项" tabindex="-1"><a class="header-anchor" href="#_7-jit-编译器高级选项" aria-hidden="true">#</a> 7. JIT 编译器高级选项</h2><p>这些选项用于控制 JIT（just-in-time）编译器在 Java HotSpot 虚拟机中的表现。</p><h3 id="_7-1-xx-compileonly-methods" tabindex="-1"><a class="header-anchor" href="#_7-1-xx-compileonly-methods" aria-hidden="true">#</a> 7.1 -XX:CompileOnly=methods</h3><p>设置仅编译指定的方法。需使用全类名指定要编译的方法。例如只编译 <code>String</code> 类的 <code>length()</code> 方法和 <code>List</code> 类的 <code>size()</code> 方法，可使用如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:CompileOnly=java/lang/String.length,java/util/List.size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为方便使用，它同时还支持 <code>-XX:+PrintCompilation</code> 和 <code>-XX:+LogCompilation</code> 的输出格式，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:CompileOnly=java.lang.String::length,java.util.List::size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-2-xx-doescapeanalysis" tabindex="-1"><a class="header-anchor" href="#_7-2-xx-doescapeanalysis" aria-hidden="true">#</a> 7.2 -XX:+DoEscapeAnalysis</h3><p>启用逃逸分析。该选项默认开启。</p><h3 id="_7-3-xx-initialcodecachesize-size" tabindex="-1"><a class="header-anchor" href="#_7-3-xx-initialcodecachesize-size" aria-hidden="true">#</a> 7.3 -XX:InitialCodeCacheSize=size</h3><p>设置初始代码缓存大小。</p><h3 id="_7-4-xx-inline" tabindex="-1"><a class="header-anchor" href="#_7-4-xx-inline" aria-hidden="true">#</a> 7.4 -XX:+Inline</h3><p>启用方法内联。</p><h3 id="_7-5-xx-inlinesmallcode-size" tabindex="-1"><a class="header-anchor" href="#_7-5-xx-inlinesmallcode-size" aria-hidden="true">#</a> 7.5 -XX:InlineSmallCode=size</h3><p>针对已编译方法，设置应该进行内联的方法的最大大小。默认单位为字节。只有已编译的方法且大小小于该值的才会被内联。它的默认值为 1000 字节</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:InlineSmallCode=1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-6-xx-maxinlinesize-size" tabindex="-1"><a class="header-anchor" href="#_7-6-xx-maxinlinesize-size" aria-hidden="true">#</a> 7.6 -XX:MaxInlineSize=size</h3><p>设置要内联的方法的最大字节码大小。默认单位为字节。它的默认值为 35 字节</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:MaxInlineSize=35
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-可服务化高级选项" tabindex="-1"><a class="header-anchor" href="#_8-可服务化高级选项" aria-hidden="true">#</a> 8. 可服务化高级选项</h2><p>这些选项提供了收集系统信息和执行扩展调试的能力。</p><h3 id="_8-1-xx-heapdumponoutofmemory" tabindex="-1"><a class="header-anchor" href="#_8-1-xx-heapdumponoutofmemory" aria-hidden="true">#</a> 8.1 -XX:+HeapDumpOnOutOfMemory</h3><p>当 JVM 抛出 <code>java.lang.OutOfMemoryError</code> 异常时，使用 HPROF（the heap profiler）将 java 堆 dump 到当前目录。该选项默认禁用。</p><h3 id="_8-2-xx-heapdumppath-path" tabindex="-1"><a class="header-anchor" href="#_8-2-xx-heapdumppath-path" aria-hidden="true">#</a> 8.2 -XX:HeapDumpPath=path</h3><p>与 <code>-XX:+HeapDumpOnOutOfMemoryError</code> 结合起来使用，用来指定 dump 文件的路径和文件名。如下是一个示例，其中 <code>%p</code> 表示当前进程的 ID</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:HeapDumpPath=./java_pid%p.hprof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-垃圾回收器高级选项" tabindex="-1"><a class="header-anchor" href="#_9-垃圾回收器高级选项" aria-hidden="true">#</a> 9. 垃圾回收器高级选项</h2><p>这些选项用来设置 Java HotSpot 使用的垃圾回收器。</p><h3 id="_9-1-xx-cmsinitiatingoccupancyfraction-percent" tabindex="-1"><a class="header-anchor" href="#_9-1-xx-cmsinitiatingoccupancyfraction-percent" aria-hidden="true">#</a> 9.1 -XX:CMSInitiatingOccupancyFraction=percent</h3><p>用于设置老年代使用比例到达多少（0 - 100）时执行 CMS 垃圾回收。默认值是 -1。任何负值都意味着使用 <code>-XX:CMSTriggerRatio</code> 作为初始数值。如下表示设置为 20%</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:CMSInitiatingOccupancyFraction=20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-2-xx-cmstriggerratio-percent" tabindex="-1"><a class="header-anchor" href="#_9-2-xx-cmstriggerratio-percent" aria-hidden="true">#</a> 9.2 -XX:CMSTriggerRatio=percent</h3><p>设置一个百分比，表示当 <code>-XX:MinHeapFreeRatio</code> 指定的值到达多少时执行 CMS 垃圾回收。默认设置为 80%。如下示例将占比设置为 75%</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:CMSTriggerRatio=75
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-3-xx-concgcthreads-threads" tabindex="-1"><a class="header-anchor" href="#_9-3-xx-concgcthreads-threads" aria-hidden="true">#</a> 9.3 -XX:ConcGCThreads=threads</h3><p>设置并发 GC 使用的线程数。例如设置为 2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:ConcGCThreads=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-4-xx-disableexplicitgc" tabindex="-1"><a class="header-anchor" href="#_9-4-xx-disableexplicitgc" aria-hidden="true">#</a> 9.4 -XX:+DisableExplicitGC</h3><p>开启该选项会禁用对 <code>System.gc()</code> 的处理。该选项默认禁用，表示会处理 <code>System.gc()</code> 调用。若开启该选项，JVM 仍会在必要是执行 GC。</p><h3 id="_9-5-xx-g1heapregionsize-size" tabindex="-1"><a class="header-anchor" href="#_9-5-xx-g1heapregionsize-size" aria-hidden="true">#</a> 9.5 -XX:G1HeapRegionSize=size</h3><p>当使用 G1（garbage-first）收集器时，使用该选项设置 java 堆划分后的 region 大小。可设置为 1 MB 到 32 MB 之间。默认 region 大小依赖于堆的大小。如下示例将 region 设置为 16 MB</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:G1HeapRegionSize=16m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-6-xx-maxgcpausemillis-time" tabindex="-1"><a class="header-anchor" href="#_9-6-xx-maxgcpausemillis-time" aria-hidden="true">#</a> 9.6 -XX:MaxGCPauseMillis=time</h3><p>设置最大 GC 暂停时间（单位为毫秒），JVM 将尽最大努力实现它。如下表示设置为 500 ms</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:MaxGCPauseMillis=500
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-7-xx-maxmetaspacesize-size" tabindex="-1"><a class="header-anchor" href="#_9-7-xx-maxmetaspacesize-size" aria-hidden="true">#</a> 9.7 -XX:MaxMetaspaceSize=size</h3><p>设置可分配给 class 元数据（metadata）的最大本地内存。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:MaxMetaspaceSize=256m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-8-xx-maxnewsize-size" tabindex="-1"><a class="header-anchor" href="#_9-8-xx-maxnewsize-size" aria-hidden="true">#</a> 9.8 -XX:MaxNewSize=size</h3><p>设置最大的新生代大小。</p><h3 id="_9-9-xx-maxtenuringthreshold-threshold" tabindex="-1"><a class="header-anchor" href="#_9-9-xx-maxtenuringthreshold-threshold" aria-hidden="true">#</a> 9.9 -XX:MaxTenuringThreshold=threshold</h3><p>设置用于自适应 GC 进入老年代时的最大生存时间（经历多少次 GC）阈值。最大可设置为 15。parallel 收集器默认是 15，CMS 收集器默认是 6。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:MaxTenuringThreshold=10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-10-xx-metaspacesize-size" tabindex="-1"><a class="header-anchor" href="#_9-10-xx-metaspacesize-size" aria-hidden="true">#</a> 9.10 -XX:MetaspaceSize=size</h3><p>设置 class 元数据第一次占用空间到达多少时触发 GC。垃圾回收器会根据 meta 空间的使用情况动态调整该阈值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:MinHeapFreeRatio=25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-11-xx-newratio-ratio" tabindex="-1"><a class="header-anchor" href="#_9-11-xx-newratio-ratio" aria-hidden="true">#</a> 9.11 -XX:NewRatio=ratio</h3><p>设置年轻代和老年代的比值。默认值为 2。如下示例将 young/old 设置为 1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:NewRatio=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-12-xx-newsize-size" tabindex="-1"><a class="header-anchor" href="#_9-12-xx-newsize-size" aria-hidden="true">#</a> 9.12 -XX:NewSize=size</h3><p>设置年轻代的初始占用空间。</p><h3 id="_9-13-xx-survivorratio-ratio" tabindex="-1"><a class="header-anchor" href="#_9-13-xx-survivorratio-ratio" aria-hidden="true">#</a> 9.13 -XX:SurvivorRatio=ratio</h3><p>设置 eden 和 survivor 的比例。默认值为 8。如下示例将 eden/survivor 比例设置为 4</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:SurvivorRatio=4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-14-xx-printgc" tabindex="-1"><a class="header-anchor" href="#_9-14-xx-printgc" aria-hidden="true">#</a> 9.14 -XX:+PrintGC</h3><p>每次 GC 时打印相关信息。该选项默认禁用。</p><h3 id="_9-15-xx-printgcdetails" tabindex="-1"><a class="header-anchor" href="#_9-15-xx-printgcdetails" aria-hidden="true">#</a> 9.15 -XX:+PrintGCDetails</h3><p>每次 GC 时打印相关详情信息。该选项默认禁用。</p><h3 id="_9-16-xx-tlabsize-size" tabindex="-1"><a class="header-anchor" href="#_9-16-xx-tlabsize-size" aria-hidden="true">#</a> 9.16 -XX:TLABSize=size</h3><p>设置单个 TLAB（a thread-local allocation buffer）的初始大小。如果设置为 0，JVM 会自动选择初始大小。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:TLABSize=512k
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-17-设置垃圾收集器类型" tabindex="-1"><a class="header-anchor" href="#_9-17-设置垃圾收集器类型" aria-hidden="true">#</a> 9.17 设置垃圾收集器类型</h3><h4 id="_9-17-1-xx-useconcmarksweepgc" tabindex="-1"><a class="header-anchor" href="#_9-17-1-xx-useconcmarksweepgc" aria-hidden="true">#</a> 9.17.1 -XX:+UseConcMarkSweepGC</h4><p>使用 CMS 作为老年代的垃圾收集器，同时会自动设置 <code>-XX:+UseParNewGC</code> 选项，将 ParNewGC 设置为新生代的垃圾收集器。</p><h4 id="_9-17-2-xx-useg1gc" tabindex="-1"><a class="header-anchor" href="#_9-17-2-xx-useg1gc" aria-hidden="true">#</a> 9.17.2 -XX:+UseG1GC</h4><p>使用 G1（garbage-first）垃圾收集器。</p><h4 id="_9-17-3-xx-useparallelgc" tabindex="-1"><a class="header-anchor" href="#_9-17-3-xx-useparallelgc" aria-hidden="true">#</a> 9.17.3 -XX:+UseParallelGC</h4><p>使用 ParallelGC（parallel scavenge garbage collector）垃圾收集器。默认会设置 <code>-XX:+UseParallelOldGC</code>。</p><h4 id="_9-17-4-xx-useparalleloldgc" tabindex="-1"><a class="header-anchor" href="#_9-17-4-xx-useparalleloldgc" aria-hidden="true">#</a> 9.17.4 -XX:+UseParallelOldGC</h4><p>使用 ParallelOldGC 垃圾收集器处理 full GC。默认会设置 <code>-XX:+UseParallelGC</code>。</p><h4 id="_9-17-5-xx-useparnewgc" tabindex="-1"><a class="header-anchor" href="#_9-17-5-xx-useparnewgc" aria-hidden="true">#</a> 9.17.5 -XX:+UseParNewGC</h4><p>使用 ParNewGC（parallel threads for collection）作为新生代的垃圾收集器。当设置 <code>-XX:+UseConcMarkSweepGC</code> 时会自动启用。</p><h4 id="_9-17-6-xx-useserialgc" tabindex="-1"><a class="header-anchor" href="#_9-17-6-xx-useserialgc" aria-hidden="true">#</a> 9.17.6 -XX:+UseSerialGC</h4><p>使用 SerialGC（serial garbage collector）垃圾收集器</p><h3 id="_9-18-xx-usetlab" tabindex="-1"><a class="header-anchor" href="#_9-18-xx-usetlab" aria-hidden="true">#</a> 9.18 -XX:+UseTLAB</h3><p>在年轻代启用 TLAB（thread-local allocation blocks）。默认开启。</p><h2 id="_10-性能调节示例" tabindex="-1"><a class="header-anchor" href="#_10-性能调节示例" aria-hidden="true">#</a> 10. 性能调节示例</h2><h3 id="_10-1-高吞吐量" tabindex="-1"><a class="header-anchor" href="#_10-1-高吞吐量" aria-hidden="true">#</a> 10.1 高吞吐量</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java -d64 -server -XX:+AggressiveOpts -XX:+UseLargePages -Xmn10g  -Xms26g -Xmx26g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_10-2-低延迟" tabindex="-1"><a class="header-anchor" href="#_10-2-低延迟" aria-hidden="true">#</a> 10.2 低延迟</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java -d64 -XX:+UseG1GC -Xms26g Xmx26g -XX:MaxGCPauseMillis=500 -XX:+PrintGCTimeStamp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_11-我常用的参数配置" tabindex="-1"><a class="header-anchor" href="#_11-我常用的参数配置" aria-hidden="true">#</a> 11. 我常用的参数配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># JVM参数</span>
<span class="token assign-left variable">JVM_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Dname=<span class="token variable">$AppName</span>  -Duser.timezone=Asia/Shanghai -Xms512M -Xmx512M -XX:PermSize=256M -XX:MaxPermSize=512M -XX:+HeapDumpOnOutOfMemoryError -XX:+PrintGCDateStamps  -XX:+PrintGCDetails -XX:NewRatio=1 -XX:SurvivorRatio=30 -XX:+UseParallelGC -XX:+UseParallelOldGC&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>主要设置堆大小和方法区（jdk1.8后元空间）大小，配置具体使用什么gc垃圾收集器，打印gc日志</p><ul><li><p>标准选项</p><ul><li><p>-Dproperty=value</p><p>用于设置系统属性（property）值。例如：<code>-Dfoo=&quot;foo bar&quot;</code></p><ul><li>-Dname=$AppName</li><li>-Duser.timezone=Asia/Shanghai</li></ul></li></ul></li><li><p>非标准选型</p><ul><li><p>-Xmssize</p><p>设置堆的初始容量，默认单位是字节。必须是 1024 的倍数且大于 1 MB。</p><ul><li>-Xms512M</li></ul></li><li><p>-Xmxsize</p><p>设置堆可分配的最大容量，默认单位是字节，该选项和 <code>-XX:MaxHeapSize</code> 相等。必须是 1024 的倍数且大于 2 MB。对于服务器来说，通常将 <code>-Xms</code> 和 <code>-Xmx</code> 设置为相同值。</p><ul><li>-Xmx512M</li></ul></li></ul></li><li><p>垃圾回收器高级选项</p><ul><li><p><s>-XX:PermSize (jdk8 已废弃)</s></p><p><s>JVM中设置永久代<strong>最小</strong>空间大小的参数</s></p><ul><li><s>-XX:PermSize=256M</s></li></ul></li><li><p><s>-XX:MaxPermSize(jdk8 已废弃)</s></p><p><s>JVM中设置永久代<strong>最大</strong>空间大小的参数</s></p><ul><li><s>-XX:MaxPermSize=512M</s></li></ul></li><li><p>-XX:MetaspaceSize（jdk8 新增）</p><p>设置 Metaspace 的初始（和最小大小）</p><ul><li>一般不配置，则 Metaspace 将根据运行时的应用程序需求动态地重新调整大小</li></ul></li><li><p>-XX:MaxMetaspaceSize</p><p>设置 Metaspace 的最大大小</p><ul><li>一般不配置，默认unlimited，这意味着它只受系统内存的限制</li></ul></li><li><p>-XX:+PrintGC</p><p>每次 GC 时打印相关信息。该选项默认禁用。</p><ul><li>-XX:+PrintGCDateStamps</li></ul></li><li><p>-XX:+PrintGCDetails</p><p>每次 GC 时打印相关详情信息。该选项默认禁用。</p><ul><li>-XX:+PrintGCDetails</li></ul></li><li><p>-XX:NewRatio=ratio</p><p>设置年轻代和老年代的比值。默认值为 2</p><ul><li>-XX:NewRatio=1</li></ul></li><li><p>-XX:SurvivorRatio=ratio</p><p>设置 eden 和 survivor 的比例。默认值为 8。也就是Eden:S0:S1=8:1:1。</p><ul><li>XX:SurvivorRatio=30</li></ul></li><li><p>-XX:+UseParallelGC</p><p>使用 ParallelGC（parallel scavenge garbage collector）垃圾收集器。。默认会设置 <code>-XX:+UseParallelOldGC</code>。</p><ul><li>-XX:+UseParallelGC</li></ul></li><li><p>-XX:+UseParallelOldGC</p><p>使用 ParallelOldGC 垃圾收集器处理 full GC。默认会设置 <code>-XX:+UseParallelGC</code>。</p><ul><li>-XX:+UseParallelOldGC</li></ul></li></ul></li><li><p>可服务化高级选项</p><ul><li><p>-XX:+HeapDumpOnOutOfMemory</p><p>当 JVM 抛出 <code>java.lang.OutOfMemoryError</code> 异常时，使用 HPROF（the heap profiler）将 java 堆 dump 到当前目录。该选项默认禁用。</p><ul><li>-XX:+HeapDumpOnOutOfMemoryError</li></ul></li></ul></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,98),z={href:"https://gorden5566.com/post/1024.html",target:"_blank",rel:"noopener noreferrer"};function M(S,C){const i=t("ExternalLinkIcon");return n(),l("div",null,[o,e("ul",null,[e("li",null,[h,e("p",null,[e("a",p,[a("http://docs.oracle.com/javase/8/docs/api/java/lang/instrument/package-summary.html"),d(i)])])]),e("li",null,[u,e("p",null,[e("a",x,[a("http://docs.oracle.com/javase/8/docs/platform/jvmti/jvmti.html#starting"),d(i)])])])]),m,e("p",null,[e("a",v,[a("http://docs.oracle.com/javase/8/docs/technotes/guides/vm/server-class.html"),d(i)])]),g,e("p",null,[a("关于参数优化请查看「"),e("a",X,[a("Java SE HotSpot Virtual Machine Garbage Collection Tuning Guide"),d(i)]),a("」。")]),b,e("p",null,[a("禁用偏向锁。该选项默认开启（-XX:+UseBiasedLocking）。关于偏向锁的设置请参考「"),e("a",_,[a("Java Tuning White Paper"),d(i)]),a("」")]),f,e("p",null,[e("a",z,[a("java 命令参数详解"),d(i)])])])}const j=s(c,[["render",M],["__file","java-command-overview.html.vue"]]);export{j as default};
