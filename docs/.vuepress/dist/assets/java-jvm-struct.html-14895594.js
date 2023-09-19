const e=JSON.parse('{"key":"v-05ae10ef","path":"/java/jvm/java-jvm-struct.html","title":"JVM 基础 - JVM 内存结构","lang":"zh-CN","frontmatter":{"order":50,"category":["Java","JVM"],"description":"本文主要对JVM 内存结构进行讲解，注意不要和Java内存模型混淆了。 image-20220820213459433 0. 运行时数据区 内存是非常重要的系统资源，是硬盘和 CPU 的中间仓库及桥梁，承载着操作系统和应用程序的实时运行。JVM 内存布局规定了 Java 在运行过程中内存申请、分配、管理的策略，保证了 JVM 的高效稳定运行。不同的 J...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./java/jvm/java-jvm-struct.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"JVM 基础 - JVM 内存结构"}],["meta",{"property":"og:description","content":"本文主要对JVM 内存结构进行讲解，注意不要和Java内存模型混淆了。 image-20220820213459433 0. 运行时数据区 内存是非常重要的系统资源，是硬盘和 CPU 的中间仓库及桥梁，承载着操作系统和应用程序的实时运行。JVM 内存布局规定了 Java 在运行过程中内存申请、分配、管理的策略，保证了 JVM 的高效稳定运行。不同的 J..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"0. 运行时数据区","slug":"_0-运行时数据区","link":"#_0-运行时数据区","children":[]},{"level":2,"title":"1. 程序计数器","slug":"_1-程序计数器","link":"#_1-程序计数器","children":[{"level":3,"title":"1.1 作用","slug":"_1-1-作用","link":"#_1-1-作用","children":[]},{"level":3,"title":"1.2 概述","slug":"_1-2-概述","link":"#_1-2-概述","children":[]}]},{"level":2,"title":"2. 虚拟机栈","slug":"_2-虚拟机栈","link":"#_2-虚拟机栈","children":[{"level":3,"title":"2.1 概述","slug":"_2-1-概述","link":"#_2-1-概述","children":[]},{"level":3,"title":"2.2 栈的存储单位","slug":"_2-2-栈的存储单位","link":"#_2-2-栈的存储单位","children":[]},{"level":3,"title":"2.3 栈运行原理","slug":"_2-3-栈运行原理","link":"#_2-3-栈运行原理","children":[]},{"level":3,"title":"2.4 栈帧的内部结构","slug":"_2-4-栈帧的内部结构","link":"#_2-4-栈帧的内部结构","children":[]}]},{"level":2,"title":"3. 本地方法栈","slug":"_3-本地方法栈","link":"#_3-本地方法栈","children":[{"level":3,"title":"3.1 本地方法接口","slug":"_3-1-本地方法接口","link":"#_3-1-本地方法接口","children":[]},{"level":3,"title":"3.2 本地方法栈（Native Method Stack）","slug":"_3-2-本地方法栈-native-method-stack","link":"#_3-2-本地方法栈-native-method-stack","children":[]}]},{"level":2,"title":"4. 堆内存","slug":"_4-堆内存","link":"#_4-堆内存","children":[{"level":3,"title":"4.1 内存划分","slug":"_4-1-内存划分","link":"#_4-1-内存划分","children":[]},{"level":3,"title":"4.2 设置堆内存大小和 OOM","slug":"_4-2-设置堆内存大小和-oom","link":"#_4-2-设置堆内存大小和-oom","children":[]},{"level":3,"title":"4.3 对象在堆中的生命周期","slug":"_4-3-对象在堆中的生命周期","link":"#_4-3-对象在堆中的生命周期","children":[]},{"level":3,"title":"4.4 对象的分配过程","slug":"_4-4-对象的分配过程","link":"#_4-4-对象的分配过程","children":[]},{"level":3,"title":"4.5 GC 垃圾回收简介","slug":"_4-5-gc-垃圾回收简介","link":"#_4-5-gc-垃圾回收简介","children":[]},{"level":3,"title":"4.6 TLAB","slug":"_4-6-tlab","link":"#_4-6-tlab","children":[]},{"level":3,"title":"4.7 堆是分配对象存储的唯一选择吗","slug":"_4-7-堆是分配对象存储的唯一选择吗","link":"#_4-7-堆是分配对象存储的唯一选择吗","children":[]}]},{"level":2,"title":"5. 方法区","slug":"_5-方法区","link":"#_5-方法区","children":[{"level":3,"title":"5.1 解惑","slug":"_5-1-解惑","link":"#_5-1-解惑","children":[]},{"level":3,"title":"5.2 设置方法区内存的大小","slug":"_5-2-设置方法区内存的大小","link":"#_5-2-设置方法区内存的大小","children":[]},{"level":3,"title":"5.3 方法区内部结构","slug":"_5-3-方法区内部结构","link":"#_5-3-方法区内部结构","children":[]},{"level":3,"title":"5.4 运行时常量池","slug":"_5-4-运行时常量池","link":"#_5-4-运行时常量池","children":[]},{"level":3,"title":"5.5 方法区在 JDK6、7、8中的演进细节","slug":"_5-5-方法区在-jdk6、7、8中的演进细节","link":"#_5-5-方法区在-jdk6、7、8中的演进细节","children":[]},{"level":3,"title":"5.6 方法区的垃圾回收","slug":"_5-6-方法区的垃圾回收","link":"#_5-6-方法区的垃圾回收","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":47.86,"words":14358},"filePathRelative":"java/jvm/java-jvm-struct.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
