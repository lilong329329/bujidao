const e=JSON.parse('{"key":"v-08117258","path":"/db/redis/redis-z-interview-sentinel.html","title":"Redis面试 - 集群-哨兵机制","lang":"zh-CN","frontmatter":{"order":1090,"category":["数据库","Redis"],"description":"1 Redis哨兵机制？哨兵实现了什么功能呢? 哨兵的核心功能是主节点的自动故障转移。 下图是一个典型的哨兵集群监控的逻辑图： image-20220628230005184 哨兵实现了什么功能呢？下面是Redis官方文档的描述：\\r监控（Monitoring）：哨兵会不断地检查主节点和从节点是否运作正常。; \\r自动故障转移（Automatic fail...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./db/redis/redis-z-interview-sentinel.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Redis面试 - 集群-哨兵机制"}],["meta",{"property":"og:description","content":"1 Redis哨兵机制？哨兵实现了什么功能呢? 哨兵的核心功能是主节点的自动故障转移。 下图是一个典型的哨兵集群监控的逻辑图： image-20220628230005184 哨兵实现了什么功能呢？下面是Redis官方文档的描述：\\r监控（Monitoring）：哨兵会不断地检查主节点和从节点是否运作正常。; \\r自动故障转移（Automatic fail..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1 Redis哨兵机制？哨兵实现了什么功能呢?","slug":"_1-redis哨兵机制-哨兵实现了什么功能呢","link":"#_1-redis哨兵机制-哨兵实现了什么功能呢","children":[]},{"level":2,"title":"2 Redis 哨兵集群是通过什么方式组建的？","slug":"_2-redis-哨兵集群是通过什么方式组建的","link":"#_2-redis-哨兵集群是通过什么方式组建的","children":[]},{"level":2,"title":"3 Redis 哨兵是如何监控Redis集群的？","slug":"_3-redis-哨兵是如何监控redis集群的","link":"#_3-redis-哨兵是如何监控redis集群的","children":[]},{"level":2,"title":"4 Redis 哨兵如何判断主库已经下线了呢？","slug":"_4-redis-哨兵如何判断主库已经下线了呢","link":"#_4-redis-哨兵如何判断主库已经下线了呢","children":[]},{"level":2,"title":"4 Redis 哨兵的选举机制是什么样的？","slug":"_4-redis-哨兵的选举机制是什么样的","link":"#_4-redis-哨兵的选举机制是什么样的","children":[]},{"level":2,"title":"5 Redis 1主4从，5个哨兵，哨兵配置quorum为2，如果3个哨兵故障，当主库宕机时，哨兵能否判断主库“客观下线”？能否自动切换？","slug":"_5-redis-1主4从-5个哨兵-哨兵配置quorum为2-如果3个哨兵故障-当主库宕机时-哨兵能否判断主库-客观下线-能否自动切换","link":"#_5-redis-1主4从-5个哨兵-哨兵配置quorum为2-如果3个哨兵故障-当主库宕机时-哨兵能否判断主库-客观下线-能否自动切换","children":[]},{"level":2,"title":"6 主库判定客观下线了，那么如何从剩余的从库中选择一个新的主库呢？","slug":"_6-主库判定客观下线了-那么如何从剩余的从库中选择一个新的主库呢","link":"#_6-主库判定客观下线了-那么如何从剩余的从库中选择一个新的主库呢","children":[]},{"level":2,"title":"7 新的主库选择出来后，如何进行故障的转移？","slug":"_7-新的主库选择出来后-如何进行故障的转移","link":"#_7-新的主库选择出来后-如何进行故障的转移","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.68,"words":1704},"filePathRelative":"db/redis/redis-z-interview-sentinel.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
