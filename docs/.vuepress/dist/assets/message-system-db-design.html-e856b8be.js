const e=JSON.parse('{"key":"v-b7ffaaea","path":"/arch/messagesystem/message-system-db-design.html","title":"消息中心数据库设计","lang":"zh-CN","frontmatter":{"description":"1. 背景 消息中心是大部分系统都有的功能，如何设计一个合理的消息系统呢？ 需求：\\r每个用户收到消息都应该知道，该消息的已读未读状态; 2. 数据库设计 2.1 消息表 ```sql CREATE TABLE TSYSNOTIFY( ID BIGINT(19) NOT NULL AUTO_INCREMENT COMMENT \'主键\' , TYPE IN...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./arch/messagesystem/message-system-db-design.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"消息中心数据库设计"}],["meta",{"property":"og:description","content":"1. 背景 消息中心是大部分系统都有的功能，如何设计一个合理的消息系统呢？ 需求：\\r每个用户收到消息都应该知道，该消息的已读未读状态; 2. 数据库设计 2.1 消息表 ```sql CREATE TABLE TSYSNOTIFY( ID BIGINT(19) NOT NULL AUTO_INCREMENT COMMENT \'主键\' , TYPE IN..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 数据库设计","slug":"_2-数据库设计","link":"#_2-数据库设计","children":[{"level":3,"title":"2.1 消息表","slug":"_2-1-消息表","link":"#_2-1-消息表","children":[]},{"level":3,"title":"2.2 用户消息表","slug":"_2-2-用户消息表","link":"#_2-2-用户消息表","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.2,"words":359},"filePathRelative":"arch/messagesystem/message-system-db-design.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
