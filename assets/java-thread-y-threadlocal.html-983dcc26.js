const e=JSON.parse('{"key":"v-68b5df95","path":"/java/thread/java-thread-y-threadlocal.html","title":"Java 并发 - ThreadLocal详解","lang":"zh-CN","frontmatter":{"order":45,"category":["Java","并发"],"description":"0. 面试题\\r什么是ThreadLocal? 用来解决什么问题的?; \\r说说你对ThreadLocal的理解; \\rThreadLocal是如何实现线程隔离的?; \\r为什么ThreadLocal会造成内存泄露? 如何解决; \\r还有哪些使用ThreadLocal的应用场景?; 1. 简介 1.1 线程安全解决方案之一\\r 线程安全：是指广义上的共享资源访问安...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java/thread/java-thread-y-threadlocal.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Java 并发 - ThreadLocal详解"}],["meta",{"property":"og:description","content":"0. 面试题\\r什么是ThreadLocal? 用来解决什么问题的?; \\r说说你对ThreadLocal的理解; \\rThreadLocal是如何实现线程隔离的?; \\r为什么ThreadLocal会造成内存泄露? 如何解决; \\r还有哪些使用ThreadLocal的应用场景?; 1. 简介 1.1 线程安全解决方案之一\\r 线程安全：是指广义上的共享资源访问安..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"0. 面试题","slug":"_0-面试题","link":"#_0-面试题","children":[]},{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 线程安全解决方案之一","slug":"_1-1-线程安全解决方案之一","link":"#_1-1-线程安全解决方案之一","children":[]},{"level":3,"title":"1.2 官网的解释","slug":"_1-2-官网的解释","link":"#_1-2-官网的解释","children":[]}]},{"level":2,"title":"2. 为什么需要ThreadLocal","slug":"_2-为什么需要threadlocal","link":"#_2-为什么需要threadlocal","children":[]},{"level":2,"title":"3. ThreadLocal原理","slug":"_3-threadlocal原理","link":"#_3-threadlocal原理","children":[{"level":3,"title":"3.1 如何实现线程隔离","slug":"_3-1-如何实现线程隔离","link":"#_3-1-如何实现线程隔离","children":[]},{"level":3,"title":"3.2 ThreadLocalMap对象是什么","slug":"_3-2-threadlocalmap对象是什么","link":"#_3-2-threadlocalmap对象是什么","children":[]}]},{"level":2,"title":"4. ThreadLocal造成内存泄露的问题","slug":"_4-threadlocal造成内存泄露的问题","link":"#_4-threadlocal造成内存泄露的问题","children":[]},{"level":2,"title":"5. ThreadLocal应用场景","slug":"_5-threadlocal应用场景","link":"#_5-threadlocal应用场景","children":[{"level":3,"title":"5.1 Session的管理","slug":"_5-1-session的管理","link":"#_5-1-session的管理","children":[]},{"level":3,"title":"5.2 在线程内部创建ThreadLocal","slug":"_5-2-在线程内部创建threadlocal","link":"#_5-2-在线程内部创建threadlocal","children":[]},{"level":3,"title":"5.3  java 开发手册中推荐的 ThreadLocal","slug":"_5-3-java-开发手册中推荐的-threadlocal","link":"#_5-3-java-开发手册中推荐的-threadlocal","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":14.8,"words":4440},"filePathRelative":"java/thread/java-thread-y-threadlocal.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
