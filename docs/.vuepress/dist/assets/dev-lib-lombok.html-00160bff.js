const l=JSON.parse('{"key":"v-958c7072","path":"/develop/devlibrary/dev-lib-lombok.html","title":"常用开发库-Lombok工具库详解","lang":"zh-CN","frontmatter":{"order":10,"category":["Lib"],"description":"Lombok是一款非常实用Java工具，可用来帮助开发人员消除Java的冗长代码，尤其是对于简单的Java对象（POJO）。实际上我并不推荐使用Lombok（不主动使用它）, 但是因为它有着很大的使用量，我们仍然有必要掌握它，不仅知道如何使用和它解决的问题，还要知道它的坑。 1. Lombok的引入 我们通常需要编写大量代码才能使类变得有用。如以下内容...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/./develop/devlibrary/dev-lib-lombok.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"常用开发库-Lombok工具库详解"}],["meta",{"property":"og:description","content":"Lombok是一款非常实用Java工具，可用来帮助开发人员消除Java的冗长代码，尤其是对于简单的Java对象（POJO）。实际上我并不推荐使用Lombok（不主动使用它）, 但是因为它有着很大的使用量，我们仍然有必要掌握它，不仅知道如何使用和它解决的问题，还要知道它的坑。 1. Lombok的引入 我们通常需要编写大量代码才能使类变得有用。如以下内容..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. Lombok的引入","slug":"_1-lombok的引入","link":"#_1-lombok的引入","children":[{"level":3,"title":"1.1 在引入Lombok之前我们是怎么做的","slug":"_1-1-在引入lombok之前我们是怎么做的","link":"#_1-1-在引入lombok之前我们是怎么做的","children":[]}]},{"level":2,"title":"2. Lombok的安装和使用","slug":"_2-lombok的安装和使用","link":"#_2-lombok的安装和使用","children":[{"level":3,"title":"2.1 Lombok官网","slug":"_2-1-lombok官网","link":"#_2-1-lombok官网","children":[]},{"level":3,"title":"2.2 Lombok安装","slug":"_2-2-lombok安装","link":"#_2-2-lombok安装","children":[]},{"level":3,"title":"2.3 Lombok注解说明","slug":"_2-3-lombok注解说明","link":"#_2-3-lombok注解说明","children":[]}]},{"level":2,"title":"3. Lombok代码示例","slug":"_3-lombok代码示例","link":"#_3-lombok代码示例","children":[{"level":3,"title":"3.1 val示例","slug":"_3-1-val示例","link":"#_3-1-val示例","children":[]},{"level":3,"title":"3.2 @NonNull示例","slug":"_3-2-nonnull示例","link":"#_3-2-nonnull示例","children":[]},{"level":3,"title":"3.3 @Cleanup示例","slug":"_3-3-cleanup示例","link":"#_3-3-cleanup示例","children":[]},{"level":3,"title":"3.4 @Getter/@Setter示例","slug":"_3-4-getter-setter示例","link":"#_3-4-getter-setter示例","children":[]},{"level":3,"title":"3.5 @ToString示例","slug":"_3-5-tostring示例","link":"#_3-5-tostring示例","children":[]},{"level":3,"title":"3.6 @EqualsAndHashCode示例","slug":"_3-6-equalsandhashcode示例","link":"#_3-6-equalsandhashcode示例","children":[]},{"level":3,"title":"3.7 @NoArgsConstructor, @RequiredArgsConstructor and @AllArgsConstructor示例","slug":"_3-7-noargsconstructor-requiredargsconstructor-and-allargsconstructor示例","link":"#_3-7-noargsconstructor-requiredargsconstructor-and-allargsconstructor示例","children":[]},{"level":3,"title":"3.8 @Data示例","slug":"_3-8-data示例","link":"#_3-8-data示例","children":[]},{"level":3,"title":"3.9 @Value示例","slug":"_3-9-value示例","link":"#_3-9-value示例","children":[]},{"level":3,"title":"3.10 @Builder示例","slug":"_3-10-builder示例","link":"#_3-10-builder示例","children":[]},{"level":3,"title":"3.11 @SneakyThrows示例","slug":"_3-11-sneakythrows示例","link":"#_3-11-sneakythrows示例","children":[]},{"level":3,"title":"3.12 @Synchronized示例","slug":"_3-12-synchronized示例","link":"#_3-12-synchronized示例","children":[]},{"level":3,"title":"3.12 @Getter(lazy = true)示例","slug":"_3-12-getter-lazy-true-示例","link":"#_3-12-getter-lazy-true-示例","children":[]}]},{"level":2,"title":"4. Lombok深入理解","slug":"_4-lombok深入理解","link":"#_4-lombok深入理解","children":[{"level":3,"title":"4.1 Lombok解决了什么问题","slug":"_4-1-lombok解决了什么问题","link":"#_4-1-lombok解决了什么问题","children":[]},{"level":3,"title":"4.2 Lombok的原理","slug":"_4-2-lombok的原理","link":"#_4-2-lombok的原理","children":[]},{"level":3,"title":"4.3 Lombok类似原理工具有什么","slug":"_4-3-lombok类似原理工具有什么","link":"#_4-3-lombok类似原理工具有什么","children":[]},{"level":3,"title":"4.4 Lombok没有未来 - Java14 Record了解下","slug":"_4-4-lombok没有未来-java14-record了解下","link":"#_4-4-lombok没有未来-java14-record了解下","children":[]}]},{"level":2,"title":"5. Lombok有什么坑","slug":"_5-lombok有什么坑","link":"#_5-lombok有什么坑","children":[{"level":3,"title":"5.1 @Data的坑","slug":"_5-1-data的坑","link":"#_5-1-data的坑","children":[]},{"level":3,"title":"5.2 代码可读性，可调试性低","slug":"_5-2-代码可读性-可调试性低","link":"#_5-2-代码可读性-可调试性低","children":[]},{"level":3,"title":"5.3 Lombok有很强的侵入性","slug":"_5-3-lombok有很强的侵入性","link":"#_5-3-lombok有很强的侵入性","children":[]},{"level":3,"title":"5.4 Lombok破坏了封装性","slug":"_5-4-lombok破坏了封装性","link":"#_5-4-lombok破坏了封装性","children":[]}]},{"level":2,"title":"6. 总结","slug":"_6-总结","link":"#_6-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":15.76,"words":4729},"filePathRelative":"develop/devlibrary/dev-lib-lombok.md","localizedDate":"2023年2月20日","autoDesc":true}');export{l as data};
