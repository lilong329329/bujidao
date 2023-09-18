const e=JSON.parse('{"key":"v-1cae5d09","path":"/deploy/mq-rabbitmq/rabbitmq-i-listener.html","title":"RabbitMQ的消费端自定义监听","lang":"zh-CN","frontmatter":{"description":"1. 背景 我们一般在代码中编写while循环，进行consumer.nextDelivery方法进行获取下一条消息，然后进行消费处理。 ```java // 接收消息 while (true){ QueueingConsumer.Delivery delivery = consumer.nextDelivery(); String msg = new...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/deploy/mq-rabbitmq/rabbitmq-i-listener.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"RabbitMQ的消费端自定义监听"}],["meta",{"property":"og:description","content":"1. 背景 我们一般在代码中编写while循环，进行consumer.nextDelivery方法进行获取下一条消息，然后进行消费处理。 ```java // 接收消息 while (true){ QueueingConsumer.Delivery delivery = consumer.nextDelivery(); String msg = new..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 代码演示","slug":"_2-代码演示","link":"#_2-代码演示","children":[{"level":3,"title":"2.1 生产端","slug":"_2-1-生产端","link":"#_2-1-生产端","children":[]},{"level":3,"title":"2.2 消费端","slug":"_2-2-消费端","link":"#_2-2-消费端","children":[]},{"level":3,"title":"2.3 测试","slug":"_2-3-测试","link":"#_2-3-测试","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":2.92,"words":876},"filePathRelative":"deploy/mq-rabbitmq/rabbitmq-i-listener.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};