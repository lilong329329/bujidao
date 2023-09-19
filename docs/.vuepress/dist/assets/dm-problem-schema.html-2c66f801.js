const e=JSON.parse('{"key":"v-790c2fd4","path":"/db/dm/dm-problem-schema.html","title":"达梦数据库-写SQL如何才能不带上模式名？","lang":"zh-CN","frontmatter":{"description":"1. 问题背景 在达梦数据库中，SQL 查询时，需要加上模式名（数据库名）才能访问 image-20210629143738277 2. 问题原因 其实这是把Mysql或者SQLSERVER的思维代入DM数据库造成的，Mysql的体系架构是单实例多库的，一个用户可以访问多个数据库，然后指定当前数据库写SQL的时候就不用带上数据库名了。 达梦的体系架构是...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./db/dm/dm-problem-schema.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"达梦数据库-写SQL如何才能不带上模式名？"}],["meta",{"property":"og:description","content":"1. 问题背景 在达梦数据库中，SQL 查询时，需要加上模式名（数据库名）才能访问 image-20210629143738277 2. 问题原因 其实这是把Mysql或者SQLSERVER的思维代入DM数据库造成的，Mysql的体系架构是单实例多库的，一个用户可以访问多个数据库，然后指定当前数据库写SQL的时候就不用带上数据库名了。 达梦的体系架构是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1.  问题背景","slug":"_1-问题背景","link":"#_1-问题背景","children":[{"level":3,"title":"2. 问题原因","slug":"_2-问题原因","link":"#_2-问题原因","children":[]},{"level":3,"title":"3.1 直接原因","slug":"_3-1-直接原因","link":"#_3-1-直接原因","children":[]}]},{"level":2,"title":"3. 解决方式","slug":"_3-解决方式","link":"#_3-解决方式","children":[{"level":3,"title":"3.1 步骤1：新建表空间","slug":"_3-1-步骤1-新建表空间","link":"#_3-1-步骤1-新建表空间","children":[]},{"level":3,"title":"3.2 步骤2：创建用户授权","slug":"_3-2-步骤2-创建用户授权","link":"#_3-2-步骤2-创建用户授权","children":[]},{"level":3,"title":"3.3 步骤3：迁移工具迁移的时候用TESTDB1用户来迁移","slug":"_3-3-步骤3-迁移工具迁移的时候用testdb1用户来迁移","link":"#_3-3-步骤3-迁移工具迁移的时候用testdb1用户来迁移","children":[]},{"level":3,"title":"3.4 步骤4：访问TESTDB1用户（模式）下的表，就使用TESTDB1用户登录","slug":"_3-4-步骤4-访问testdb1用户-模式-下的表-就使用testdb1用户登录","link":"#_3-4-步骤4-访问testdb1用户-模式-下的表-就使用testdb1用户登录","children":[]}]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.73,"words":518},"filePathRelative":"db/dm/dm-problem-schema.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
