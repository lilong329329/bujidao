const e=JSON.parse('{"key":"v-5ff7396a","path":"/dependencies/spring/spring-x-framework-transaction.html","title":"Spring进阶 - Spring事务原理","lang":"zh-CN","frontmatter":{"order":180,"category":["Spring"],"description":"1. Spring事务的基本原理 Spring事务的本质其实就是数据库对事务的支持，没有数据库的事务支持，spring是无法提供事务功能的。对于纯JDBC操作数据库，想要用到事务，可以按照以下步骤进行： 1. 获取连接 Connection con = DriverManager.getConnection() 2. 开启事务con.setAutoCo...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./dependencies/spring/spring-x-framework-transaction.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Spring进阶 - Spring事务原理"}],["meta",{"property":"og:description","content":"1. Spring事务的基本原理 Spring事务的本质其实就是数据库对事务的支持，没有数据库的事务支持，spring是无法提供事务功能的。对于纯JDBC操作数据库，想要用到事务，可以按照以下步骤进行： 1. 获取连接 Connection con = DriverManager.getConnection() 2. 开启事务con.setAutoCo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. Spring事务的基本原理","slug":"_1-spring事务的基本原理","link":"#_1-spring事务的基本原理","children":[{"level":3,"title":"1.1 Spring事务 使用案例","slug":"_1-1-spring事务-使用案例","link":"#_1-1-spring事务-使用案例","children":[]}]},{"level":2,"title":"2. Spring的事务机制（PlatformTransactionManager接口）","slug":"_2-spring的事务机制-platformtransactionmanager接口","link":"#_2-spring的事务机制-platformtransactionmanager接口","children":[{"level":3,"title":"2.1 各平台事务管理器","slug":"_2-1-各平台事务管理器","link":"#_2-1-各平台事务管理器","children":[]},{"level":3,"title":"2.2 PlatformTransactionManager接口代码如下：","slug":"_2-2-platformtransactionmanager接口代码如下","link":"#_2-2-platformtransactionmanager接口代码如下","children":[]}]},{"level":2,"title":"3. 声名式事务","slug":"_3-声名式事务","link":"#_3-声名式事务","children":[{"level":3,"title":"3.1 AOP 代理的两种实现：","slug":"_3-1-aop-代理的两种实现","link":"#_3-1-aop-代理的两种实现","children":[]}]},{"level":2,"title":"4. Spring 事务的传播属性","slug":"_4-spring-事务的传播属性","link":"#_4-spring-事务的传播属性","children":[]},{"level":2,"title":"5. 数据库隔离级别","slug":"_5-数据库隔离级别","link":"#_5-数据库隔离级别","children":[]},{"level":2,"title":"6. Spring中的隔离级别","slug":"_6-spring中的隔离级别","link":"#_6-spring中的隔离级别","children":[]},{"level":2,"title":"7. 事务的嵌套","slug":"_7-事务的嵌套","link":"#_7-事务的嵌套","children":[{"level":3,"title":"7.1 PROPAGATION_REQUIRED(spring 默认)","slug":"_7-1-propagation-required-spring-默认","link":"#_7-1-propagation-required-spring-默认","children":[]},{"level":3,"title":"7.2 PROPAGATION_REQUIRES_NEW","slug":"_7-2-propagation-requires-new","link":"#_7-2-propagation-requires-new","children":[]},{"level":3,"title":"7.3 PROPAGATION_SUPPORTS","slug":"_7-3-propagation-supports","link":"#_7-3-propagation-supports","children":[]},{"level":3,"title":"7.4 PROPAGATION_NESTED","slug":"_7-4-propagation-nested","link":"#_7-4-propagation-nested","children":[]}]},{"level":2,"title":"8.Spring Boot 对事务的支持","slug":"_8-spring-boot-对事务的支持","link":"#_8-spring-boot-对事务的支持","children":[]},{"level":2,"title":"9. 只读事务（@Transactional(readOnly = true)）的一些概念","slug":"_9-只读事务-transactional-readonly-true-的一些概念","link":"#_9-只读事务-transactional-readonly-true-的一些概念","children":[]},{"level":2,"title":"10. 总结","slug":"_10-总结","link":"#_10-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":12.56,"words":3768},"filePathRelative":"dependencies/spring/spring-x-framework-transaction.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
