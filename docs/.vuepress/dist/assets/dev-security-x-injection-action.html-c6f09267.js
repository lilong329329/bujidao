const e=JSON.parse(`{"key":"v-08036832","path":"/develop/security/dev-security-x-injection-action.html","title":"开发安全 - 防止SQL注入攻击实战","lang":"zh-CN","frontmatter":{"order":11,"category":["开发","安全"],"description":"1. 简介 所谓 SQL 注入，就是通过将 SQL 命令插入应用程序的 http 请求中，并在服务器端被接收后用于参与数据库操作，最终达到欺骗服务器执行恶意的 SQL 命令的效果。 1.1 示例 最经典的sql 注入 \`\`\`sql // 重点看这条SQL，密码输入: ' OR '1'='1时，等同于不需要密码 String sql = \\"SELECT ...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./develop/security/dev-security-x-injection-action.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"开发安全 - 防止SQL注入攻击实战"}],["meta",{"property":"og:description","content":"1. 简介 所谓 SQL 注入，就是通过将 SQL 命令插入应用程序的 http 请求中，并在服务器端被接收后用于参与数据库操作，最终达到欺骗服务器执行恶意的 SQL 命令的效果。 1.1 示例 最经典的sql 注入 \`\`\`sql // 重点看这条SQL，密码输入: ' OR '1'='1时，等同于不需要密码 String sql = \\"SELECT ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 示例","slug":"_1-1-示例","link":"#_1-1-示例","children":[]}]},{"level":2,"title":"2. 解决思路","slug":"_2-解决思路","link":"#_2-解决思路","children":[]},{"level":2,"title":"3. 使用预编译处理输入参数","slug":"_3-使用预编译处理输入参数","link":"#_3-使用预编译处理输入参数","children":[]},{"level":2,"title":"4. 输入验证","slug":"_4-输入验证","link":"#_4-输入验证","children":[{"level":3,"title":"4.1 请求参数处理","slug":"_4-1-请求参数处理","link":"#_4-1-请求参数处理","children":[]},{"level":3,"title":"4.2 对输入验证","slug":"_4-2-对输入验证","link":"#_4-2-对输入验证","children":[]}]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.41,"words":424},"filePathRelative":"develop/security/dev-security-x-injection-action.md","localizedDate":"2023年2月20日","autoDesc":true}`);export{e as data};
