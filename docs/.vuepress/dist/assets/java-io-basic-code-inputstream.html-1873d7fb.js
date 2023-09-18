const t=JSON.parse('{"key":"v-91590982","path":"/java/io/java-io-basic-code-inputstream.html","title":"Java IO - 源码: InputStream","lang":"zh-CN","frontmatter":{"order":40,"category":["Java","IO"],"description":"本文主要从JDK 11 源码角度分析InputStream。 1. InputStream 类实现关系\\r InputStream是输入字节流，具体的实现类层次结构如下： image-20220830204238728 2. InputStream 抽象类 InputStream 类重要方法设计如下： ```java // 读取下一个字节，如果没有则返回...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java/io/java-io-basic-code-inputstream.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Java IO - 源码: InputStream"}],["meta",{"property":"og:description","content":"本文主要从JDK 11 源码角度分析InputStream。 1. InputStream 类实现关系\\r InputStream是输入字节流，具体的实现类层次结构如下： image-20220830204238728 2. InputStream 抽象类 InputStream 类重要方法设计如下： ```java // 读取下一个字节，如果没有则返回..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. InputStream 类实现关系","slug":"_1-inputstream-类实现关系","link":"#_1-inputstream-类实现关系","children":[]},{"level":2,"title":"2. InputStream 抽象类","slug":"_2-inputstream-抽象类","link":"#_2-inputstream-抽象类","children":[]},{"level":2,"title":"2. 源码实现","slug":"_2-源码实现","link":"#_2-源码实现","children":[{"level":3,"title":"2.1 InputStream","slug":"_2-1-inputstream","link":"#_2-1-inputstream","children":[]},{"level":3,"title":"2.2 FilterInputStream","slug":"_2-2-filterinputstream","link":"#_2-2-filterinputstream","children":[]},{"level":3,"title":"2.3 ByteArrayInputStream","slug":"_2-3-bytearrayinputstream","link":"#_2-3-bytearrayinputstream","children":[]},{"level":3,"title":"2.4 BufferedInputStream","slug":"_2-4-bufferedinputstream","link":"#_2-4-bufferedinputstream","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":13.86,"words":4158},"filePathRelative":"java/io/java-io-basic-code-inputstream.md","localizedDate":"2023年2月20日","autoDesc":true}');export{t as data};