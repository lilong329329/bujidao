import{_ as h,W as l,X as n,Z as a,$ as e,a0 as r,Y as d,D as t}from"./framework-4b7e9ff4.js";const o={},s=d('<h1 id="技术管理-技术调研和预研" tabindex="-1"><a class="header-anchor" href="#技术管理-技术调研和预研" aria-hidden="true">#</a> 技术管理 - 技术调研和预研</h1><h2 id="_0-前言" tabindex="-1"><a class="header-anchor" href="#_0-前言" aria-hidden="true">#</a> 0. 前言</h2><p>技术调研和技术预研不同。</p><ul><li>技术调研，目的是完成对技术的了解、选型、可行性分析。</li><li>技术预研，目的是尝试先用一下，看看这个技术适不适合项目。</li></ul><p>技术负责人的职责有很多，比如组建团队、了解产品，但更重要的是设计靠谱的技术方案。技术负责人亲自主导或者设计，就能有针对性地去解决问题，将来系统遇到瓶颈，也能更好地优化或者重新设计。</p><p>为了更好的设计系统、理解技术，技术负责人一定要组织调研和预研。你的团队不可能什么技术、框架都懂，技术发展又这么快，只有进行调研、预研，才能跟上技术发展潮流，否则终将被淘汰。</p><h2 id="_1-技术调研" tabindex="-1"><a class="header-anchor" href="#_1-技术调研" aria-hidden="true">#</a> 1. 技术调研</h2><h3 id="_1-1-技术调研思路" tabindex="-1"><a class="header-anchor" href="#_1-1-技术调研思路" aria-hidden="true">#</a> 1.1 技术调研思路</h3><h4 id="_1-1-1-明确目的" tabindex="-1"><a class="header-anchor" href="#_1-1-1-明确目的" aria-hidden="true">#</a> 1.1.1 明确目的</h4><p>明确可能涉及的具体技术内容，对各个技术的差异、原理总结，通过测试和数据比对，分析哪种框架和技术更适合用户的需求。</p><ul><li>总结技术或框架的实现方案、原理、细节</li><li>记录调研过程各个细节</li><li>明确调研测试方案、测试用例</li><li>列举各个技术之间的差异</li><li>记录测试数据并从原理上解释</li><li>分析各个技术是否适用于业务场景</li><li>为技术预研输出调研结论</li></ul><h4 id="_1-1-2-确定步骤" tabindex="-1"><a class="header-anchor" href="#_1-1-2-确定步骤" aria-hidden="true">#</a> 1.1.2 确定步骤</h4><ul><li>收集各种方案和资料</li><li>快速过一遍收集到的材料，总结几种可能方案</li><li>调研每种方案，横向对比</li><li>得出结论</li></ul><h3 id="_1-2-调研过程" tabindex="-1"><a class="header-anchor" href="#_1-2-调研过程" aria-hidden="true">#</a> 1.2 调研过程</h3><p>调研过程包括：业务场景整理-&gt;明确技术方向-&gt;搜索技术调研方向-&gt;选择技术调研方向-&gt;确定调研测试方案及用例-&gt;调研执行-&gt;调研数据对比-&gt;形成调研结论。</p><h4 id="_1-2-1-需求整理" tabindex="-1"><a class="header-anchor" href="#_1-2-1-需求整理" aria-hidden="true">#</a> 1.2.1 需求整理</h4><p>业务需要支持什么样的场景，有没有某几天集中办理业务的情况，大概多少人同时办理，数据量有多大，对系统中断和数据丢失的容忍度是什么样的，这些都要搞清楚。我们要把业务需求转换成技术需求，才能明确调研的方向。技术需求需要经过产品经理和技术骨干的评审，保证不出大的偏差。</p><h4 id="_1-2-2-技术选型" tabindex="-1"><a class="header-anchor" href="#_1-2-2-技术选型" aria-hidden="true">#</a> 1.2.2 技术选型</h4><blockquote><p>大多数新技术是用来解决特定问题的，你遇到这些问题了吗？新技术带来的好处能不能抵消学习成本和后期投入成本？在遇到问题的时候能快速解决吗？在决定之前先问一问自己，这个技术是真的需要吗？除了在PPT上吹牛逼，更新一波简历外，它到底能不能带来实际的好处？会不会带来灾难？</p></blockquote><p>团队里有人推荐新技术、新框架，如果他自己对这些技术也不熟悉，这时候作为技术管理者，你要当心。开发团队贸然使用新技术，很可能导致没办法开发出优秀的产品，项目进度也会变慢，交付出现严重问题，甚至停下来专心修复Bug。</p><p>技术选型应通过技术评估手段来决定，选型结果需要需求提出方、技术调研方、技术专家等多个维度的人员参与，以事实作为评判标准。</p><p><strong>针对新技术提供的功能，花一两天时间搭个原型，再组织大家分析利弊</strong>。大多数新技术是用来解决特定问题的，你遇到这些问题了吗？新技术带来的好处能不能抵消学习成本和后期投入成本？在遇到问题的时候能快速解决吗？在决定之前先问一问自己，这个技术是真的需要吗？除了在PPT上吹牛逼，更新一波简历外，它到底能不能带来实际的好处？会不会带来灾难？</p><h4 id="_1-2-3-验证选型" tabindex="-1"><a class="header-anchor" href="#_1-2-3-验证选型" aria-hidden="true">#</a> 1.2.3 验证选型</h4><p>对选定的技术，编制测试脚本和测试用例，验证其是否满足业务需要。做技术升级时，要确认是否比老旧技术有优势，能不能用的好。</p><h4 id="_1-2-4-讨论结论" tabindex="-1"><a class="header-anchor" href="#_1-2-4-讨论结论" aria-hidden="true">#</a> 1.2.4 讨论结论</h4><p>结合验证结果对技术的设计原理、参数进行对比。针对给定场景的对比测试结论进行分析，列举每一项技术是否适用于业务场景，给出具体原因，做出总结。</p><h2 id="_2-技术预研" tabindex="-1"><a class="header-anchor" href="#_2-技术预研" aria-hidden="true">#</a> 2. 技术预研</h2><h3 id="_2-1-技术预研思路" tabindex="-1"><a class="header-anchor" href="#_2-1-技术预研思路" aria-hidden="true">#</a> 2.1 技术预研思路</h3><p>项目立项之前，难度较大的关键技术必须要攻克，否则项目的实施就存在很大风险。</p><h4 id="_2-1-1-了解动机" tabindex="-1"><a class="header-anchor" href="#_2-1-1-了解动机" aria-hidden="true">#</a> 2.1.1 了解动机</h4><p>预研一定有背景存在，大多数情况是当前的技术或方案无法满足用户需要。在技术调研完毕后，需要对调研成果进一步实践，通过局部实现的方式验证调研过程。</p><h4 id="_2-1-2-明确目的" tabindex="-1"><a class="header-anchor" href="#_2-1-2-明确目的" aria-hidden="true">#</a> 2.1.2 明确目的</h4><p>这一点跟调研差不多。预研的目的也是为了满足用户的需求。一切脱离了业务场景的架构设计都是耍流氓。弄一堆特性用不到的新技术上去，除了跳槽的时候有谈资，别的没啥好处。</p><h4 id="_2-1-3-确定步骤" tabindex="-1"><a class="header-anchor" href="#_2-1-3-确定步骤" aria-hidden="true">#</a> 2.1.3 确定步骤</h4><ul><li>搜索预研需求</li><li>明确预研目的</li><li>确定预研方案</li><li>出具结论</li></ul><h3 id="_2-2-预研过程" tabindex="-1"><a class="header-anchor" href="#_2-2-预研过程" aria-hidden="true">#</a> 2.2 预研过程</h3><h4 id="_2-2-1-技术介绍" tabindex="-1"><a class="header-anchor" href="#_2-2-1-技术介绍" aria-hidden="true">#</a> 2.2.1 技术介绍</h4><p>明确预研需求后，对选择的方案或者技术进行介绍，包括基本概念和当前该技术的发展及应用。</p><ul><li>技术研究设定的工作目标可验证</li><li>明确技术适用范围</li><li>指明研究的局限性</li><li>在关键技术分析报告中对多种技术路线做对比</li></ul><h4 id="_2-2-2-明确方案" tabindex="-1"><a class="header-anchor" href="#_2-2-2-明确方案" aria-hidden="true">#</a> 2.2.2 明确方案</h4><p>列举出所有可以满足需求的解决方案，重点说明将要预研的一个或多个，比较各自优缺点，提供潜在的改进方向和应用可能性。</p><p>采用哪种方案，不能只看技术先进性，必须结合实际情况进行预研。一种不好的现象是，谈架构必言分布式、微服务。你现有的人手能搞定么？</p><h4 id="_2-2-3-讨论结论" tabindex="-1"><a class="header-anchor" href="#_2-2-3-讨论结论" aria-hidden="true">#</a> 2.2.3 讨论结论</h4><p>输出可行性分析报告，要包含风险评估报告，探索和解决技术实现的可行性，为产品开发提供支撑。</p><ul><li>根据公司技术规划和产品研发方向，确定预研技术方向。</li><li>收集和整理有关技术的文章、标准，了解其现状和未来发展趋势。</li><li>对预研技术的原理、方案进行全面深入的分析，对关键技术进行仿真实验。</li><li>对研究成果做总结。</li><li>编写技术可行性报告，为公司产品规划和研发提供决策依据。</li></ul><h2 id="_3-技术预研报告" tabindex="-1"><a class="header-anchor" href="#_3-技术预研报告" aria-hidden="true">#</a> 3. 技术预研报告</h2><p>技术预研报告模板下载地址</p>',47),c={href:"https://docs.google.com/document/d/1WZXiIKAzAvhRQt2gqMykvXTS8MlLsD_sxUkmcTsWeSo/edit",target:"_blank",rel:"noopener noreferrer"},_={href:"https://pan.baidu.com/s/1cC3YGmOmnbvhVpp2on8OwA",target:"_blank",rel:"noopener noreferrer"},p=a("figure",null,[a("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221214094539141.png",alt:"image-20221214094539141",tabindex:"0",loading:"lazy"}),a("figcaption",null,"image-20221214094539141")],-1),u=a("h2",{id:"参考文章",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#参考文章","aria-hidden":"true"},"#"),e(" 参考文章")],-1),b={href:"https://www.cnblogs.com/burningblade/p/15089464.html",target:"_blank",rel:"noopener noreferrer"};function f(g,x){const i=t("ExternalLinkIcon");return l(),n("div",null,[s,a("ul",null,[a("li",null,[a("p",null,[a("a",c,[e("google文档"),r(i)])])]),a("li",null,[a("p",null,[e("百度网盘：链接:"),a("a",_,[e("https://pan.baidu.com/s/1cC3YGmOmnbvhVpp2on8OwA"),r(i)]),e(" 密码:u10q")])])]),p,u,a("p",null,[a("a",b,[e("《技术领导力》笔记（4）—— 技术调研和预研"),r(i)])])])}const k=h(o,[["render",f],["__file","technology-manage-pre-research.html.vue"]]);export{k as default};
