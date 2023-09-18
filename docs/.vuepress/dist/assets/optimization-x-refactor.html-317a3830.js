import{_ as h,W as d,X as n,Z as e,$ as r,a0 as i,Y as p,D as l}from"./framework-4b7e9ff4.js";const t={},o=p('<h1 id="优化-项目重构" tabindex="-1"><a class="header-anchor" href="#优化-项目重构" aria-hidden="true">#</a> 优化 - 项目重构</h1><h2 id="_1-什么叫重构" tabindex="-1"><a class="header-anchor" href="#_1-什么叫重构" aria-hidden="true">#</a> 1. 什么叫重构</h2><p>重构有两种解释，一种是作名词的解释，一种是作动词的解释。</p><blockquote><p>名词：对软件内部结构的一种调整，目的是在不改变软件可观察行为的前提下，提高其可理解性，降低其修改成本。</p><p>动词：使用一系列重构手法，在不改变软件可观察行为的前提下，调整软件的结构。</p></blockquote><p>重构是软件开发过程中一个重要的事情之一，重构与重写的区别：</p><ul><li>重构：不是对已有代码的全盘否定，而是对不合理的结构进行调整，合理的模块进行改动；利用更好的方式，写出更好，更有维护性代码。</li><li>重写：已有的代码非常复杂混乱，难以修改，重构的时间还不如重新写一个来得快；根据需求另立一个项目，完全重写。</li></ul><h2 id="_2-为何要重构" tabindex="-1"><a class="header-anchor" href="#_2-为何要重构" aria-hidden="true">#</a> 2. 为何要重构</h2><blockquote><p>车子脏了就得洗，坏了就得修，报废了就得换。</p><p>程序也一样，不合需求就得改，难于跟上业务的变更就得重构，实在没法改了就得重写。</p></blockquote><p>现在的互联网项目已经不再像传统的瀑布模型的项目，有明确的需求。现在项目迭代的速度和需求的变更都非常的迅速。在软件开发的编码之前我们不可能事先了解所有的需求，软件设计肯定会有考虑不周到不全面的地方；而且随着项目需求的不断变更，很有可能原来的代码设计结构已经不能满足当前的需求。这时就需要对软件结构进行重新调整，也就是重构。</p><p>一个项目中，团队成员的技术水平参差不齐。有一些工作年限比较低，技术水平比较差的成员写的代码质量比较差，结构比较混乱，这时就需要对这部分代码进行适当的重构，使其具有更高的可重用性。</p><p>一个软件运行时间比较长，被多代程序员进行修修补补，使得这个软件的代码非常的臃肿而庞杂，维护成本非常高。因此，也需要对这个软件进行适当的构架，以降低其修改成本。</p><p>要进行代码重构的原因，总结一下，常见的原因有以下几种：</p><ul><li><strong>重复的代码太多</strong>，没有复用性；难于维护，需要修改时处处都得改。</li><li><strong>代码的结构混乱</strong>，注释也不清晰；没有人能清楚地理解这段代码的含义。</li><li><strong>程序没有拓展性</strong>，遇到新的变化，不能灵活的处理。</li><li><strong>对象结构强耦合，可维护性差</strong>，业务逻辑太复杂，牵一发而动全身，维护时排查问题非常困难。</li><li><strong>部分模块性能低</strong>，随着用户的增长，已无法满足响应速度的要求。</li></ul><h3 id="_2-1-造成的原因" tabindex="-1"><a class="header-anchor" href="#_2-1-造成的原因" aria-hidden="true">#</a> 2.1 造成的原因</h3><p>这些导致代码重构的原因，称为代码的坏味道，我称它为<strong>脏乱差</strong>，这些脏乱差的代码是怎样形成的呢？大概有以下几种因素：</p><ol><li>上一个写这段代码程序员经验不足、水平太差，或写代码时不够用心。</li><li>奇葩的产品经理提出奇葩的需求。</li><li>某一个模块业务太复杂，需求变更的次数太多，经手的程序员太多，每个人都在一个看似合适的地方，加一段看似合适的代码，到最后没人能之完完整整地看懂这段代码的含义。</li></ol><h2 id="_3-什么时机重构" tabindex="-1"><a class="header-anchor" href="#_3-什么时机重构" aria-hidden="true">#</a> 3. 什么时机重构</h2><p>重构分为两个级别类型：</p><ul><li>（1）对现有项目进行代码级别的重构；</li><li>（2）对现有的业务进行软件架构的升级和系统的升级。</li></ul><p>对于第一种情况，代码的重构应该贯穿于整个软件开发过程中；对于第二种情况，大型的重构最好封闭进行，由专门的（高水平）团队负责，期间不接任何需求；重新设计、开发新的更高可用、高并发的系统，经集成测试通过后，再用新系统逐步替换老的系统。之所以会有这种系统和架构的升级，主要是因为，对于互联网的产品，为适合的其快速发展的需求，不同的用户量级别，需要采用不同的架构。简单的架构：开发简单、迭代速度快；高可用架构：开发成本高，但支持的用户量大，可承载的并发数高。</p><p>第二种情况属于软件架构的范畴，这里主要讨论第一种情况，即对项目本身进行代码级别的重构。这个重构应该贯穿于整个软件开发过程始终，不需要单独拿出一块时间进行，只要你闻到代码的坏味道，即可进行。我们可以遵循三次法则来进行重构：事不过三，三则重构，也就是上一篇《[谈谈我对设计原则的思考]》中的 Rule Of Three 原则。</p><p>虽然重构可以随时随地的进行，但还需要一些触发点来触发你去做这一件事，这些触发点主要有以下几个：</p><h3 id="_3-1-添加功能时" tabindex="-1"><a class="header-anchor" href="#_3-1-添加功能时" aria-hidden="true">#</a> 3.1 <strong>添加功能时</strong></h3><p>当添加新功能时，如果发现某段代码改起来特别困难，拓展功能特别不灵活，就要重构这部分代码了，使添加新特性和功能变得更容易。在添加新功能时，只梳理这部分功能相关的代码；一直保持这种习惯，日积月累，我们的代码会越来越干净，开发速度也会越来越快。</p><h3 id="_3-2-修补错误时" tabindex="-1"><a class="header-anchor" href="#_3-2-修补错误时" aria-hidden="true">#</a> 3.2 <strong>修补错误时</strong></h3><p>在你改 Bug，查找定位问题时，发现自己以前写的代码或者别人的代码设计上有缺陷（如扩展性不灵活），或健壮性考虑的不够周全（如漏掉一些该处理的异常），导致程序频繁出问题，此时就是一个比较好的重构时机。</p><p>可能有人会说：道理都懂，但现实是线上问题出来时根本就没那么多时间允许去重构代码。我想说的是：只要不是十万紧急的高危（大部分高危问题测试阶段都测出来）问题，请尽量养成这种习惯。</p><p>每遇到一个问题就正面解决这个问题，不要选择绕行（想尽歪招绕开问题），解决前进道路上的一切障碍。这样你对这块代码就更加熟悉，更加自信；下次再遇到类似的问题，你就会再次使用这段代码或参考这段代码。软件开发就是这样，改善某段代码当前看起来会多花一些时间，但从长远来看这些时间肯定是值得的；清除当前障碍多花一小时，能为你将来避免绕路节省好几天。 持续一段时间后，你会发现代码中的坑逐步被填平，欠下的技术债务也会越来越少。</p><h3 id="_3-3-复审代码时" tabindex="-1"><a class="header-anchor" href="#_3-3-复审代码时" aria-hidden="true">#</a> 3.3 <strong>复审代码时</strong></h3><p>很多公司会有 Code Review 的要求，每个公司 Code Review 的形式可能不太一样；有的采用“结对编程”的方式，两个人一起互审代码；有的是部门领导进行不定期 Code Review；我们公司是在程序上线之前，代码合并申请的时候，由经验丰富、成熟稳重的资深工程师负责审查。Code Review 的好处是能有效地发现一些潜在的问题（所谓当局者谜，旁观者清！程序开发也一样，同时更能发现自己代码的漏洞）；有助于团队成员进行技术的交流和沟通。</p><p>在 Code Review 时发现程序的问题，或设计的不足，这又是一个重构的极佳时机，因为 Code Review 时，对方往往能提出一些更的建议或想法。</p><h2 id="_4-如何重构代码" tabindex="-1"><a class="header-anchor" href="#_4-如何重构代码" aria-hidden="true">#</a> 4. 如何重构代码</h2><p>上面讲解了什么时候该重构，怎么进行重构，这又是一个重要的问题。下面将介绍一些最常用和实用的重构方法，下面的这些方法针对各种编程语言都实用。</p><h3 id="_4-0-说服业务方" tabindex="-1"><a class="header-anchor" href="#_4-0-说服业务方" aria-hidden="true">#</a> 4.0 说服业务方</h3><p>重构不单是研发团队的事情，更是整个项目团队的事情。重构可以提升系统的三高，也可以优化改善业务流程，满足新的业务诉求等等。重构需要投入大量资源，必须要得到业务方的支持。通常这个时候需要对他们晓之以理，动之以情，<strong>阐述清楚重构的利弊，以及不重构的要害</strong>。在得到他们的支持后，重构的工作便正式开展。</p><p>参与人员：技术 Leader</p><h3 id="_4-1-树立重构目标-有的放矢" tabindex="-1"><a class="header-anchor" href="#_4-1-树立重构目标-有的放矢" aria-hidden="true">#</a> 4.1 树立重构目标，有的放矢</h3><p>重构是一项工程，是一场持久战，它不是一两个迭代、甚至一两个月能做好的事情，需要投入大量的人力、物力、时间精力等。那么在这场旷日持久的战斗中，我们的目标是什么？是通过更优秀更合理的架构来满足系统三高的需求，还是想通过重构来提高代码质量，或者引入新的技术和框架来升级整个系统，抑或通过重构来优化业务流程，实现原来实现不了的需求。有了目标后，才能做到有的放矢。</p><p>参与人员：技术 Leader，架构师</p><h3 id="_4-2-确定重构的范围-并对重构作出预测" tabindex="-1"><a class="header-anchor" href="#_4-2-确定重构的范围-并对重构作出预测" aria-hidden="true">#</a> 4.2 确定重构的范围，并对重构作出预测</h3><p>重构通常有以下几个级别的重构</p><ul><li>平台级别重构。针对整体平台的重构，如阿里早期是 LAMP 架构，后来整体迁移到了 Java 平台。</li><li>系统级别重构。针对业务系统的重构，如通过引入微服务架构或者 SOA 架构，分解单体应用。</li><li>架构级别重构。如通过架构的调整和重新设计，改善原有架构的不合理之处。如通过分层使业务解耦，引入缓存设计提升系统高并发等。</li><li>业务级别重构。常见为某些业务需求因为系统设计的不合理性导致无法满足或有缺陷满足，需要通过业务系统的重构调整或数据库的重构来解决。</li><li>模块/代码级别重构。这是最常见的重构。通常指使用设计模式、封装继承、优化拆解代码，使得代码的结构更良好，运行效率更高。</li></ul><p>确定这次重构是属于什么级别，确定重构的整体范围的大小，确定重构的技术选型，进而对重构工作进行科学的评测和预估。比如需要投入哪些成本，需要投入的人力和时间是多少，在重构的过程中能否支撑正常业务需求等等。在有了这些预测后，也对业务方有个交代，尤其是当他们追在后面问什么时候能上新需求。</p><p>参与人员：技术 Leader，架构师，研发人员</p><h3 id="三-旧系统的熟悉和业务梳理" tabindex="-1"><a class="header-anchor" href="#三-旧系统的熟悉和业务梳理" aria-hidden="true">#</a> 三：旧系统的熟悉和业务梳理</h3><p>重构不是和旧系统说散就散，而是要不断和旧系统战斗的过程。知己知彼，百战不殆。重构不仅需要清楚新系统的目标和未来，更需要对旧系统非常熟悉(尤其是坑)。此时需要参与重构的人员(尤其是参与旧系统的人员)来对旧系统业务和系统进行梳理，对原有资料信息进行收益和整理的工作，对旧系统的关键代码和数据库设计进行 Review 等等。</p><p>以下是重构旧系统前需要准备的常见工作：</p><ul><li>旧系统资料和信息的收集，包含且不限于系统相关的设计文档和技术文档等文档资料，架构图、UML 图，数据库设计 ER 图等图形化资料</li><li>业务线和业务流程的梳理，整理业务线上的各大项目、业务流程，并输出为文档</li><li>旧系统关键代码的 Review</li></ul><p>有相关疑难点及时与相关与业务线上的人员沟通，将问题解决在”襁褓”中。</p><p>参与人员：技术 Leader，架构师，研发人员</p><h3 id="_4-4-数据库重构" tabindex="-1"><a class="header-anchor" href="#_4-4-数据库重构" aria-hidden="true">#</a> 4.4 数据库重构</h3><p>如果在重构中需要涉及数据库的重构，数据库的重构一般是最先开始的一步。系统需要重构的直接原因，也大多和数据库有关。在数据库重构时，我们清楚旧系统中数据库的各种设计缺陷和使用障碍，那么就可以对症下药，如通过三大范式或反范式来设计表，是否需要分库分表等等。</p><p>参与人员：DBA，架构师</p><h3 id="_4-5-后台系统重构" tabindex="-1"><a class="header-anchor" href="#_4-5-后台系统重构" aria-hidden="true">#</a> 4.5 后台系统重构</h3><p>后台系统重构前，必须需要依照前文所述的一些设计和技术文档。这些文档输出后并经讨论成型后，架构师进行系统架构设计，后台开发人员进行具体编码工作。通常这个过程是耗时最长的，也是非常重要的一环。后台的架构设计水平，决定着系统重构的水平，业务代码的质量，决定着系统重构的质量。</p><p>因为这个过程比较漫长，且成果无法立竿见影。所以通常采用敏捷开发的模式，通过迭代的方式来进行后台系统重构。迭代的方式有几个好处：</p><ul><li>需要将整个重构过程进行有效规划和量化，做到胸有成竹</li><li>每个阶段能有可见的成果，确保团队在长时间的重构过程中不陷于泥潭</li><li>对已重构好的部分可以及时进行联调测试或观察，不断在迭代中总结、在总结中迭代</li></ul><p>另外在后台系统重构时，也需要有明确量化的目标和标准，比如各系统和业务模块支持多少 QPS，接口响应时间多长时间等，这样团队才能在重构的过程中不至于为了重构而重构。</p><p>在重构过程中，定期进行 Code Review，及时发现重构的问题和质量的问题，避免出现破窗效应，引入拙劣的设计或垃圾代码，进而破坏整个系统。</p><p>参与人员：技术 Leader，架构师，研发人员</p><h3 id="六-数据迁移与检查" tabindex="-1"><a class="header-anchor" href="#六-数据迁移与检查" aria-hidden="true">#</a> 六：数据迁移与检查</h3><p>如果涉及数据库重构时，在新的数据库设计好后，就会有面临数据迁移的问题。一般分为全量迁移和增量迁移，全量迁移是将旧系统的数据一次性迁移到新的数据库中，增量迁移是在实行全量迁移后旧系统新产生的数据迁移到新系统上来，增量迁移一直到旧系统下线不再产生新数据后。通常迁移都是通过编写脚本或程序来实现，拒绝人工操作。</p><p>迁移后自然需要对比新旧系统的数据，同样可以通过脚本或程序来进行对比，查缺补漏，定位分析。</p><p>参与人员：DBA，研发人员</p><h3 id="_4-7-系统检查、联调与测试" tabindex="-1"><a class="header-anchor" href="#_4-7-系统检查、联调与测试" aria-hidden="true">#</a> 4.7 系统检查、联调与测试</h3><p>在后台系统重构到一定程度时，同样也需要编写脚本和程序来对新旧系统的业务接口进行检查，及时发现重构中的问题，必要时候进行架构调整和数据库调整。当然，在重构时，开发人员能提高单元测试覆盖率当然是更好不过。当各系统和模块的依赖解决的差不多时，可以开始联调工作。</p><p>当然最后还需要系统性的测试，如功能性测试、稳定性测试、性能测试，本地测试、模拟线上环境测试等。测试中发现的问题经验证修复后，达到上线的标准，即可灰度上线。</p><p>参与人员：架构师，研发人员，测试人员</p><h3 id="_4-8-灰度发布与观察" tabindex="-1"><a class="header-anchor" href="#_4-8-灰度发布与观察" aria-hidden="true">#</a> 4.8 灰度发布与观察</h3><p>万里长征已经走到最后，也到了最紧要的关头。灰度发布时，只接入一小部分流量，并及时跟踪和分析线上的 log 与监控告警，一有问题及时解决。当新系统趋于稳定时，可以逐渐加大灰度发布的范围和接入的流量，同时继续跟踪线上 log 与监控告警。</p><p>参与人员：运维人员，测试人员，研发人员</p><h3 id="_4-9-系统切换" tabindex="-1"><a class="header-anchor" href="#_4-9-系统切换" aria-hidden="true">#</a> 4.9 系统切换</h3><p>在系统切换时，需要提前制订系统切换方案，包含相应的规划与流程，甚至是应急预案与回滚方案，避免走一步看一步。切换完成后，新系统完全替换旧系统，旧系统下线，完成重构。</p><p>参与人员：运维人员，测试人员</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',75),s={href:"https://www.kancloud.cn/fundebug/fundebug-blog/1035223",target:"_blank",rel:"noopener noreferrer"},c={href:"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E7%99%BD%E8%AF%9D%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%2028%20%E8%AE%B2%EF%BC%88%E5%AE%8C%EF%BC%89/27%20%E8%B0%88%E8%B0%88%E6%88%91%E5%AF%B9%E9%A1%B9%E7%9B%AE%E9%87%8D%E6%9E%84%E7%9A%84%E7%9C%8B%E6%B3%95.md",target:"_blank",rel:"noopener noreferrer"};function _(u,f){const a=l("ExternalLinkIcon");return d(),n("div",null,[o,e("p",null,[e("a",s,[r("如何来一次说干就干的重构 (流程篇)"),i(a)])]),e("p",null,[e("a",c,[r("27 谈谈我对项目重构的看法"),i(a)])])])}const g=h(t,[["render",_],["__file","optimization-x-refactor.html.vue"]]);export{g as default};
