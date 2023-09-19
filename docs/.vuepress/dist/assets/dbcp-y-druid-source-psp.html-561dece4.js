const e=JSON.parse('{"key":"v-ef862534","path":"/dependencies/database-connection-pool/dbcp-y-druid-source-psp.html","title":"Druid源码学习（六）-PreparedStatementPool源码及使用场景分析","lang":"zh-CN","frontmatter":{"description":"1. 简介 在阅读DruidDataSource源码的过程中，发现DruidConnectionHolder有个特别的属性 ``` PreparedStatementPool statementPool。 ``` 根据经验可知，这是DruidPreparedStatement进行缓存的cache。我们在使用PreparedStatement的过程中，由...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./dependencies/database-connection-pool/dbcp-y-druid-source-psp.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Druid源码学习（六）-PreparedStatementPool源码及使用场景分析"}],["meta",{"property":"og:description","content":"1. 简介 在阅读DruidDataSource源码的过程中，发现DruidConnectionHolder有个特别的属性 ``` PreparedStatementPool statementPool。 ``` 根据经验可知，这是DruidPreparedStatement进行缓存的cache。我们在使用PreparedStatement的过程中，由..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 开启参数","slug":"_2-开启参数","link":"#_2-开启参数","children":[]},{"level":2,"title":"3. cache创建","slug":"_3-cache创建","link":"#_3-cache创建","children":[]},{"level":2,"title":"4. psCache结构","slug":"_4-pscache结构","link":"#_4-pscache结构","children":[]},{"level":2,"title":"5. Entry中的PreparedStatementKey","slug":"_5-entry中的preparedstatementkey","link":"#_5-entry中的preparedstatementkey","children":[]},{"level":2,"title":"6.Entry中的PreparedStatementHolder","slug":"_6-entry中的preparedstatementholder","link":"#_6-entry中的preparedstatementholder","children":[]},{"level":2,"title":"7. 总结","slug":"_7-总结","link":"#_7-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":4.15,"words":1244},"filePathRelative":"dependencies/database-connection-pool/dbcp-y-druid-source-psp.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
