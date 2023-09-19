const e=JSON.parse('{"key":"v-70e41c4c","path":"/develop/optimization/optimization-x-interface-optimization.html","title":"优化 - 接口优化技巧","lang":"zh-CN","frontmatter":{"order":10,"category":["optimization"],"description":"0. 前言 之前工作中，遇到一个504超时问题。原因是因为接口耗时过长，超过nginx配置的10秒。然后 真枪实弹搞了一次接口性能优化，最后接口从11.3s降为170ms。本文将跟小伙伴们分享接口优化的一些通用方案。 image-20221203214622902 1. 批量思想：批量操作数据库 优化前： ```java //for循环单笔入库 for...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./develop/optimization/optimization-x-interface-optimization.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"优化 - 接口优化技巧"}],["meta",{"property":"og:description","content":"0. 前言 之前工作中，遇到一个504超时问题。原因是因为接口耗时过长，超过nginx配置的10秒。然后 真枪实弹搞了一次接口性能优化，最后接口从11.3s降为170ms。本文将跟小伙伴们分享接口优化的一些通用方案。 image-20221203214622902 1. 批量思想：批量操作数据库 优化前： ```java //for循环单笔入库 for..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"0. 前言","slug":"_0-前言","link":"#_0-前言","children":[]},{"level":2,"title":"1. 批量思想：批量操作数据库","slug":"_1-批量思想-批量操作数据库","link":"#_1-批量思想-批量操作数据库","children":[]},{"level":2,"title":"2. 异步思想：耗时操作，考虑放到异步执行","slug":"_2-异步思想-耗时操作-考虑放到异步执行","link":"#_2-异步思想-耗时操作-考虑放到异步执行","children":[]},{"level":2,"title":"3. 空间换时间思想：恰当使用缓存。","slug":"_3-空间换时间思想-恰当使用缓存。","link":"#_3-空间换时间思想-恰当使用缓存。","children":[]},{"level":2,"title":"4. 预取思想：提前初始化到缓存","slug":"_4-预取思想-提前初始化到缓存","link":"#_4-预取思想-提前初始化到缓存","children":[]},{"level":2,"title":"5. 池化思想：预分配与循环使用","slug":"_5-池化思想-预分配与循环使用","link":"#_5-池化思想-预分配与循环使用","children":[]},{"level":2,"title":"6. 事件回调思想：拒绝阻塞等待。","slug":"_6-事件回调思想-拒绝阻塞等待。","link":"#_6-事件回调思想-拒绝阻塞等待。","children":[]},{"level":2,"title":"7. 远程调用由串行改为并行","slug":"_7-远程调用由串行改为并行","link":"#_7-远程调用由串行改为并行","children":[]},{"level":2,"title":"8. 锁粒度避免过粗","slug":"_8-锁粒度避免过粗","link":"#_8-锁粒度避免过粗","children":[]},{"level":2,"title":"9. 切换存储方式：文件中转暂存数据","slug":"_9-切换存储方式-文件中转暂存数据","link":"#_9-切换存储方式-文件中转暂存数据","children":[]},{"level":2,"title":"10. 索引","slug":"_10-索引","link":"#_10-索引","children":[{"level":3,"title":"10.1 SQL没加索引","slug":"_10-1-sql没加索引","link":"#_10-1-sql没加索引","children":[]},{"level":3,"title":"10.2 索引不生效","slug":"_10-2-索引不生效","link":"#_10-2-索引不生效","children":[]},{"level":3,"title":"10.3 索引设计不合理","slug":"_10-3-索引设计不合理","link":"#_10-3-索引设计不合理","children":[]}]},{"level":2,"title":"11. 优化SQL","slug":"_11-优化sql","link":"#_11-优化sql","children":[]},{"level":2,"title":"12.避免大事务问题","slug":"_12-避免大事务问题","link":"#_12-避免大事务问题","children":[]},{"level":2,"title":"13. 深分页问题","slug":"_13-深分页问题","link":"#_13-深分页问题","children":[{"level":3,"title":"13.1 标签记录法","slug":"_13-1-标签记录法","link":"#_13-1-标签记录法","children":[]},{"level":3,"title":"13.2 延迟关联法","slug":"_13-2-延迟关联法","link":"#_13-2-延迟关联法","children":[]}]},{"level":2,"title":"14. 优化程序结构","slug":"_14-优化程序结构","link":"#_14-优化程序结构","children":[]},{"level":2,"title":"15. 压缩传输内容","slug":"_15-压缩传输内容","link":"#_15-压缩传输内容","children":[]},{"level":2,"title":"16. 海量数据处理，考虑NoSQL","slug":"_16-海量数据处理-考虑nosql","link":"#_16-海量数据处理-考虑nosql","children":[]},{"level":2,"title":"17. 线程池设计要合理","slug":"_17-线程池设计要合理","link":"#_17-线程池设计要合理","children":[]},{"level":2,"title":"18.机器问题 （fullGC、线程打满、太多IO资源没关闭等等）。","slug":"_18-机器问题-fullgc、线程打满、太多io资源没关闭等等-。","link":"#_18-机器问题-fullgc、线程打满、太多io资源没关闭等等-。","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":14.87,"words":4461},"filePathRelative":"develop/optimization/optimization-x-interface-optimization.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
