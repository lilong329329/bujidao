import{_ as a,W as n,X as e,Y as s}from"./framework-4b7e9ff4.js";const t={},i=s(`<h1 id="jpa表大小写转换" tabindex="-1"><a class="header-anchor" href="#jpa表大小写转换" aria-hidden="true">#</a> JPA表大小写转换</h1><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><ol><li>使用PhysicalNamingStrategy Spring Boot1.5.4 JPA是基于hibernate5.0的，有两种现成的方式实现PhysicalNamingStrategy <ul><li>org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl 无修改的</li><li>org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy <strong>有修改，Spirng Boot 1.5.4默认使用SpringPhysicalNamingStrategy ，会处理添加“-”，会将表、字段名转化为小写</strong> application.yml中配置使用PhysicalNamingStrategy，就没有字段被小写的问题了</li></ul></li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">jpa</span><span class="token punctuation">:</span>
    <span class="token key atrule">hibernate</span><span class="token punctuation">:</span>
      <span class="token key atrule">naming</span><span class="token punctuation">:</span>
        <span class="token key atrule">physical-strategy</span><span class="token punctuation">:</span>  org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[i];function r(o,c){return n(),e("div",null,l)}const d=a(t,[["render",r],["__file","jpa-y-case.html.vue"]]);export{d as default};
