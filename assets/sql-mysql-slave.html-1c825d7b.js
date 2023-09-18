const e=JSON.parse('{"key":"v-69f3acb1","path":"/db/mysql/sql-mysql-slave.html","title":"MySQL - 主从复制原理","lang":"zh-CN","frontmatter":{"order":325,"category":["Mysql","数据库"],"description":"1. MySQL主从同步实现方式 MySQL主从同步是基于Bin Log实现的，而Bin Log记录的是原始SQL语句。 Bin Log共有三种日志格式，可以binlog_format配置参数指定。 参数值 含义 | --------- ----------------------------------------------------------...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/db/mysql/sql-mysql-slave.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"MySQL - 主从复制原理"}],["meta",{"property":"og:description","content":"1. MySQL主从同步实现方式 MySQL主从同步是基于Bin Log实现的，而Bin Log记录的是原始SQL语句。 Bin Log共有三种日志格式，可以binlog_format配置参数指定。 参数值 含义 | --------- ----------------------------------------------------------..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. MySQL主从同步实现方式","slug":"_1-mysql主从同步实现方式","link":"#_1-mysql主从同步实现方式","children":[]},{"level":2,"title":"2. MySQL主从同步的作用","slug":"_2-mysql主从同步的作用","link":"#_2-mysql主从同步的作用","children":[{"level":3,"title":"2.1 一主多从架构：","slug":"_2-1-一主多从架构","link":"#_2-1-一主多从架构","children":[]},{"level":3,"title":"2.2 双主多从架构：","slug":"_2-2-双主多从架构","link":"#_2-2-双主多从架构","children":[]}]},{"level":2,"title":"3. 主动同步的原理","slug":"_3-主动同步的原理","link":"#_3-主动同步的原理","children":[]},{"level":2,"title":"4. 主从同步延迟问题","slug":"_4-主从同步延迟问题","link":"#_4-主从同步延迟问题","children":[{"level":3,"title":"4.1 主从同步延迟的原因有哪些？","slug":"_4-1-主从同步延迟的原因有哪些","link":"#_4-1-主从同步延迟的原因有哪些","children":[]},{"level":3,"title":"4.2 主从同步延迟的解决方案？","slug":"_4-2-主从同步延迟的解决方案","link":"#_4-2-主从同步延迟的解决方案","children":[]}]},{"level":2,"title":"5. 如何提升主从同步性能","slug":"_5-如何提升主从同步性能","link":"#_5-如何提升主从同步性能","children":[{"level":3,"title":"5.1. 从库开启多线程复制","slug":"_5-1-从库开启多线程复制","link":"#_5-1-从库开启多线程复制","children":[]},{"level":3,"title":"5.2 修改同步模式，改为异步","slug":"_5-2-修改同步模式-改为异步","link":"#_5-2-修改同步模式-改为异步","children":[]},{"level":3,"title":"5.3 修改从库Bin Log配置","slug":"_5-3-修改从库bin-log配置","link":"#_5-3-修改从库bin-log配置","children":[]}]},{"level":2,"title":"6. 知识点总结：","slug":"_6-知识点总结","link":"#_6-知识点总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":4.72,"words":1417},"filePathRelative":"db/mysql/sql-mysql-slave.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
