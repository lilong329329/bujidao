const e=JSON.parse('{"key":"v-063aaade","path":"/db/mysql/mysql-c-index-uni.html","title":"联合索引","lang":"zh-CN","frontmatter":{"category":["数据库"],"description":"1. 什么是联合索引 两个或更多个列上的索引被称为联合索引，联合索引又叫复合索引。 对于联合索引：\\rMySql从左到右使用索引中字段; \\r一个查询可以只使用索引中的一部分，但只能是最左部分（最左前缀）; 例如： 索引是key index（a,b,c） 可以支持a|a,b|a,b,c，三种组合查找，但不支持b,c 进行查找。当最左侧字段是常量引用时，索引...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/db/mysql/mysql-c-index-uni.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"联合索引"}],["meta",{"property":"og:description","content":"1. 什么是联合索引 两个或更多个列上的索引被称为联合索引，联合索引又叫复合索引。 对于联合索引：\\rMySql从左到右使用索引中字段; \\r一个查询可以只使用索引中的一部分，但只能是最左部分（最左前缀）; 例如： 索引是key index（a,b,c） 可以支持a|a,b|a,b,c，三种组合查找，但不支持b,c 进行查找。当最左侧字段是常量引用时，索引..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 什么是联合索引","slug":"_1-什么是联合索引","link":"#_1-什么是联合索引","children":[]},{"level":2,"title":"2. 需要遵循的规则","slug":"_2-需要遵循的规则","link":"#_2-需要遵循的规则","children":[]},{"level":2,"title":"3. 原理","slug":"_3-原理","link":"#_3-原理","children":[{"level":3,"title":"3.1 B+Tree结构","slug":"_3-1-b-tree结构","link":"#_3-1-b-tree结构","children":[]},{"level":3,"title":"3.2 实例","slug":"_3-2-实例","link":"#_3-2-实例","children":[]}]},{"level":2,"title":"4. 多列索引的应用","slug":"_4-多列索引的应用","link":"#_4-多列索引的应用","children":[{"level":3,"title":"4.1 多列索引在and查询中的应用","slug":"_4-1-多列索引在and查询中的应用","link":"#_4-1-多列索引在and查询中的应用","children":[]},{"level":3,"title":"4.2 多列索引在范围查询中应用","slug":"_4-2-多列索引在范围查询中应用","link":"#_4-2-多列索引在范围查询中应用","children":[]},{"level":3,"title":"4.3 多列索引在排序中应用","slug":"_4-3-多列索引在排序中应用","link":"#_4-3-多列索引在排序中应用","children":[]}]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.69,"words":1106},"filePathRelative":"db/mysql/mysql-c-index-uni.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
