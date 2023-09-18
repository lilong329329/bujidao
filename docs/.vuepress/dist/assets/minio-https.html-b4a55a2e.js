const e=JSON.parse('{"key":"v-6c41023a","path":"/arch/minio/minio-https.html","title":"Minio部署 - minio配置HTTPS","lang":"zh-CN","frontmatter":{"order":530,"category":["Minio"],"description":"1. 简介 MinIO部署默认以HTTP方式对外提供服务，如果我们需要支持https 应该怎么做呢？ 主要思路就是\\r万能大法，通过nginx反向代理，将https配置在nginx侧，内部的MinIO还是使用HTTP；; \\rMinIO服务端直接配置成HTTPS；; \\r如何生成https证书：使用acme.sh生成免费的SSL证书 (https://jav...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/arch/minio/minio-https.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Minio部署 - minio配置HTTPS"}],["meta",{"property":"og:description","content":"1. 简介 MinIO部署默认以HTTP方式对外提供服务，如果我们需要支持https 应该怎么做呢？ 主要思路就是\\r万能大法，通过nginx反向代理，将https配置在nginx侧，内部的MinIO还是使用HTTP；; \\rMinIO服务端直接配置成HTTPS；; \\r如何生成https证书：使用acme.sh生成免费的SSL证书 (https://jav..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. nginx 方案","slug":"_2-nginx-方案","link":"#_2-nginx-方案","children":[{"level":3,"title":"3.1 遇到的问题","slug":"_3-1-遇到的问题","link":"#_3-1-遇到的问题","children":[]}]},{"level":2,"title":"3. MinIO服务端配置成HTTPS","slug":"_3-minio服务端配置成https","link":"#_3-minio服务端配置成https","children":[{"level":3,"title":"3.1 证书存放","slug":"_3-1-证书存放","link":"#_3-1-证书存放","children":[]},{"level":3,"title":"3.2  docker-compose 配置","slug":"_3-2-docker-compose-配置","link":"#_3-2-docker-compose-配置","children":[]},{"level":3,"title":"3.3 docker启动","slug":"_3-3-docker启动","link":"#_3-3-docker启动","children":[]}]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":2.37,"words":711},"filePathRelative":"arch/minio/minio-https.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};