const e=JSON.parse('{"key":"v-31f9544e","path":"/dependencies/spring/spring-x-framework-ioc-source-3.html","title":"Spring进阶 - Spring IOC实现原理详解之Bean实例化(生命周期,循环依赖等)","lang":"zh-CN","frontmatter":{"order":90,"category":["Spring"],"description":"上文，我们看了IOC设计要点和设计结构；以及Spring如何实现将资源配置（以xml配置为例）通过加载，解析，生成BeanDefination并注册到IoC容器中的；容器中存放的是Bean的定义即BeanDefinition放到beanDefinitionMap中，本质上是一个ConcurrentHashMap；并且BeanDefinition接口中包...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/dependencies/spring/spring-x-framework-ioc-source-3.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Spring进阶 - Spring IOC实现原理详解之Bean实例化(生命周期,循环依赖等)"}],["meta",{"property":"og:description","content":"上文，我们看了IOC设计要点和设计结构；以及Spring如何实现将资源配置（以xml配置为例）通过加载，解析，生成BeanDefination并注册到IoC容器中的；容器中存放的是Bean的定义即BeanDefinition放到beanDefinitionMap中，本质上是一个ConcurrentHashMap；并且BeanDefinition接口中包..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 引入","slug":"_1-引入","link":"#_1-引入","children":[]},{"level":2,"title":"2. BeanFactory中getBean的主体思路","slug":"_2-beanfactory中getbean的主体思路","link":"#_2-beanfactory中getbean的主体思路","children":[{"level":3,"title":"2.1 初步的思考","slug":"_2-1-初步的思考","link":"#_2-1-初步的思考","children":[]},{"level":3,"title":"2.2 Spring中getBean的主体思路","slug":"_2-2-spring中getbean的主体思路","link":"#_2-2-spring中getbean的主体思路","children":[]}]},{"level":2,"title":"3. 重点：Spring如何解决循环依赖问题","slug":"_3-重点-spring如何解决循环依赖问题","link":"#_3-重点-spring如何解决循环依赖问题","children":[{"level":3,"title":"3.1 Spring单例模式下的属性依赖","slug":"_3-1-spring单例模式下的属性依赖","link":"#_3-1-spring单例模式下的属性依赖","children":[]},{"level":3,"title":"3.2 Spring为何不能解决非单例属性之外的循环依赖？","slug":"_3-2-spring为何不能解决非单例属性之外的循环依赖","link":"#_3-2-spring为何不能解决非单例属性之外的循环依赖","children":[]},{"level":3,"title":"3.3 那么其它循环依赖如何解决？","slug":"_3-3-那么其它循环依赖如何解决","link":"#_3-3-那么其它循环依赖如何解决","children":[]}]},{"level":2,"title":"4. 重点：Spring中Bean的生命周期","slug":"_4-重点-spring中bean的生命周期","link":"#_4-重点-spring中bean的生命周期","children":[{"level":3,"title":"4.1 Spring Bean生命周期流程","slug":"_4-1-spring-bean生命周期流程","link":"#_4-1-spring-bean生命周期流程","children":[]},{"level":3,"title":"4.2 Spring Bean生命周期案例","slug":"_4-2-spring-bean生命周期案例","link":"#_4-2-spring-bean生命周期案例","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":17.45,"words":5235},"filePathRelative":"dependencies/spring/spring-x-framework-ioc-source-3.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
