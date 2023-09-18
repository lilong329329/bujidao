const e=JSON.parse('{"key":"v-9ba68da0","path":"/java/thread/java-thread-x-thread-basic.html","title":"Java 并发 - 线程基础","lang":"zh-CN","frontmatter":{"order":30,"category":["Java","并发"],"description":"0. 面试题\\r线程有哪几种状态? 分别说明从一种状态到另一种状态转变有哪些方式?; \\r通常线程有哪几种使用方式?; \\r基础线程机制有哪些?; \\r线程的中断方式有哪些?; \\r线程的互斥同步方式有哪些? 如何比较和选择?; \\r线程之间有哪些协作方式?; 1. 线程状态转换 image-20220525184540003 1.1 新建（New） 创建后尚未启...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java/thread/java-thread-x-thread-basic.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Java 并发 - 线程基础"}],["meta",{"property":"og:description","content":"0. 面试题\\r线程有哪几种状态? 分别说明从一种状态到另一种状态转变有哪些方式?; \\r通常线程有哪几种使用方式?; \\r基础线程机制有哪些?; \\r线程的中断方式有哪些?; \\r线程的互斥同步方式有哪些? 如何比较和选择?; \\r线程之间有哪些协作方式?; 1. 线程状态转换 image-20220525184540003 1.1 新建（New） 创建后尚未启..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"0. 面试题","slug":"_0-面试题","link":"#_0-面试题","children":[]},{"level":2,"title":"1. 线程状态转换","slug":"_1-线程状态转换","link":"#_1-线程状态转换","children":[{"level":3,"title":"1.1 新建（New）","slug":"_1-1-新建-new","link":"#_1-1-新建-new","children":[]},{"level":3,"title":"1.2 可运行(Runnable)","slug":"_1-2-可运行-runnable","link":"#_1-2-可运行-runnable","children":[]},{"level":3,"title":"1.3 阻塞(Blocking)","slug":"_1-3-阻塞-blocking","link":"#_1-3-阻塞-blocking","children":[]},{"level":3,"title":"1.4 无限期等待(Waiting)","slug":"_1-4-无限期等待-waiting","link":"#_1-4-无限期等待-waiting","children":[]},{"level":3,"title":"1.5 限期等待(Timed Waiting)","slug":"_1-5-限期等待-timed-waiting","link":"#_1-5-限期等待-timed-waiting","children":[]},{"level":3,"title":"1.6 死亡(Terminated)","slug":"_1-6-死亡-terminated","link":"#_1-6-死亡-terminated","children":[]},{"level":3,"title":"1.7 完整的转换图","slug":"_1-7-完整的转换图","link":"#_1-7-完整的转换图","children":[]}]},{"level":2,"title":"2. 线程使用方式","slug":"_2-线程使用方式","link":"#_2-线程使用方式","children":[{"level":3,"title":"2.1 实现 Runnable 接口","slug":"_2-1-实现-runnable-接口","link":"#_2-1-实现-runnable-接口","children":[]},{"level":3,"title":"2.2 实现 Callable 接口","slug":"_2-2-实现-callable-接口","link":"#_2-2-实现-callable-接口","children":[]},{"level":3,"title":"2.3 继承 Thread 类","slug":"_2-3-继承-thread-类","link":"#_2-3-继承-thread-类","children":[]},{"level":3,"title":"2.4 实现接口 VS 继承 Thread","slug":"_2-4-实现接口-vs-继承-thread","link":"#_2-4-实现接口-vs-继承-thread","children":[]}]},{"level":2,"title":"3. 基础线程机制","slug":"_3-基础线程机制","link":"#_3-基础线程机制","children":[{"level":3,"title":"3.1 Executor","slug":"_3-1-executor","link":"#_3-1-executor","children":[]},{"level":3,"title":"3.2 Daemon","slug":"_3-2-daemon","link":"#_3-2-daemon","children":[]},{"level":3,"title":"3.3 sleep()","slug":"_3-3-sleep","link":"#_3-3-sleep","children":[]},{"level":3,"title":"3.4 yield()","slug":"_3-4-yield","link":"#_3-4-yield","children":[]}]},{"level":2,"title":"4. 线程中断","slug":"_4-线程中断","link":"#_4-线程中断","children":[{"level":3,"title":"4.1 InterruptedException","slug":"_4-1-interruptedexception","link":"#_4-1-interruptedexception","children":[]},{"level":3,"title":"4.2 interrupted()","slug":"_4-2-interrupted","link":"#_4-2-interrupted","children":[]},{"level":3,"title":"4.3 Executor 的中断操作","slug":"_4-3-executor-的中断操作","link":"#_4-3-executor-的中断操作","children":[]}]},{"level":2,"title":"5. 线程互斥同步","slug":"_5-线程互斥同步","link":"#_5-线程互斥同步","children":[{"level":3,"title":"5.1 synchronized","slug":"_5-1-synchronized","link":"#_5-1-synchronized","children":[]},{"level":3,"title":"5.2 ReentrantLock","slug":"_5-2-reentrantlock","link":"#_5-2-reentrantlock","children":[]},{"level":3,"title":"5.3 比较","slug":"_5-3-比较","link":"#_5-3-比较","children":[]},{"level":3,"title":"5.4 使用选择","slug":"_5-4-使用选择","link":"#_5-4-使用选择","children":[]}]},{"level":2,"title":"6. 线程之间的协作","slug":"_6-线程之间的协作","link":"#_6-线程之间的协作","children":[{"level":3,"title":"6.1 join()","slug":"_6-1-join","link":"#_6-1-join","children":[]},{"level":3,"title":"6.2 wait() notify() notifyAll()","slug":"_6-2-wait-notify-notifyall","link":"#_6-2-wait-notify-notifyall","children":[]},{"level":3,"title":"6.3 await() signal() signalAll()","slug":"_6-3-await-signal-signalall","link":"#_6-3-await-signal-signalall","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":11.56,"words":3469},"filePathRelative":"java/thread/java-thread-x-thread-basic.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
