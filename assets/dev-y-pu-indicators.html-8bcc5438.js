import{_ as e,W as r,X as h,Z as a,$ as l,a0 as n,Y as d,D as t}from"./framework-4b7e9ff4.js";const s={},o=d('<h1 id="性能测试指标" tabindex="-1"><a class="header-anchor" href="#性能测试指标" aria-hidden="true">#</a> 性能测试指标</h1><blockquote><p>性能测试的基础：就是在<strong>确保功能实现正确的前提</strong>下，通过<strong>合适的性能测试加压方式和策略</strong>，并收集考察服务端应用程序的各项性能指标，以及服务器硬件资源的使用情况，来评估是<strong>否存在性能问题隐患</strong>。</p></blockquote><h2 id="_1-性能指标分类" tabindex="-1"><a class="header-anchor" href="#_1-性能指标分类" aria-hidden="true">#</a> 1. 性能指标分类</h2><p>从性能测试分析度量的度角来看，可以从如下几个维度来收集考察各项性能指标：</p><ul><li>系统性能指标</li><li>资源性能指标</li><li>中间件指标</li><li>数据库指标</li><li>稳定性指标</li><li>可扩展性指标</li><li>可靠性指标</li></ul><p>下面将从如上这几个维度，分别从各自维度常见指标，以及指标含义、指标行业参考标准等方面进行介绍。</p><h2 id="_2-系统性能指标" tabindex="-1"><a class="header-anchor" href="#_2-系统性能指标" aria-hidden="true">#</a> 2. 系统性能指标</h2><p>系统性能指标，常见的可从如下几类进行参考：</p><ul><li>响应时间</li><li>系统处理能力</li><li>吞吐量</li><li>并发用户数</li><li>错误率</li></ul><h3 id="_2-1-响应时间-rt" tabindex="-1"><a class="header-anchor" href="#_2-1-响应时间-rt" aria-hidden="true">#</a> 2.1 响应时间(RT)</h3><h4 id="_2-1-1-定义和解释" tabindex="-1"><a class="header-anchor" href="#_2-1-1-定义和解释" aria-hidden="true">#</a> 2.1.1 <strong>定义和解释</strong>：</h4><p>响应时间，简称 RT。是指系统对请求作出响应的时间，可以理解为是指用户从客户端发起一个请求开始，到客户端接收到从服务器端返回的响应结束，整个过程所耗费的时间。直观上看，这个指标与人对软件性能的主观感受是非常一致的，因为它完整地记录了整个计算机系统处理请求的时间。</p><p>在性能检测中一般以压力发起端至被压测服务器返回处理结果的时间为计量，单位一般为秒或毫秒，由于一个系统通常会提供许多功能，而不同功能的处理逻辑也千差万别，因而不同功能的响应时间也不尽相同，甚至同一功能在不同输入数据的情况下响应时间也不相同。所以，在讨论一个系统的响应时间时，通常是指该系统所有功能的平均时间或者所有功能的最大响应时间。</p><h4 id="_2-1-2-行业参考标准" tabindex="-1"><a class="header-anchor" href="#_2-1-2-行业参考标准" aria-hidden="true">#</a> 2.1.2 <strong>行业参考标准</strong>：</h4><p>不同行业不同业务可接受的响应时间是不同的，一般情况，对于在线实时交易：</p><ul><li>互联网企业：500 毫秒以下，例如淘宝业务 10 毫秒左右。</li><li>金融企业：1 秒以下为佳，部分复杂业务 3 秒以下。</li><li>保险企业：3 秒以下为佳。</li><li>制造业：5 秒以下为佳。</li><li>时间窗口：不同数据量结果是不一样的，大数据量的情况下，2 小时内完成。</li></ul><blockquote><p>需要指出的是，响应时间的绝对值并不能直接反映软件的性能的高低，软件性能的高低实际上取决于用户对该响应时间的接受程度。</p></blockquote><blockquote><p>之前参与的项目：1-3s之间。大部分1秒以下，负责事务3s</p></blockquote><h3 id="_2-2-系统处理能力-tps-qps-hps" tabindex="-1"><a class="header-anchor" href="#_2-2-系统处理能力-tps-qps-hps" aria-hidden="true">#</a> 2.2 系统处理能力(TPS,QPS,HPS)</h3><h4 id="_2-2-1定义和解释" tabindex="-1"><a class="header-anchor" href="#_2-2-1定义和解释" aria-hidden="true">#</a> 2.2.1<strong>定义和解释</strong></h4><p>系统处理能力是指系统在利用系统硬件平台和软件平台进行信息处理的能力。系统处理能力通过系统每秒钟能够处理的交易数量来评价，交易有两种理解：一是业务人员角度的一笔业务过程；二是系统角度的一次交易申请和响应过程。前者称为业务交易过程，后者称为事务。两种交易指标都可以评价应用系统的处理能力。</p><p>一般情况下，系统处理能力又用以下几个指标来度量：</p><ul><li>HPS（Hits Per Second）：每秒点击次数，单位是次/秒。</li><li>TPS（Transaction per Second）：<strong>系统每秒处理交易数</strong>，单位是笔/秒。</li><li>QPS（Query per Second）：<strong>系统每秒处理查询次数</strong>，单位是次/秒。</li></ul><p>对于互联网业务中，如果某些业务有且仅有一个请求连接，那么 TPS=QPS=HPS，<strong>一般情况下用 TPS 来衡量整个业务流程，用 QPS 来衡量接口查询次数，用 HPS 来表示对服务器点击请求。</strong></p><h4 id="_2-2-2-行业参考标准" tabindex="-1"><a class="header-anchor" href="#_2-2-2-行业参考标准" aria-hidden="true">#</a> 2.2.2 <strong>行业参考标准：</strong></h4><p>无论 TPS、QPS、HPS，此指标是衡量系统处理能力非常重要的指标，越大越好，根据经验，一般情况下：</p><ul><li>金融行业：1000TPS~50000TPS，不包括互联网化的活动</li><li>保险行业：100TPS~100000TPS，不包括互联网化的活动</li><li>制造行业：10TPS~5000TPS</li><li>互联网电子商务：10000TPS~1000000TPS</li><li>互联网中型网站：1000TPS~50000TPS</li><li>互联网小型网站: 500TPS~10000TPS</li></ul><blockquote><p>之前参与的项目：500TPS-3000TPS</p></blockquote><h3 id="_2-3-吞吐量" tabindex="-1"><a class="header-anchor" href="#_2-3-吞吐量" aria-hidden="true">#</a> 2.3 吞吐量</h3><h4 id="_2-3-1-定义和解释" tabindex="-1"><a class="header-anchor" href="#_2-3-1-定义和解释" aria-hidden="true">#</a> 2.3.1 <strong>定义和解释</strong></h4><p>吞吐量是指系统在单位时间内处理请求的数量。</p><p>对于单用户的系统，响应时间可以很好地度量系统的性能，但对于并发系统，通常需要用吞吐量作为性能指标。</p><blockquote><p>而对于一个多用户的系统，如果只有一个用户使用时系统的平均响应时间是 t，当有你 n 个用户使用时，每个用户看到的响应时间通常并不是 n×t，而往往比 n×t 小很多（当然，在某些特殊情况下也可能比 n×t 大，甚至大很多）。一般而言，吞吐量是一个比较通用的指标，两个具有不同用户数和用户使用模式的系统，如果其最大吞吐量基本一致，则可以判断两个系统的处理能力基本一致。</p></blockquote><h3 id="_2-4-并发用户数" tabindex="-1"><a class="header-anchor" href="#_2-4-并发用户数" aria-hidden="true">#</a> 2.4 并发用户数</h3><h4 id="_2-4-1-定义和解释" tabindex="-1"><a class="header-anchor" href="#_2-4-1-定义和解释" aria-hidden="true">#</a> 2.4.1 <strong>定义和解释</strong></h4><p>并发用户数指在同一时刻内，登录系统并进行业务操作的用户数量。</p><p>并发用户数对于长连接系统来说最大并发用户数即是系统的并发接入能力。对于短连接系统而言最大并发用户数并不等于系统的并发接入能力，而是与系统架构、系统处理能力等各种情况相关。</p><p>与吞吐量相比，并发用户数是一个更直观但也更笼统的性能指标。实际上，并发用户数是一个非常不准确的指标，因为用户不同的使用模式会导致不同用户在单位时间发出不同数量的请求。</p><h3 id="_2-5-错误率-fr" tabindex="-1"><a class="header-anchor" href="#_2-5-错误率-fr" aria-hidden="true">#</a> 2.5 错误率(FR)</h3><h4 id="_2-5-1-定义和解释" tabindex="-1"><a class="header-anchor" href="#_2-5-1-定义和解释" aria-hidden="true">#</a> 2.5.1 <strong>定义和解释</strong>：</h4><p>错误率简称 FR，指系统在负载情况下，失败交易的概率。错误率＝(失败交易数/交易总数)*100%。</p><h4 id="_2-5-2-行业参考标准" tabindex="-1"><a class="header-anchor" href="#_2-5-2-行业参考标准" aria-hidden="true">#</a> 2.5.2 <strong>行业参考标准：</strong></h4><p>不同系统对错误率的要求不同，但一般不超出千分之六，即成功率不低于 99.4%</p><blockquote><p>之前参与的项目，不低于成功率99.5</p></blockquote><h2 id="_3-资源性能指标" tabindex="-1"><a class="header-anchor" href="#_3-资源性能指标" aria-hidden="true">#</a> 3. 资源性能指标</h2><p>资源性能指标，常见的可从如下几类进行参考：</p><ul><li>CPU</li><li>内存</li><li>磁盘吐吞量</li><li>网络吐吞量</li></ul><h3 id="_3-1-cpu" tabindex="-1"><a class="header-anchor" href="#_3-1-cpu" aria-hidden="true">#</a> 3.1 CPU</h3><h4 id="_3-1-1-定义和解释" tabindex="-1"><a class="header-anchor" href="#_3-1-1-定义和解释" aria-hidden="true">#</a> 3.1.1 <strong>定义和解释</strong>：</h4><p>CPU 又称为中央处理器，是一块超大规模的集成电路，是一台计算机的运算核心（Core）和控制核心（ Control Unit）。它的功能主要是解释计算机指令以及处理计算机软件中的数据。</p><h4 id="_3-1-2-行业参考标准" tabindex="-1"><a class="header-anchor" href="#_3-1-2-行业参考标准" aria-hidden="true">#</a> 3.1.2 <strong>行业参考标准</strong>：</h4><p>CPU 指标主要指的 CPU 利用率，包括用户态 (user)、系统态 (sys)、等待态 (wait)、空闲态 (idle)。</p><ul><li>CPU 利用率要低于业界警戒值范围之内，即小于或者等于 75%;</li><li>CPU sys% 小于或者等于 30%;</li><li>CPU wait% 小于或者等于 5%；</li></ul><h2 id="_3-2-内存" tabindex="-1"><a class="header-anchor" href="#_3-2-内存" aria-hidden="true">#</a> 3.2 内存</h2><h4 id="_3-2-1-定义和解释" tabindex="-1"><a class="header-anchor" href="#_3-2-1-定义和解释" aria-hidden="true">#</a> 3.2.1 <strong>定义和解释</strong>：</h4><p>内存是计算机中重要的部件之一，它是与 CPU 进行沟通的桥梁。计算机中所有程序的运行都是在内存中进行的，因此内存的性能对计算机的影响非常大。</p><h4 id="_3-2-2-行业参考标准" tabindex="-1"><a class="header-anchor" href="#_3-2-2-行业参考标准" aria-hidden="true">#</a> 3.2.2 <strong>行业参考标准</strong>：</h4><p>现在的操作系统为了最大利用内存，在内存中存放了缓存，因此内存利用率 100% 并不代表内存有瓶颈，衡量系统内存是否有瓶颈主要靠 SWAP（与虚拟内存交换）交换空间利用率，<strong>一般情况下，SWAP 交换空间利用率要低于 70%,太多的交换将会引起系统性能低下</strong>。</p><h3 id="_3-3-磁盘吐吞量" tabindex="-1"><a class="header-anchor" href="#_3-3-磁盘吐吞量" aria-hidden="true">#</a> 3.3 磁盘吐吞量</h3><h4 id="_3-3-1-定义和解释" tabindex="-1"><a class="header-anchor" href="#_3-3-1-定义和解释" aria-hidden="true">#</a> 3.3.1 <strong>定义和解释</strong>：</h4><p>磁盘吞吐量简称为 Disk Throughput，是指在无磁盘故障的情况下单位时间内通过磁盘的数据量。</p><h4 id="_3-3-2-行业参考标准" tabindex="-1"><a class="header-anchor" href="#_3-3-2-行业参考标准" aria-hidden="true">#</a> 3.3.2 <strong>行业参考标准</strong>：</h4><p>磁盘指标主要有每秒读写多少兆，磁盘繁忙率，磁盘队列数，平均服务时间，平均等待时间，空间利用率。其中磁盘繁忙率是直接反映磁盘是否有瓶颈的的重要依据，一般情况下，磁盘繁忙率要低于 70%。</p><h3 id="_3-4-网络吐吞量" tabindex="-1"><a class="header-anchor" href="#_3-4-网络吐吞量" aria-hidden="true">#</a> 3.4 网络吐吞量</h3><h4 id="_3-4-1-定义和解释" tabindex="-1"><a class="header-anchor" href="#_3-4-1-定义和解释" aria-hidden="true">#</a> 3.4.1 <strong>定义和解释</strong>：</h4><p>网络吞吐量简称为 Network Throughput，是指在无网络故障的情况下单位时间内通过的网络的数据数量。单位为 Byte/s。网络吞吐量指标用于衡量系统对于网络设备或链路传输能力的需求。当网络吞吐量指标接近网络设备或链路最大传输能力时，则需要考虑升级网络设备。</p><h4 id="_3-4-2-行业参考标准" tabindex="-1"><a class="header-anchor" href="#_3-4-2-行业参考标准" aria-hidden="true">#</a> 3.4.2 <strong>行业参考标准</strong>：</h4><p>网络吞吐量指标主要有每秒有多少兆流量进出，一般情况下不能超过设备或链路最大传输能力的 70%。</p><h2 id="_4-中间件指标" tabindex="-1"><a class="header-anchor" href="#_4-中间件指标" aria-hidden="true">#</a> 4. 中间件指标</h2><p>常用的中间件例如 Tomcat、Weblogic 等指标主要包括 JVM, ThreadPool, JDBC,具体如下：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220703213503244.png" alt="image-20220703213503244" tabindex="0" loading="lazy"><figcaption>image-20220703213503244</figcaption></figure><p><strong>行业参考标准</strong>：</p><ul><li>当前正在运行的线程数不能超过设定的最大值。一般情况下系统性能较好的情况下，线程数最小值设置 50 和最大值设置 200 比较合适。</li><li>当前运行的 JDBC 连接数不能超过设定的最大值。一般情况下系统性能较好的情况下，JDBC 最小值设置 50 和最大值设置 200 比较合适。</li><li>ＧＣ频率不能频繁，特别是 FULL GC 更不能频繁，一般情况下系统性能较好的情况下，JVM 最小堆大小和最大堆大小分别设置 1024M 比较合适。</li></ul><h2 id="_5-数据库指标" tabindex="-1"><a class="header-anchor" href="#_5-数据库指标" aria-hidden="true">#</a> 5. 数据库指标</h2><p>常用的数据库例如ＭySQL 指标主要包括 SQL、吞吐量、缓存命中率、连接数等，具体如下：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220703213707066.png" alt="image-20220703213707066" tabindex="0" loading="lazy"><figcaption>image-20220703213707066</figcaption></figure><h4 id="_5-1-行业参考标准" tabindex="-1"><a class="header-anchor" href="#_5-1-行业参考标准" aria-hidden="true">#</a> 5.1 <strong>行业参考标准</strong>：</h4><ul><li>SQL 耗时越小越好，一般情况下微秒级别。</li><li>命中率越高越好，一般情况下不能低于 95%。</li><li>锁等待次数越低越好，等待时间越短越好。</li></ul><ol><li>稳定性指标 最短稳定时间：系统按照最大容量的 80% 或标准压力（系统的预期日常压力）情况下运行，能够稳定运行的最短时间。</li></ol><p>一般来说，对于正常工作日（8 小时）运行的系统，至少应该能保证系统稳定运行８小时以上。</p><p>对于 7*24 运行的系统，至少应该能够保证系统稳定运行 24 小时以上。如果系统不能稳定的运行，上线后，随着业务量的增长和长时间运行，将会出现性能下降甚至崩溃的风险。</p><h4 id="_5-2-参考标准" tabindex="-1"><a class="header-anchor" href="#_5-2-参考标准" aria-hidden="true">#</a> 5.2 <strong>参考标准：</strong></h4><ul><li>TPS 曲线稳定，没有大幅度的波动。</li><li>各项资源指标没有泄露或异常情况。</li></ul><h2 id="_8-可扩展性指标" tabindex="-1"><a class="header-anchor" href="#_8-可扩展性指标" aria-hidden="true">#</a> 8. 可扩展性指标</h2><p><strong>定义和解释</strong>：是指应用软件或操作系统以群集方式部署，增加的硬件资源与增加的处理能力之间的关系。</p><p>计算公式为：<code>（增加性能/原始性能）/（增加资源/原始资源）*100%</code>。</p><p>扩展能力应通过多轮测试获得扩展指标的变化趋势。一般扩展能力非常好的应用系统，扩展指标应是线性或接近线性的，现在很多大规模的分布式系统的扩展能力非常好。</p><p><strong>参考标准</strong>：</p><p>理想的扩展能力是资源增加几倍，性能就提升几倍。扩展能力至少在 70% 以上。</p><h2 id="_9-可靠性指标" tabindex="-1"><a class="header-anchor" href="#_9-可靠性指标" aria-hidden="true">#</a> 9. 可靠性指标</h2><p>对于服务端性能测试，从系统可靠性指标度量分析时，常见从三类来入手：</p><ul><li>双机热备</li><li>集群</li><li>备份和恢复</li></ul><h3 id="_9-1-双机热备" tabindex="-1"><a class="header-anchor" href="#_9-1-双机热备" aria-hidden="true">#</a> 9.1 双机热备</h3><p>对于将双机热备作为可靠性保障手段的系统，可衡量的指标如下：</p><ul><li>节点切换是否成功及其消耗时间。</li><li>双机切换是否有业务中断。</li><li>节点回切是否成功及其耗时。</li><li>双机回切是否有业务中断。</li><li>节点回切过程中的数据丢失量在进行双机切换的同时，使用压力发生工具模拟实际业务发生情况，对应用保持一定的性能压力，保证测试结果符合生产实际情况。</li></ul><h3 id="_9-2-集群" tabindex="-1"><a class="header-anchor" href="#_9-2-集群" aria-hidden="true">#</a> 9.2 集群</h3><p>对于使用集群方式的系统，主要通过以下方式考量其集群可靠性：</p><ul><li>集群中某个节点出现故障时，系统是否有业务中断情况出现</li><li>在集群中新增一个节点时，是否需要重启系统</li><li>当故障节点恢复后，加入集群，是否需要重启系统</li><li>当故障节点恢复后，加入集群，系统是否有业务中断情况出现</li><li>节点切换需要多长时间在验证集群可靠性的同时，需根据具体情况使用压力工具模拟实际业务发生相关情况，对应用保持一定的性能压力，确保测试结果符合生产实际情况。</li></ul><h3 id="_9-3-备份和恢复" tabindex="-1"><a class="header-anchor" href="#_9-3-备份和恢复" aria-hidden="true">#</a> 9.3 备份和恢复</h3><p>本指标为了验证系统的备份/恢复机制是否有效可靠，包括系统的备份和恢复、数据库的备份和恢复、应用的备份和恢复，包括以下测试内容：</p><ul><li>备份是否成功及其消耗时间。</li><li>备份是否使用脚本自动化完成。</li><li>恢复是否成功及其消耗时间。</li><li>恢复是否使用脚本自动化完成指标体系的运用原则。</li><li>指标项的采用和考察取决于对相应系统的测试目的和测试需求。被测系统不一样，测试目的不一样，测试需求也不一样，考察的指标项也有很大差别。</li><li>部分系统涉及额外的前端用户接入能力的，需要考察用户接入并发能力指标。</li><li>对于批量处理过程的性能验证，主要考虑批量处理效率并估算批量处理时间窗口。</li><li>如测试目标涉及到系统性能容量，测试需求中应根据相关指标项的定义，明确描述性能指标需求。</li><li>测试指标获取后，需说明相关的前提条件（如在多少的业务量、系统资源情况等）。</li></ul><p>其中上述提到的【可扩展指标】和【可靠性指标】，大多数公司在开展性能测试的时候很少会涉及到这些测试点，但这些点从产品整体性能和质量角度来讲，又是不得不关注的一些重点，算是给大家提供一些测试思路。</p><h2 id="_10-压测结果范例" tabindex="-1"><a class="header-anchor" href="#_10-压测结果范例" aria-hidden="true">#</a> 10. 压测结果范例</h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220704093608768.png" alt="image-20220704093608768" tabindex="0" loading="lazy"><figcaption>image-20220704093608768</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',105),c={href:"https://testerhome.com/articles/21178",target:"_blank",rel:"noopener noreferrer"};function p(u,g){const i=t("ExternalLinkIcon");return r(),h("div",null,[o,a("p",null,[a("a",c,[l(" 性能专题：一文搞懂性能测试常见指标"),n(i)])])])}const b=e(s,[["render",p],["__file","dev-y-pu-indicators.html.vue"]]);export{b as default};
