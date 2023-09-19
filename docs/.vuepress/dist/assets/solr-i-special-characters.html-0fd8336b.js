const e=JSON.parse('{"key":"v-3ce56701","path":"/db/solr/solr-i-special-characters.html","title":"Solr搜索特殊字符转义","lang":"zh-CN","frontmatter":{"description":"1. 简介 在Solr检索中，下列字符有特殊含义，需 转义处理，否则查询会报查询错误。 ```diff\\r– && || ! ( ) { } [ ] ^ ” ~ * ? : \\\\ ; ``` 而我们的查询条件中，包含上述特性字符。 2. 解决方案 Solr 官方提供的转义 ```java ClientUtils.escapeQueryChars(\\"solr...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./db/solr/solr-i-special-characters.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Solr搜索特殊字符转义"}],["meta",{"property":"og:description","content":"1. 简介 在Solr检索中，下列字符有特殊含义，需 转义处理，否则查询会报查询错误。 ```diff\\r– && || ! ( ) { } [ ] ^ ” ~ * ? : \\\\ ; ``` 而我们的查询条件中，包含上述特性字符。 2. 解决方案 Solr 官方提供的转义 ```java ClientUtils.escapeQueryChars(\\"solr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 解决方案","slug":"_2-解决方案","link":"#_2-解决方案","children":[{"level":3,"title":"2.1 转义源码","slug":"_2-1-转义源码","link":"#_2-1-转义源码","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":0.63,"words":190},"filePathRelative":"db/solr/solr-i-special-characters.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
