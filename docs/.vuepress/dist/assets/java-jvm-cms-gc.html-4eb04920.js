const l=JSON.parse('{"key":"v-1ce727c4","path":"/java/jvm/java-jvm-cms-gc.html","title":"GC - Java 垃圾回收器之CMS GC问题分析与解决","lang":"zh-CN","frontmatter":{"order":140,"category":["Java"],"description":"1. 写在前面\\r 本文主要针对 Hotspot VM 中“CMS + ParNew”组合的一些使用场景进行总结。重点通过部分源码对根因进行分析以及对排查方法进行总结，排查过程会省略较多，另外本文专业术语较多，有一定的阅读门槛，如未介绍清楚，还请自行查阅相关材料。 1.1 引言 自 Sun 发布 Java 语言以来，开始使用 GC 技术来进行内存自动管理...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./java/jvm/java-jvm-cms-gc.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"GC - Java 垃圾回收器之CMS GC问题分析与解决"}],["meta",{"property":"og:description","content":"1. 写在前面\\r 本文主要针对 Hotspot VM 中“CMS + ParNew”组合的一些使用场景进行总结。重点通过部分源码对根因进行分析以及对排查方法进行总结，排查过程会省略较多，另外本文专业术语较多，有一定的阅读门槛，如未介绍清楚，还请自行查阅相关材料。 1.1 引言 自 Sun 发布 Java 语言以来，开始使用 GC 技术来进行内存自动管理..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 写在前面","slug":"_1-写在前面","link":"#_1-写在前面","children":[{"level":3,"title":"1.1 引言","slug":"_1-1-引言","link":"#_1-1-引言","children":[]},{"level":3,"title":"1.2 概览","slug":"_1-2-概览","link":"#_1-2-概览","children":[]}]},{"level":2,"title":"2. GC 基础","slug":"_2-gc-基础","link":"#_2-gc-基础","children":[{"level":3,"title":"2.1 基础概念","slug":"_2-1-基础概念","link":"#_2-1-基础概念","children":[]},{"level":3,"title":"2.2 JVM 内存划分","slug":"_2-2-jvm-内存划分","link":"#_2-2-jvm-内存划分","children":[]},{"level":3,"title":"2.3 分配对象","slug":"_2-3-分配对象","link":"#_2-3-分配对象","children":[]},{"level":3,"title":"2.4 收集对象","slug":"_2-4-收集对象","link":"#_2-4-收集对象","children":[]},{"level":3,"title":"2.5 收集器","slug":"_2-5-收集器","link":"#_2-5-收集器","children":[]},{"level":3,"title":"2.6 常用工具","slug":"_2-6-常用工具","link":"#_2-6-常用工具","children":[]}]},{"level":2,"title":"3. GC 问题判断","slug":"_3-gc-问题判断","link":"#_3-gc-问题判断","children":[{"level":3,"title":"3.1 判断 GC 有没有问题？","slug":"_3-1-判断-gc-有没有问题","link":"#_3-1-判断-gc-有没有问题","children":[]},{"level":3,"title":"3.2 判断是不是 GC 引发的问题？","slug":"_3-2-判断是不是-gc-引发的问题","link":"#_3-2-判断是不是-gc-引发的问题","children":[]},{"level":3,"title":"3.3 问题分类导读","slug":"_3-3-问题分类导读","link":"#_3-3-问题分类导读","children":[]}]},{"level":2,"title":"4. 常见场景分析与解决","slug":"_4-常见场景分析与解决","link":"#_4-常见场景分析与解决","children":[{"level":3,"title":"4.1 场景一：动态扩容引起的空间震荡","slug":"_4-1-场景一-动态扩容引起的空间震荡","link":"#_4-1-场景一-动态扩容引起的空间震荡","children":[]},{"level":3,"title":"4.2 场景二：显式 GC 的去与留","slug":"_4-2-场景二-显式-gc-的去与留","link":"#_4-2-场景二-显式-gc-的去与留","children":[]},{"level":3,"title":"4.3 场景三：MetaSpace 区 OOM","slug":"_4-3-场景三-metaspace-区-oom","link":"#_4-3-场景三-metaspace-区-oom","children":[]},{"level":3,"title":"4.4 场景四：过早晋升","slug":"_4-4-场景四-过早晋升","link":"#_4-4-场景四-过早晋升","children":[]},{"level":3,"title":"4.5 场景五：CMS Old GC 频繁","slug":"_4-5-场景五-cms-old-gc-频繁","link":"#_4-5-场景五-cms-old-gc-频繁","children":[]},{"level":3,"title":"4.6 场景六：单次 CMS Old GC 耗时长*","slug":"_4-6-场景六-单次-cms-old-gc-耗时长","link":"#_4-6-场景六-单次-cms-old-gc-耗时长","children":[]},{"level":3,"title":"4.7 场景七：内存碎片&收集器退化","slug":"_4-7-场景七-内存碎片-收集器退化","link":"#_4-7-场景七-内存碎片-收集器退化","children":[]},{"level":3,"title":"4.8 场景八：堆外内存 OOM","slug":"_4-8-场景八-堆外内存-oom","link":"#_4-8-场景八-堆外内存-oom","children":[]},{"level":3,"title":"4.9 场景九：JNI 引发的 GC 问题","slug":"_4-9-场景九-jni-引发的-gc-问题","link":"#_4-9-场景九-jni-引发的-gc-问题","children":[]}]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[{"level":3,"title":"5.1 处理流程（SOP）","slug":"_5-1-处理流程-sop","link":"#_5-1-处理流程-sop","children":[]},{"level":3,"title":"5.2 根因鱼骨图","slug":"_5-2-根因鱼骨图","link":"#_5-2-根因鱼骨图","children":[]},{"level":3,"title":"5.3 调优建议","slug":"_5-3-调优建议","link":"#_5-3-调优建议","children":[]}]},{"level":2,"title":"6. 写在最后","slug":"_6-写在最后","link":"#_6-写在最后","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":70.51,"words":21153},"filePathRelative":"java/jvm/java-jvm-cms-gc.md","localizedDate":"2023年2月20日","autoDesc":true}');export{l as data};
