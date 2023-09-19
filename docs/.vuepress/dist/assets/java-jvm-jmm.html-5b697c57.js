const e=JSON.parse('{"key":"v-070878a4","path":"/java/jvm/java-jvm-jmm.html","title":"JVM 基础 - Java 内存模型详解","lang":"zh-CN","frontmatter":{"order":70,"category":["Java","JVM"],"description":"任重而道远，这章还不是太理解\\r 大致分三部分：重排序与顺序一致性；三个同步原语（lock，volatile，final）的内存语义，重排序规则及在处理器中的实现；java 内存模型的设计，及其与处理器内存模型和顺序一致性内存模型的关系。 1. 基础 1.1 并发编程模型的分类 在并发编程中，我们需要处理两个关键问题：线程之间如何通信及线程之间如何同步（...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./java/jvm/java-jvm-jmm.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"JVM 基础 - Java 内存模型详解"}],["meta",{"property":"og:description","content":"任重而道远，这章还不是太理解\\r 大致分三部分：重排序与顺序一致性；三个同步原语（lock，volatile，final）的内存语义，重排序规则及在处理器中的实现；java 内存模型的设计，及其与处理器内存模型和顺序一致性内存模型的关系。 1. 基础 1.1 并发编程模型的分类 在并发编程中，我们需要处理两个关键问题：线程之间如何通信及线程之间如何同步（..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 基础","slug":"_1-基础","link":"#_1-基础","children":[{"level":3,"title":"1.1 并发编程模型的分类","slug":"_1-1-并发编程模型的分类","link":"#_1-1-并发编程模型的分类","children":[]},{"level":3,"title":"1.2 Java 内存模型的抽象","slug":"_1-2-java-内存模型的抽象","link":"#_1-2-java-内存模型的抽象","children":[]},{"level":3,"title":"1.3 重排序","slug":"_1-3-重排序","link":"#_1-3-重排序","children":[]},{"level":3,"title":"1.4 处理器重排序与内存屏障指令","slug":"_1-4-处理器重排序与内存屏障指令","link":"#_1-4-处理器重排序与内存屏障指令","children":[]},{"level":3,"title":"1.5 happens-before","slug":"_1-5-happens-before","link":"#_1-5-happens-before","children":[]}]},{"level":2,"title":"2. 重排序","slug":"_2-重排序","link":"#_2-重排序","children":[{"level":3,"title":"2.1 数据依赖性","slug":"_2-1-数据依赖性","link":"#_2-1-数据依赖性","children":[]},{"level":3,"title":"2.2 as-if-serial 语义","slug":"_2-2-as-if-serial-语义","link":"#_2-2-as-if-serial-语义","children":[]},{"level":3,"title":"2.3 程序顺序规则","slug":"_2-3-程序顺序规则","link":"#_2-3-程序顺序规则","children":[]},{"level":3,"title":"2.4 重排序对多线程的影响","slug":"_2-4-重排序对多线程的影响","link":"#_2-4-重排序对多线程的影响","children":[]}]},{"level":2,"title":"3. 顺序一致性","slug":"_3-顺序一致性","link":"#_3-顺序一致性","children":[{"level":3,"title":"3.1 数据竞争与顺序一致性保证","slug":"_3-1-数据竞争与顺序一致性保证","link":"#_3-1-数据竞争与顺序一致性保证","children":[]},{"level":3,"title":"3.2 顺序一致性内存模型","slug":"_3-2-顺序一致性内存模型","link":"#_3-2-顺序一致性内存模型","children":[]},{"level":3,"title":"3.3 同步程序的顺序一致性效果","slug":"_3-3-同步程序的顺序一致性效果","link":"#_3-3-同步程序的顺序一致性效果","children":[]},{"level":3,"title":"3.4 未同步程序的执行特性","slug":"_3-4-未同步程序的执行特性","link":"#_3-4-未同步程序的执行特性","children":[]}]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[{"level":3,"title":"4.1 处理器内存模型","slug":"_4-1-处理器内存模型","link":"#_4-1-处理器内存模型","children":[]},{"level":3,"title":"4.2 JMM，处理器内存模型与顺序一致性内存模型之间的关系","slug":"_4-2-jmm-处理器内存模型与顺序一致性内存模型之间的关系","link":"#_4-2-jmm-处理器内存模型与顺序一致性内存模型之间的关系","children":[]},{"level":3,"title":"4.3 JMM 的设计","slug":"_4-3-jmm-的设计","link":"#_4-3-jmm-的设计","children":[]},{"level":3,"title":"4.4 JMM 的内存可见性保证","slug":"_4-4-jmm-的内存可见性保证","link":"#_4-4-jmm-的内存可见性保证","children":[]},{"level":3,"title":"4.5 JSR-133 对旧内存模型的修补","slug":"_4-5-jsr-133-对旧内存模型的修补","link":"#_4-5-jsr-133-对旧内存模型的修补","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":36.59,"words":10976},"filePathRelative":"java/jvm/java-jvm-jmm.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};