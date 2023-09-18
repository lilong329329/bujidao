const e=JSON.parse('{"key":"v-dd3cbf00","path":"/db/mysql/mysql-x-optimize-bigtable.html","title":"大表优化","lang":"zh-CN","frontmatter":{"category":["数据库"],"description":"当MySQL单表记录数据过大，数据库的CRUD性能会明显下降，一些常见的优化措施 1. 限制数据的范围 务必禁止不带任何限制数据范围的查询语句\\r 例如：我们当用户在查询订单历史的时候，可以控制在一个范围内； 2. 读/写分离 经典的数据库拆分方案，主库负责写，从库负责读 3. 垂直分区 根据数据库里面的数据表的相关性进行拆分\\r例如：用户表中既有用户登录...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/db/mysql/mysql-x-optimize-bigtable.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"大表优化"}],["meta",{"property":"og:description","content":"当MySQL单表记录数据过大，数据库的CRUD性能会明显下降，一些常见的优化措施 1. 限制数据的范围 务必禁止不带任何限制数据范围的查询语句\\r 例如：我们当用户在查询订单历史的时候，可以控制在一个范围内； 2. 读/写分离 经典的数据库拆分方案，主库负责写，从库负责读 3. 垂直分区 根据数据库里面的数据表的相关性进行拆分\\r例如：用户表中既有用户登录..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 限制数据的范围","slug":"_1-限制数据的范围","link":"#_1-限制数据的范围","children":[]},{"level":2,"title":"2. 读/写分离","slug":"_2-读-写分离","link":"#_2-读-写分离","children":[]},{"level":2,"title":"3. 垂直分区","slug":"_3-垂直分区","link":"#_3-垂直分区","children":[{"level":3,"title":"3.1 垂直拆分的优缺点","slug":"_3-1-垂直拆分的优缺点","link":"#_3-1-垂直拆分的优缺点","children":[]}]},{"level":2,"title":"4. 水平分区","slug":"_4-水平分区","link":"#_4-水平分区","children":[{"level":3,"title":"4.1 水平拆分总结","slug":"_4-1-水平拆分总结","link":"#_4-1-水平拆分总结","children":[]},{"level":3,"title":"4.2 数据库分片两种方案","slug":"_4-2-数据库分片两种方案","link":"#_4-2-数据库分片两种方案","children":[]}]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":2.8,"words":840},"filePathRelative":"db/mysql/mysql-x-optimize-bigtable.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
