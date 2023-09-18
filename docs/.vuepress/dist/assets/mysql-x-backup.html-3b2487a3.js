import{_ as l,W as t,X as p,Z as a,$ as s,a0 as e,Y as r,D as i}from"./framework-4b7e9ff4.js";const c={},o=a("h1",{id:"mysql-备份",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mysql-备份","aria-hidden":"true"},"#"),s(" MySQL - 备份")],-1),d=a("h2",{id:"_1-简介",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-简介","aria-hidden":"true"},"#"),s(" 1. 简介")],-1),u=a("p",null,"备份方案主要分为",-1),k=a("li",null,"mysqldump",-1),b=a("li",null,"xtrabackup",-1),v={href:"https://github.com/appleboy/docker-backup-database",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="_2-mysqldump-命令备份" tabindex="-1"><a class="header-anchor" href="#_2-mysqldump-命令备份" aria-hidden="true">#</a> 2. mysqldump 命令备份</h2><p>mysqldump 可以导出MYSQL表中的数据</p><p>mysqldump该工具会将数据查出来，转换成insert语句，写入到某个文件中，相当于数据备份。</p><p>我们获取到该文件，然后执行相应的insert语句，就能创建相关的表，并且写入数据了，这就相当于数据还原。</p><blockquote><p>mysqldump命令的语法为：mysqldump -h主机名 -P端口 -u用户名 -p密码 参数1,参数2.... &gt; 文件名称.sql</p></blockquote><p>备份远程数据库中的数据库：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysqldump -h 192.168.0.1 -u root -p123456 dbname &gt; backup.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-xtrabackup-备份-推荐" tabindex="-1"><a class="header-anchor" href="#_3-xtrabackup-备份-推荐" aria-hidden="true">#</a> 3. xtrabackup 备份（推荐）</h2><h3 id="_3-1-备份脚本" tabindex="-1"><a class="header-anchor" href="#_3-1-备份脚本" aria-hidden="true">#</a> 3.1 备份脚本</h3><p>backup_script.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span>/home/dataexa/db-backup
<span class="token assign-left variable">DOCKER_BACKUP_DIR</span><span class="token operator">=</span>/var/lib/db-backup
<span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span>root
<span class="token assign-left variable">MYSQL_PASS</span><span class="token operator">=</span>mypassword
<span class="token assign-left variable">MYSQL_HOST</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
<span class="token assign-left variable">MYSQL_PORT</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d_%H-%M-%S<span class="token variable">)</span></span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$BACKUP_DIR</span>/<span class="token variable">$DATE</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> <span class="token variable">$BACKUP_DIR</span>/<span class="token variable">$DATE</span>
<span class="token function">sudo</span> <span class="token function">docker</span> stop percona-xtrabackup
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">rm</span> percona-xtrabackup
<span class="token function">sudo</span> <span class="token function">docker</span> run   <span class="token parameter variable">--user</span> <span class="token number">0</span>:0 <span class="token parameter variable">--name</span> percona-xtrabackup --volumes-from mysql percona/percona-xtrabackup xtrabackup <span class="token parameter variable">--backup</span>  <span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token variable">$MYSQL_USER</span> --target-dir<span class="token operator">=</span><span class="token variable">$DOCKER_BACKUP_DIR</span>/<span class="token variable">$DATE</span> <span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token variable">$MYSQL_USER</span> <span class="token parameter variable">--password</span><span class="token operator">=</span><span class="token variable">$MYSQL_PASS</span> <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token variable">$MYSQL_PORT</span> <span class="token parameter variable">--host</span><span class="token operator">=</span><span class="token variable">$MYSQL_HOST</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意点：</p><ul><li>--user : 以root 角色运行容器，以免因为权限问题无法备份</li><li>--volumes-from：挂在到docker 的mysql 容器的相同数据卷、实现数据共享</li></ul><h3 id="_3-2-恢复数据-方案1-xtrabackup-恢复" tabindex="-1"><a class="header-anchor" href="#_3-2-恢复数据-方案1-xtrabackup-恢复" aria-hidden="true">#</a> 3.2 恢复数据：方案1 xtrabackup 恢复</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>还有点问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-2-1-步骤1-准备恢复的数据" tabindex="-1"><a class="header-anchor" href="#_3-2-1-步骤1-准备恢复的数据" aria-hidden="true">#</a> 3.2.1 步骤1：准备恢复的数据</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shell<span class="token operator">&gt;</span> xtrabackup <span class="token parameter variable">--prepare</span> --target-dir<span class="token operator">=</span>/data/backups/full
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-2-2-步骤2-trabackup-恢复" tabindex="-1"><a class="header-anchor" href="#_3-2-2-步骤2-trabackup-恢复" aria-hidden="true">#</a> 3.2.2 步骤2：trabackup 恢复</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>shell&gt; systemctl stop mysqld.service

shell&gt; rm -rf /var/lib/mysql/*

shell&gt; xtrabackup --copy-back --datadir=/var/lib/mysql --target-dir=/backups/full

# 下面为完成后的输出结果
180818 10:59:25 [01]        ...done
180818 10:59:25 completed OK!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-恢复数据-方案2-rsync命令" tabindex="-1"><a class="header-anchor" href="#_3-3-恢复数据-方案2-rsync命令" aria-hidden="true">#</a> 3.3 恢复数据：方案2 <code>rsync</code>命令</h3><blockquote><p>验证成功</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rsync</span> <span class="token parameter variable">-avrP</span> /backup/ /var/lib/mysql/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-docker-backup-database-推荐" tabindex="-1"><a class="header-anchor" href="#_4-docker-backup-database-推荐" aria-hidden="true">#</a> 4. docker-backup-database(推荐)</h2><p>按文档配置后，每日会将备份sql打包到minio</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">backup_mysql</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> appleboy/docker<span class="token punctuation">-</span>backup<span class="token punctuation">-</span>database<span class="token punctuation">:</span>mysql<span class="token punctuation">-</span><span class="token number">8</span>
  <span class="token key atrule">logging</span><span class="token punctuation">:</span>
    <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;100k&quot;</span>
      <span class="token key atrule">max-file</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token key atrule">STORAGE_DRIVER</span><span class="token punctuation">:</span> s3
    <span class="token key atrule">STORAGE_ENDPOINT</span><span class="token punctuation">:</span> 192.168.0.1<span class="token punctuation">:</span><span class="token number">9000</span>
    <span class="token key atrule">STORAGE_BUCKET</span><span class="token punctuation">:</span> db<span class="token punctuation">-</span>backup
    <span class="token comment">#STORAGE_REGION: ap-northeast-1</span>
    <span class="token key atrule">STORAGE_PATH</span><span class="token punctuation">:</span> backup_mysql
    <span class="token key atrule">STORAGE_SSL</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
    <span class="token key atrule">STORAGE_INSECURE_SKIP_VERIFY</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
    <span class="token key atrule">ACCESS_KEY_ID</span><span class="token punctuation">:</span> admin
    <span class="token key atrule">SECRET_ACCESS_KEY</span><span class="token punctuation">:</span> <span class="token number">123456</span>

    <span class="token key atrule">DATABASE_DRIVER</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">DATABASE_HOST</span><span class="token punctuation">:</span> 192.168.0.1<span class="token punctuation">:</span><span class="token number">3306</span>
    <span class="token key atrule">DATABASE_USERNAME</span><span class="token punctuation">:</span> root
    <span class="token key atrule">DATABASE_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">DATABASE_NAME</span><span class="token punctuation">:</span> sss
    <span class="token key atrule">DATABASE_OPTS</span><span class="token punctuation">:</span>
    <span class="token comment"># 每天凌晨备份</span>
    <span class="token key atrule">TIME_SCHEDULE</span><span class="token punctuation">:</span> <span class="token string">&quot;@daily&quot;</span>
    <span class="token key atrule">TIME_LOCATION</span><span class="token punctuation">:</span> Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-如果mysql-无法正常连接" tabindex="-1"><a class="header-anchor" href="#_4-1-如果mysql-无法正常连接" aria-hidden="true">#</a> 4.1 如果mysql 无法正常连接</h3><p>需添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#接受来自任何IP地址的请求，远程备份用
bind-address=0.0.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,29),h={href:"https://docs.percona.com/percona-xtrabackup/8.0/installation/docker.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://cn.openjianghu.org/doc/page/article/10080",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.jianshu.com/p/e8bd79e84f55",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/appleboy/docker-backup-database",target:"_blank",rel:"noopener noreferrer"};function x(f,S){const n=i("ExternalLinkIcon");return t(),p("div",null,[o,d,u,a("ul",null,[k,b,a("li",null,[a("a",v,[s("docker-backup-database"),e(n)]),s("(推荐)")])]),m,a("p",null,[a("a",h,[s("官方文档-xtrabackup-8.0文档"),e(n)])]),a("p",null,[a("a",_,[s("数据库备份之Xtrabackup"),e(n)])]),a("p",null,[a("a",g,[s("MySQL 物理备份： Innobackupex 和 xtrabackup（热备）"),e(n)])]),a("p",null,[a("a",y,[s("docker-backup-database"),e(n)])])])}const A=l(c,[["render",x],["__file","mysql-x-backup.html.vue"]]);export{A as default};