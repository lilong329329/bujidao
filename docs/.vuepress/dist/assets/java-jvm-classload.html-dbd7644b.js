const e=JSON.parse('{"key":"v-2e496290","path":"/java/jvm/java-jvm-classload.html","title":"JVM 基础 - Java 类加载机制","lang":"zh-CN","frontmatter":{"order":40,"category":["Java","JVM"],"description":"1. 类的生命周期 其中类加载的过程包括了加载、`验证、准备、解析、初始化五个阶段。在这五个阶段中，加载、验证、准备和初始化这四个阶段发生的顺序是确定的，而解析阶段则不一定，它在某些情况下可以在初始化阶段之后开始，这是为了支持Java语言的运行时绑定(也称为动态绑定或晚期绑定)。另外注意这里的几个阶段是按顺序开始，而不是按顺序进行或完成，因为这些阶段通...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./java/jvm/java-jvm-classload.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"JVM 基础 - Java 类加载机制"}],["meta",{"property":"og:description","content":"1. 类的生命周期 其中类加载的过程包括了加载、`验证、准备、解析、初始化五个阶段。在这五个阶段中，加载、验证、准备和初始化这四个阶段发生的顺序是确定的，而解析阶段则不一定，它在某些情况下可以在初始化阶段之后开始，这是为了支持Java语言的运行时绑定(也称为动态绑定或晚期绑定)。另外注意这里的几个阶段是按顺序开始，而不是按顺序进行或完成，因为这些阶段通..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 类的生命周期","slug":"_1-类的生命周期","link":"#_1-类的生命周期","children":[{"level":3,"title":"1.1 类的加载: 查找并加载类的二进制数据","slug":"_1-1-类的加载-查找并加载类的二进制数据","link":"#_1-1-类的加载-查找并加载类的二进制数据","children":[]},{"level":3,"title":"1.2 连接","slug":"_1-2-连接","link":"#_1-2-连接","children":[]},{"level":3,"title":"1.3 初始化","slug":"_1-3-初始化","link":"#_1-3-初始化","children":[]},{"level":3,"title":"1.4 使用","slug":"_1-4-使用","link":"#_1-4-使用","children":[]},{"level":3,"title":"1.5 卸载","slug":"_1-5-卸载","link":"#_1-5-卸载","children":[]}]},{"level":2,"title":"2. 类加载器， JVM类加载机制","slug":"_2-类加载器-jvm类加载机制","link":"#_2-类加载器-jvm类加载机制","children":[{"level":3,"title":"2.1 类加载器的层次","slug":"_2-1-类加载器的层次","link":"#_2-1-类加载器的层次","children":[]},{"level":3,"title":"2.2 寻找类加载器","slug":"_2-2-寻找类加载器","link":"#_2-2-寻找类加载器","children":[]},{"level":3,"title":"2.3 类的加载","slug":"_2-3-类的加载","link":"#_2-3-类的加载","children":[]}]},{"level":2,"title":"3. JVM类加载机制","slug":"_3-jvm类加载机制","link":"#_3-jvm类加载机制","children":[]},{"level":2,"title":"4. 自定义类加载器","slug":"_4-自定义类加载器","link":"#_4-自定义类加载器","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":15.56,"words":4667},"filePathRelative":"java/jvm/java-jvm-classload.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
