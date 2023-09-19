const e=JSON.parse('{"key":"v-467da3e2","path":"/java/thread/java-thread-y-atomicstampedreference-source.html","title":"版本号原子类AtomicStampedReference源码解析","lang":"zh-CN","frontmatter":{"description":"1. 简介 通过原子的方式更新单个变量的原子类的升级版，Atomic包提供了以下2个类：\\rAtomicMarkableReference< V >：维护带有标记位的对象引用，可以原子方式对其进行更新。; \\rAtomicStampedReference< V >：维护带有整数标志的对象引用，可用原子方式对其进行更新。; 上面两个原子类的方法以及原理几乎一...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./java/thread/java-thread-y-atomicstampedreference-source.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"版本号原子类AtomicStampedReference源码解析"}],["meta",{"property":"og:description","content":"1. 简介 通过原子的方式更新单个变量的原子类的升级版，Atomic包提供了以下2个类：\\rAtomicMarkableReference< V >：维护带有标记位的对象引用，可以原子方式对其进行更新。; \\rAtomicStampedReference< V >：维护带有整数标志的对象引用，可用原子方式对其进行更新。; 上面两个原子类的方法以及原理几乎一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 为什么需要带版本号？（ABA问题）","slug":"_1-1-为什么需要带版本号-aba问题","link":"#_1-1-为什么需要带版本号-aba问题","children":[]},{"level":3,"title":"1.2 如何解决ABA问题","slug":"_1-2-如何解决aba问题","link":"#_1-2-如何解决aba问题","children":[]}]},{"level":2,"title":"2. 重要属性","slug":"_2-重要属性","link":"#_2-重要属性","children":[]},{"level":2,"title":"3. 重要方法","slug":"_3-重要方法","link":"#_3-重要方法","children":[]},{"level":2,"title":"4. 案例","slug":"_4-案例","link":"#_4-案例","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.52,"words":1655},"filePathRelative":"java/thread/java-thread-y-atomicstampedreference-source.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
