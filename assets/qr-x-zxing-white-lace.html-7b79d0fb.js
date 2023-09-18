const e=JSON.parse('{"key":"v-639c6e56","path":"/dependencies/qr/qr-x-zxing-white-lace.html","title":"使用zxing生成二维码去除白边","lang":"zh-CN","frontmatter":{"description":"1. 简介 我们在使用zxing生成二维码的时候，会带上一个白色边框。因业务需要不能有这个白边，一定要把这个白边去除，那么如何去除呢？ image-20220527142912892 2. 源码白边产生 我们先看看二维码生成的步骤 2.1 创建字符串 创建比特矩阵(位矩阵)的QR码编码的字符串的代码： ```java QRCodeWriter writ...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/dependencies/qr/qr-x-zxing-white-lace.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"使用zxing生成二维码去除白边"}],["meta",{"property":"og:description","content":"1. 简介 我们在使用zxing生成二维码的时候，会带上一个白色边框。因业务需要不能有这个白边，一定要把这个白边去除，那么如何去除呢？ image-20220527142912892 2. 源码白边产生 我们先看看二维码生成的步骤 2.1 创建字符串 创建比特矩阵(位矩阵)的QR码编码的字符串的代码： ```java QRCodeWriter writ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 源码白边产生","slug":"_2-源码白边产生","link":"#_2-源码白边产生","children":[{"level":3,"title":"2.1 创建字符串","slug":"_2-1-创建字符串","link":"#_2-1-创建字符串","children":[]},{"level":3,"title":"2.2 encode 方法","slug":"_2-2-encode-方法","link":"#_2-2-encode-方法","children":[]},{"level":3,"title":"2.3 renderResult 方法","slug":"_2-3-renderresult-方法","link":"#_2-3-renderresult-方法","children":[]}]},{"level":2,"title":"3. 问题原因","slug":"_3-问题原因","link":"#_3-问题原因","children":[]},{"level":2,"title":"4. 解决方案","slug":"_4-解决方案","link":"#_4-解决方案","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.41,"words":1023},"filePathRelative":"dependencies/qr/qr-x-zxing-white-lace.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
