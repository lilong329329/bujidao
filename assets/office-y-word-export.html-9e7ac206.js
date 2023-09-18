import{_ as i,W as d,X as t,Z as a,$ as r,a0 as o,Y as n,D as h}from"./framework-4b7e9ff4.js";const c={},l=n('<h1 id="java导出生成word技术选型" tabindex="-1"><a class="header-anchor" href="#java导出生成word技术选型" aria-hidden="true">#</a> java导出生成word技术选型</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>在项目中需要将一些信息导出到word中，目前导出到word大致有6种解决方案</p><ul><li>jacob</li><li>Apache POI</li><li>java2word</li><li>itext</li><li>JSP输出样式</li><li>使用xml</li><li>aspose.words java <ul><li>公司.net团队使用的技术，也有java版本。收费</li></ul></li></ul><h2 id="_2-技术选型" tabindex="-1"><a class="header-anchor" href="#_2-技术选型" aria-hidden="true">#</a> 2. 技术选型</h2><h2 id="pageoffice" tabindex="-1"><a class="header-anchor" href="#pageoffice" aria-hidden="true">#</a> pageoffice</h2><p>集成还是挺方便的，但是要安装它的软件</p><h2 id="_2-1-jacob" tabindex="-1"><a class="header-anchor" href="#_2-1-jacob" aria-hidden="true">#</a> 2.1 Jacob</h2><p>Jacob是Java-COM Bridge的缩写。他在java与微软的COM组件之间构建一座桥梁。使用Jacob自带的DLL动态链接库，并通过JNI的方式实现了在Java平台上对COM程序的调用。DLL动态链接库的生成需要windows平台的支持。该方案只能在windows平台实现，是其局限性。</p><p><strong>弊端</strong>：该方案<strong>只能在windows平台实现</strong></p><h3 id="_2-2-apache-poi" tabindex="-1"><a class="header-anchor" href="#_2-2-apache-poi" aria-hidden="true">#</a> 2.2 Apache POI</h3><p>Apache POI包括一系列的API，它们可以操作基于MicroSoft OLE 2 Compound Document Format的各种格式文件，可以通过这些API在Java中读写Excel、Word等文件。他的excel处理很强大，对于word还局限于读取，目前只能实现一些简单文件的操作，不能设置样式。</p><p><strong>弊端：</strong> <strong>只能操作简单word</strong></p><h3 id="_2-3-java2word" tabindex="-1"><a class="header-anchor" href="#_2-3-java2word" aria-hidden="true">#</a> 2.3 Java2word</h3><p>Java2word是一个在java程序中调用 MS Office Word 文档的组件(类库)。该组件提供了一组简单的接口，以便java程序调用他的服务操作Word 文档。 这些服务包括： 打开文档、新建文档、查找文字、替换文字，插入文字、插入图片、插入表格，在书签处插入文字、插入图片、插入表格等。填充数据到表格中读取表格数据 ，1.1版增强的功能： 指定文本样式，指定表格样式。如此，则可动态排版word文档。是一种不错的解决方案。</p><h3 id="_2-4-itext" tabindex="-1"><a class="header-anchor" href="#_2-4-itext" aria-hidden="true">#</a> 2.4 iText</h3><p>iText是著名的开放源码的站点sourceforge一个项目，是用于生成PDF文档的一个java类库。通过iText不仅可以生成PDF或rtf的文档，而且可以将XML、Html文件转化为PDF文件。功能强大。</p><h3 id="_2-5-jsp输出" tabindex="-1"><a class="header-anchor" href="#_2-5-jsp输出" aria-hidden="true">#</a> 2.5 JSP输出</h3><p>JSP输出样式，该方案实现简单，但是处理样式有点缺陷，简单的导出可以使用。</p><h3 id="_2-6使用xml" tabindex="-1"><a class="header-anchor" href="#_2-6使用xml" aria-hidden="true">#</a> 2.6使用xml</h3><p>用XML做就很简单了。</p><p>Word从2003开始支持XML格式，操作流程</p><ul><li>先用office2003或者2007编辑好word的样式，然后另存为xml，</li><li>将xml翻译为FreeMarker模板，</li><li>最后用java来解析FreeMarker模板并输出Doc。</li></ul><p>经测试这样方式生成的word文档完全符合office标准，样式、内容控制非常便利，打印也不会变形，生成的文档和office中编辑文档完全一样。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',25),s={href:"https://www.cnblogs.com/lcngu/p/5247179.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://blog.csdn.net/qq_36961530/article/details/72628028",target:"_blank",rel:"noopener noreferrer"};function f(_,x){const e=h("ExternalLinkIcon");return d(),t("div",null,[l,a("p",null,[a("a",s,[r("java导出生成word"),o(e)])]),a("p",null,[a("a",p,[r("java生成word和pdf的几种方法的优缺点对比"),o(e)])])])}const w=i(c,[["render",f],["__file","office-y-word-export.html.vue"]]);export{w as default};
