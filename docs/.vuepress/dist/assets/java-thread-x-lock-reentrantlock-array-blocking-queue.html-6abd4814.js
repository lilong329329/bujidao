const e=JSON.parse('{"key":"v-3f518cb3","path":"/java/thread/java-thread-x-lock-reentrantlock-array-blocking-queue.html","title":"ReentrantLock和条件锁Condition实现阻塞队列ArrayBlockingQueue","lang":"zh-CN","frontmatter":{"description":"1. 简介 比如最典型的阻塞队列 ArrayBlockingQueue，当队列中没有元素的时候，他无法take出一个元素，需要等待其他线程入队一个元素后唤醒它，才能继续弹出元素。 1.1 特点 阻塞队列是一种特殊的先进先出队列,它有以下几个特点 1.入队和出队线程安全 2.当队列满时,入队线程会被阻塞;当队列为空时,出队线程会被阻塞。 2. 实现 2....","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./java/thread/java-thread-x-lock-reentrantlock-array-blocking-queue.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"ReentrantLock和条件锁Condition实现阻塞队列ArrayBlockingQueue"}],["meta",{"property":"og:description","content":"1. 简介 比如最典型的阻塞队列 ArrayBlockingQueue，当队列中没有元素的时候，他无法take出一个元素，需要等待其他线程入队一个元素后唤醒它，才能继续弹出元素。 1.1 特点 阻塞队列是一种特殊的先进先出队列,它有以下几个特点 1.入队和出队线程安全 2.当队列满时,入队线程会被阻塞;当队列为空时,出队线程会被阻塞。 2. 实现 2...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 特点","slug":"_1-1-特点","link":"#_1-1-特点","children":[]}]},{"level":2,"title":"2. 实现","slug":"_2-实现","link":"#_2-实现","children":[{"level":3,"title":"2.1 三个重要的属性","slug":"_2-1-三个重要的属性","link":"#_2-1-三个重要的属性","children":[]},{"level":3,"title":"2.2 在构造方法中初始化：","slug":"_2-2-在构造方法中初始化","link":"#_2-2-在构造方法中初始化","children":[]},{"level":3,"title":"2.3 take() 方法：","slug":"_2-3-take-方法","link":"#_2-3-take-方法","children":[]},{"level":3,"title":"2.4 enqueue(E)方法：","slug":"_2-4-enqueue-e-方法","link":"#_2-4-enqueue-e-方法","children":[]},{"level":3,"title":"2.5 put(E)方法：","slug":"_2-5-put-e-方法","link":"#_2-5-put-e-方法","children":[]},{"level":3,"title":"2.6 出队或remove等操作之后，会触发唤醒等待的线程：","slug":"_2-6-出队或remove等操作之后-会触发唤醒等待的线程","link":"#_2-6-出队或remove等操作之后-会触发唤醒等待的线程","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.71,"words":514},"filePathRelative":"java/thread/java-thread-x-lock-reentrantlock-array-blocking-queue.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
