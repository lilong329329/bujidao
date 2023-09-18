import{_ as o,W as n,X as r,Z as e,$ as a,a0 as l,Y as i,D as s}from"./framework-4b7e9ff4.js";const h={},c=i('<h1 id="java-io知识体系详解" tabindex="-1"><a class="header-anchor" href="#java-io知识体系详解" aria-hidden="true">#</a> Java IO知识体系详解</h1><h2 id="_1-知识体系" tabindex="-1"><a class="header-anchor" href="#_1-知识体系" aria-hidden="true">#</a> 1. 知识体系</h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/java-io-overview.jpeg" alt="java-io-overview" tabindex="0" loading="lazy"><figcaption>java-io-overview</figcaption></figure><h2 id="_2-相关文章" tabindex="-1"><a class="header-anchor" href="#_2-相关文章" aria-hidden="true">#</a> 2. 相关文章</h2><blockquote><p><strong>A. Java进阶 - IO框架之知识体系</strong>：首先了解下Java IO框架包含什么，同时推荐下如何学习IO框架。</p></blockquote>',5),u={href:"https://pdai.tech/md/java/io/java-io-overview.html",target:"_blank",rel:"noopener noreferrer"},d=e("ul",null,[e("li",null,"本文主要梳理Java IO/NIO/AIO的知识体系")],-1),_=e("blockquote",null,[e("p",null,[e("strong",null,"B. Java进阶 - IO框架之基础IO"),a("：其次对Java基础IO框架进行梳理，包括其分类，使用和源码详解。")])],-1),v={href:"https://pdai.tech/md/java/io/java-io-basic-category.html",target:"_blank",rel:"noopener noreferrer"},p=e("ul",null,[e("li",null,[a("本文主要从"),e("code",null,"传输方式"),a("和"),e("code",null,"数据操作"),a("两个方面分析Java IO的分类")])],-1),I={href:"https://pdai.tech/md/java/io/java-io-basic-design-pattern.html",target:"_blank",rel:"noopener noreferrer"},O=e("ul",null,[e("li",null,"Java I/O 使用了装饰者模式来实现")],-1),f={href:"https://pdai.tech/md/java/io/java-io-basic-code-inputstream.html",target:"_blank",rel:"noopener noreferrer"},m=e("ul",null,[e("li",null,"本文主要从JDK源码角度分析InputStream")],-1),j={href:"https://pdai.tech/md/java/io/java-io-basic-code-outputstream.html",target:"_blank",rel:"noopener noreferrer"},b=e("ul",null,[e("li",null,"本文主要从JDK源码角度分析 OutputStream")],-1),g={href:"https://pdai.tech/md/java/io/java-io-basic-usage.html",target:"_blank",rel:"noopener noreferrer"},J=e("ul",null,[e("li",null,"本文主要介绍Java IO常见类的使用，包括：磁盘操作，字节操作，字符操作，对象操作和网络操作")],-1),k=e("blockquote",null,[e("p",null,[e("strong",null,"C. Java进阶 - IO框架之NIO/AIO等"),a("：然后再对Unix IO模型学习，引入到Java BIO/NIO/AIO相关知识详解。")])],-1),N={href:"https://pdai.tech/md/java/io/java-io-model.html",target:"_blank",rel:"noopener noreferrer"},x=e("ul",null,[e("li",null,"本文主要简要介绍 Unix I/O 5种模型，并对5大模型比较，并重点为后续章节解释IO多路复用做铺垫")],-1),y={href:"https://pdai.tech/md/java/io/java-io-bio.html",target:"_blank",rel:"noopener noreferrer"},B=e("ul",null,[e("li",null,"BIO就是: blocking IO。最容易理解、最容易实现的IO工作方式，应用程序向操作系统请求网络IO操作，这时应用程序会一直等待；另一方面，操作系统收到请求后，也会等待，直到网络上有数据传到监听端口；操作系统在收集数据后，会把数据发送给应用程序；最后应用程序受到数据，并解除等待状态")],-1),w={href:"https://pdai.tech/md/java/io/java-io-nio.html",target:"_blank",rel:"noopener noreferrer"},A=e("ul",null,[e("li",null,"新的输入/输出 (NIO) 库是在 JDK 1.4 中引入的，弥补了原来的 I/O 的不足，提供了高速的、面向块的 I/O")],-1),z={href:"https://pdai.tech/md/java/io/java-io-nio-select-epoll.html",target:"_blank",rel:"noopener noreferrer"},D=e("ul",null,[e("li",null,"本文主要对IO多路复用，Ractor模型以及Java NIO对其的支持")],-1),q={href:"https://pdai.tech/md/java/io/java-io-aio.html",target:"_blank",rel:"noopener noreferrer"},C=e("ul",null,[e("li",null,"本文主要对异步IO和Java中对AIO的支持详解。")],-1),S=e("blockquote",null,[e("p",null,[e("strong",null,"D. Java进阶 - IO框架之开源框架"),a("：最后再对常用的开源框架进行分析和详解。")])],-1),K={href:"https://pdai.tech/md/java/io/java-io-nio-zerocopy.html",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,"这里转一篇Java NIO 零拷贝的实现文章，在此之前建议先理解什么是Linux中零拷贝，可以先看这篇文章。本文从源码着手分析了 Java NIO 对零拷贝的实现，主要包括基于内存映射（mmap）方式的 MappedByteBuffer 以及基于 sendfile 方式的 FileChannel。最后在篇末简单的阐述了一下 Netty 中的零拷贝机制，以及 RocketMQ 和 Kafka 两种消息队列在零拷贝实现方式上的区别。",-1),V={href:"https://pdai.tech/md/java/io/java-io-nio-netty.html",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"Netty是一个高性能、异步事件驱动的NIO框架，提供了对TCP、UDP和文件传输的支持。作为当前最流行的NIO框架，Netty在互联网领域、大数据分布式计算领域、游戏行业、通信行业等获得了广泛的应用，一些业界著名的开源组件也基于Netty构建，比如RPC框架、zookeeper等",-1),L=e("h2",{id:"参考文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文章","aria-hidden":"true"},"#"),a(" 参考文章")],-1),P={href:"https://pdai.tech/md/java/io/java-io-overview.html",target:"_blank",rel:"noopener noreferrer"};function R(M,T){const t=s("ExternalLinkIcon");return n(),r("div",null,[c,e("ul",null,[e("li",null,[e("a",u,[a("Java IO/NIO/AIO - Overview"),l(t)]),d])]),_,e("ul",null,[e("li",null,[e("a",v,[a("Java IO - 分类(传输，操作)"),l(t)]),p]),e("li",null,[e("a",I,[a("Java IO - 设计模式(装饰者模式)"),l(t)]),O]),e("li",null,[e("a",f,[a("Java IO - 源码: InputStream"),l(t)]),m]),e("li",null,[e("a",j,[a("Java IO - 源码: OutputStream"),l(t)]),b]),e("li",null,[e("a",g,[a("Java IO - 常见类使用"),l(t)]),J])]),k,e("ul",null,[e("li",null,[e("a",N,[a("IO 模型 - Unix IO 模型"),l(t)]),x]),e("li",null,[e("a",y,[a("Java IO - BIO 详解"),l(t)]),B]),e("li",null,[e("a",w,[a("Java NIO - 基础详解"),l(t)]),A]),e("li",null,[e("a",z,[a("Java NIO - IO多路复用详解"),l(t)]),D]),e("li",null,[e("a",q,[a("Java AIO - 异步IO详解"),l(t)]),C])]),S,e("ul",null,[e("li",null,[e("p",null,[e("a",K,[a("Java NIO - 零拷贝实现"),l(t)])]),U]),e("li",null,[e("p",null,[e("a",V,[a("Java N(A)IO - 框架: Netty"),l(t)])]),E])]),L,e("p",null,[e("a",P,[a("Java IO知识体系详解"),l(t)])])])}const Q=o(h,[["render",R],["__file","java-io-overview.html.vue"]]);export{Q as default};