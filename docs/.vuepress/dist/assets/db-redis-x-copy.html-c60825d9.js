const e=JSON.parse('{"key":"v-5f807a7a","path":"/db/redis/db-redis-x-copy.html","title":"Redis进阶 - 高可用：主从复制详解","lang":"zh-CN","frontmatter":{"order":210,"category":["数据库","Redis"],"description":"我们知道要避免单点故障，即保证高可用，便需要冗余（副本）方式提供集群服务。而Redis 提供了主从库模式，以保证数据副本的一致，主从库之间采用的是读写分离的方式。本文主要阐述Redis的主从复制。 1. 主从复制概述\\r 主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(master)，后者称为从节点(slave)...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/db/redis/db-redis-x-copy.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Redis进阶 - 高可用：主从复制详解"}],["meta",{"property":"og:description","content":"我们知道要避免单点故障，即保证高可用，便需要冗余（副本）方式提供集群服务。而Redis 提供了主从库模式，以保证数据副本的一致，主从库之间采用的是读写分离的方式。本文主要阐述Redis的主从复制。 1. 主从复制概述\\r 主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(master)，后者称为从节点(slave)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 主从复制概述","slug":"_1-主从复制概述","link":"#_1-主从复制概述","children":[]},{"level":2,"title":"2. 主从复制原理","slug":"_2-主从复制原理","link":"#_2-主从复制原理","children":[{"level":3,"title":"2.1 全量复制","slug":"_2-1-全量复制","link":"#_2-1-全量复制","children":[]},{"level":3,"title":"2.2 增量复制","slug":"_2-2-增量复制","link":"#_2-2-增量复制","children":[]},{"level":3,"title":"2.3 命令传播","slug":"_2-3-命令传播","link":"#_2-3-命令传播","children":[]}]},{"level":2,"title":"3. 更深入理解","slug":"_3-更深入理解","link":"#_3-更深入理解","children":[{"level":3,"title":"3.1 当主服务器不进行持久化时复制的安全性","slug":"_3-1-当主服务器不进行持久化时复制的安全性","link":"#_3-1-当主服务器不进行持久化时复制的安全性","children":[]},{"level":3,"title":"3.2 为什么主从全量复制使用RDB而不使用AOF？","slug":"_3-2-为什么主从全量复制使用rdb而不使用aof","link":"#_3-2-为什么主从全量复制使用rdb而不使用aof","children":[]},{"level":3,"title":"3.3 为什么还有无磁盘复制模式？","slug":"_3-3-为什么还有无磁盘复制模式","link":"#_3-3-为什么还有无磁盘复制模式","children":[]},{"level":3,"title":"3.4 为什么还会有从库的从库的设计？","slug":"_3-4-为什么还会有从库的从库的设计","link":"#_3-4-为什么还会有从库的从库的设计","children":[]}]},{"level":2,"title":"4. 读写分离及其中的问题","slug":"_4-读写分离及其中的问题","link":"#_4-读写分离及其中的问题","children":[{"level":3,"title":"4.1 延迟与不一致问题","slug":"_4-1-延迟与不一致问题","link":"#_4-1-延迟与不一致问题","children":[]},{"level":3,"title":"4.2 数据过期问题（过期键的删除策略）","slug":"_4-2-数据过期问题-过期键的删除策略","link":"#_4-2-数据过期问题-过期键的删除策略","children":[]},{"level":3,"title":"4.3 故障切换问题","slug":"_4-3-故障切换问题","link":"#_4-3-故障切换问题","children":[]}]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":17.86,"words":5359},"filePathRelative":"db/redis/db-redis-x-copy.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
