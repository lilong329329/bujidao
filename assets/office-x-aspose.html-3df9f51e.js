import{_ as d,W as o,X as a,Z as t,$ as r,a0 as i,Y as s,D as n}from"./framework-4b7e9ff4.js";const p={},l=s('<h1 id="word文档操作-aspose-words介绍" tabindex="-1"><a class="header-anchor" href="#word文档操作-aspose-words介绍" aria-hidden="true">#</a> Word文档操作 - Aspose.Words介绍</h1><h2 id="_1-基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-基本介绍" aria-hidden="true">#</a> 1. 基本介绍</h2><p>Aspose.Words是一个商业类库（支持 .net 和 java 等），可以使得应用程序处理大量的文件任务。Aspose.Words支持Doc，Docx，RTF，HTML，OpenDocument，PDF，XPS，EPUB和其他格式。使用Aspose.Words可以在不使用Microsoft.Word的情况下生成、修改、转换和打印文档。在项目中使用Aspose.Words可以有以下好处。</p><h3 id="_1-1-丰富的功能集" tabindex="-1"><a class="header-anchor" href="#_1-1-丰富的功能集" aria-hidden="true">#</a> 1.1 丰富的功能集</h3><p>其丰富的功能特性主要有以下4个方面：</p><ol><li><p>格式转换。Aspose.Words具有高质量的文件格式转换功能，可以和Doc，PDF、PNG等格式互相转换。</p></li><li><p>文档对象模型。通过丰富的API以编程方式访问所有的文档元素和格式，允许创建，修改，提取，复制，分割，加入，和替换文件内容。</p></li><li><p>文件渲染。可以在服务器端转换整个文档或者页面为PDF，XPS，SWF格式，同样可以转换文档页面为图像格式，或者<code>.NET Graphics</code>对象，这些功能和Microsoft.Word是一样的。</p></li><li><p>报表。可以从对象或者数据源填充模版生成文件。</p></li></ol><h3 id="_1-2-不需要microsoft-word" tabindex="-1"><a class="header-anchor" href="#_1-2-不需要microsoft-word" aria-hidden="true">#</a> 1.2 不需要Microsoft.Word</h3><p>Aspose.Words可以在没有安装Microsoft Office的机器上工作。所有的Aspose组件都是独立，不需要微软公司的授权。总之， Aspose.Words在安全性、稳定性、可扩展性、速度、价格和自动化功能方面，是一个很不错的选择。</p><h3 id="_1-3-独立的平台" tabindex="-1"><a class="header-anchor" href="#_1-3-独立的平台" aria-hidden="true">#</a> 1.3 独立的平台</h3><p>Aspose.Words可以运行在Windows，Linux和Mac OS操作系统上面。可以使用Aspose.Words去创建32位或者64位的.NET应用程序，包括<code>Asp.NET</code>、WCF、WinForm等等，还可以使用Com组件在Asp、Perl、PHP和Python语言中使用，同样可以在Mono平台上使用Aspose.Words建立.NET应用程序。</p><h3 id="_1-4-性能和可伸缩性" tabindex="-1"><a class="header-anchor" href="#_1-4-性能和可伸缩性" aria-hidden="true">#</a> 1.4 性能和可伸缩性</h3><p>Aspose.Words可以运行在服务器和客户端，它是一个独立的.NET程序集，可以被任何.NET应用程序复制和部署。使用Aspose.Words可以在短时间内产生成千上万的文档，可以打开文档，并修改格式和内容，填充数据并保存。Aspose.Words是多线程安全的，不同的线程在同一时间处理不同的文档。</p><h3 id="_1-5-最小的学习曲线" tabindex="-1"><a class="header-anchor" href="#_1-5-最小的学习曲线" aria-hidden="true">#</a> 1.5 最小的学习曲线</h3><p>虽然Aspose.Words拥有150多个公共类和枚举类型，但是Aspose.Words的学习曲线很小因为Aspose.Words的API是围绕下列目标精心设计的：</p><ol><li><p>借鉴一些著名的API设计经验，如Microsoft Word。</p></li><li><p>借鉴.NET框架设计指南的经验。</p></li><li><p>提供易于使用的详细的文档元素操作文档。</p></li></ol><p>以前在项目中使用Microsoft Word的开发者，可以在Aspose.Words中找到很多熟悉的类、方法和属性。</p><h2 id="_2-文档对象模型概述" tabindex="-1"><a class="header-anchor" href="#_2-文档对象模型概述" aria-hidden="true">#</a> 2. 文档对象模型概述</h2><h3 id="_2-1-dom介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-dom介绍" aria-hidden="true">#</a> 2.1 DOM介绍</h3><p>Aspose.Words的文档对象模型(以下简称DOM)是一个Word文档在内存中的映射，Aspose.Words的DOM可以编程读取、操作和修改Word文档的内容和格式。理解DOM的结构和相应的类型，是使用Aspose.Words灵活编程的基础，这一点非常重要。下面的一个Word文档例子和其结构如下图所示:</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221214113537244.png" alt="image-20221214113537244" tabindex="0" loading="lazy"><figcaption>image-20221214113537244</figcaption></figure><p>当上述文档被Aspose.Words的DOM读取时，会创建如下结构的树形对象：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221214133424450.png" alt="image-20221214133424450" tabindex="0" loading="lazy"><figcaption>image-20221214133424450</figcaption></figure><p>从上图的结构和对应的Word文档，我们可以看到大概的DOM中相关对象的结构，有了这些基本概念，就可以很流程的操作Word文档了。Document, Section, Paragraph, Table, Shape, Run 以及图中的其他椭圆形的都是Aspose.Words对象，这些对象具有树形的层级结构，图中的注释同样说明这些文档对象树中的对象具有多个属性。</p><p>Aspose.Words中的DOM有以下特点：</p><p>1.所有的节点(node)类最终都继承于Node类，它是Aspose.Words DOM的基本类型。</p><p>2.节点可以包含(嵌套)其他节点，例如Section和Paragraph都继承自CompositeNode类，而CompositeNode类来源与Node类。</p><h3 id="_2-2-node类型" tabindex="-1"><a class="header-anchor" href="#_2-2-node类型" aria-hidden="true">#</a> 2.2 Node类型</h3><p>当Aspose.Words读取Word文档到内存中时，不同类型的文档元素被不同的类型对象来替代，每一个文本框的text, paragraph, table, section都是Node对象,甚至文档本身都是一个Node。Aspose.Words为每一种文档节点类型都定义了一个类。</p><p>下面是一个UML类图，表示DOM中不同node类型之间的关系。抽象类的名字用斜体表示。注意，Aspose.Words DOM中同样包括了一些非节点类型的类，例如Style, PageSetup, Font等等，它们没有在这幅图里面显示。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221214133902407.png" alt="image-20221214133902407" tabindex="0" loading="lazy"><figcaption>image-20221214133902407</figcaption></figure><p>看看这些主要的类及作用</p><table><thead><tr><th>Aspose.Words类</th><th>类别</th><th>描述</th></tr></thead><tbody><tr><td>Document</td><td>Document</td><td>Document对象是文档树的根节点，提供访问整个文档的入口</td></tr><tr><td>Section</td><td>Document</td><td>Section对象对应一个文档中的一节</td></tr><tr><td>Body</td><td>Document</td><td>是一节中的主要文本容器</td></tr><tr><td>HeaderFooter</td><td>Document</td><td>一节中的特殊页眉或者页脚容器</td></tr><tr><td>GlossaryDocument</td><td>Document</td><td>代表一个Word文档中词汇表的根条目</td></tr><tr><td>BuildingBlock</td><td>Document</td><td>代表一个词汇表文档，如构件，自动图文集或一个自动更正条目</td></tr><tr><td>Paragraph</td><td>Text</td><td>一个文本段落，保护内联的节点</td></tr><tr><td>Run</td><td>Text</td><td>一个格式一致的文本块</td></tr><tr><td>BookmarkStart</td><td>Text</td><td>一个书签的起点标记</td></tr><tr><td>BookmarkEnd</td><td>Text</td><td>一个书签的结束标记</td></tr><tr><td>FieldStart</td><td>Text</td><td>一个特殊的字符指定一个单词字段的开始</td></tr><tr><td>FieldSeparator</td><td>Text</td><td>单词字段的分隔符</td></tr><tr><td>FieldEnd</td><td>Text</td><td>一个特殊的字符指定一个单词字段的结束</td></tr><tr><td>FormField</td><td>Text</td><td>一个表单字段</td></tr><tr><td>SpecialChar</td><td>Text</td><td>特殊字符类型，没有具体的</td></tr><tr><td>Table</td><td>Tables</td><td>Word文档中的表格</td></tr><tr><td>Row</td><td>Tables</td><td>一个表格对象的行</td></tr><tr><td>Cell</td><td>Tables</td><td>表格行的单元格</td></tr><tr><td>Shape</td><td>Shapes</td><td>Word文档中的图像，形状，文本框或者OLE对象</td></tr><tr><td>GroupShape</td><td>Shapes</td><td>一组Shapes对象</td></tr><tr><td>DrawingML</td><td>Shapes</td><td>一个文档中的Sharp或者图像，图表</td></tr><tr><td>Footnote</td><td>Annotations</td><td>文档中包括文本的脚注或者尾注</td></tr><tr><td>Comment</td><td>Annotations</td><td>文档中包含文本的注释</td></tr><tr><td>CommentRangeStart</td><td>Annotations</td><td>一个相关的注释区域的开始</td></tr><tr><td>CommentRangeEnd</td><td>Annotations</td><td>一个相关的注释区域的结束</td></tr><tr><td>SmartTag</td><td>Markup</td><td>在一个段落内围绕一个或多个内嵌结构的智能标记</td></tr><tr><td>CustomXmlMarkup</td><td>Markup</td><td>文档中的某些结构的自定义XML标记</td></tr><tr><td>StructuredDocumentTag</td><td>Markup</td><td>文档中的一种结构化的文档标签（内容控制）</td></tr><tr><td>OfficeMath</td><td>Math</td><td>代表Office的数学对象，如函数，方程或者矩阵</td></tr></tbody></table><h3 id="_2-3-组成模式" tabindex="-1"><a class="header-anchor" href="#_2-3-组成模式" aria-hidden="true">#</a> 2.3 组成模式</h3><p>Aspose.Words文档的结构树非常重要，下面的设计图可以更清晰的理解各个节点之间的包含关系。</p><h4 id="_2-3-1-document-and-section" tabindex="-1"><a class="header-anchor" href="#_2-3-1-document-and-section" aria-hidden="true">#</a> 2.3.1 Document and Section</h4><p>文档和节：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221214134417091.png" alt="image-20221214134417091" tabindex="0" loading="lazy"><figcaption>image-20221214134417091</figcaption></figure><p>从上图可以看出：</p><ol><li><p>一个Document有1个或者多个Section(节)节点；</p></li><li><p>Section有1个Body(正文)，没有或者有多个HeaderFooter节点；</p></li><li><p>Body和HeaderFooter可以包含多个块级节点；</p></li><li><p>1个Document能够有一个 GlossaryDocument.</p></li></ol><p>1个Word文档包含1个或多个节，一个节可以定义自己的页码，边距，方向，以及页眉页脚的文字；一个节保护主要的问题，如页眉，页脚(首页，奇数页，偶数页)。</p><h4 id="_2-3-2-block-level节点" tabindex="-1"><a class="header-anchor" href="#_2-3-2-block-level节点" aria-hidden="true">#</a> 2.3.2 Block-level节点</h4><p>Block-level节点的关系图如下所示：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221214134616002.png" alt="image-20221214134616002" tabindex="0" loading="lazy"><figcaption>image-20221214134616002</figcaption></figure><p>从上图中可以看到：</p><ol><li><p>Block-level元素可以出现在文档中的很多地方，如Body的子节点，脚注，评论，单元格其他元素。</p></li><li><p>最重要的Block-level节点是表格和段落；</p></li><li><p>1个表格有0行或者多行；</p></li></ol><p>CustomXmlMarkup 和StructuredDocumentTag可以包含其他Block-level节点；</p><h4 id="_2-3-3-inline-level节点" tabindex="-1"><a class="header-anchor" href="#_2-3-3-inline-level节点" aria-hidden="true">#</a> 2.3.3 Inline-level节点</h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221214135009222.png" alt="image-20221214135009222" tabindex="0" loading="lazy"><figcaption>image-20221214135009222</figcaption></figure><p>从上面的图表可以看到下列关系：</p><ol><li><p>Paragraph是最经常出现的Inline-level节点；</p></li><li><p>Paragraph可以包含不同的Run格式节点；也可以包含书签(bookmarks)和注释(annotations)</p></li><li><p>Paragraph还可以包含形状，图像，绘图对象等，以及智能标签；</p></li></ol><h4 id="_2-3-4-表格行单元格" tabindex="-1"><a class="header-anchor" href="#_2-3-4-表格行单元格" aria-hidden="true">#</a> 2.3.4 表格行单元格</h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221214135118586.png" alt="image-20221214135118586" tabindex="0" loading="lazy"><figcaption>image-20221214135118586</figcaption></figure><p>Table可以包含很多行，行可以包含单元格，单元格可以包括block-level节点。</p><h3 id="_2-4-设计模式与导航" tabindex="-1"><a class="header-anchor" href="#_2-4-设计模式与导航" aria-hidden="true">#</a> 2.4 设计模式与导航</h3><p>Aspose.Words将文档表示为一个有节点组成的树，因此就可以在节点之间互相切换。Aspose.Words提供了一个“文档浏览器”(DocumentExplorer)，这是一个项目例子Demo。如下图所示：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221214135220715.png" alt="image-20221214135220715" tabindex="0" loading="lazy"><figcaption>image-20221214135220715</figcaption></figure><p>可以通过Node类的ParentNode属性来访问上级节点，因此很方便获取父节点。文档对象模型是有大量的对象组合而成，他们的关系如下：</p><ol><li><p>Node类是所有节点类的基类；</p></li><li><p>CompositeNode类是组合节点的基类；</p></li><li><p>Node类的中，没有子节点管理的接口，子节点管理的方法只出现在CompositeNode；</p></li><li><p>从Node类中移除子节点管理的方法，更干净，可以减少很多额外的转换；</p></li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',59),c={href:"https://www.cnblogs.com/asxinyu/p/3242754.html",target:"_blank",rel:"noopener noreferrer"};function h(g,m){const e=n("ExternalLinkIcon");return o(),a("div",null,[l,t("p",null,[t("a",c,[r("【原创】Aspose.Words组件介绍及使用—基本介绍与DOM概述"),i(e)])])])}const f=d(p,[["render",h],["__file","office-x-aspose.html.vue"]]);export{f as default};
