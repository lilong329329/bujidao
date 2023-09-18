const e=JSON.parse('{"key":"v-3d2a35cb","path":"/java/command/java-command-overview.html","title":"Java命令参数","lang":"zh-CN","frontmatter":{"description":"1. 简介 java 命令用于启动 java 应用：它首先会启动 java 运行时环境（JRE），然后加载指定的类，调用类的 main() 方法。main() 方法必须定义为 public 和 static 的，并且不返回任何值，参数是 String 类型的数组，该方法的形式如下： ``` public static void main(String[...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java/command/java-command-overview.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Java命令参数"}],["meta",{"property":"og:description","content":"1. 简介 java 命令用于启动 java 应用：它首先会启动 java 运行时环境（JRE），然后加载指定的类，调用类的 main() 方法。main() 方法必须定义为 public 和 static 的，并且不返回任何值，参数是 String 类型的数组，该方法的形式如下： ``` public static void main(String[..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 语法","slug":"_2-语法","link":"#_2-语法","children":[]},{"level":2,"title":"3. 选项","slug":"_3-选项","link":"#_3-选项","children":[{"level":3,"title":"3.1 如何定义选项分类","slug":"_3-1-如何定义选项分类","link":"#_3-1-如何定义选项分类","children":[]}]},{"level":2,"title":"4. 标准选项","slug":"_4-标准选项","link":"#_4-标准选项","children":[{"level":3,"title":"4.1 -agentlib:libname[=options]","slug":"_4-1-agentlib-libname-options","link":"#_4-1-agentlib-libname-options","children":[]},{"level":3,"title":"4.2 -agentpath:pathname[=options]","slug":"_4-2-agentpath-pathname-options","link":"#_4-2-agentpath-pathname-options","children":[]},{"level":3,"title":"4.3 -client","slug":"_4-3-client","link":"#_4-3-client","children":[]},{"level":3,"title":"4.4 -server","slug":"_4-4-server","link":"#_4-4-server","children":[]},{"level":3,"title":"4.5 -Dproperty=value","slug":"_4-5-dproperty-value","link":"#_4-5-dproperty-value","children":[]},{"level":3,"title":"4.6 -d32","slug":"_4-6-d32","link":"#_4-6-d32","children":[]},{"level":3,"title":"4.7 -d64","slug":"_4-7-d64","link":"#_4-7-d64","children":[]},{"level":3,"title":"4.8 -jar filename","slug":"_4-8-jar-filename","link":"#_4-8-jar-filename","children":[]},{"level":3,"title":"4.9 -showversion","slug":"_4-9-showversion","link":"#_4-9-showversion","children":[]},{"level":3,"title":"4.10 -version","slug":"_4-10-version","link":"#_4-10-version","children":[]},{"level":3,"title":"4.11 -splash:imgname","slug":"_4-11-splash-imgname","link":"#_4-11-splash-imgname","children":[]},{"level":3,"title":"4.12 -verbose:class","slug":"_4-12-verbose-class","link":"#_4-12-verbose-class","children":[]},{"level":3,"title":"4.13 -verbose:gc","slug":"_4-13-verbose-gc","link":"#_4-13-verbose-gc","children":[]},{"level":3,"title":"4.14 -verbose:jni","slug":"_4-14-verbose-jni","link":"#_4-14-verbose-jni","children":[]}]},{"level":2,"title":"5. 非标准选项","slug":"_5-非标准选项","link":"#_5-非标准选项","children":[{"level":3,"title":"5.1 -X","slug":"_5-1-x","link":"#_5-1-x","children":[]},{"level":3,"title":"5.2 -Xbatch","slug":"_5-2-xbatch","link":"#_5-2-xbatch","children":[]},{"level":3,"title":"5.3 -Xbootclasspath:path","slug":"_5-3-xbootclasspath-path","link":"#_5-3-xbootclasspath-path","children":[]},{"level":3,"title":"5.4 -Xcheck:jni","slug":"_5-4-xcheck-jni","link":"#_5-4-xcheck-jni","children":[]},{"level":3,"title":"5.5 -Xcomp","slug":"_5-5-xcomp","link":"#_5-5-xcomp","children":[]},{"level":3,"title":"5.6 -Xint","slug":"_5-6-xint","link":"#_5-6-xint","children":[]},{"level":3,"title":"5.7 -Xinternalversion","slug":"_5-7-xinternalversion","link":"#_5-7-xinternalversion","children":[]},{"level":3,"title":"5.8 -Xloggc:filename","slug":"_5-8-xloggc-filename","link":"#_5-8-xloggc-filename","children":[]},{"level":3,"title":"5.9 -Xmaxjitcodesize=size","slug":"_5-9-xmaxjitcodesize-size","link":"#_5-9-xmaxjitcodesize-size","children":[]},{"level":3,"title":"5.10 -Xmixed","slug":"_5-10-xmixed","link":"#_5-10-xmixed","children":[]},{"level":3,"title":"5.11 -Xmnsize","slug":"_5-11-xmnsize","link":"#_5-11-xmnsize","children":[]},{"level":3,"title":"5.12 -Xmssize","slug":"_5-12-xmssize","link":"#_5-12-xmssize","children":[]},{"level":3,"title":"5.13 -Xmxsize","slug":"_5-13-xmxsize","link":"#_5-13-xmxsize","children":[]},{"level":3,"title":"5.14 -Xnoclassgc","slug":"_5-14-xnoclassgc","link":"#_5-14-xnoclassgc","children":[]},{"level":3,"title":"5.15 -Xprof","slug":"_5-15-xprof","link":"#_5-15-xprof","children":[]},{"level":3,"title":"5.16 -Xrs","slug":"_5-16-xrs","link":"#_5-16-xrs","children":[]},{"level":3,"title":"5.17 -Xsssize","slug":"_5-17-xsssize","link":"#_5-17-xsssize","children":[]}]},{"level":2,"title":"6. 运行时高级选项","slug":"_6-运行时高级选项","link":"#_6-运行时高级选项","children":[{"level":3,"title":"6.1 -XX:+PrintFlagsInitial","slug":"_6-1-xx-printflagsinitial","link":"#_6-1-xx-printflagsinitial","children":[]},{"level":3,"title":"6.2 -XX:+PrintCommandLineFlags","slug":"_6-2-xx-printcommandlineflags","link":"#_6-2-xx-printcommandlineflags","children":[]},{"level":3,"title":"6.3 -XX:+DisableAttachMechanism","slug":"_6-3-xx-disableattachmechanism","link":"#_6-3-xx-disableattachmechanism","children":[]},{"level":3,"title":"6.4 -XX:MaxDirectMemorySize=size","slug":"_6-4-xx-maxdirectmemorysize-size","link":"#_6-4-xx-maxdirectmemorysize-size","children":[]},{"level":3,"title":"6.5 -XX:-UseBiasedLocking","slug":"_6-5-xx-usebiasedlocking","link":"#_6-5-xx-usebiasedlocking","children":[]},{"level":3,"title":"6.6 -XX:-UseCompressedOops","slug":"_6-6-xx-usecompressedoops","link":"#_6-6-xx-usecompressedoops","children":[]}]},{"level":2,"title":"7. JIT 编译器高级选项","slug":"_7-jit-编译器高级选项","link":"#_7-jit-编译器高级选项","children":[{"level":3,"title":"7.1 -XX:CompileOnly=methods","slug":"_7-1-xx-compileonly-methods","link":"#_7-1-xx-compileonly-methods","children":[]},{"level":3,"title":"7.2 -XX:+DoEscapeAnalysis","slug":"_7-2-xx-doescapeanalysis","link":"#_7-2-xx-doescapeanalysis","children":[]},{"level":3,"title":"7.3 -XX:InitialCodeCacheSize=size","slug":"_7-3-xx-initialcodecachesize-size","link":"#_7-3-xx-initialcodecachesize-size","children":[]},{"level":3,"title":"7.4 -XX:+Inline","slug":"_7-4-xx-inline","link":"#_7-4-xx-inline","children":[]},{"level":3,"title":"7.5 -XX:InlineSmallCode=size","slug":"_7-5-xx-inlinesmallcode-size","link":"#_7-5-xx-inlinesmallcode-size","children":[]},{"level":3,"title":"7.6 -XX:MaxInlineSize=size","slug":"_7-6-xx-maxinlinesize-size","link":"#_7-6-xx-maxinlinesize-size","children":[]}]},{"level":2,"title":"8. 可服务化高级选项","slug":"_8-可服务化高级选项","link":"#_8-可服务化高级选项","children":[{"level":3,"title":"8.1 -XX:+HeapDumpOnOutOfMemory","slug":"_8-1-xx-heapdumponoutofmemory","link":"#_8-1-xx-heapdumponoutofmemory","children":[]},{"level":3,"title":"8.2 -XX:HeapDumpPath=path","slug":"_8-2-xx-heapdumppath-path","link":"#_8-2-xx-heapdumppath-path","children":[]}]},{"level":2,"title":"9. 垃圾回收器高级选项","slug":"_9-垃圾回收器高级选项","link":"#_9-垃圾回收器高级选项","children":[{"level":3,"title":"9.1 -XX:CMSInitiatingOccupancyFraction=percent","slug":"_9-1-xx-cmsinitiatingoccupancyfraction-percent","link":"#_9-1-xx-cmsinitiatingoccupancyfraction-percent","children":[]},{"level":3,"title":"9.2 -XX:CMSTriggerRatio=percent","slug":"_9-2-xx-cmstriggerratio-percent","link":"#_9-2-xx-cmstriggerratio-percent","children":[]},{"level":3,"title":"9.3 -XX:ConcGCThreads=threads","slug":"_9-3-xx-concgcthreads-threads","link":"#_9-3-xx-concgcthreads-threads","children":[]},{"level":3,"title":"9.4 -XX:+DisableExplicitGC","slug":"_9-4-xx-disableexplicitgc","link":"#_9-4-xx-disableexplicitgc","children":[]},{"level":3,"title":"9.5 -XX:G1HeapRegionSize=size","slug":"_9-5-xx-g1heapregionsize-size","link":"#_9-5-xx-g1heapregionsize-size","children":[]},{"level":3,"title":"9.6 -XX:MaxGCPauseMillis=time","slug":"_9-6-xx-maxgcpausemillis-time","link":"#_9-6-xx-maxgcpausemillis-time","children":[]},{"level":3,"title":"9.7 -XX:MaxMetaspaceSize=size","slug":"_9-7-xx-maxmetaspacesize-size","link":"#_9-7-xx-maxmetaspacesize-size","children":[]},{"level":3,"title":"9.8 -XX:MaxNewSize=size","slug":"_9-8-xx-maxnewsize-size","link":"#_9-8-xx-maxnewsize-size","children":[]},{"level":3,"title":"9.9 -XX:MaxTenuringThreshold=threshold","slug":"_9-9-xx-maxtenuringthreshold-threshold","link":"#_9-9-xx-maxtenuringthreshold-threshold","children":[]},{"level":3,"title":"9.10 -XX:MetaspaceSize=size","slug":"_9-10-xx-metaspacesize-size","link":"#_9-10-xx-metaspacesize-size","children":[]},{"level":3,"title":"9.11 -XX:NewRatio=ratio","slug":"_9-11-xx-newratio-ratio","link":"#_9-11-xx-newratio-ratio","children":[]},{"level":3,"title":"9.12 -XX:NewSize=size","slug":"_9-12-xx-newsize-size","link":"#_9-12-xx-newsize-size","children":[]},{"level":3,"title":"9.13 -XX:SurvivorRatio=ratio","slug":"_9-13-xx-survivorratio-ratio","link":"#_9-13-xx-survivorratio-ratio","children":[]},{"level":3,"title":"9.14 -XX:+PrintGC","slug":"_9-14-xx-printgc","link":"#_9-14-xx-printgc","children":[]},{"level":3,"title":"9.15 -XX:+PrintGCDetails","slug":"_9-15-xx-printgcdetails","link":"#_9-15-xx-printgcdetails","children":[]},{"level":3,"title":"9.16 -XX:TLABSize=size","slug":"_9-16-xx-tlabsize-size","link":"#_9-16-xx-tlabsize-size","children":[]},{"level":3,"title":"9.17 设置垃圾收集器类型","slug":"_9-17-设置垃圾收集器类型","link":"#_9-17-设置垃圾收集器类型","children":[]},{"level":3,"title":"9.18 -XX:+UseTLAB","slug":"_9-18-xx-usetlab","link":"#_9-18-xx-usetlab","children":[]}]},{"level":2,"title":"10. 性能调节示例","slug":"_10-性能调节示例","link":"#_10-性能调节示例","children":[{"level":3,"title":"10.1 高吞吐量","slug":"_10-1-高吞吐量","link":"#_10-1-高吞吐量","children":[]},{"level":3,"title":"10.2  低延迟","slug":"_10-2-低延迟","link":"#_10-2-低延迟","children":[]}]},{"level":2,"title":"11. 我常用的参数配置","slug":"_11-我常用的参数配置","link":"#_11-我常用的参数配置","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":14.75,"words":4426},"filePathRelative":"java/command/java-command-overview.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
