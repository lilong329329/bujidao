import{_ as e,W as a,X as i,Y as t}from"./framework-4b7e9ff4.js";const r={},d=t('<h1 id="若依支持分布式场景需要考虑的地方" tabindex="-1"><a class="header-anchor" href="#若依支持分布式场景需要考虑的地方" aria-hidden="true">#</a> 若依支持分布式场景需要考虑的地方</h1><p>主要考虑以下几个方向</p><ul><li>主键问题</li><li>分布式锁</li></ul><h3 id="_1-主键问题" tabindex="-1"><a class="header-anchor" href="#_1-主键问题" aria-hidden="true">#</a> 1. 主键问题</h3><p>当前是数据库主键自增，需要权衡项目是否需要采用分布式id。</p><p>主要考虑点</p><ul><li>数据量是否非常大（想想推特每秒上万条消息的请求，自己的数据量能比吗）</li><li>数据库主从读写分离，是否就已经能满足了？</li></ul><h3 id="_2-分布式锁" tabindex="-1"><a class="header-anchor" href="#_2-分布式锁" aria-hidden="true">#</a> 2. 分布式锁</h3><p>其实这个哪怕是单体应用某些场景也是需要分布式锁的，这个必须加上</p>',9),l=[d];function s(n,h){return a(),i("div",null,l)}const o=e(r,[["render",s],["__file","manage-system-distributed-problem.html.vue"]]);export{o as default};
