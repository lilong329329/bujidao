const e=JSON.parse('{"key":"v-658bd0d5","path":"/arch/base/arch-y-ensure-high-availability.html","title":"架构之高可用: 如何保证高可用性？","lang":"zh-CN","frontmatter":{"order":90,"category":["架构"],"description":"高可用性对于我们来说应该属于经常提到的名词，本文我们将介绍在分布式系统中保证高可用性的一些常用经验。系统可用性指标系统可用性指标简单来将就是系统可用时间与总运行时间之比Availability=MTTF/(MTTF+MTTRMTTF)MTTF 是 Mean Time To Failure，指平均故障前的时间，即系统平均能够正常运行多长时间才发生一次故障...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/arch/base/arch-y-ensure-high-availability.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"架构之高可用: 如何保证高可用性？"}],["meta",{"property":"og:description","content":"高可用性对于我们来说应该属于经常提到的名词，本文我们将介绍在分布式系统中保证高可用性的一些常用经验。系统可用性指标系统可用性指标简单来将就是系统可用时间与总运行时间之比Availability=MTTF/(MTTF+MTTRMTTF)MTTF 是 Mean Time To Failure，指平均故障前的时间，即系统平均能够正常运行多长时间才发生一次故障..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"0. 影响可用性的因素有哪些","slug":"_0-影响可用性的因素有哪些","link":"#_0-影响可用性的因素有哪些","children":[]},{"level":2,"title":"1. 系统可用性指标","slug":"_1-系统可用性指标","link":"#_1-系统可用性指标","children":[]},{"level":2,"title":"2. 故障不可避免","slug":"_2-故障不可避免","link":"#_2-故障不可避免","children":[]},{"level":2,"title":"3. 核心实现方案","slug":"_3-核心实现方案","link":"#_3-核心实现方案","children":[{"level":3,"title":"3.1 冗余设计","slug":"_3-1-冗余设计","link":"#_3-1-冗余设计","children":[]},{"level":3,"title":"3.2 熔断设计","slug":"_3-2-熔断设计","link":"#_3-2-熔断设计","children":[]},{"level":3,"title":"3.3 限流设计","slug":"_3-3-限流设计","link":"#_3-3-限流设计","children":[]}]},{"level":2,"title":"4. 其他设计与方案","slug":"_4-其他设计与方案","link":"#_4-其他设计与方案","children":[{"level":3,"title":"4.1 降级设计","slug":"_4-1-降级设计","link":"#_4-1-降级设计","children":[]},{"level":3,"title":"4.2 无状态设计","slug":"_4-2-无状态设计","link":"#_4-2-无状态设计","children":[]},{"level":3,"title":"4.3 幂等性设计","slug":"_4-3-幂等性设计","link":"#_4-3-幂等性设计","children":[]},{"level":3,"title":"4.4 重试设计","slug":"_4-4-重试设计","link":"#_4-4-重试设计","children":[]},{"level":3,"title":"4.5 接口缓存","slug":"_4-5-接口缓存","link":"#_4-5-接口缓存","children":[]},{"level":3,"title":"4.6 实时监控和度量","slug":"_4-6-实时监控和度量","link":"#_4-6-实时监控和度量","children":[]},{"level":3,"title":"4.7 常规划化维护","slug":"_4-7-常规划化维护","link":"#_4-7-常规划化维护","children":[]}]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":17.61,"words":5283},"filePathRelative":"arch/base/arch-y-ensure-high-availability.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
