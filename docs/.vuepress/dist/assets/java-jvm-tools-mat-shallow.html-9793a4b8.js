const e=JSON.parse('{"key":"v-d0bf4ece","path":"/java/jvm/java-jvm-tools-mat-shallow.html","title":"Shallow heap和Retained heap","lang":"zh-CN","frontmatter":{"category":["Java","JVM"],"description":"所有包含Heap Proflin 功能的工具（MAT，TPTP等）都会使用到两个名词，一个是Shallow Size，另一个是Retained Size 1 概念 1.1 Shallow Size 对象自身占用的内存大小，不包括他引用的对象 针对非数组类型的对象，它的大小就是对象与他所有的成员变量大小的总和。当然这里面还会包括一些java语言特性的数据...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./java/jvm/java-jvm-tools-mat-shallow.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Shallow heap和Retained heap"}],["meta",{"property":"og:description","content":"所有包含Heap Proflin 功能的工具（MAT，TPTP等）都会使用到两个名词，一个是Shallow Size，另一个是Retained Size 1 概念 1.1 Shallow Size 对象自身占用的内存大小，不包括他引用的对象 针对非数组类型的对象，它的大小就是对象与他所有的成员变量大小的总和。当然这里面还会包括一些java语言特性的数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1 概念","slug":"_1-概念","link":"#_1-概念","children":[{"level":3,"title":"1.1 Shallow Size","slug":"_1-1-shallow-size","link":"#_1-1-shallow-size","children":[]},{"level":3,"title":"1.2 Retained Size","slug":"_1-2-retained-size","link":"#_1-2-retained-size","children":[]}]},{"level":2,"title":"2. 看图理解Retained Size","slug":"_2-看图理解retained-size","link":"#_2-看图理解retained-size","children":[{"level":3,"title":"如果GC Roots不引用D对象？","slug":"如果gc-roots不引用d对象","link":"#如果gc-roots不引用d对象","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.4,"words":420},"filePathRelative":"java/jvm/java-jvm-tools-mat-shallow.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
