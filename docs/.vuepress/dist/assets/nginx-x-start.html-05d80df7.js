const e=JSON.parse('{"key":"v-1d48cc23","path":"/deploy/nginx/nginx-x-start.html","title":"Nginx 入门实战","lang":"zh-CN","frontmatter":{"order":20,"category":["Nginx"],"description":"简介\\r 什么是nginx Nginx是一个高性能的HTTP和反向代理web服务器\\r 安装要求\\rlinux内核2.6及以上; ```shell uname -a ```\\r关闭防火墙; ```shell # 临时关闭防火墙 systemctl stop firewalld # 永久关闭防火墙 systemctl disable firewalld # 查看...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/deploy/nginx/nginx-x-start.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Nginx 入门实战"}],["meta",{"property":"og:description","content":"简介\\r 什么是nginx Nginx是一个高性能的HTTP和反向代理web服务器\\r 安装要求\\rlinux内核2.6及以上; ```shell uname -a ```\\r关闭防火墙; ```shell # 临时关闭防火墙 systemctl stop firewalld # 永久关闭防火墙 systemctl disable firewalld # 查看..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"安装nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":3,"title":"配置系统服务","slug":"配置系统服务","link":"#配置系统服务","children":[]},{"level":3,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]}]},{"level":2,"title":"nginx操作","slug":"nginx操作","link":"#nginx操作","children":[{"level":3,"title":"目录结构介绍","slug":"目录结构介绍","link":"#目录结构介绍","children":[]},{"level":3,"title":"kill信号操作","slug":"kill信号操作","link":"#kill信号操作","children":[]},{"level":3,"title":"nginx命令","slug":"nginx命令","link":"#nginx命令","children":[]}]},{"level":2,"title":"配置文件详解","slug":"配置文件详解","link":"#配置文件详解","children":[{"level":3,"title":"全局块","slug":"全局块","link":"#全局块","children":[]},{"level":3,"title":"events块","slug":"events块","link":"#events块","children":[]},{"level":3,"title":"http块","slug":"http块","link":"#http块","children":[]},{"level":3,"title":"server块","slug":"server块","link":"#server块","children":[]},{"level":3,"title":"location块","slug":"location块","link":"#location块","children":[]},{"level":3,"title":"解决跨域","slug":"解决跨域","link":"#解决跨域","children":[]},{"level":3,"title":"rewrite模块详解","slug":"rewrite模块详解","link":"#rewrite模块详解","children":[]},{"level":3,"title":"set","slug":"set","link":"#set","children":[]},{"level":3,"title":"if","slug":"if","link":"#if","children":[]},{"level":3,"title":"break","slug":"break","link":"#break","children":[]},{"level":3,"title":"return","slug":"return","link":"#return","children":[]},{"level":3,"title":"rewrite","slug":"rewrite","link":"#rewrite","children":[]},{"level":3,"title":"rewrite_log","slug":"rewrite-log","link":"#rewrite-log","children":[]}]},{"level":2,"title":"反向代理","slug":"反向代理","link":"#反向代理","children":[{"level":3,"title":"正向代理","slug":"正向代理","link":"#正向代理","children":[]},{"level":3,"title":"反向代理","slug":"反向代理-1","link":"#反向代理-1","children":[]},{"level":3,"title":"proxy_set_header","slug":"proxy-set-header","link":"#proxy-set-header","children":[]},{"level":3,"title":"proxy_redirect","slug":"proxy-redirect","link":"#proxy-redirect","children":[]}]},{"level":2,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[{"level":3,"title":"upstream","slug":"upstream","link":"#upstream","children":[]},{"level":3,"title":"负载均衡状态","slug":"负载均衡状态","link":"#负载均衡状态","children":[]},{"level":3,"title":"负载均衡策略","slug":"负载均衡策略","link":"#负载均衡策略","children":[]},{"level":3,"title":"负载均衡之fair策略","slug":"负载均衡之fair策略","link":"#负载均衡之fair策略","children":[]}]},{"level":2,"title":"配置https","slug":"配置https","link":"#配置https","children":[{"level":3,"title":"申请阿里云证书","slug":"申请阿里云证书","link":"#申请阿里云证书","children":[]},{"level":3,"title":"安装ssl模块","slug":"安装ssl模块","link":"#安装ssl模块","children":[]},{"level":3,"title":"进行配置","slug":"进行配置","link":"#进行配置","children":[]}]},{"level":2,"title":"部署前端项目","slug":"部署前端项目","link":"#部署前端项目","children":[{"level":3,"title":"普通部署","slug":"普通部署","link":"#普通部署","children":[]},{"level":3,"title":"整合Jenkins、Docker自动化部署","slug":"整合jenkins、docker自动化部署","link":"#整合jenkins、docker自动化部署","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":10.89,"words":3267},"filePathRelative":"deploy/nginx/nginx-x-start.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
