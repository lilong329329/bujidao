const e=JSON.parse('{"key":"v-666366f1","path":"/deploy/jenkins/jenkins-x-deploy-action.html","title":"Jenkins部署与实战","lang":"zh-CN","frontmatter":{"order":20,"category":["kenkins"],"description":"1. 安装Jenkins 1.1 docker 中安装Jenkins ``` docker run -p 18080:8080 -p 50000:5000 --name jenkins \\\\ -u root \\\\ -v /home/jenkins/jenkinshome:/var/jenkinshome \\\\ -d jenkins/jenkins:2.357...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/deploy/jenkins/jenkins-x-deploy-action.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Jenkins部署与实战"}],["meta",{"property":"og:description","content":"1. 安装Jenkins 1.1 docker 中安装Jenkins ``` docker run -p 18080:8080 -p 50000:5000 --name jenkins \\\\ -u root \\\\ -v /home/jenkins/jenkinshome:/var/jenkinshome \\\\ -d jenkins/jenkins:2.357..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-09T08:47:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-06-09T08:47:01.000Z"}]]},"headers":[{"level":2,"title":"1. 安装Jenkins","slug":"_1-安装jenkins","link":"#_1-安装jenkins","children":[{"level":3,"title":"1.1 docker 中安装Jenkins","slug":"_1-1-docker-中安装jenkins","link":"#_1-1-docker-中安装jenkins","children":[]},{"level":3,"title":"1.2 登录jenkins","slug":"_1-2-登录jenkins","link":"#_1-2-登录jenkins","children":[]},{"level":3,"title":"1.3 安装插件","slug":"_1-3-安装插件","link":"#_1-3-安装插件","children":[]},{"level":3,"title":"1.4 创建管理员账号","slug":"_1-4-创建管理员账号","link":"#_1-4-创建管理员账号","children":[]},{"level":3,"title":"1.5 进行实例配置，配置Jenkins的URL","slug":"_1-5-进行实例配置-配置jenkins的url","link":"#_1-5-进行实例配置-配置jenkins的url","children":[]},{"level":3,"title":"1.6 配置时间（可选）","slug":"_1-6-配置时间-可选","link":"#_1-6-配置时间-可选","children":[]}]},{"level":2,"title":"2. 凭据管理","slug":"_2-凭据管理","link":"#_2-凭据管理","children":[{"level":3,"title":"2.1 凭据的作用","slug":"_2-1-凭据的作用","link":"#_2-1-凭据的作用","children":[]},{"level":3,"title":"2.2 添加全局凭据入口","slug":"_2-2-添加全局凭据入口","link":"#_2-2-添加全局凭据入口","children":[]},{"level":3,"title":"2.3 全局凭据的添加","slug":"_2-3-全局凭据的添加","link":"#_2-3-全局凭据的添加","children":[]}]},{"level":2,"title":"3. 安装maven","slug":"_3-安装maven","link":"#_3-安装maven","children":[{"level":3,"title":"3.1 方案1：通过全局配置的自动安装（不推荐）","slug":"_3-1-方案1-通过全局配置的自动安装-不推荐","link":"#_3-1-方案1-通过全局配置的自动安装-不推荐","children":[]},{"level":3,"title":"3.2 方案2：在jenkins服务器中安装maven","slug":"_3-2-方案2-在jenkins服务器中安装maven","link":"#_3-2-方案2-在jenkins服务器中安装maven","children":[]}]},{"level":2,"title":"4.  安装指定版本 Node和npm","slug":"_4-安装指定版本-node和npm","link":"#_4-安装指定版本-node和npm","children":[{"level":3,"title":"4.1 安装node 插件","slug":"_4-1-安装node-插件","link":"#_4-1-安装node-插件","children":[]},{"level":3,"title":"4.2 配置node环境","slug":"_4-2-配置node环境","link":"#_4-2-配置node环境","children":[]},{"level":3,"title":"4.3 触发自动安装","slug":"_4-3-触发自动安装","link":"#_4-3-触发自动安装","children":[]}]},{"level":2,"title":"5. Docker部署","slug":"_5-docker部署","link":"#_5-docker部署","children":[{"level":3,"title":"5.1 插件管理中安装docker","slug":"_5-1-插件管理中安装docker","link":"#_5-1-插件管理中安装docker","children":[]},{"level":3,"title":"5.2 docker 开启端口供外部程序访问","slug":"_5-2-docker-开启端口供外部程序访问","link":"#_5-2-docker-开启端口供外部程序访问","children":[]},{"level":3,"title":"5.3 配置docker集群","slug":"_5-3-配置docker集群","link":"#_5-3-配置docker集群","children":[]},{"level":3,"title":"5.4 项目中添加docker构建步骤","slug":"_5-4-项目中添加docker构建步骤","link":"#_5-4-项目中添加docker构建步骤","children":[]},{"level":3,"title":"5.5 部署日志","slug":"_5-5-部署日志","link":"#_5-5-部署日志","children":[]}]},{"level":2,"title":"6. SSH上传文件到服务器","slug":"_6-ssh上传文件到服务器","link":"#_6-ssh上传文件到服务器","children":[{"level":3,"title":"6.1 安装插件 Publish Over SSH","slug":"_6-1-安装插件-publish-over-ssh","link":"#_6-1-安装插件-publish-over-ssh","children":[]},{"level":3,"title":"6.2 配置SSH服务器信息","slug":"_6-2-配置ssh服务器信息","link":"#_6-2-配置ssh服务器信息","children":[]},{"level":3,"title":"6.3 项目部署配置","slug":"_6-3-项目部署配置","link":"#_6-3-项目部署配置","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1686300421000,"updatedTime":1686300421000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.71,"words":1113},"filePathRelative":"deploy/jenkins/jenkins-x-deploy-action.md","localizedDate":"2023年6月9日","autoDesc":true}');export{e as data};
