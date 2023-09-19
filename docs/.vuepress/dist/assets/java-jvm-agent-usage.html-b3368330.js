const e=JSON.parse('{"key":"v-2c8cebb5","path":"/java/jvm/java-jvm-agent-usage.html","title":"调试排错 - Java动态调试技术原理","lang":"zh-CN","frontmatter":{"order":300,"category":["Java","JVM"],"description":"本文转载自 美团技术团队胡健的Java 动态调试技术原理及实践 (https://tech.meituan.com/2019/11/07/java-dynamic-debugging-technology.html), 通过学习java agent方式进行动态调试了解目前很多大厂开源的一些基于此的调试工具。 1. 简介 断点调试是我们最常使用的调试手段...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./java/jvm/java-jvm-agent-usage.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"调试排错 - Java动态调试技术原理"}],["meta",{"property":"og:description","content":"本文转载自 美团技术团队胡健的Java 动态调试技术原理及实践 (https://tech.meituan.com/2019/11/07/java-dynamic-debugging-technology.html), 通过学习java agent方式进行动态调试了解目前很多大厂开源的一些基于此的调试工具。 1. 简介 断点调试是我们最常使用的调试手段..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. Agent的实现模式","slug":"_2-agent的实现模式","link":"#_2-agent的实现模式","children":[{"level":3,"title":"2.1 通过Java Instrumentation API","slug":"_2-1-通过java-instrumentation-api","link":"#_2-1-通过java-instrumentation-api","children":[]}]},{"level":2,"title":"3. 启动时加载Agent","slug":"_3-启动时加载agent","link":"#_3-启动时加载agent","children":[{"level":3,"title":"3.1 参数解析","slug":"_3-1-参数解析","link":"#_3-1-参数解析","children":[]},{"level":3,"title":"3.2 执行加载操作","slug":"_3-2-执行加载操作","link":"#_3-2-执行加载操作","children":[]},{"level":3,"title":"3.3  instrument动态链接库","slug":"_3-3-instrument动态链接库","link":"#_3-3-instrument动态链接库","children":[]}]},{"level":2,"title":"4. 运行时加载Agent","slug":"_4-运行时加载agent","link":"#_4-运行时加载agent","children":[{"level":3,"title":"4.1 AttachListener","slug":"_4-1-attachlistener","link":"#_4-1-attachlistener","children":[]},{"level":3,"title":"4.2 运行时加载Agent的实现","slug":"_4-2-运行时加载agent的实现","link":"#_4-2-运行时加载agent的实现","children":[]},{"level":3,"title":"4.3 load命令的实现","slug":"_4-3-load命令的实现","link":"#_4-3-load命令的实现","children":[]}]},{"level":2,"title":"5. 动态字节码修改的限制","slug":"_5-动态字节码修改的限制","link":"#_5-动态字节码修改的限制","children":[]},{"level":2,"title":"6. 重定义类字节码的实现细节","slug":"_6-重定义类字节码的实现细节","link":"#_6-重定义类字节码的实现细节","children":[]},{"level":2,"title":"7. Java-debug-tool","slug":"_7-java-debug-tool","link":"#_7-java-debug-tool","children":[{"level":3,"title":"7.1  Java-debug-tool整体架构","slug":"_7-1-java-debug-tool整体架构","link":"#_7-1-java-debug-tool整体架构","children":[]},{"level":3,"title":"7.2 Java-debug-tool的字节码增强方案","slug":"_7-2-java-debug-tool的字节码增强方案","link":"#_7-2-java-debug-tool的字节码增强方案","children":[]},{"level":3,"title":"7.3 Java-debug-tool的命令设计与实现","slug":"_7-3-java-debug-tool的命令设计与实现","link":"#_7-3-java-debug-tool的命令设计与实现","children":[]},{"level":3,"title":"7.4 Java-debug-tool与同类产品对比分析","slug":"_7-4-java-debug-tool与同类产品对比分析","link":"#_7-4-java-debug-tool与同类产品对比分析","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":30.44,"words":9133},"filePathRelative":"java/jvm/java-jvm-agent-usage.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};