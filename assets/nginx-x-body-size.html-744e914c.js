import{_ as e,W as n,X as i,Y as t}from"./framework-4b7e9ff4.js";const a={},d=t(`<h1 id="nginx设置请求body大小" tabindex="-1"><a class="header-anchor" href="#nginx设置请求body大小" aria-hidden="true">#</a> nginx设置请求body大小</h1><p>nginx默认是1M，需要增大的话。</p><p>在nginx.conf中http{}增加一句</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>client_max_body_size 100M;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启nginx即可</p>`,5),s=[d];function c(o,r){return n(),i("div",null,s)}const _=e(a,[["render",c],["__file","nginx-x-body-size.html.vue"]]);export{_ as default};
