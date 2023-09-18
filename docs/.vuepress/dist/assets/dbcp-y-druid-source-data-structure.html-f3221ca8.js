const e=JSON.parse('{"key":"v-055e284f","path":"/dependencies/database-connection-pool/dbcp-y-druid-source-data-structure.html","title":"Druid源码学习（一）-DruidDataSource数据结构","lang":"zh-CN","frontmatter":{"description":"1. 简介 DruidDataSource是DruidCP最关键的类之一，承载了连接池的启动、关闭、以及连接的获取和管理等功能。 2. DruidDataSource的数据结构 DruidDataSource 其内部关键的的数据结构如下表: name type 说明 -------------------- ----------------------...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/dependencies/database-connection-pool/dbcp-y-druid-source-data-structure.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Druid源码学习（一）-DruidDataSource数据结构"}],["meta",{"property":"og:description","content":"1. 简介 DruidDataSource是DruidCP最关键的类之一，承载了连接池的启动、关闭、以及连接的获取和管理等功能。 2. DruidDataSource的数据结构 DruidDataSource 其内部关键的的数据结构如下表: name type 说明 -------------------- ----------------------..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. DruidDataSource的数据结构","slug":"_2-druiddatasource的数据结构","link":"#_2-druiddatasource的数据结构","children":[]},{"level":2,"title":"3. DruidConnectionHolder的数据结构","slug":"_3-druidconnectionholder的数据结构","link":"#_3-druidconnectionholder的数据结构","children":[]},{"level":2,"title":"4. 获取连接 getConnection","slug":"_4-获取连接-getconnection","link":"#_4-获取连接-getconnection","children":[]},{"level":2,"title":"5. 类关系图","slug":"_5-类关系图","link":"#_5-类关系图","children":[]},{"level":2,"title":"6. 相关知识点","slug":"_6-相关知识点","link":"#_6-相关知识点","children":[{"level":3,"title":"6.1 volatile","slug":"_6-1-volatile","link":"#_6-1-volatile","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.04,"words":912},"filePathRelative":"dependencies/database-connection-pool/dbcp-y-druid-source-data-structure.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
