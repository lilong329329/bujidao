const l=JSON.parse('{"key":"v-f27b1152","path":"/java/thread/java-thread-x-key-volatile-old.html","title":"volatile关键字","lang":"zh-CN","frontmatter":{"description":"volatile 关键字与Java内存模型有关，所以先要掌握内存模型相关的概念和知识，然后我们再分析volatitle关键字的实现原理，最后总结使用volatile的使用场景 1. 内存模型的相关概念\\rCPU的速度远比内存块，所以对数据的读写，放在CPU的高速缓存中完成; \\r大家都知道，计算机在执行程序时，每条指令都是在CPU中执行的，而执行指令的过程...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./java/thread/java-thread-x-key-volatile-old.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"volatile关键字"}],["meta",{"property":"og:description","content":"volatile 关键字与Java内存模型有关，所以先要掌握内存模型相关的概念和知识，然后我们再分析volatitle关键字的实现原理，最后总结使用volatile的使用场景 1. 内存模型的相关概念\\rCPU的速度远比内存块，所以对数据的读写，放在CPU的高速缓存中完成; \\r大家都知道，计算机在执行程序时，每条指令都是在CPU中执行的，而执行指令的过程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 内存模型的相关概念","slug":"_1-内存模型的相关概念","link":"#_1-内存模型的相关概念","children":[{"level":3,"title":"1.1 案例","slug":"_1-1-案例","link":"#_1-1-案例","children":[]},{"level":3,"title":"1.2 多线程面临的问题","slug":"_1-2-多线程面临的问题","link":"#_1-2-多线程面临的问题","children":[]}]},{"level":2,"title":"2. 并发编程中的三个概念","slug":"_2-并发编程中的三个概念","link":"#_2-并发编程中的三个概念","children":[{"level":3,"title":"2.1 原子性","slug":"_2-1-原子性","link":"#_2-1-原子性","children":[]},{"level":3,"title":"2.2 可见性","slug":"_2-2-可见性","link":"#_2-2-可见性","children":[]},{"level":3,"title":"2.3 有序性","slug":"_2-3-有序性","link":"#_2-3-有序性","children":[]}]},{"level":2,"title":"3. Java内存模型","slug":"_3-java内存模型","link":"#_3-java内存模型","children":[{"level":3,"title":"3.1 原子性","slug":"_3-1-原子性","link":"#_3-1-原子性","children":[]},{"level":3,"title":"3.2 可见性","slug":"_3-2-可见性","link":"#_3-2-可见性","children":[]},{"level":3,"title":"3.3 有序性","slug":"_3-3-有序性","link":"#_3-3-有序性","children":[]}]},{"level":2,"title":"4. 深入剖析volatile关键字","slug":"_4-深入剖析volatile关键字","link":"#_4-深入剖析volatile关键字","children":[{"level":3,"title":"4.1 volatile关键字的两层语义","slug":"_4-1-volatile关键字的两层语义","link":"#_4-1-volatile关键字的两层语义","children":[]},{"level":3,"title":"4.2 volatile保证原子性吗？","slug":"_4-2-volatile保证原子性吗","link":"#_4-2-volatile保证原子性吗","children":[]},{"level":3,"title":"2.3 volatile能保证有序性吗","slug":"_2-3-volatile能保证有序性吗","link":"#_2-3-volatile能保证有序性吗","children":[]},{"level":3,"title":"2.4 volatile的原理和实现机制","slug":"_2-4-volatile的原理和实现机制","link":"#_2-4-volatile的原理和实现机制","children":[]}]},{"level":2,"title":"5. 使用volatile关键字的场景","slug":"_5-使用volatile关键字的场景","link":"#_5-使用volatile关键字的场景","children":[]},{"level":2,"title":"6. 说说 synchronized 关键字和 volatile 关键字的区别","slug":"_6-说说-synchronized-关键字和-volatile-关键字的区别","link":"#_6-说说-synchronized-关键字和-volatile-关键字的区别","children":[{"level":3,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":24.78,"words":7435},"filePathRelative":"java/thread/java-thread-x-key-volatile-old.md","localizedDate":"2023年2月20日","autoDesc":true}');export{l as data};
