const e=JSON.parse('{"key":"v-7d1bcb32","path":"/think/deepImpression/online-oom-thread-oom2.html","title":"线上OOM-记一次OOM排查过程","lang":"zh-CN","frontmatter":{"order":120,"category":["OOM"],"description":"1. 背景 项目中有个需求是将爬虫爬取到的网页数据（存放在mongodb）, 做数据清理后放入搜索引擎（solr）中。总共350w的网页数据，如果按正常速度同步10个小时即可完成。但我们实际测试发现，随着时间推移，同步时间越来越长，挂了一天只同步了100w数据。且后面越来越慢。领导找到我，让我帮忙排查解决 2. 解决一: mongodb 大数据量分页查...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./think/deepImpression/online-oom-thread-oom2.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"线上OOM-记一次OOM排查过程"}],["meta",{"property":"og:description","content":"1. 背景 项目中有个需求是将爬虫爬取到的网页数据（存放在mongodb）, 做数据清理后放入搜索引擎（solr）中。总共350w的网页数据，如果按正常速度同步10个小时即可完成。但我们实际测试发现，随着时间推移，同步时间越来越长，挂了一天只同步了100w数据。且后面越来越慢。领导找到我，让我帮忙排查解决 2. 解决一: mongodb 大数据量分页查..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 解决一: mongodb 大数据量分页查询效率问题","slug":"_2-解决一-mongodb-大数据量分页查询效率问题","link":"#_2-解决一-mongodb-大数据量分页查询效率问题","children":[{"level":3,"title":"2.1 解决方案1：通过_id 比较取分页","slug":"_2-1-解决方案1-通过-id-比较取分页","link":"#_2-1-解决方案1-通过-id-比较取分页","children":[]},{"level":3,"title":"2.2 解决方案2：通过游标来查询","slug":"_2-2-解决方案2-通过游标来查询","link":"#_2-2-解决方案2-通过游标来查询","children":[]},{"level":3,"title":"2.3 优化成果","slug":"_2-3-优化成果","link":"#_2-3-优化成果","children":[]}]},{"level":2,"title":"3. OOM引发：通过多线程来优化","slug":"_3-oom引发-通过多线程来优化","link":"#_3-oom引发-通过多线程来优化","children":[{"level":3,"title":"3.1 OOM: GC overhead limit exceeded","slug":"_3-1-oom-gc-overhead-limit-exceeded","link":"#_3-1-oom-gc-overhead-limit-exceeded","children":[]},{"level":3,"title":"3.2 查看 GC-Roots 引用链","slug":"_3-2-查看-gc-roots-引用链","link":"#_3-2-查看-gc-roots-引用链","children":[]},{"level":3,"title":"3.3 分析我们的代码，查找原因","slug":"_3-3-分析我们的代码-查找原因","link":"#_3-3-分析我们的代码-查找原因","children":[]},{"level":3,"title":"3.4 优化成功","slug":"_3-4-优化成功","link":"#_3-4-优化成功","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":4.19,"words":1257},"filePathRelative":"think/deepImpression/online-oom-thread-oom2.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
