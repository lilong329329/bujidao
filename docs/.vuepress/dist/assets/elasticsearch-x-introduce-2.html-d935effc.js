import{_ as e,W as s,X as t,Z as a,a0 as c,Y as n,D as g}from"./framework-4b7e9ff4.js";const o={},r=n('<h1 id="es详解-认知-elastic-stack生态和场景方案" tabindex="-1"><a class="header-anchor" href="#es详解-认知-elastic-stack生态和场景方案" aria-hidden="true">#</a> ES详解 - 认知：Elastic Stack生态和场景方案</h1><blockquote><p>在了解ElaticSearch之后，我们还要了解Elastic背后的生态即我们常说的ELK；与此同时，还会给你展示ElasticSearch的案例场景，让你在学习ES前对它有个全局的印象。</p></blockquote><h2 id="_1-elastic-stack生态" tabindex="-1"><a class="header-anchor" href="#_1-elastic-stack生态" aria-hidden="true">#</a> 1. Elastic Stack生态</h2><blockquote><p>Beats + Logstash + ElasticSearch + Kibana</p></blockquote><p>如下是我从官方博客中找到图，这张图展示了ELK生态以及基于ELK的场景（最上方）</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802220951170.png" alt="image-20220802220951170" tabindex="0" loading="lazy"><figcaption>image-20220802220951170</figcaption></figure><p>由于Elastic X-Pack是面向收费的，所以我们不妨也把X-Pack放进去，看看哪些是由X-Pack带来的，在阅读官网文档时将方便你甄别重点：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802221330037.png" alt="image-20220802221330037" tabindex="0" loading="lazy"><figcaption>image-20220802221330037</figcaption></figure><h3 id="_1-1-beats" tabindex="-1"><a class="header-anchor" href="#_1-1-beats" aria-hidden="true">#</a> 1.1 Beats</h3><p>Beats是一个面向<strong>轻量型采集器</strong>的平台，这些采集器可以从边缘机器向Logstash、ElasticSearch发送数据，它是由Go语言进行开发的，运行效率方面比较快。从下图中可以看出，不同Beats的套件是针对不同的数据源。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802221745257.png" alt="image-20220802221745257" tabindex="0" loading="lazy"><figcaption>image-20220802221745257</figcaption></figure><h3 id="_1-2-logstash" tabindex="-1"><a class="header-anchor" href="#_1-2-logstash" aria-hidden="true">#</a> 1.2 Logstash</h3><p>Logstash是<strong>动态数据收集管道</strong>，拥有可扩展的插件生态系统，支持从不同来源采集数据，转换数据，并将数据发送到不同的存储库中。其能够与ElasticSearch产生强大的协同作用，后被Elastic公司在2013年收购。</p><p>它具有如下特性：</p><p>1）实时解析和转换数据；</p><p>2）可扩展，具有200多个插件；</p><p>3）可靠性、安全性。Logstash会通过持久化队列来保证至少将运行中的事件送达一次，同时将数据进行传输加密；</p><p>4）监控；</p><h3 id="_1-3-elasticsearch" tabindex="-1"><a class="header-anchor" href="#_1-3-elasticsearch" aria-hidden="true">#</a> 1.3 ElasticSearch</h3><p>ElasticSearch对数据进行<strong>搜索、分析和存储</strong>，其是基于JSON的分布式搜索和分析引擎，专门为实现水平可扩展性、高可靠性和管理便捷性而设计的。</p><p>它的实现原理主要分为以下几个步骤：</p><p>1）首先用户将数据提交到ElasticSearch数据库中；</p><p>2）再通过分词控制器将对应的语句分词；</p><p>3）将分词结果及其权重一并存入，以备用户在搜索数据时，根据权重将结果排名和打分，将返回结果呈现给用户；</p><h3 id="_1-4-kibana" tabindex="-1"><a class="header-anchor" href="#_1-4-kibana" aria-hidden="true">#</a> 1.4 Kibana</h3><p>Kibana实现<strong>数据可视化</strong>，其作用就是在ElasticSearch中进行民航。Kibana能够以图表的形式呈现数据，并且具有可扩展的用户界面，可以全方位的配置和管理ElasticSearch。</p><p>Kibana最早的时候是基于Logstash创建的工具，后被Elastic公司在2013年收购。</p><p>1）Kibana可以提供各种可视化的图表；</p><p>2）可以通过机器学习的技术，对异常情况进行检测，用于提前发现可疑问题；</p><h2 id="_2-从日志收集系统看es-stack的发展" tabindex="-1"><a class="header-anchor" href="#_2-从日志收集系统看es-stack的发展" aria-hidden="true">#</a> 2. 从日志收集系统看ES Stack的发展</h2><blockquote><p>我们看下ELK技术栈的演化，通常体现在日志收集系统中。</p></blockquote><p>一个典型的日志系统包括：</p><p>（1）收集：能够采集多种来源的日志数据</p><p>（2）传输：能够稳定的把日志数据解析过滤并传输到存储系统</p><p>（3）存储：存储日志数据</p><p>（4）分析：支持 UI 分析</p><p>（5）警告：能够提供错误报告，监控机制</p><h3 id="_2-1-beats-elasticsearch-kibana" tabindex="-1"><a class="header-anchor" href="#_2-1-beats-elasticsearch-kibana" aria-hidden="true">#</a> 2.1 beats+elasticsearch+kibana</h3><p>Beats采集数据后，存储在ES中，有Kibana可视化的展示。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802225759473.png" alt="image-20220802225759473" tabindex="0" loading="lazy"><figcaption>image-20220802225759473</figcaption></figure><h3 id="_2-2-beats-logstath-elasticsearch-kibana" tabindex="-1"><a class="header-anchor" href="#_2-2-beats-logstath-elasticsearch-kibana" aria-hidden="true">#</a> 2.2 beats+logstath+elasticsearch+kibana</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802225849444.png" alt="image-20220802225849444" tabindex="0" loading="lazy"><figcaption>image-20220802225849444</figcaption></figure><p>该框架是在上面的框架的基础上引入了logstash，引入logstash带来的好处如下：</p><p>（1）Logstash具有基于磁盘的自适应缓冲系统，该系统将吸收传入的吞吐量，从而减轻背压。</p><p>（2）从其他数据源（例如数据库，S3或消息传递队列）中提取。</p><p>（3）将数据发送到多个目的地，例如S3，HDFS或写入文件。</p><p>（4）使用条件数据流逻辑组成更复杂的处理管道。</p><p><strong>beats结合logstash带来的优势</strong>：</p><p>（1）水平可扩展性，高可用性和可变负载处理：beats和logstash可以实现节点之间的负载均衡，多个logstash可以实现logstash的高可用</p><p>（2）消息持久性与至少一次交付保证：使用beats或Winlogbeat进行日志收集时，可以保证至少一次交付。从Filebeat或Winlogbeat到Logstash以及从Logstash到Elasticsearch的两种通信协议都是同步的，并且支持确认。Logstash持久队列提供跨节点故障的保护。对于Logstash中的磁盘级弹性，确保磁盘冗余非常重要。</p><p>（3）具有身份验证和有线加密的端到端安全传输：从Beats到Logstash以及从 Logstash到Elasticsearch的传输都可以使用加密方式传递 。与Elasticsearch进行通讯时，有很多安全选项，包括基本身份验证，TLS，PKI，LDAP，AD和其他自定义领域</p><p><strong>增加更多的数据源</strong> 比如：TCP，UDP和HTTP协议是将数据输入Logstash的常用方法</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802230523930.png" alt="image-20220802230523930" tabindex="0" loading="lazy"><figcaption>image-20220802230523930</figcaption></figure><h3 id="_2-3-beats-mq-logstash-elasticsearch-kibana" tabindex="-1"><a class="header-anchor" href="#_2-3-beats-mq-logstash-elasticsearch-kibana" aria-hidden="true">#</a> 2.3 beats+MQ+logstash+elasticsearch+kibana</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802230554852.png" alt="image-20220802230554852" tabindex="0" loading="lazy"><figcaption>image-20220802230554852</figcaption></figure><p>在如上的基础上我们可以在beats和logstash中间添加一些组件redis、kafka、RabbitMQ等，添加中间件将会有如下好处：</p><p>（1）降低对日志所在机器的影响，这些机器上一般都部署着反向代理或应用服务，本身负载就很重了，所以尽可能的在这些机器上少做事；</p><p>（2）如果有很多台机器需要做日志收集，那么让每台机器都向Elasticsearch持续写入数据，必然会对Elasticsearch造成压力，因此需要对数据进行缓冲，同时，这样的缓冲也可以一定程度的保护数据不丢失；</p><p>（3）将日志数据的格式化与处理放到Indexer中统一做，可以在一处修改代码、部署，避免需要到多台机器上去修改配置；</p><h2 id="_3-elastic-stack最佳实践" tabindex="-1"><a class="header-anchor" href="#_3-elastic-stack最佳实践" aria-hidden="true">#</a> 3. Elastic Stack最佳实践</h2><blockquote><p>我们再看下官方开发成员分享的最佳实践。</p></blockquote><h3 id="_3-1-日志收集系统" tabindex="-1"><a class="header-anchor" href="#_3-1-日志收集系统" aria-hidden="true">#</a> 3.1 日志收集系统</h3><p>（PS：就是我们上面阐述的）</p><p>基本的日志系统</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802230911770.png" alt="image-20220802230911770" tabindex="0" loading="lazy"><figcaption>image-20220802230911770</figcaption></figure><p>增加数据源，和使用MQ</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802231002429.png" alt="image-20220802231002429" tabindex="0" loading="lazy"><figcaption>image-20220802231002429</figcaption></figure><h3 id="_3-2-metric收集和apm性能监控" tabindex="-1"><a class="header-anchor" href="#_3-2-metric收集和apm性能监控" aria-hidden="true">#</a> 3.2 Metric收集和APM性能监控</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802231030438.png" alt="image-20220802231030438" tabindex="0" loading="lazy"><figcaption>image-20220802231030438</figcaption></figure><h3 id="_3-3-多数据中心方案" tabindex="-1"><a class="header-anchor" href="#_3-3-多数据中心方案" aria-hidden="true">#</a> 3.3 多数据中心方案</h3><p>通过冗余实现数据高可用</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802231118627.png" alt="image-20220802231118627" tabindex="0" loading="lazy"><figcaption>image-20220802231118627</figcaption></figure><p>两个数据采集中心（比如采集两个工厂的数据），采集数据后的汇聚</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802231140850.png" alt="image-20220802231140850" tabindex="0" loading="lazy"><figcaption>image-20220802231140850</figcaption></figure><p>数据分散，跨集群的搜索</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220802231212499.png" alt="image-20220802231212499" tabindex="0" loading="lazy"><figcaption>image-20220802231212499</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',77),l={href:"https://pdai.tech/md/db/nosql-es/elasticsearch-x-introduce-2.html",target:"_blank",rel:"noopener noreferrer"},h=a("strong",null,"ES详解 - 认知：Elastic Stack生态和场景方案",-1);function p(d,b){const i=g("ExternalLinkIcon");return s(),t("div",null,[r,a("p",null,[a("a",l,[h,c(i)])])])}const f=e(o,[["render",p],["__file","elasticsearch-x-introduce-2.html.vue"]]);export{f as default};
