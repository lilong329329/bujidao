const e=JSON.parse('{"key":"v-5e3876e8","path":"/db/redis/db-redis-x-rdb-aof.html","title":"Redis进阶 - 持久化：RDB和AOF机制详解","lang":"zh-CN","frontmatter":{"order":140,"category":["数据库","Redis"],"description":"为了防止数据丢失以及服务重启时能够恢复数据，Redis支持数据的持久化，主要分为两种方式，分别是RDB和AOF; 当然实际场景下还会使用这两种的混合模式。 1. Redis持久化简介\\r 从两个点，我们来了解下Redis持久化\\r为什么需要持久化？; Redis是个基于内存的数据库。那服务一旦宕机，内存中的数据将全部丢失。通常的解决方案是从后端数据库恢复这...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./db/redis/db-redis-x-rdb-aof.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Redis进阶 - 持久化：RDB和AOF机制详解"}],["meta",{"property":"og:description","content":"为了防止数据丢失以及服务重启时能够恢复数据，Redis支持数据的持久化，主要分为两种方式，分别是RDB和AOF; 当然实际场景下还会使用这两种的混合模式。 1. Redis持久化简介\\r 从两个点，我们来了解下Redis持久化\\r为什么需要持久化？; Redis是个基于内存的数据库。那服务一旦宕机，内存中的数据将全部丢失。通常的解决方案是从后端数据库恢复这..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. Redis持久化简介","slug":"_1-redis持久化简介","link":"#_1-redis持久化简介","children":[]},{"level":2,"title":"2. RDB 持久化","slug":"_2-rdb-持久化","link":"#_2-rdb-持久化","children":[{"level":3,"title":"2.1 触发方式","slug":"_2-1-触发方式","link":"#_2-1-触发方式","children":[]},{"level":3,"title":"2.2 redis.conf中配置RDB","slug":"_2-2-redis-conf中配置rdb","link":"#_2-2-redis-conf中配置rdb","children":[]},{"level":3,"title":"2.3 RDB 更深入理解","slug":"_2-3-rdb-更深入理解","link":"#_2-3-rdb-更深入理解","children":[]},{"level":3,"title":"2.4 RDB优缺点","slug":"_2-4-rdb优缺点","link":"#_2-4-rdb优缺点","children":[]}]},{"level":2,"title":"3. AOF 持久化","slug":"_3-aof-持久化","link":"#_3-aof-持久化","children":[{"level":3,"title":"3.1 如何实现AOF","slug":"_3-1-如何实现aof","link":"#_3-1-如何实现aof","children":[]},{"level":3,"title":"3.2 redis.conf中配置AOF","slug":"_3-2-redis-conf中配置aof","link":"#_3-2-redis-conf中配置aof","children":[]},{"level":3,"title":"3.3 深入理解AOF重写","slug":"_3-3-深入理解aof重写","link":"#_3-3-深入理解aof重写","children":[]}]},{"level":2,"title":"4. RDB和AOF混合方式（4.0版本)","slug":"_4-rdb和aof混合方式-4-0版本","link":"#_4-rdb和aof混合方式-4-0版本","children":[]},{"level":2,"title":"5. 从持久化中恢复数据","slug":"_5-从持久化中恢复数据","link":"#_5-从持久化中恢复数据","children":[]},{"level":2,"title":"6. 性能与实践","slug":"_6-性能与实践","link":"#_6-性能与实践","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":24.93,"words":7480},"filePathRelative":"db/redis/db-redis-x-rdb-aof.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};