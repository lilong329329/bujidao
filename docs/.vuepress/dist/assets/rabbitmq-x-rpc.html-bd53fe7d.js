const e=JSON.parse('{"key":"v-4dafd001","path":"/deploy/mq-rabbitmq/rabbitmq-x-rpc.html","title":"RabbitMQ进阶 - RPC实现","lang":"zh-CN","frontmatter":{"order":80,"category":["RabbitMQ","MQ"],"description":"1. 简介 Remote Procedure Call 简称 RPC，即远程调用。这个请自行百度。 这里 RPC 实现和传统的 RPC 还不太一样。 image-20220923204259807 1. 客户端发送一个请求，并设置了一个回复的队列 2. 服务端，消费发送来的请求，并像这个回复的队列，响应了一个消息 2. 代码实现 就这个流程，通过消息队...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/deploy/mq-rabbitmq/rabbitmq-x-rpc.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"RabbitMQ进阶 - RPC实现"}],["meta",{"property":"og:description","content":"1. 简介 Remote Procedure Call 简称 RPC，即远程调用。这个请自行百度。 这里 RPC 实现和传统的 RPC 还不太一样。 image-20220923204259807 1. 客户端发送一个请求，并设置了一个回复的队列 2. 服务端，消费发送来的请求，并像这个回复的队列，响应了一个消息 2. 代码实现 就这个流程，通过消息队..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 代码实现","slug":"_2-代码实现","link":"#_2-代码实现","children":[{"level":3,"title":"2.1 详细例子","slug":"_2-1-详细例子","link":"#_2-1-详细例子","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.35,"words":1005},"filePathRelative":"deploy/mq-rabbitmq/rabbitmq-x-rpc.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};