const e=JSON.parse('{"key":"v-66ffe97e","path":"/arch/distributed/arch-z-lock-redisson.html","title":"分布式系统  -  Redisson实现分布式锁原理","lang":"zh-CN","frontmatter":{"order":31,"category":["架构"],"description":"image-20221216152713896 0. 前言 在一个分布式系统中，由于涉及到多个实例同时对同一个资源加锁的问题，像传统的synchronized、ReentrantLock等单进程情况加锁的api就不再适用，需要使用分布式锁来保证多服务实例之间加锁的安全性。常见的分布式锁的实现方式有zookeeper和redis等。而由于redis分布式...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/arch/distributed/arch-z-lock-redisson.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"分布式系统  -  Redisson实现分布式锁原理"}],["meta",{"property":"og:description","content":"image-20221216152713896 0. 前言 在一个分布式系统中，由于涉及到多个实例同时对同一个资源加锁的问题，像传统的synchronized、ReentrantLock等单进程情况加锁的api就不再适用，需要使用分布式锁来保证多服务实例之间加锁的安全性。常见的分布式锁的实现方式有zookeeper和redis等。而由于redis分布式..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"0. 前言","slug":"_0-前言","link":"#_0-前言","children":[]},{"level":2,"title":"1. 如何保证加锁的原子性","slug":"_1-如何保证加锁的原子性","link":"#_1-如何保证加锁的原子性","children":[]},{"level":2,"title":"2. 如何通过lua脚本实现加锁","slug":"_2-如何通过lua脚本实现加锁","link":"#_2-如何通过lua脚本实现加锁","children":[{"level":3,"title":"2.1 lua的加锁","slug":"_2-1-lua的加锁","link":"#_2-1-lua的加锁","children":[]},{"level":3,"title":"2.2 lua脚本加锁流程图","slug":"_2-2-lua脚本加锁流程图","link":"#_2-2-lua脚本加锁流程图","children":[]}]},{"level":2,"title":"3. 为什么需要设置加锁key的过期时间","slug":"_3-为什么需要设置加锁key的过期时间","link":"#_3-为什么需要设置加锁key的过期时间","children":[]},{"level":2,"title":"4.（看门狗）如何自动延长加锁时间","slug":"_4-看门狗-如何自动延长加锁时间","link":"#_4-看门狗-如何自动延长加锁时间","children":[]},{"level":2,"title":"5. 如何实现可重入加锁","slug":"_5-如何实现可重入加锁","link":"#_5-如何实现可重入加锁","children":[]},{"level":2,"title":"6. （解锁）如何主动释放锁和避免其它线程释放了自己加的锁","slug":"_6-解锁-如何主动释放锁和避免其它线程释放了自己加的锁","link":"#_6-解锁-如何主动释放锁和避免其它线程释放了自己加的锁","children":[{"level":3,"title":"6.1 解锁lua脚本","slug":"_6-1-解锁lua脚本","link":"#_6-1-解锁lua脚本","children":[]}]},{"level":2,"title":"7. 如何实现超时自动释放锁","slug":"_7-如何实现超时自动释放锁","link":"#_7-如何实现超时自动释放锁","children":[]},{"level":2,"title":"8. 如何实现不同线程加锁的互斥","slug":"_8-如何实现不同线程加锁的互斥","link":"#_8-如何实现不同线程加锁的互斥","children":[]},{"level":2,"title":"9. 加锁失败之后如何实现阻塞等待加锁","slug":"_9-加锁失败之后如何实现阻塞等待加锁","link":"#_9-加锁失败之后如何实现阻塞等待加锁","children":[]},{"level":2,"title":"10. 如何实现阻塞等待一定时间还未加锁成功就放弃加锁","slug":"_10-如何实现阻塞等待一定时间还未加锁成功就放弃加锁","link":"#_10-如何实现阻塞等待一定时间还未加锁成功就放弃加锁","children":[]},{"level":2,"title":"11. 如何实现公平锁","slug":"_11-如何实现公平锁","link":"#_11-如何实现公平锁","children":[{"level":3,"title":"11.1 什么是公平锁","slug":"_11-1-什么是公平锁","link":"#_11-1-什么是公平锁","children":[]},{"level":3,"title":"11.2 公平锁和非公平锁的比较","slug":"_11-2-公平锁和非公平锁的比较","link":"#_11-2-公平锁和非公平锁的比较","children":[]},{"level":3,"title":"11.3 如何使用公平锁？","slug":"_11-3-如何使用公平锁","link":"#_11-3-如何使用公平锁","children":[]}]},{"level":2,"title":"12. 如何实现读写锁","slug":"_12-如何实现读写锁","link":"#_12-如何实现读写锁","children":[]},{"level":2,"title":"13. 如何实现批量加锁(联锁)","slug":"_13-如何实现批量加锁-联锁","link":"#_13-如何实现批量加锁-联锁","children":[]},{"level":2,"title":"14. Redis分布式锁存在的问题","slug":"_14-redis分布式锁存在的问题","link":"#_14-redis分布式锁存在的问题","children":[]},{"level":2,"title":"15. 如何实现RedLock算法","slug":"_15-如何实现redlock算法","link":"#_15-如何实现redlock算法","children":[{"level":3,"title":"15.1 RedLock算法","slug":"_15-1-redlock算法","link":"#_15-1-redlock算法","children":[]},{"level":3,"title":"15.2 Redisson对RedLock算法的实现","slug":"_15-2-redisson对redlock算法的实现","link":"#_15-2-redisson对redlock算法的实现","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":24.28,"words":7285},"filePathRelative":"arch/distributed/arch-z-lock-redisson.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
