const e=JSON.parse('{"key":"v-1fb81b02","path":"/dependencies/spring/spring-x-framework-aop-source-2.html","title":"Spring进阶 - Spring AOP实现原理详解之AOP代理的创建","lang":"zh-CN","frontmatter":{"order":110,"category":["Spring"],"description":"上文我们介绍了Spring AOP原理解析的切面实现过程(将切面类的所有切面方法根据使用的注解生成对应Advice，并将Advice连同切入点匹配器和切面类等信息一并封装到Advisor)。本文在此基础上继续介绍，代理（cglib代理和JDK代理）的创建过程。 1. 引入\\r 前文主要Spring AOP原理解析的切面实现过程(加载配置，将切面类的所有切...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/dependencies/spring/spring-x-framework-aop-source-2.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Spring进阶 - Spring AOP实现原理详解之AOP代理的创建"}],["meta",{"property":"og:description","content":"上文我们介绍了Spring AOP原理解析的切面实现过程(将切面类的所有切面方法根据使用的注解生成对应Advice，并将Advice连同切入点匹配器和切面类等信息一并封装到Advisor)。本文在此基础上继续介绍，代理（cglib代理和JDK代理）的创建过程。 1. 引入\\r 前文主要Spring AOP原理解析的切面实现过程(加载配置，将切面类的所有切..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 引入","slug":"_1-引入","link":"#_1-引入","children":[]},{"level":2,"title":"2. 代理的创建","slug":"_2-代理的创建","link":"#_2-代理的创建","children":[{"level":3,"title":"2.1 获取所有的Advisor","slug":"_2-1-获取所有的advisor","link":"#_2-1-获取所有的advisor","children":[]},{"level":3,"title":"2.2 创建代理的入口方法","slug":"_2-2-创建代理的入口方法","link":"#_2-2-创建代理的入口方法","children":[]},{"level":3,"title":"2.3 依据条件创建代理(jdk或cglib)","slug":"_2-3-依据条件创建代理-jdk或cglib","link":"#_2-3-依据条件创建代理-jdk或cglib","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.6,"words":1680},"filePathRelative":"dependencies/spring/spring-x-framework-aop-source-2.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
