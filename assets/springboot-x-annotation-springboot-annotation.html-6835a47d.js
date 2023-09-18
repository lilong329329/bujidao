const e=JSON.parse('{"key":"v-1576c1c1","path":"/dependencies/spring-boot/springboot-x-annotation-springboot-annotation.html","title":"SpringBoot入门  -  Spring/SpringBoot常用注解","lang":"zh-CN","frontmatter":{"order":20,"category":["Spring","SpringBoot"],"description":"1.SpringBoot相关 1.1 @SpringBootApplication 标识这是一个 Spring Boot 应用，用来开启 Spring Boot 的各项能力。 这个注解是 Spring Boot 项目的基石，创建 SpringBoot 项目之后会默认在主类加上。 ```java SpringBootApplication public ...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/dependencies/spring-boot/springboot-x-annotation-springboot-annotation.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"SpringBoot入门  -  Spring/SpringBoot常用注解"}],["meta",{"property":"og:description","content":"1.SpringBoot相关 1.1 @SpringBootApplication 标识这是一个 Spring Boot 应用，用来开启 Spring Boot 的各项能力。 这个注解是 Spring Boot 项目的基石，创建 SpringBoot 项目之后会默认在主类加上。 ```java SpringBootApplication public ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1.SpringBoot相关","slug":"_1-springboot相关","link":"#_1-springboot相关","children":[{"level":3,"title":"1.1 @SpringBootApplication","slug":"_1-1-springbootapplication","link":"#_1-1-springbootapplication","children":[]},{"level":3,"title":"1.2 @EnableAutoConfiguration","slug":"_1-2-enableautoconfiguration","link":"#_1-2-enableautoconfiguration","children":[]},{"level":3,"title":"1.3 @SpringBootConfiguration注解","slug":"_1-3-springbootconfiguration注解","link":"#_1-3-springbootconfiguration注解","children":[]},{"level":3,"title":"1.4 @EnableConfigurationProperties","slug":"_1-4-enableconfigurationproperties","link":"#_1-4-enableconfigurationproperties","children":[]},{"level":3,"title":"1.5 @Import","slug":"_1-5-import","link":"#_1-5-import","children":[]},{"level":3,"title":"1.6 @Conditional 及其相关","slug":"_1-6-conditional-及其相关","link":"#_1-6-conditional-及其相关","children":[]}]},{"level":2,"title":"2. Spring Bean 相关","slug":"_2-spring-bean-相关","link":"#_2-spring-bean-相关","children":[{"level":3,"title":"2.1. @Autowired","slug":"_2-1-autowired","link":"#_2-1-autowired","children":[]},{"level":3,"title":"2.2. @Component,@Repository,@Service, @Controller","slug":"_2-2-component-repository-service-controller","link":"#_2-2-component-repository-service-controller","children":[]},{"level":3,"title":"2.3. @RestController","slug":"_2-3-restcontroller","link":"#_2-3-restcontroller","children":[]},{"level":3,"title":"2.4. @Scope","slug":"_2-4-scope","link":"#_2-4-scope","children":[]},{"level":3,"title":"2.5. @Configuration","slug":"_2-5-configuration","link":"#_2-5-configuration","children":[]}]},{"level":2,"title":"3. 处理常见的 HTTP 请求类型","slug":"_3-处理常见的-http-请求类型","link":"#_3-处理常见的-http-请求类型","children":[{"level":3,"title":"3.1. GET 请求","slug":"_3-1-get-请求","link":"#_3-1-get-请求","children":[]},{"level":3,"title":"3.2. POST 请求","slug":"_3-2-post-请求","link":"#_3-2-post-请求","children":[]},{"level":3,"title":"3.3. PUT 请求","slug":"_3-3-put-请求","link":"#_3-3-put-请求","children":[]},{"level":3,"title":"3.4. DELETE 请求","slug":"_3-4-delete-请求","link":"#_3-4-delete-请求","children":[]},{"level":3,"title":"3.5. PATCH 请求","slug":"_3-5-patch-请求","link":"#_3-5-patch-请求","children":[]}]},{"level":2,"title":"4. 前后端传值","slug":"_4-前后端传值","link":"#_4-前后端传值","children":[{"level":3,"title":"4.1. @PathVariable 和 @RequestParam","slug":"_4-1-pathvariable-和-requestparam","link":"#_4-1-pathvariable-和-requestparam","children":[]},{"level":3,"title":"4.2. @RequestBody","slug":"_4-2-requestbody","link":"#_4-2-requestbody","children":[]}]},{"level":2,"title":"5. 读取配置信息","slug":"_5-读取配置信息","link":"#_5-读取配置信息","children":[{"level":3,"title":"5.1. @Value(常用)","slug":"_5-1-value-常用","link":"#_5-1-value-常用","children":[]},{"level":3,"title":"5.2. @ConfigurationProperties(常用)","slug":"_5-2-configurationproperties-常用","link":"#_5-2-configurationproperties-常用","children":[]},{"level":3,"title":"5.3. @PropertySource（不常用）","slug":"_5-3-propertysource-不常用","link":"#_5-3-propertysource-不常用","children":[]}]},{"level":2,"title":"6. 参数校验","slug":"_6-参数校验","link":"#_6-参数校验","children":[{"level":3,"title":"6.1. 一些常用的字段验证的注解","slug":"_6-1-一些常用的字段验证的注解","link":"#_6-1-一些常用的字段验证的注解","children":[]},{"level":3,"title":"6.2. 验证请求体(RequestBody)","slug":"_6-2-验证请求体-requestbody","link":"#_6-2-验证请求体-requestbody","children":[]},{"level":3,"title":"6.3. 验证请求参数(Path Variables 和 Request Parameters)","slug":"_6-3-验证请求参数-path-variables-和-request-parameters","link":"#_6-3-验证请求参数-path-variables-和-request-parameters","children":[]}]},{"level":2,"title":"7. 全局处理 Controller 层异常","slug":"_7-全局处理-controller-层异常","link":"#_7-全局处理-controller-层异常","children":[]},{"level":2,"title":"8. JPA 相关","slug":"_8-jpa-相关","link":"#_8-jpa-相关","children":[{"level":3,"title":"8.1. 创建表","slug":"_8-1-创建表","link":"#_8-1-创建表","children":[]},{"level":3,"title":"8.2. 创建主键","slug":"_8-2-创建主键","link":"#_8-2-创建主键","children":[]},{"level":3,"title":"8.3. 设置字段类型","slug":"_8-3-设置字段类型","link":"#_8-3-设置字段类型","children":[]},{"level":3,"title":"8.4. 指定不持久化特定字段","slug":"_8-4-指定不持久化特定字段","link":"#_8-4-指定不持久化特定字段","children":[]},{"level":3,"title":"8.5. 声明大字段","slug":"_8-5-声明大字段","link":"#_8-5-声明大字段","children":[]},{"level":3,"title":"8.6. 创建枚举类型的字段","slug":"_8-6-创建枚举类型的字段","link":"#_8-6-创建枚举类型的字段","children":[]},{"level":3,"title":"8.7. 增加审计功能","slug":"_8-7-增加审计功能","link":"#_8-7-增加审计功能","children":[]},{"level":3,"title":"8.8. 删除/修改数据","slug":"_8-8-删除-修改数据","link":"#_8-8-删除-修改数据","children":[]},{"level":3,"title":"8.9. 关联关系","slug":"_8-9-关联关系","link":"#_8-9-关联关系","children":[]}]},{"level":2,"title":"9. 事务 @Transactional","slug":"_9-事务-transactional","link":"#_9-事务-transactional","children":[]},{"level":2,"title":"10. json 数据处理","slug":"_10-json-数据处理","link":"#_10-json-数据处理","children":[{"level":3,"title":"10.1. 过滤 json 数据","slug":"_10-1-过滤-json-数据","link":"#_10-1-过滤-json-数据","children":[]},{"level":3,"title":"10.2. 格式化 json 数据","slug":"_10-2-格式化-json-数据","link":"#_10-2-格式化-json-数据","children":[]},{"level":3,"title":"10.3. 扁平化对象","slug":"_10-3-扁平化对象","link":"#_10-3-扁平化对象","children":[]}]},{"level":2,"title":"11. 测试相关","slug":"_11-测试相关","link":"#_11-测试相关","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":19.37,"words":5812},"filePathRelative":"dependencies/spring-boot/springboot-x-annotation-springboot-annotation.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
