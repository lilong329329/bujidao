const l=JSON.parse('{"key":"v-07be6e40","path":"/arch/mall/mall-second-kill.html","title":"商城设计 - 秒杀系统设计？","lang":"zh-CN","frontmatter":{"order":10,"category":["mall"],"description":"image-20221012225218315 0. 前言 高并发下如何设计秒杀系统？这是一个高频面试题。这个问题看似简单，但是里面的水很深，它考查的是高并发场景下，从前端到后端多方面的知识。 秒杀一般出现在商城的促销活动中，指定了一定数量（比如：10个）的商品（比如：手机），以极低的价格（比如：0.1元），让大量用户参与活动，但只有极少数用户能够购买...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./arch/mall/mall-second-kill.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"商城设计 - 秒杀系统设计？"}],["meta",{"property":"og:description","content":"image-20221012225218315 0. 前言 高并发下如何设计秒杀系统？这是一个高频面试题。这个问题看似简单，但是里面的水很深，它考查的是高并发场景下，从前端到后端多方面的知识。 秒杀一般出现在商城的促销活动中，指定了一定数量（比如：10个）的商品（比如：手机），以极低的价格（比如：0.1元），让大量用户参与活动，但只有极少数用户能够购买..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"0. 前言","slug":"_0-前言","link":"#_0-前言","children":[]},{"level":2,"title":"1. 瞬时高并发","slug":"_1-瞬时高并发","link":"#_1-瞬时高并发","children":[]},{"level":2,"title":"2. 页面静态化与CDN","slug":"_2-页面静态化与cdn","link":"#_2-页面静态化与cdn","children":[]},{"level":2,"title":"3. 秒杀按钮","slug":"_3-秒杀按钮","link":"#_3-秒杀按钮","children":[]},{"level":2,"title":"4. 读多写少","slug":"_4-读多写少","link":"#_4-读多写少","children":[]},{"level":2,"title":"5. 缓存问题","slug":"_5-缓存问题","link":"#_5-缓存问题","children":[{"level":3,"title":"5.1 缓存击穿","slug":"_5-1-缓存击穿","link":"#_5-1-缓存击穿","children":[]},{"level":3,"title":"5.2 缓存穿透","slug":"_5-2-缓存穿透","link":"#_5-2-缓存穿透","children":[]}]},{"level":2,"title":"6. 库存问题","slug":"_6-库存问题","link":"#_6-库存问题","children":[{"level":3,"title":"6.1 数据库扣减库存","slug":"_6-1-数据库扣减库存","link":"#_6-1-数据库扣减库存","children":[]},{"level":3,"title":"6.2 redis扣减库存","slug":"_6-2-redis扣减库存","link":"#_6-2-redis扣减库存","children":[]},{"level":3,"title":"6.3 lua脚本扣减库存","slug":"_6-3-lua脚本扣减库存","link":"#_6-3-lua脚本扣减库存","children":[]}]},{"level":2,"title":"7. 分布式锁","slug":"_7-分布式锁","link":"#_7-分布式锁","children":[{"level":3,"title":"7.1 setNx加锁","slug":"_7-1-setnx加锁","link":"#_7-1-setnx加锁","children":[]},{"level":3,"title":"7.2 set加锁","slug":"_7-2-set加锁","link":"#_7-2-set加锁","children":[]},{"level":3,"title":"7.3 释放锁","slug":"_7-3-释放锁","link":"#_7-3-释放锁","children":[]},{"level":3,"title":"7.4 自旋锁","slug":"_7-4-自旋锁","link":"#_7-4-自旋锁","children":[]},{"level":3,"title":"7.5 redisson","slug":"_7-5-redisson","link":"#_7-5-redisson","children":[]}]},{"level":2,"title":"8 mq异步处理","slug":"_8-mq异步处理","link":"#_8-mq异步处理","children":[{"level":3,"title":"8.1 消息丢失问题","slug":"_8-1-消息丢失问题","link":"#_8-1-消息丢失问题","children":[]},{"level":3,"title":"8.2 重复消费问题","slug":"_8-2-重复消费问题","link":"#_8-2-重复消费问题","children":[]},{"level":3,"title":"8.3 垃圾消息问题","slug":"_8-3-垃圾消息问题","link":"#_8-3-垃圾消息问题","children":[]},{"level":3,"title":"8.4 延迟消费问题","slug":"_8-4-延迟消费问题","link":"#_8-4-延迟消费问题","children":[]}]},{"level":2,"title":"9. 如何限流？","slug":"_9-如何限流","link":"#_9-如何限流","children":[{"level":3,"title":"9.1 对同一用户限流","slug":"_9-1-对同一用户限流","link":"#_9-1-对同一用户限流","children":[]},{"level":3,"title":"9.2 对同一ip限流","slug":"_9-2-对同一ip限流","link":"#_9-2-对同一ip限流","children":[]},{"level":3,"title":"9.3 对接口限流","slug":"_9-3-对接口限流","link":"#_9-3-对接口限流","children":[]},{"level":3,"title":"9.4 加验证码","slug":"_9-4-加验证码","link":"#_9-4-加验证码","children":[]},{"level":3,"title":"9.5 提高业务门槛","slug":"_9-5-提高业务门槛","link":"#_9-5-提高业务门槛","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":24.27,"words":7281},"filePathRelative":"arch/mall/mall-second-kill.md","localizedDate":"2023年2月20日","autoDesc":true}');export{l as data};
