import{_ as i,W as t,X as o,Z as e,$ as n,a0 as r,Y as l,D as s}from"./framework-4b7e9ff4.js";const h={},d=l('<h1 id="shallow-heap和retained-heap" tabindex="-1"><a class="header-anchor" href="#shallow-heap和retained-heap" aria-hidden="true">#</a> Shallow heap和Retained heap</h1><p>所有包含Heap Proflin 功能的工具（MAT，TPTP等）都会使用到两个名词，一个是Shallow Size，另一个是Retained Size</p><h2 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1 概念</h2><h3 id="_1-1-shallow-size" tabindex="-1"><a class="header-anchor" href="#_1-1-shallow-size" aria-hidden="true">#</a> 1.1 Shallow Size</h3><p><strong>对象自身占用的内存大小，不包括他引用的对象</strong></p><p>针对非数组类型的对象，它的大小就是对象与他所有的成员变量大小的总和。当然这里面还会包括一些java语言特性的数据存储单元。 针对数组类型的对象，它的大小是数组元素对象的大小总和。</p><h3 id="_1-2-retained-size" tabindex="-1"><a class="header-anchor" href="#_1-2-retained-size" aria-hidden="true">#</a> 1.2 Retained Size</h3><p>Retained Size= <strong>当前对象大小+当前对象可直接或间接引用到的对象的大小总和</strong>(间接引用的含义：A-&gt;B-&gt;C, C就是间接引用)</p><p>换句话说，Retained Size 就是当前对象被GC后，从Heap 上总共能释放掉的内存，从Heap 上总共能释放掉的内存</p><p>不过，释放的时候还要排除被GC Roots直接或间接引用的对象。他们暂时不会被被当做Garbage。</p><h2 id="_2-看图理解retained-size" tabindex="-1"><a class="header-anchor" href="#_2-看图理解retained-size" aria-hidden="true">#</a> 2. 看图理解Retained Size</h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200107223438176.png" alt="image-20200107223438176" tabindex="0" loading="lazy"><figcaption>image-20200107223438176</figcaption></figure><p>上图中，GC Roots直接引用了A和B 两个对象</p><ul><li><p>A对象的Retained Size = A对象Shallow Size</p></li><li><p>B对象的Reatined Size = B 对象的Shallow Size + C对象的Shallow Size</p><p>ps:这里不包含D对象，因为D对象被GCroot直接引用了</p></li></ul><h3 id="如果gc-roots不引用d对象" tabindex="-1"><a class="header-anchor" href="#如果gc-roots不引用d对象" aria-hidden="true">#</a> 如果GC Roots不引用D对象？</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200107223805147.png" alt="image-20200107223805147" tabindex="0" loading="lazy"><figcaption>image-20200107223805147</figcaption></figure><p>此时，B对象的Retained Size=B对象的Shallow Size + C对象的Shallow Size + D对象的Shallow Size</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',18),c={href:"https://www.iteye.com/blog/bjyzxxds-1532937",target:"_blank",rel:"noopener noreferrer"};function p(g,z){const a=s("ExternalLinkIcon");return t(),o("div",null,[d,e("p",null,[e("a",c,[n("Shallow heap & Retained heap"),r(a)])])])}const S=i(h,[["render",p],["__file","java-jvm-tools-mat-shallow.html.vue"]]);export{S as default};
