const e=JSON.parse('{"key":"v-4fec56d2","path":"/deploy/jenkins/jenkins-x-action-springboot.html","title":"Jenkins打包部署SpringBoot应用","lang":"zh-CN","frontmatter":{"description":"跟原文的主要区别是，他用docker部署，我是传统的文件上传形式，命令执行 1. 准备项目\\r 这里我们使用mall-learning项目中的mall-tiny-jenkins模块代码来演示下如何使Jenkins一键打包部署SpringBoot应用。\\rmall-tiny-jenkins项目源码地址：github.com/macrozheng/… (htt...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./deploy/jenkins/jenkins-x-action-springboot.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Jenkins打包部署SpringBoot应用"}],["meta",{"property":"og:description","content":"跟原文的主要区别是，他用docker部署，我是传统的文件上传形式，命令执行 1. 准备项目\\r 这里我们使用mall-learning项目中的mall-tiny-jenkins模块代码来演示下如何使Jenkins一键打包部署SpringBoot应用。\\rmall-tiny-jenkins项目源码地址：github.com/macrozheng/… (htt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 准备项目","slug":"_1-准备项目","link":"#_1-准备项目","children":[]},{"level":2,"title":"2. 补充插件 Publish Over SSH","slug":"_2-补充插件-publish-over-ssh","link":"#_2-补充插件-publish-over-ssh","children":[{"level":3,"title":"2.1 背景","slug":"_2-1-背景","link":"#_2-1-背景","children":[]},{"level":3,"title":"2.2 解决","slug":"_2-2-解决","link":"#_2-2-解决","children":[]},{"level":3,"title":"2.3 配置 SSH Servers","slug":"_2-3-配置-ssh-servers","link":"#_2-3-配置-ssh-servers","children":[]},{"level":3,"title":"2.4  测试连接","slug":"_2-4-测试连接","link":"#_2-4-测试连接","children":[]}]},{"level":2,"title":"3. 脚本设置","slug":"_3-脚本设置","link":"#_3-脚本设置","children":[]},{"level":2,"title":"4. 在Jenkins中创建执行任务","slug":"_4-在jenkins中创建执行任务","link":"#_4-在jenkins中创建执行任务","children":[{"level":3,"title":"4.1 创建新任务","slug":"_4-1-创建新任务","link":"#_4-1-创建新任务","children":[]},{"level":3,"title":"4.2 配置仓库地址","slug":"_4-2-配置仓库地址","link":"#_4-2-配置仓库地址","children":[]},{"level":3,"title":"4.3 构建打包","slug":"_4-3-构建打包","link":"#_4-3-构建打包","children":[]},{"level":3,"title":"4.4 构建后续步骤（将文件发送到服务端）","slug":"_4-4-构建后续步骤-将文件发送到服务端","link":"#_4-4-构建后续步骤-将文件发送到服务端","children":[]},{"level":3,"title":"4.5 构建环境（构建完后执行）","slug":"_4-5-构建环境-构建完后执行","link":"#_4-5-构建环境-构建完后执行","children":[]},{"level":3,"title":"4.6 执行任务","slug":"_4-6-执行任务","link":"#_4-6-执行任务","children":[]},{"level":3,"title":"4.7 查看控制台","slug":"_4-7-查看控制台","link":"#_4-7-查看控制台","children":[]},{"level":3,"title":"4.8 查看项目效果","slug":"_4-8-查看项目效果","link":"#_4-8-查看项目效果","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.42,"words":1026},"filePathRelative":"deploy/jenkins/jenkins-x-action-springboot.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
