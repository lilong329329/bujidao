const e=JSON.parse('{"key":"v-708f2454","path":"/db/redis/db-redis-data-type-stream.html","title":"Redis进阶 - 数据类型：Stream详解","lang":"zh-CN","frontmatter":{"order":50,"category":["数据库","Redis"],"description":"Redis5.0 中还增加了一个数据类型Stream，它借鉴了Kafka的设计，是一个新的强大的支持多播的可持久化的消息队列。 1. 为什么会设计Stream\\r Redis5.0 中还增加了一个数据结构Stream，从字面上看是流类型，但其实从功能上看，应该是Redis对消息队列（MQ，Message Queue）的完善实现。 用过Redis做消息队列...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/db/redis/db-redis-data-type-stream.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Redis进阶 - 数据类型：Stream详解"}],["meta",{"property":"og:description","content":"Redis5.0 中还增加了一个数据类型Stream，它借鉴了Kafka的设计，是一个新的强大的支持多播的可持久化的消息队列。 1. 为什么会设计Stream\\r Redis5.0 中还增加了一个数据结构Stream，从字面上看是流类型，但其实从功能上看，应该是Redis对消息队列（MQ，Message Queue）的完善实现。 用过Redis做消息队列..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 为什么会设计Stream","slug":"_1-为什么会设计stream","link":"#_1-为什么会设计stream","children":[]},{"level":2,"title":"2. Stream详解","slug":"_2-stream详解","link":"#_2-stream详解","children":[{"level":3,"title":"2.1 Stream的结构","slug":"_2-1-stream的结构","link":"#_2-1-stream的结构","children":[]},{"level":3,"title":"2.2 增删改查","slug":"_2-2-增删改查","link":"#_2-2-增删改查","children":[]},{"level":3,"title":"2.3 独立消费","slug":"_2-3-独立消费","link":"#_2-3-独立消费","children":[]},{"level":3,"title":"2.4 消费组消费","slug":"_2-4-消费组消费","link":"#_2-4-消费组消费","children":[]},{"level":3,"title":"2.5 信息监控","slug":"_2-5-信息监控","link":"#_2-5-信息监控","children":[]}]},{"level":2,"title":"3. 更深入理解","slug":"_3-更深入理解","link":"#_3-更深入理解","children":[{"level":3,"title":"3.1 Stream用在什么样场景","slug":"_3-1-stream用在什么样场景","link":"#_3-1-stream用在什么样场景","children":[]},{"level":3,"title":"3.2 消息ID的设计是否考虑了时间回拨的问题？","slug":"_3-2-消息id的设计是否考虑了时间回拨的问题","link":"#_3-2-消息id的设计是否考虑了时间回拨的问题","children":[]},{"level":3,"title":"3.3 消费者崩溃带来的会不会消息丢失问题?","slug":"_3-3-消费者崩溃带来的会不会消息丢失问题","link":"#_3-3-消费者崩溃带来的会不会消息丢失问题","children":[]},{"level":3,"title":"3.4 消费者彻底宕机后如何转移给其它消费者处理？","slug":"_3-4-消费者彻底宕机后如何转移给其它消费者处理","link":"#_3-4-消费者彻底宕机后如何转移给其它消费者处理","children":[]},{"level":3,"title":"3.5 坏消息问题，Dead Letter，死信问题","slug":"_3-5-坏消息问题-dead-letter-死信问题","link":"#_3-5-坏消息问题-dead-letter-死信问题","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":16.85,"words":5055},"filePathRelative":"db/redis/db-redis-data-type-stream.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
