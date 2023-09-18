const e=JSON.parse('{"key":"v-45e4c01c","path":"/db/mysql/mysql-c-index-right.html","title":"联合索引-最左匹配原则成因","lang":"zh-CN","frontmatter":{"category":["数据库"],"description":"1. 什么是联合索引 联合索引就是由多列组合成的索引 2. 什么是最左匹配原则 2.1 简单概述 假设我们有两列a，b。我们对ab设置一个联合索引，我们再where 语句中\\r调用a=？ and b=?,他就会走ab索引。; \\r调用where a=？ 他也会走ab索引; \\r调用where b=？，不走ab 索引; 2.2 定义 1. mysql 会一直向...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/db/mysql/mysql-c-index-right.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"联合索引-最左匹配原则成因"}],["meta",{"property":"og:description","content":"1. 什么是联合索引 联合索引就是由多列组合成的索引 2. 什么是最左匹配原则 2.1 简单概述 假设我们有两列a，b。我们对ab设置一个联合索引，我们再where 语句中\\r调用a=？ and b=?,他就会走ab索引。; \\r调用where a=？ 他也会走ab索引; \\r调用where b=？，不走ab 索引; 2.2 定义 1. mysql 会一直向..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 什么是联合索引","slug":"_1-什么是联合索引","link":"#_1-什么是联合索引","children":[]},{"level":2,"title":"2. 什么是最左匹配原则","slug":"_2-什么是最左匹配原则","link":"#_2-什么是最左匹配原则","children":[{"level":3,"title":"2.1 简单概述","slug":"_2-1-简单概述","link":"#_2-1-简单概述","children":[]},{"level":3,"title":"2.2 定义","slug":"_2-2-定义","link":"#_2-2-定义","children":[]}]},{"level":2,"title":"3. 示例","slug":"_3-示例","link":"#_3-示例","children":[]},{"level":2,"title":"4. 成因分析","slug":"_4-成因分析","link":"#_4-成因分析","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.38,"words":415},"filePathRelative":"db/mysql/mysql-c-index-right.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
