const e=JSON.parse('{"key":"v-86a79592","path":"/arch/manage-system/manage-system-config-manage.html","title":"系统参数配置功能&实现思路","lang":"zh-CN","frontmatter":{"description":"1. 简介 我们在项目部署后很多配置需要根据现场情况配置。如第三方对接的api接口地址等等。如果我们每次改动都要改动代码或重启项目，那么效率也太低了。所以我们一般会设计一个参数管理功能，来实现后台配置 2. 数据库设计 ```sql create table sys_config ( configid int(5) autoincrement comm...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/arch/manage-system/manage-system-config-manage.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"系统参数配置功能&实现思路"}],["meta",{"property":"og:description","content":"1. 简介 我们在项目部署后很多配置需要根据现场情况配置。如第三方对接的api接口地址等等。如果我们每次改动都要改动代码或重启项目，那么效率也太低了。所以我们一般会设计一个参数管理功能，来实现后台配置 2. 数据库设计 ```sql create table sys_config ( configid int(5) autoincrement comm..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 数据库设计","slug":"_2-数据库设计","link":"#_2-数据库设计","children":[]},{"level":2,"title":"3. 代码实现注意事项","slug":"_3-代码实现注意事项","link":"#_3-代码实现注意事项","children":[{"level":3,"title":"3.1 项目启动时就需要加载进缓存","slug":"_3-1-项目启动时就需要加载进缓存","link":"#_3-1-项目启动时就需要加载进缓存","children":[]},{"level":3,"title":"3.2 查找参数时，先查缓存，再查数据库，数据库查到要插入缓存","slug":"_3-2-查找参数时-先查缓存-再查数据库-数据库查到要插入缓存","link":"#_3-2-查找参数时-先查缓存-再查数据库-数据库查到要插入缓存","children":[]},{"level":3,"title":"3.3 插入和更新成功时需要更新单项缓存","slug":"_3-3-插入和更新成功时需要更新单项缓存","link":"#_3-3-插入和更新成功时需要更新单项缓存","children":[]},{"level":3,"title":"3.4 删除时记得清除缓存","slug":"_3-4-删除时记得清除缓存","link":"#_3-4-删除时记得清除缓存","children":[]},{"level":3,"title":"3.5 需要有刷新重置缓存功能","slug":"_3-5-需要有刷新重置缓存功能","link":"#_3-5-需要有刷新重置缓存功能","children":[]}]},{"level":2,"title":"4. 最终实现效果","slug":"_4-最终实现效果","link":"#_4-最终实现效果","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":2.25,"words":676},"filePathRelative":"arch/manage-system/manage-system-config-manage.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
