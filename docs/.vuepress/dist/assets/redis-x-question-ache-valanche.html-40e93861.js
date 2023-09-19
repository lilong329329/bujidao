const e=JSON.parse('{"key":"v-9c3d9066","path":"/db/redis/redis-x-question-ache-valanche.html","title":"Redis缓存雪崩","lang":"zh-CN","frontmatter":{"description":"1. 简介 缓存同一时间大面积的失效，所以，后面的请求都会落到数据库上，造成数据库短时间内承受大量请求而崩掉 2. 解决办法\\r事前：尽量保证整个 redis 集群的高可用性，发现机器宕机尽快补上。选择合适的内存淘汰策略; \\r事中：本地chcache缓存 + hystrix限流&降级，避免Mysql崩掉; \\r事后：利用 redis 持久化机制保存的数据尽...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./db/redis/redis-x-question-ache-valanche.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Redis缓存雪崩"}],["meta",{"property":"og:description","content":"1. 简介 缓存同一时间大面积的失效，所以，后面的请求都会落到数据库上，造成数据库短时间内承受大量请求而崩掉 2. 解决办法\\r事前：尽量保证整个 redis 集群的高可用性，发现机器宕机尽快补上。选择合适的内存淘汰策略; \\r事中：本地chcache缓存 + hystrix限流&降级，避免Mysql崩掉; \\r事后：利用 redis 持久化机制保存的数据尽..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 解决办法","slug":"_2-解决办法","link":"#_2-解决办法","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":0.48,"words":145},"filePathRelative":"db/redis/redis-x-question-ache-valanche.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
