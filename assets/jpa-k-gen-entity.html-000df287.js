import{_ as i,W as a,X as g,Y as e}from"./framework-4b7e9ff4.js";const n={},t=e('<h1 id="idea下springdata-jpa根据数据库表生成实体类" tabindex="-1"><a class="header-anchor" href="#idea下springdata-jpa根据数据库表生成实体类" aria-hidden="true">#</a> IDEA下SpringData-JPA根据数据库表生成实体类</h1><ol><li><p>首先要给项目的Modules添加JPA:</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201120100921592.png" alt="image-20201120100921592" tabindex="0" loading="lazy"><figcaption>image-20201120100921592</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201120101005602.png" alt="image-20201120101005602" tabindex="0" loading="lazy"><figcaption>image-20201120101005602</figcaption></figure></li><li><p>数据源的配置</p><p>View --&gt; Tool Windows下看到 database</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201120103112676.png" alt="image-20201120103112676" tabindex="0" loading="lazy"><figcaption>image-20201120103112676</figcaption></figure></li><li><p>完成上述操作后即可在View --&gt; Tool Windows下看到 Persistence选项,将其打开</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201120101142287.png" alt="image-20201120101142287" tabindex="0" loading="lazy"><figcaption>image-20201120101142287</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201120103153121.png" alt="image-20201120103153121" tabindex="0" loading="lazy"><figcaption>image-20201120103153121</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201120103244179.png" alt="image-20201120103244179" tabindex="0" loading="lazy"><figcaption>image-20201120103244179</figcaption></figure></li><li><p>在弹出的Persistence窗口的项目上右键,选择Generate Persistence Mapping --&gt; By Database Schema</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201120101503223.png" alt="image-20201120101503223" tabindex="0" loading="lazy"><figcaption>image-20201120101503223</figcaption></figure></li><li><p>在此处进行数据库相关配置,配置成功后即可在下方看到数据库中的表</p></li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201120103333205.png" alt="image-20201120103333205" tabindex="0" loading="lazy"><figcaption>image-20201120103333205</figcaption></figure>',3),s=[t];function o(l,m){return a(),g("div",null,s)}const p=i(n,[["render",o],["__file","jpa-k-gen-entity.html.vue"]]);export{p as default};
