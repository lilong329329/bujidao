const e=JSON.parse('{"key":"v-8d4cb75e","path":"/db/redis/redis-z-interview-overview-detail.html","title":"Redis面试 - redis问题总结(答案版)","lang":"zh-CN","frontmatter":{"order":1020,"category":["数据库","Redis"],"description":"1. 常规问题 1.1 什么是Redis，为什么用Redis？ Redis是一种支持key-value等多种数据结构的存储系统。可用于缓存，事件发布或订阅，高速队列等场景。支持网络，提供字符串，哈希，列表，队列，集合结构直接存取，基于内存，可持久化。\\r读写性能优异; \\rRedis能读的速度是110000次/s,写的速度是81000次/s （测试条件见下...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./db/redis/redis-z-interview-overview-detail.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Redis面试 - redis问题总结(答案版)"}],["meta",{"property":"og:description","content":"1. 常规问题 1.1 什么是Redis，为什么用Redis？ Redis是一种支持key-value等多种数据结构的存储系统。可用于缓存，事件发布或订阅，高速队列等场景。支持网络，提供字符串，哈希，列表，队列，集合结构直接存取，基于内存，可持久化。\\r读写性能优异; \\rRedis能读的速度是110000次/s,写的速度是81000次/s （测试条件见下..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 常规问题","slug":"_1-常规问题","link":"#_1-常规问题","children":[{"level":3,"title":"1.1  什么是Redis，为什么用Redis？","slug":"_1-1-什么是redis-为什么用redis","link":"#_1-1-什么是redis-为什么用redis","children":[]},{"level":3,"title":"1.2. 为什么Redis 是单线程的以及为什么这么快？","slug":"_1-2-为什么redis-是单线程的以及为什么这么快","link":"#_1-2-为什么redis-是单线程的以及为什么这么快","children":[]},{"level":3,"title":"1.3. Redis 一般有哪些使用场景？","slug":"_1-3-redis-一般有哪些使用场景","link":"#_1-3-redis-一般有哪些使用场景","children":[]}]},{"level":2,"title":"2. 数据类型和数据结构","slug":"_2-数据类型和数据结构","link":"#_2-数据类型和数据结构","children":[{"level":3,"title":"2.1 Redis 有哪些数据类型？","slug":"_2-1-redis-有哪些数据类型","link":"#_2-1-redis-有哪些数据类型","children":[]},{"level":3,"title":"2.2 谈谈Redis 的对象机制（redisObject)？","slug":"_2-2-谈谈redis-的对象机制-redisobject","link":"#_2-2-谈谈redis-的对象机制-redisobject","children":[]},{"level":3,"title":"2.3 Redis 数据类型有哪些底层数据结构？","slug":"_2-3-redis-数据类型有哪些底层数据结构","link":"#_2-3-redis-数据类型有哪些底层数据结构","children":[]},{"level":3,"title":"2.4 为什么要设计sds？","slug":"_2-4-为什么要设计sds","link":"#_2-4-为什么要设计sds","children":[]},{"level":3,"title":"2.5 Redis 一个字符串类型的值能存储最大容量是多少？","slug":"_2-5-redis-一个字符串类型的值能存储最大容量是多少","link":"#_2-5-redis-一个字符串类型的值能存储最大容量是多少","children":[]},{"level":3,"title":"2.6 为什么会设计Stream？","slug":"_2-6-为什么会设计stream","link":"#_2-6-为什么会设计stream","children":[]},{"level":3,"title":"2.7 Redis Stream用在什么样场景？","slug":"_2-7-redis-stream用在什么样场景","link":"#_2-7-redis-stream用在什么样场景","children":[]},{"level":3,"title":"2.8 Redis Stream消息ID的设计是否考虑了时间回拨的问题？","slug":"_2-8-redis-stream消息id的设计是否考虑了时间回拨的问题","link":"#_2-8-redis-stream消息id的设计是否考虑了时间回拨的问题","children":[]},{"level":3,"title":"2.9 Redis Stream消费者崩溃带来的会不会消息丢失问题?","slug":"_2-9-redis-stream消费者崩溃带来的会不会消息丢失问题","link":"#_2-9-redis-stream消费者崩溃带来的会不会消息丢失问题","children":[]},{"level":3,"title":"2.10 Redis Steam 坏消息问题，死信问题?","slug":"_2-10-redis-steam-坏消息问题-死信问题","link":"#_2-10-redis-steam-坏消息问题-死信问题","children":[]}]},{"level":2,"title":"3. 持久化和内存","slug":"_3-持久化和内存","link":"#_3-持久化和内存","children":[{"level":3,"title":"3.1 Redis 的持久化机制是什么？各自的优缺点？一般怎么用？","slug":"_3-1-redis-的持久化机制是什么-各自的优缺点-一般怎么用","link":"#_3-1-redis-的持久化机制是什么-各自的优缺点-一般怎么用","children":[]},{"level":3,"title":"3.2 RDB 触发方式?","slug":"_3-2-rdb-触发方式","link":"#_3-2-rdb-触发方式","children":[]},{"level":3,"title":"3.3 那么如何保证数据一致性呢？","slug":"_3-3-那么如何保证数据一致性呢","link":"#_3-3-那么如何保证数据一致性呢","children":[]},{"level":3,"title":"3.4 在进行RDB快照操作的这段时间，如果发生服务崩溃怎么办？","slug":"_3-4-在进行rdb快照操作的这段时间-如果发生服务崩溃怎么办","link":"#_3-4-在进行rdb快照操作的这段时间-如果发生服务崩溃怎么办","children":[]},{"level":3,"title":"3.5 可以每秒做一次RDB快照吗？","slug":"_3-5-可以每秒做一次rdb快照吗","link":"#_3-5-可以每秒做一次rdb快照吗","children":[]},{"level":3,"title":"3.6 AOF是写前日志还是写后日志？","slug":"_3-6-aof是写前日志还是写后日志","link":"#_3-6-aof是写前日志还是写后日志","children":[]},{"level":3,"title":"3.7 如何实现AOF的？","slug":"_3-7-如何实现aof的","link":"#_3-7-如何实现aof的","children":[]},{"level":3,"title":"3.8 三种写回策略的优缺点","slug":"_3-8-三种写回策略的优缺点","link":"#_3-8-三种写回策略的优缺点","children":[]},{"level":3,"title":"3.9 什么是AOF重写？","slug":"_3-9-什么是aof重写","link":"#_3-9-什么是aof重写","children":[]},{"level":3,"title":"3.10 AOF重写会阻塞吗？","slug":"_3-10-aof重写会阻塞吗","link":"#_3-10-aof重写会阻塞吗","children":[]},{"level":3,"title":"3.11 AOF日志何时会重写？","slug":"_3-11-aof日志何时会重写","link":"#_3-11-aof日志何时会重写","children":[]},{"level":3,"title":"3.12 AOF重写日志时，有新数据写入咋整？","slug":"_3-12-aof重写日志时-有新数据写入咋整","link":"#_3-12-aof重写日志时-有新数据写入咋整","children":[]},{"level":3,"title":"3.13 主线程fork出子进程的是如何复制内存数据的？","slug":"_3-13-主线程fork出子进程的是如何复制内存数据的","link":"#_3-13-主线程fork出子进程的是如何复制内存数据的","children":[]},{"level":3,"title":"3.14 在重写日志整个过程时，主线程有哪些地方会被阻塞？","slug":"_3-14-在重写日志整个过程时-主线程有哪些地方会被阻塞","link":"#_3-14-在重写日志整个过程时-主线程有哪些地方会被阻塞","children":[]},{"level":3,"title":"3.15 为什么AOF重写不复用原AOF日志？","slug":"_3-15-为什么aof重写不复用原aof日志","link":"#_3-15-为什么aof重写不复用原aof日志","children":[]},{"level":3,"title":"3.16 Redis 过期键的删除策略有哪些?","slug":"_3-16-redis-过期键的删除策略有哪些","link":"#_3-16-redis-过期键的删除策略有哪些","children":[]},{"level":3,"title":"3.17 Redis 内存淘汰算法有哪些?","slug":"_3-17-redis-内存淘汰算法有哪些","link":"#_3-17-redis-内存淘汰算法有哪些","children":[]},{"level":3,"title":"3.18 Redis的内存用完了会发生什么？","slug":"_3-18-redis的内存用完了会发生什么","link":"#_3-18-redis的内存用完了会发生什么","children":[]},{"level":3,"title":"3.19 Redis如何做内存优化？","slug":"_3-19-redis如何做内存优化","link":"#_3-19-redis如何做内存优化","children":[]},{"level":3,"title":"3.20  Redis key 的过期时间和永久有效分别怎么设置？","slug":"_3-20-redis-key-的过期时间和永久有效分别怎么设置","link":"#_3-20-redis-key-的过期时间和永久有效分别怎么设置","children":[]},{"level":3,"title":"3.21 Redis 中的管道有什么用？","slug":"_3-21-redis-中的管道有什么用","link":"#_3-21-redis-中的管道有什么用","children":[]}]},{"level":2,"title":"4. 事务","slug":"_4-事务","link":"#_4-事务","children":[{"level":3,"title":"4.1 什么是redis事务？","slug":"_4-1-什么是redis事务","link":"#_4-1-什么是redis事务","children":[]},{"level":3,"title":"4.2 Redis事务相关命令？","slug":"_4-2-redis事务相关命令","link":"#_4-2-redis事务相关命令","children":[]},{"level":3,"title":"4.3 Redis事务的三个阶段？","slug":"_4-3-redis事务的三个阶段","link":"#_4-3-redis事务的三个阶段","children":[]},{"level":3,"title":"4.4 Redis事务其它实现？","slug":"_4-4-redis事务其它实现","link":"#_4-4-redis事务其它实现","children":[]},{"level":3,"title":"4.5 Redis事务中出现错误的处理？","slug":"_4-5-redis事务中出现错误的处理","link":"#_4-5-redis事务中出现错误的处理","children":[]},{"level":3,"title":"4.6 Redis事务中watch是如何监视实现的呢？","slug":"_4-6-redis事务中watch是如何监视实现的呢","link":"#_4-6-redis事务中watch是如何监视实现的呢","children":[]},{"level":3,"title":"4.7 为什么 Redis 不支持回滚？","slug":"_4-7-为什么-redis-不支持回滚","link":"#_4-7-为什么-redis-不支持回滚","children":[]},{"level":3,"title":"4.8 Redis 对 ACID的支持性理解？","slug":"_4-8-redis-对-acid的支持性理解","link":"#_4-8-redis-对-acid的支持性理解","children":[]},{"level":3,"title":"4.9 Redis事务其他实现？","slug":"_4-9-redis事务其他实现","link":"#_4-9-redis事务其他实现","children":[]}]},{"level":2,"title":"5. 集群-主从复制","slug":"_5-集群-主从复制","link":"#_5-集群-主从复制","children":[{"level":3,"title":"5.1 Redis集群的主从复制模型是怎样的？","slug":"_5-1-redis集群的主从复制模型是怎样的","link":"#_5-1-redis集群的主从复制模型是怎样的","children":[]},{"level":3,"title":"5.2 Redis 全量复制的三个阶段？","slug":"_5-2-redis-全量复制的三个阶段","link":"#_5-2-redis-全量复制的三个阶段","children":[]},{"level":3,"title":"5.3 Redis 为什么会设计增量复制？","slug":"_5-3-redis-为什么会设计增量复制","link":"#_5-3-redis-为什么会设计增量复制","children":[]},{"level":3,"title":"5.4 Redis 增量复制的流程？","slug":"_5-4-redis-增量复制的流程","link":"#_5-4-redis-增量复制的流程","children":[]},{"level":3,"title":"5.5 增量复制如果在网络断开期间，repl_backlog_size环形缓冲区写满之后，从库是会丢失掉那部分被覆盖掉的数据，还是直接进行全量复制呢？","slug":"_5-5-增量复制如果在网络断开期间-repl-backlog-size环形缓冲区写满之后-从库是会丢失掉那部分被覆盖掉的数据-还是直接进行全量复制呢","link":"#_5-5-增量复制如果在网络断开期间-repl-backlog-size环形缓冲区写满之后-从库是会丢失掉那部分被覆盖掉的数据-还是直接进行全量复制呢","children":[]},{"level":3,"title":"5.6 Redis 为什么不持久化的主服务器自动重启非常危险呢?","slug":"_5-6-redis-为什么不持久化的主服务器自动重启非常危险呢","link":"#_5-6-redis-为什么不持久化的主服务器自动重启非常危险呢","children":[]},{"level":3,"title":"5.7 Redis 为什么主从全量复制使用RDB而不使用AOF？","slug":"_5-7-redis-为什么主从全量复制使用rdb而不使用aof","link":"#_5-7-redis-为什么主从全量复制使用rdb而不使用aof","children":[]},{"level":3,"title":"5.8 Redis 为什么还有无磁盘复制模式？","slug":"_5-8-redis-为什么还有无磁盘复制模式","link":"#_5-8-redis-为什么还有无磁盘复制模式","children":[]},{"level":3,"title":"5.9 Redis 为什么还会有从库的从库的设计？","slug":"_5-9-redis-为什么还会有从库的从库的设计","link":"#_5-9-redis-为什么还会有从库的从库的设计","children":[]}]},{"level":2,"title":"6. 集群-哨兵机制","slug":"_6-集群-哨兵机制","link":"#_6-集群-哨兵机制","children":[{"level":3,"title":"6.1 Redis哨兵机制？哨兵实现了什么功能呢?","slug":"_6-1-redis哨兵机制-哨兵实现了什么功能呢","link":"#_6-1-redis哨兵机制-哨兵实现了什么功能呢","children":[]},{"level":3,"title":"6.2 Redis 哨兵集群是通过什么方式组建的？","slug":"_6-2-redis-哨兵集群是通过什么方式组建的","link":"#_6-2-redis-哨兵集群是通过什么方式组建的","children":[]},{"level":3,"title":"6.3 Redis 哨兵是如何监控Redis集群的？","slug":"_6-3-redis-哨兵是如何监控redis集群的","link":"#_6-3-redis-哨兵是如何监控redis集群的","children":[]},{"level":3,"title":"6.4 Redis 哨兵如何判断主库已经下线了呢？","slug":"_6-4-redis-哨兵如何判断主库已经下线了呢","link":"#_6-4-redis-哨兵如何判断主库已经下线了呢","children":[]},{"level":3,"title":"6.4 Redis 哨兵的选举机制是什么样的？","slug":"_6-4-redis-哨兵的选举机制是什么样的","link":"#_6-4-redis-哨兵的选举机制是什么样的","children":[]},{"level":3,"title":"6.5 Redis 1主4从，5个哨兵，哨兵配置quorum为2，如果3个哨兵故障，当主库宕机时，哨兵能否判断主库“客观下线”？能否自动切换？","slug":"_6-5-redis-1主4从-5个哨兵-哨兵配置quorum为2-如果3个哨兵故障-当主库宕机时-哨兵能否判断主库-客观下线-能否自动切换","link":"#_6-5-redis-1主4从-5个哨兵-哨兵配置quorum为2-如果3个哨兵故障-当主库宕机时-哨兵能否判断主库-客观下线-能否自动切换","children":[]},{"level":3,"title":"6.6 主库判定客观下线了，那么如何从剩余的从库中选择一个新的主库呢？","slug":"_6-6-主库判定客观下线了-那么如何从剩余的从库中选择一个新的主库呢","link":"#_6-6-主库判定客观下线了-那么如何从剩余的从库中选择一个新的主库呢","children":[]},{"level":3,"title":"6.7 新的主库选择出来后，如何进行故障的转移？","slug":"_6-7-新的主库选择出来后-如何进行故障的转移","link":"#_6-7-新的主库选择出来后-如何进行故障的转移","children":[]}]},{"level":2,"title":"7. 集群-分片技术","slug":"_7-集群-分片技术","link":"#_7-集群-分片技术","children":[{"level":3,"title":"7.1 什么是Redis Cluster？","slug":"_7-1-什么是redis-cluster","link":"#_7-1-什么是redis-cluster","children":[]},{"level":3,"title":"7.2 说说Redis哈希槽的概念？为什么是16384个？","slug":"_7-2-说说redis哈希槽的概念-为什么是16384个","link":"#_7-2-说说redis哈希槽的概念-为什么是16384个","children":[]},{"level":3,"title":"7.3 Redis集群会有写操作丢失吗？为什么？","slug":"_7-3-redis集群会有写操作丢失吗-为什么","link":"#_7-3-redis集群会有写操作丢失吗-为什么","children":[]}]},{"level":2,"title":"8. 应用场景","slug":"_8-应用场景","link":"#_8-应用场景","children":[{"level":3,"title":"8.1 Redis 客户端有哪些？","slug":"_8-1-redis-客户端有哪些","link":"#_8-1-redis-客户端有哪些","children":[]},{"level":3,"title":"8.2 Redis如何做大量数据插入？","slug":"_8-2-redis如何做大量数据插入","link":"#_8-2-redis如何做大量数据插入","children":[]},{"level":3,"title":"8.3 Redis实现分布式锁实现? 什么是 RedLock?","slug":"_8-3-redis实现分布式锁实现-什么是-redlock","link":"#_8-3-redis实现分布式锁实现-什么是-redlock","children":[]},{"level":3,"title":"8.4 Redis缓存有哪些问题，如何解决？","slug":"_8-4-redis缓存有哪些问题-如何解决","link":"#_8-4-redis缓存有哪些问题-如何解决","children":[]},{"level":3,"title":"8.5 Redis性能问题有哪些，如何分析定位解决?","slug":"_8-5-redis性能问题有哪些-如何分析定位解决","link":"#_8-5-redis性能问题有哪些-如何分析定位解决","children":[]}]},{"level":2,"title":"9. 新版本","slug":"_9-新版本","link":"#_9-新版本","children":[{"level":3,"title":"9.1 Redis单线程模型？ 在6.0之前如何提高多核CPU的利用率？","slug":"_9-1-redis单线程模型-在6-0之前如何提高多核cpu的利用率","link":"#_9-1-redis单线程模型-在6-0之前如何提高多核cpu的利用率","children":[]},{"level":3,"title":"9.2 Redis6.0之前的版本真的是单线程的吗?","slug":"_9-2-redis6-0之前的版本真的是单线程的吗","link":"#_9-2-redis6-0之前的版本真的是单线程的吗","children":[]},{"level":3,"title":"9.3 Redis6.0之前为什么一致不用多线程?","slug":"_9-3-redis6-0之前为什么一致不用多线程","link":"#_9-3-redis6-0之前为什么一致不用多线程","children":[]},{"level":3,"title":"9.4  Redis6.0为什么要引入多线程呢？","slug":"_9-4-redis6-0为什么要引入多线程呢","link":"#_9-4-redis6-0为什么要引入多线程呢","children":[]},{"level":3,"title":"9.5 Redis6.0默认是否开启了多线程？","slug":"_9-5-redis6-0默认是否开启了多线程","link":"#_9-5-redis6-0默认是否开启了多线程","children":[]},{"level":3,"title":"9.6 Redis6.0多线程开启时，线程数如何设置？","slug":"_9-6-redis6-0多线程开启时-线程数如何设置","link":"#_9-6-redis6-0多线程开启时-线程数如何设置","children":[]},{"level":3,"title":"9.7 Redis6.0多线程的实现机制？","slug":"_9-7-redis6-0多线程的实现机制","link":"#_9-7-redis6-0多线程的实现机制","children":[]},{"level":3,"title":"9.8 开启多线程后，是否会存在线程并发安全问题？","slug":"_9-8-开启多线程后-是否会存在线程并发安全问题","link":"#_9-8-开启多线程后-是否会存在线程并发安全问题","children":[]}]},{"level":2,"title":"10. 其他特性","slug":"_10-其他特性","link":"#_10-其他特性","children":[{"level":3,"title":"10.1 Redis事件机制?","slug":"_10-1-redis事件机制","link":"#_10-1-redis事件机制","children":[]},{"level":3,"title":"10.2 Redis文件事件的模型？","slug":"_10-2-redis文件事件的模型","link":"#_10-2-redis文件事件的模型","children":[]},{"level":3,"title":"10.3 什么是Redis发布订阅？","slug":"_10-3-什么是redis发布订阅","link":"#_10-3-什么是redis发布订阅","children":[]},{"level":3,"title":"10.4 Redis发布订阅有哪两种方式？","slug":"_10-4-redis发布订阅有哪两种方式","link":"#_10-4-redis发布订阅有哪两种方式","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":70.59,"words":21178},"filePathRelative":"db/redis/redis-z-interview-overview-detail.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
