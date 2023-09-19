const e=JSON.parse('{"key":"v-c7d751ac","path":"/dependencies/spring/spring-x-framework-springmvc-source-2.html","title":"Spring进阶 - SpringMVC实现原理之DispatcherServlet处理请求的过程","lang":"zh-CN","frontmatter":{"order":170,"category":["Spring"],"description":"前文我们有了IOC的源码基础以及SpringMVC的基础，我们便可以进一步深入理解SpringMVC主要实现原理，包含DispatcherServlet的初始化过程和DispatcherServlet处理请求的过程的源码解析。本文是第二篇：DispatcherServlet处理请求的过程的源码解析 1. DispatcherServlet处理请求的过程...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./dependencies/spring/spring-x-framework-springmvc-source-2.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Spring进阶 - SpringMVC实现原理之DispatcherServlet处理请求的过程"}],["meta",{"property":"og:description","content":"前文我们有了IOC的源码基础以及SpringMVC的基础，我们便可以进一步深入理解SpringMVC主要实现原理，包含DispatcherServlet的初始化过程和DispatcherServlet处理请求的过程的源码解析。本文是第二篇：DispatcherServlet处理请求的过程的源码解析 1. DispatcherServlet处理请求的过程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. DispatcherServlet处理请求的过程？","slug":"_1-dispatcherservlet处理请求的过程","link":"#_1-dispatcherservlet处理请求的过程","children":[{"level":3,"title":"1.1 回顾整理处理流程","slug":"_1-1-回顾整理处理流程","link":"#_1-1-回顾整理处理流程","children":[]},{"level":3,"title":"1.2 doGet入口","slug":"_1-2-doget入口","link":"#_1-2-doget入口","children":[]},{"level":3,"title":"1.3 请求分发","slug":"_1-3-请求分发","link":"#_1-3-请求分发","children":[]},{"level":3,"title":"1.4 映射和适配器处理","slug":"_1-4-映射和适配器处理","link":"#_1-4-映射和适配器处理","children":[]},{"level":3,"title":"1.5  视图渲染","slug":"_1-5-视图渲染","link":"#_1-5-视图渲染","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":7.69,"words":2307},"filePathRelative":"dependencies/spring/spring-x-framework-springmvc-source-2.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
