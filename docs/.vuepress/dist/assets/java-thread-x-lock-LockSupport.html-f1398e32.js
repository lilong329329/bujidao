const t=JSON.parse('{"key":"v-5e3906d9","path":"/java/thread/java-thread-x-lock-LockSupport.html","title":"JUC锁: LockSupport详解","lang":"zh-CN","frontmatter":{"order":530,"category":["Java","并发"],"description":"0. 面试题\\r为什么LockSupport也是核心基础类? AQS框架借助于两个类：Unsafe(提供CAS操作)和LockSupport(提供park/unpark操作); \\r写出分别通过wait/notify和LockSupport的park/unpark实现同步?; \\rLockSupport.park()会释放锁资源吗? 那么Condition....","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java/thread/java-thread-x-lock-LockSupport.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"JUC锁: LockSupport详解"}],["meta",{"property":"og:description","content":"0. 面试题\\r为什么LockSupport也是核心基础类? AQS框架借助于两个类：Unsafe(提供CAS操作)和LockSupport(提供park/unpark操作); \\r写出分别通过wait/notify和LockSupport的park/unpark实现同步?; \\rLockSupport.park()会释放锁资源吗? 那么Condition...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"0. 面试题","slug":"_0-面试题","link":"#_0-面试题","children":[]},{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 方法","slug":"_2-方法","link":"#_2-方法","children":[]},{"level":2,"title":"3. 实例","slug":"_3-实例","link":"#_3-实例","children":[]},{"level":2,"title":"4. park和unpark的先后顺序不严格","slug":"_4-park和unpark的先后顺序不严格","link":"#_4-park和unpark的先后顺序不严格","children":[{"level":3,"title":"4.1 jdk的文档描述","slug":"_4-1-jdk的文档描述","link":"#_4-1-jdk的文档描述","children":[]}]},{"level":2,"title":"5. 相关问题","slug":"_5-相关问题","link":"#_5-相关问题","children":[{"level":3,"title":"5.1 Thread.sleep()和Object.wait()的区别","slug":"_5-1-thread-sleep-和object-wait-的区别","link":"#_5-1-thread-sleep-和object-wait-的区别","children":[]},{"level":3,"title":"5.2 Object.wait()和Condition.await()的区别","slug":"_5-2-object-wait-和condition-await-的区别","link":"#_5-2-object-wait-和condition-await-的区别","children":[]},{"level":3,"title":"5.3 Thread.sleep()和LockSupport.park()的区别","slug":"_5-3-thread-sleep-和locksupport-park-的区别","link":"#_5-3-thread-sleep-和locksupport-park-的区别","children":[]},{"level":3,"title":"5.4 Object.wait()和LockSupport.park()的区别","slug":"_5-4-object-wait-和locksupport-park-的区别","link":"#_5-4-object-wait-和locksupport-park-的区别","children":[]},{"level":3,"title":"5.5 如果在wait()之前执行了notify()会怎样?","slug":"_5-5-如果在wait-之前执行了notify-会怎样","link":"#_5-5-如果在wait-之前执行了notify-会怎样","children":[]},{"level":3,"title":"5.6 如果在park()之前执行了unpark()会怎样?","slug":"_5-6-如果在park-之前执行了unpark-会怎样","link":"#_5-6-如果在park-之前执行了unpark-会怎样","children":[]},{"level":3,"title":"5.7 LockSupport.park()会释放锁资源吗?","slug":"_5-7-locksupport-park-会释放锁资源吗","link":"#_5-7-locksupport-park-会释放锁资源吗","children":[]}]},{"level":2,"title":"6. 总结","slug":"_6-总结","link":"#_6-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":6.46,"words":1937},"filePathRelative":"java/thread/java-thread-x-lock-LockSupport.md","localizedDate":"2023年2月20日","autoDesc":true}');export{t as data};
