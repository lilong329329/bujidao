const e=JSON.parse('{"key":"v-74aca148","path":"/java/io/java-io-nio-select-epoll.html","title":"Java NIO - IO多路复用详解","lang":"zh-CN","frontmatter":{"order":100,"category":["Java","IO"],"description":"本文主要对IO多路复用，Ractor模型以及Java NIO对其的支持。 1. 现实场景 我们试想一下这样的现实场景: 一个餐厅同时有100位客人到店，当然到店后第一件要做的事情就是点菜。但是问题来了，餐厅老板为了节约人力成本目前只有一位大堂服务员拿着唯一的一本菜单等待客人进行服务。\\r那么最笨(但是最简单)的方法是(方法A)，无论有多少客人等待点餐，服...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java/io/java-io-nio-select-epoll.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Java NIO - IO多路复用详解"}],["meta",{"property":"og:description","content":"本文主要对IO多路复用，Ractor模型以及Java NIO对其的支持。 1. 现实场景 我们试想一下这样的现实场景: 一个餐厅同时有100位客人到店，当然到店后第一件要做的事情就是点菜。但是问题来了，餐厅老板为了节约人力成本目前只有一位大堂服务员拿着唯一的一本菜单等待客人进行服务。\\r那么最笨(但是最简单)的方法是(方法A)，无论有多少客人等待点餐，服..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 现实场景","slug":"_1-现实场景","link":"#_1-现实场景","children":[]},{"level":2,"title":"2. 典型的多路复用IO实现","slug":"_2-典型的多路复用io实现","link":"#_2-典型的多路复用io实现","children":[]},{"level":2,"title":"3. Reactor模型和Proactor模型","slug":"_3-reactor模型和proactor模型","link":"#_3-reactor模型和proactor模型","children":[{"level":3,"title":"3.1 传统IO模型","slug":"_3-1-传统io模型","link":"#_3-1-传统io模型","children":[]},{"level":3,"title":"3.2 Reactor事件驱动模型","slug":"_3-2-reactor事件驱动模型","link":"#_3-2-reactor事件驱动模型","children":[]},{"level":3,"title":"3.3 Reactor模型----业务处理与IO分离","slug":"_3-3-reactor模型-业务处理与io分离","link":"#_3-3-reactor模型-业务处理与io分离","children":[]},{"level":3,"title":"3.4 Reactor模型----并发读写","slug":"_3-4-reactor模型-并发读写","link":"#_3-4-reactor模型-并发读写","children":[]},{"level":3,"title":"3.5 Reactor模型示例","slug":"_3-5-reactor模型示例","link":"#_3-5-reactor模型示例","children":[]}]},{"level":2,"title":"4. JAVA对多路复用IO的支持","slug":"_4-java对多路复用io的支持","link":"#_4-java对多路复用io的支持","children":[{"level":3,"title":"4.1 重要概念: Channel","slug":"_4-1-重要概念-channel","link":"#_4-1-重要概念-channel","children":[]},{"level":3,"title":"4.2 重要概念: Buffer","slug":"_4-2-重要概念-buffer","link":"#_4-2-重要概念-buffer","children":[]},{"level":3,"title":"4.3 重要概念: Selector","slug":"_4-3-重要概念-selector","link":"#_4-3-重要概念-selector","children":[]},{"level":3,"title":"4.4 JAVA NIO 框架简要设计分析","slug":"_4-4-java-nio-框架简要设计分析","link":"#_4-4-java-nio-框架简要设计分析","children":[]},{"level":3,"title":"4.5 JAVA实例","slug":"_4-5-java实例","link":"#_4-5-java实例","children":[]},{"level":3,"title":"4.6 JAVA实例改进","slug":"_4-6-java实例改进","link":"#_4-6-java实例改进","children":[]}]},{"level":2,"title":"5. 多路复用IO的优缺点","slug":"_5-多路复用io的优缺点","link":"#_5-多路复用io的优缺点","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":30.39,"words":9118},"filePathRelative":"java/io/java-io-nio-select-epoll.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
