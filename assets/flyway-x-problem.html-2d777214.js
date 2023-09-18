import{_ as r,W as t,X as n,Z as e,$ as l,a0 as o,Y as i,D as s}from"./framework-4b7e9ff4.js";const c={},d=i('<h1 id="flyway常见问题" tabindex="-1"><a class="header-anchor" href="#flyway常见问题" aria-hidden="true">#</a> Flyway常见问题</h1><h2 id="_1-初始化数据过程会发生错误回滚" tabindex="-1"><a class="header-anchor" href="#_1-初始化数据过程会发生错误回滚" aria-hidden="true">#</a> 1. 初始化数据过程会发生错误回滚？</h2><ul><li><p>每一个sql 文件会有 一个单独的事物</p></li><li><p>如果单个文件中发 生错误，单个文件的操作会回滚</p><ul><li>比如有1、2、3个 文件，第 二个文件发生错误，第二个文件所有操作将会回滚，第三个文件不会执行。</li><li>但： Unfortunately, today only DB2, PostgreSQL, Derby, EnterpriseDB and to a certain extent SQL Server support DDL statements inside a transaction。</li><li>所以，建议不要把ddl 文件和dml语句句放到同 一个文件 里，避免不必要的麻烦。</li></ul></li></ul><h2 id="_2-多个节点能够并行执行migration吗" tabindex="-1"><a class="header-anchor" href="#_2-多个节点能够并行执行migration吗" aria-hidden="true">#</a> 2. 多个节点能够并行执行migration吗？</h2><p>Flyway使用数据库锁机制（locking technology of your database）来协调多个节点，从而保证多套应用程序可同时执行migration，而且集群控制也可做配置。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',6),h={href:"https://www.cnblogs.com/liuyupen/p/11101594.html",target:"_blank",rel:"noopener noreferrer"};function _(p,y){const a=s("ExternalLinkIcon");return t(),n("div",null,[d,e("p",null,[e("a",h,[l("flyway使用简介"),o(a)])])])}const u=r(c,[["render",_],["__file","flyway-x-problem.html.vue"]]);export{u as default};
