const e=JSON.parse('{"key":"v-1005f12d","path":"/java/thread/java-thread-x-jmm.html","title":"Java内存模型","lang":"zh-CN","frontmatter":{"description":"在介绍Java内存模型之前，先来看一下到底什么是计算机内存模型，然后再来看Java内存模型在计算机内存模型的基础上做了哪些事情。要说计算机的内存模型，就要说一下一段古老的历史，看一下为什么要有内存模型。 1. 为什么要有内存模型 内存模型，英文名Memory Model，他是一个很老的老古董了。他是与计算机硬件有关的一个概念。那么我先给你介绍下他和硬件...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./java/thread/java-thread-x-jmm.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Java内存模型"}],["meta",{"property":"og:description","content":"在介绍Java内存模型之前，先来看一下到底什么是计算机内存模型，然后再来看Java内存模型在计算机内存模型的基础上做了哪些事情。要说计算机的内存模型，就要说一下一段古老的历史，看一下为什么要有内存模型。 1. 为什么要有内存模型 内存模型，英文名Memory Model，他是一个很老的老古董了。他是与计算机硬件有关的一个概念。那么我先给你介绍下他和硬件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 为什么要有内存模型","slug":"_1-为什么要有内存模型","link":"#_1-为什么要有内存模型","children":[{"level":3,"title":"1.1 CPU和缓存一致性","slug":"_1-1-cpu和缓存一致性","link":"#_1-1-cpu和缓存一致性","children":[]},{"level":3,"title":"1.2 单线程、多线程在单核CPU、多核CPU中的影响","slug":"_1-2-单线程、多线程在单核cpu、多核cpu中的影响","link":"#_1-2-单线程、多线程在单核cpu、多核cpu中的影响","children":[]},{"level":3,"title":"1.3 处理器优化和指令重排","slug":"_1-3-处理器优化和指令重排","link":"#_1-3-处理器优化和指令重排","children":[]}]},{"level":2,"title":"2. 并发编程的问题","slug":"_2-并发编程的问题","link":"#_2-并发编程的问题","children":[{"level":3,"title":"2.1 问题","slug":"_2-1-问题","link":"#_2-1-问题","children":[]},{"level":3,"title":"2.2 问题对应关系","slug":"_2-2-问题对应关系","link":"#_2-2-问题对应关系","children":[]}]},{"level":2,"title":"3. 什么是内存模型","slug":"_3-什么是内存模型","link":"#_3-什么是内存模型","children":[{"level":3,"title":"3.1 内存模型规范","slug":"_3-1-内存模型规范","link":"#_3-1-内存模型规范","children":[]},{"level":3,"title":"3.2 什么是Java内存模型","slug":"_3-2-什么是java内存模型","link":"#_3-2-什么是java内存模型","children":[]},{"level":3,"title":"3.2.1 规定了什么？（重点）","slug":"_3-2-1-规定了什么-重点","link":"#_3-2-1-规定了什么-重点","children":[]}]},{"level":2,"title":"4. Java内存模型的实现","slug":"_4-java内存模型的实现","link":"#_4-java内存模型的实现","children":[{"level":3,"title":"4.1 原子性","slug":"_4-1-原子性","link":"#_4-1-原子性","children":[]},{"level":3,"title":"4.2 可见性","slug":"_4-2-可见性","link":"#_4-2-可见性","children":[]},{"level":3,"title":"4.3 有序性","slug":"_4-3-有序性","link":"#_4-3-有序性","children":[]},{"level":3,"title":"4.4 警告","slug":"_4-4-警告","link":"#_4-4-警告","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":15.05,"words":4516},"filePathRelative":"java/thread/java-thread-x-jmm.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
