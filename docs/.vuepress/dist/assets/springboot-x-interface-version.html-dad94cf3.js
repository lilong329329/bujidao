const e=JSON.parse('{"key":"v-3ed7994e","path":"/dependencies/spring-boot/springboot-x-interface-version.html","title":"SpringBoot接口 - 如何提供多个版本接口","lang":"zh-CN","frontmatter":{"order":210,"category":["Spring","SpringBoot"],"description":"在以SpringBoot开发Restful接口时，由于模块，系统等业务的变化，需要对同一接口提供不同版本的参数实现（老的接口还有模块或者系统在用，不能直接改，所以需要不同版本）。如何更加优雅的实现多版本接口呢？ 1. 为什么接口会出现多个版本？\\r 为什么接口会出现多个版本？ 一般来说，Restful API接口是提供给其它模块，系统或是其他公司使用，不...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./dependencies/spring-boot/springboot-x-interface-version.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"SpringBoot接口 - 如何提供多个版本接口"}],["meta",{"property":"og:description","content":"在以SpringBoot开发Restful接口时，由于模块，系统等业务的变化，需要对同一接口提供不同版本的参数实现（老的接口还有模块或者系统在用，不能直接改，所以需要不同版本）。如何更加优雅的实现多版本接口呢？ 1. 为什么接口会出现多个版本？\\r 为什么接口会出现多个版本？ 一般来说，Restful API接口是提供给其它模块，系统或是其他公司使用，不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 为什么接口会出现多个版本？","slug":"_1-为什么接口会出现多个版本","link":"#_1-为什么接口会出现多个版本","children":[{"level":3,"title":"1.1 有哪些控制接口多版本的方式？","slug":"_1-1-有哪些控制接口多版本的方式","link":"#_1-1-有哪些控制接口多版本的方式","children":[]}]},{"level":2,"title":"2. 实现案例","slug":"_2-实现案例","link":"#_2-实现案例","children":[{"level":3,"title":"2.1 自定义@ApiVersion注解","slug":"_2-1-自定义-apiversion注解","link":"#_2-1-自定义-apiversion注解","children":[]},{"level":3,"title":"2.2 定义版本匹配RequestCondition","slug":"_2-2-定义版本匹配requestcondition","link":"#_2-2-定义版本匹配requestcondition","children":[]},{"level":3,"title":"2.3 定义HandlerMapping","slug":"_2-3-定义handlermapping","link":"#_2-3-定义handlermapping","children":[]},{"level":3,"title":"2.4 配置注册HandlerMapping","slug":"_2-4-配置注册handlermapping","link":"#_2-4-配置注册handlermapping","children":[]},{"level":3,"title":"2.5 测试运行","slug":"_2-5-测试运行","link":"#_2-5-测试运行","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":4.58,"words":1373},"filePathRelative":"dependencies/spring-boot/springboot-x-interface-version.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};