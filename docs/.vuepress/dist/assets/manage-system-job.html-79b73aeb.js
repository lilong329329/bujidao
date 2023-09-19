const e=JSON.parse('{"key":"v-60cbe52c","path":"/arch/manage-system/manage-system-job.html","title":"定时任务quartz-动态管理任务&实现思路","lang":"zh-CN","frontmatter":{"description":"1. 背景 1.1 回顾quartz 执行步骤 quartz定时器入门 (/dependencies/timer/quartz/quartz定时器入门.html#quartz定时器入门) 回顾我们定时器任务发起步骤 1. 实现Job接口 2. 创建Schedule 1. 创建JobDetail实例，绑定job 2. 构建Trigger定时任务 3. 调...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./arch/manage-system/manage-system-job.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"定时任务quartz-动态管理任务&实现思路"}],["meta",{"property":"og:description","content":"1. 背景 1.1 回顾quartz 执行步骤 quartz定时器入门 (/dependencies/timer/quartz/quartz定时器入门.html#quartz定时器入门) 回顾我们定时器任务发起步骤 1. 实现Job接口 2. 创建Schedule 1. 创建JobDetail实例，绑定job 2. 构建Trigger定时任务 3. 调..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[{"level":3,"title":"1.1 回顾quartz 执行步骤","slug":"_1-1-回顾quartz-执行步骤","link":"#_1-1-回顾quartz-执行步骤","children":[]},{"level":3,"title":"1.2 面临的问题","slug":"_1-2-面临的问题","link":"#_1-2-面临的问题","children":[]}]},{"level":2,"title":"2. 动态管理设计思路","slug":"_2-动态管理设计思路","link":"#_2-动态管理设计思路","children":[]},{"level":2,"title":"3. 表结构设计","slug":"_3-表结构设计","link":"#_3-表结构设计","children":[{"level":3,"title":"3.1 定时任务调度表 sys_job 表设计","slug":"_3-1-定时任务调度表-sys-job-表设计","link":"#_3-1-定时任务调度表-sys-job-表设计","children":[]},{"level":3,"title":"3.2 定时任务调度日志表 sys_job_log 表设计","slug":"_3-2-定时任务调度日志表-sys-job-log-表设计","link":"#_3-2-定时任务调度日志表-sys-job-log-表设计","children":[]}]},{"level":2,"title":"4. 代码实现","slug":"_4-代码实现","link":"#_4-代码实现","children":[{"level":3,"title":"4.1 新增定时任务","slug":"_4-1-新增定时任务","link":"#_4-1-新增定时任务","children":[]},{"level":3,"title":"4.2 更新定时任务","slug":"_4-2-更新定时任务","link":"#_4-2-更新定时任务","children":[]},{"level":3,"title":"4.3 项目启动 初始化定时器","slug":"_4-3-项目启动-初始化定时器","link":"#_4-3-项目启动-初始化定时器","children":[]},{"level":3,"title":"4.4  删除定时任务","slug":"_4-4-删除定时任务","link":"#_4-4-删除定时任务","children":[]},{"level":3,"title":"4.5 定时任务的暂停与恢复","slug":"_4-5-定时任务的暂停与恢复","link":"#_4-5-定时任务的暂停与恢复","children":[]}]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":7.56,"words":2269},"filePathRelative":"arch/manage-system/manage-system-job.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
