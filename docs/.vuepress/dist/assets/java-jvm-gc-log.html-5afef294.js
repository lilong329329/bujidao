const e=JSON.parse('{"key":"v-cd57169e","path":"/java/jvm/java-jvm-gc-log.html","title":"gc日志分析","lang":"zh-CN","frontmatter":{"category":["Java","JVM"],"description":"1. 什么时候会发生垃圾收集 首先我们来看一个问题，那就是什么时候会发生垃圾回收？ 在Java中，GC是由JVM自动完成的，根据JVM系统环境而定，所以时机是不确定的。 当然，我们可以手动进行垃圾回收， 比如调用System.gc()方法通知JVM进行一次垃圾回收，但是具体什么时刻运行也无法控制。也就是说System.gc()只是通知要回收，什么时候回...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./java/jvm/java-jvm-gc-log.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"gc日志分析"}],["meta",{"property":"og:description","content":"1. 什么时候会发生垃圾收集 首先我们来看一个问题，那就是什么时候会发生垃圾回收？ 在Java中，GC是由JVM自动完成的，根据JVM系统环境而定，所以时机是不确定的。 当然，我们可以手动进行垃圾回收， 比如调用System.gc()方法通知JVM进行一次垃圾回收，但是具体什么时刻运行也无法控制。也就是说System.gc()只是通知要回收，什么时候回..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 什么时候会发生垃圾收集","slug":"_1-什么时候会发生垃圾收集","link":"#_1-什么时候会发生垃圾收集","children":[]},{"level":2,"title":"2. 怎么拿到GC日志","slug":"_2-怎么拿到gc日志","link":"#_2-怎么拿到gc日志","children":[]},{"level":2,"title":"3. gc日志分析","slug":"_3-gc日志分析","link":"#_3-gc日志分析","children":[{"level":3,"title":"3.1 环境信息","slug":"_3-1-环境信息","link":"#_3-1-环境信息","children":[]},{"level":3,"title":"3.2 配置的参数信息","slug":"_3-2-配置的参数信息","link":"#_3-2-配置的参数信息","children":[]},{"level":3,"title":"3.3 真正的GC日志","slug":"_3-3-真正的gc日志","link":"#_3-3-真正的gc日志","children":[]}]},{"level":2,"title":"4. 墙钟时间和cpu时间","slug":"_4-墙钟时间和cpu时间","link":"#_4-墙钟时间和cpu时间","children":[]},{"level":2,"title":"5. CMS日志分析","slug":"_5-cms日志分析","link":"#_5-cms日志分析","children":[]},{"level":2,"title":"6. G1日志分析","slug":"_6-g1日志分析","link":"#_6-g1日志分析","children":[]},{"level":2,"title":"7. 利用工具分析GC日志","slug":"_7-利用工具分析gc日志","link":"#_7-利用工具分析gc日志","children":[{"level":3,"title":"7.1 gceasy","slug":"_7-1-gceasy","link":"#_7-1-gceasy","children":[]},{"level":3,"title":"7.2 GCViewer","slug":"_7-2-gcviewer","link":"#_7-2-gcviewer","children":[]}]},{"level":2,"title":"8. 各GC收集器对比报告","slug":"_8-各gc收集器对比报告","link":"#_8-各gc收集器对比报告","children":[{"level":3,"title":"8.1 新生代Parallel Scavenge+老年代Parallel Old","slug":"_8-1-新生代parallel-scavenge-老年代parallel-old","link":"#_8-1-新生代parallel-scavenge-老年代parallel-old","children":[]},{"level":3,"title":"8.2 新生代ParNew 老年代 CMS","slug":"_8-2-新生代parnew-老年代-cms","link":"#_8-2-新生代parnew-老年代-cms","children":[]},{"level":3,"title":"8.3 G1收集器（独立完成）","slug":"_8-3-g1收集器-独立完成","link":"#_8-3-g1收集器-独立完成","children":[]}]},{"level":2,"title":"9. GC原因","slug":"_9-gc原因","link":"#_9-gc原因","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":13.25,"words":3974},"filePathRelative":"java/jvm/java-jvm-gc-log.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};