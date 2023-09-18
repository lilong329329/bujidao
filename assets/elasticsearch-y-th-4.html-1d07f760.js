const e=JSON.parse('{"key":"v-ba94561e","path":"/db/es/elasticsearch-y-th-4.html","title":"ES详解 - 原理：ES原理之读取文档流程详解","lang":"zh-CN","frontmatter":{"order":240,"category":["ElasticSearch"],"description":"ElasticSearch中最重要原理是文档的索引和文档的读取，前文介绍了索引文档流程，本文带你理解ES文档的读取过程。 1. 文档查询步骤顺序\\r 先看下整体的查询流程 1.1 单个文档 以下是从主分片或者副本分片检索文档的步骤顺序： image-20220808221429209 1.2 多个文档 使用 mget 取回多个文档的步骤顺序： image...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/db/es/elasticsearch-y-th-4.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"ES详解 - 原理：ES原理之读取文档流程详解"}],["meta",{"property":"og:description","content":"ElasticSearch中最重要原理是文档的索引和文档的读取，前文介绍了索引文档流程，本文带你理解ES文档的读取过程。 1. 文档查询步骤顺序\\r 先看下整体的查询流程 1.1 单个文档 以下是从主分片或者副本分片检索文档的步骤顺序： image-20220808221429209 1.2 多个文档 使用 mget 取回多个文档的步骤顺序： image..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 文档查询步骤顺序","slug":"_1-文档查询步骤顺序","link":"#_1-文档查询步骤顺序","children":[{"level":3,"title":"1.1 单个文档","slug":"_1-1-单个文档","link":"#_1-1-单个文档","children":[]},{"level":3,"title":"1.2 多个文档","slug":"_1-2-多个文档","link":"#_1-2-多个文档","children":[]}]},{"level":2,"title":"2. 文档读取过程详解","slug":"_2-文档读取过程详解","link":"#_2-文档读取过程详解","children":[]},{"level":2,"title":"3. 深入ElasticSearch读取文档的实现机制","slug":"_3-深入elasticsearch读取文档的实现机制","link":"#_3-深入elasticsearch读取文档的实现机制","children":[{"level":3,"title":"3.1 读操作","slug":"_3-1-读操作","link":"#_3-1-读操作","children":[]},{"level":3,"title":"3.2 Lucene的读","slug":"_3-2-lucene的读","link":"#_3-2-lucene的读","children":[]},{"level":3,"title":"3.3 Elasticsearch的读","slug":"_3-3-elasticsearch的读","link":"#_3-3-elasticsearch的读","children":[]},{"level":3,"title":"3.4 Elasticsearch查询流程","slug":"_3-4-elasticsearch查询流程","link":"#_3-4-elasticsearch查询流程","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":17.29,"words":5187},"filePathRelative":"db/es/elasticsearch-y-th-4.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
