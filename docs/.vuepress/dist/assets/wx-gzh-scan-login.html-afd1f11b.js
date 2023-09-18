const e=JSON.parse('{"key":"v-7057a98b","path":"/language/weixin/wx-gzh-scan-login.html","title":"微信公众号-网页授权-微信扫码登录实现","lang":"zh-CN","frontmatter":{"description":"文章基于上一篇配置，请先集成配置 1.简介 为了满足用户渠道推广分析和用户帐号绑定等场景的需要，公众平台提供了生成带参数二维码的接口。使用该接口可以获得多个带不同场景值的二维码，用户扫描后，公众号可以接收到事件推送。 1.1 两种二维码类型 1. 临时二维码，是有过期时间的，最长可以设置为在二维码生成后的30天（即2592000秒）后过期，但能够生成较...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/language/weixin/wx-gzh-scan-login.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"微信公众号-网页授权-微信扫码登录实现"}],["meta",{"property":"og:description","content":"文章基于上一篇配置，请先集成配置 1.简介 为了满足用户渠道推广分析和用户帐号绑定等场景的需要，公众平台提供了生成带参数二维码的接口。使用该接口可以获得多个带不同场景值的二维码，用户扫描后，公众号可以接收到事件推送。 1.1 两种二维码类型 1. 临时二维码，是有过期时间的，最长可以设置为在二维码生成后的30天（即2592000秒）后过期，但能够生成较..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1.简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 两种二维码类型","slug":"_1-1-两种二维码类型","link":"#_1-1-两种二维码类型","children":[]},{"level":3,"title":"1.2 扫码推送的两种事件","slug":"_1-2-扫码推送的两种事件","link":"#_1-2-扫码推送的两种事件","children":[]},{"level":3,"title":"1.3 集成思路","slug":"_1-3-集成思路","link":"#_1-3-集成思路","children":[]}]},{"level":2,"title":"2. 代码实现","slug":"_2-代码实现","link":"#_2-代码实现","children":[{"level":3,"title":"2.1 WxAuthController 获取微信授权认证二维码","slug":"_2-1-wxauthcontroller-获取微信授权认证二维码","link":"#_2-1-wxauthcontroller-获取微信授权认证二维码","children":[]},{"level":3,"title":"2.2 WxAuthServiceImpl","slug":"_2-2-wxauthserviceimpl","link":"#_2-2-wxauthserviceimpl","children":[]},{"level":3,"title":"2.3 WxController","slug":"_2-3-wxcontroller","link":"#_2-3-wxcontroller","children":[]},{"level":3,"title":"2.4 WxMpVerifyController(正式环境校验)","slug":"_2-4-wxmpverifycontroller-正式环境校验","link":"#_2-4-wxmpverifycontroller-正式环境校验","children":[]}]},{"level":2,"title":"3. 测试","slug":"_3-测试","link":"#_3-测试","children":[]},{"level":2,"title":"4. 遇到问题","slug":"_4-遇到问题","link":"#_4-遇到问题","children":[{"level":3,"title":"4.1 扫码成功后无法收到微信信息","slug":"_4-1-扫码成功后无法收到微信信息","link":"#_4-1-扫码成功后无法收到微信信息","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":4.85,"words":1456},"filePathRelative":"language/weixin/wx-gzh-scan-login.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};