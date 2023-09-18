import{_ as t,W as o,X as l,Z as n,$ as a,a0 as e,Y as i,D as r}from"./framework-4b7e9ff4.js";const d={},c=i('<h1 id="minio部署-minio分布式集群搭建部署" tabindex="-1"><a class="header-anchor" href="#minio部署-minio分布式集群搭建部署" aria-hidden="true">#</a> Minio部署 - Minio分布式集群搭建部署</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>分布式 Minio 可以让你将多块硬盘或者多台服务器组成一个对象存储服务。由于硬盘分布在不同的节点上，分布式 Minio 避免了单点故障。MinioMinio分布式模式可以帮助你搭建一个高可用的对象存储服务，你可以使用这些存储设备，而不用考虑其真实物理位置。</p><h2 id="_2-minio分布式部署的优势" tabindex="-1"><a class="header-anchor" href="#_2-minio分布式部署的优势" aria-hidden="true">#</a> 2. Minio分布式部署的优势</h2><h3 id="_2-1-数据保护" tabindex="-1"><a class="header-anchor" href="#_2-1-数据保护" aria-hidden="true">#</a> 2.1 数据保护</h3><ul><li>分布式 Minio 采用纠删码来防范多个节点宕机和位衰减。</li><li>分布式 Minio 至少需要 4 个节点（4台服务器），使用分布式 Minio 就 自动引入了纠删码功能。</li><li>纠删码是一种恢复丢失和损坏数据的数学算法， Minio 采用 Reed-Solomon code 将对象拆分成 N/2 数据和 N/2 奇偶校验块。 这就意味着如果是 12 块盘，一个对象会被分成 6 个数据块、6 个奇偶校验块，你可以丢失任意 6 块盘（不管其是存放的数据块还是奇偶校验块），你仍可以从剩下的盘中的数据进行恢复。</li><li>纠删码的工作原理和 RAID 或者复制不同，像 RAID6 可以在损失两块盘的情况下不丢数据，而 Minio 纠删码可以在丢失一半的盘的情况下，仍可以保证数据安全。 而且 Minio 纠删码是作用在对象级别，可以一次恢复一个对象，而RAID 是作用在卷级别，数据恢复时间很长。 Minio 对每个对象单独编码，存储服务一经部署，通常情况下是不需要更换硬盘或者修复。Minio 纠删码的设计目标是为了性能和尽可能的使用硬件加速。</li><li>位衰减又被称为数据腐化 Data Rot、无声数据损坏 Silent Data Corruption ，是目前硬盘数据的一种严重数据丢失问题。硬盘上的数据可能会神不知鬼不觉就损坏了，也没有什么错误日志。正所谓明枪易躲，暗箭难防，这种背地里犯的错比硬盘直接故障还危险。 所以 Minio 纠删码采用了高速 HighwayHash 基于哈希的校验和来防范位衰减。</li></ul><h3 id="_2-2-高可用" tabindex="-1"><a class="header-anchor" href="#_2-2-高可用" aria-hidden="true">#</a> 2.2 高可用</h3><ul><li>单机 Minio 服务存在单点故障，相反，如果是一个 N 节点的分布式 Minio ,只要有 N/2 节点在线，你的数据就是安全的。不过你需要至少有 N/2+1 个节点来创建新的对象。</li><li>例如，一个 8 节点的 Minio 集群，每个节点一块盘，就算 4 个节点宕机，这个集群仍然是可读的，不过你需要 5 个节点才能写数据。</li></ul><h3 id="_2-3-限制" tabindex="-1"><a class="header-anchor" href="#_2-3-限制" aria-hidden="true">#</a> 2.3 限制</h3><ul><li>分布式 Minio 单租户存在最少 4 个盘最多 16 个盘的限制（受限于纠删码）。这种限制确保了 Minio 的简洁，同时仍拥有伸缩性。如果你需要搭建一个多租户环境，你可以轻松的使用编排工具（Kubernetes）来管理多个Minio实例。</li><li>注意，只要遵守分布式 Minio 的限制，你可以组合不同的节点和每个节点几块盘。比如，你可以使用 2 个节点，每个节点 4 块盘，也可以使用 4 个节点，每个节点两块盘，诸如此类。</li></ul><h3 id="_2-4-一致性" tabindex="-1"><a class="header-anchor" href="#_2-4-一致性" aria-hidden="true">#</a> 2.4 一致性</h3><ul><li>Minio 在分布式和单机模式下，所有读写操作都严格遵守 read-after-write 一致性模型。</li></ul><h2 id="minio分布式集群搭建" tabindex="-1"><a class="header-anchor" href="#minio分布式集群搭建" aria-hidden="true">#</a> Minio分布式集群搭建</h2><h3 id="_3-1-环境准备" tabindex="-1"><a class="header-anchor" href="#_3-1-环境准备" aria-hidden="true">#</a> 3.1 环境准备</h3><table><thead><tr><th>节点</th><th>目录</th></tr></thead><tbody><tr><td>192.168.1.1</td><td>/data/minio/data</td></tr><tr><td>192.168.1.2</td><td>/data/minio/data</td></tr><tr><td>192.168.1.3</td><td>/data/minio/data</td></tr><tr><td>192.168.1.4</td><td>/data/minio/data</td></tr></tbody></table>',15),p={href:"https://dl.min.io/server/minio/release/linux-amd64/minio",target:"_blank",rel:"noopener noreferrer"},u=i(`<h3 id="_3-2-目录创建" tabindex="-1"><a class="header-anchor" href="#_3-2-目录创建" aria-hidden="true">#</a> 3.2 目录创建</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/minio/<span class="token punctuation">{</span>run,data<span class="token punctuation">}</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>run：启动脚本及二进制文件目录； data：数据存储目录； /etc/minio：配置文件目录；</p><h3 id="_3-3-集群启动文件" tabindex="-1"><a class="header-anchor" href="#_3-3-集群启动文件" aria-hidden="true">#</a> 3.3 集群启动文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> /data/minio/run/run.sh
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MINIO_ACCESS_KEY</span><span class="token operator">=</span>Minio
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MINIO_SECRET_KEY</span><span class="token operator">=</span>Test1234<span class="token operator">!</span>
 
/data/minio/run/minio server --config-dir /etc/minio <span class="token punctuation">\\</span>
http://192.168.99.1/data/minio/data <span class="token punctuation">\\</span>
http://192.168.99.2/data/minio/data <span class="token punctuation">\\</span>
http://192.168.99.3/data/minio/data <span class="token punctuation">\\</span>
http://192.168.99.4/data/minio/data <span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>MINIO_ACCESS_KEY</code>：用户名，长度最小是5个字符；</li><li><code>MINIO_SECRET_KEY</code>：密码，密码不能设置过于简单，不然minio会启动失败，长度最小是8个字符；</li><li><code>–config-dir</code>：指定集群配置文件目录；</li></ul><h3 id="_3-4-配置为系统服务" tabindex="-1"><a class="header-anchor" href="#_3-4-配置为系统服务" aria-hidden="true">#</a> 3.4 配置为系统服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> /usr/lib/systemd/system/minio.service
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Minio <span class="token function">service</span>
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://docs.minio.io/
 
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/data/minio/run/
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/data/minio/run/run.sh
 
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">5</span>
 
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p><ul><li><strong>将minio二进制文件上传到<code>/data/minio/run</code>目录！</strong></li><li><strong>给所有涉及到的文件或目录添加权限！</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">chmod</span> +x /data/minio/run/minio <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x /data/minio/run/run.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-5-启动集群" tabindex="-1"><a class="header-anchor" href="#_3-5-启动集群" aria-hidden="true">#</a> 3.5 启动集群</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ systemctl daemon-reload
$ systemctl <span class="token builtin class-name">enable</span> minio <span class="token operator">&amp;&amp;</span> systemctl start minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-代理集群-nginx负载均衡" tabindex="-1"><a class="header-anchor" href="#_3-6-代理集群-nginx负载均衡" aria-hidden="true">#</a> 3.6 代理集群（nginx负载均衡）</h3><p>生产环境需要使用Nginx将集群地址进行代理，对外统一入口！</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> minio</span><span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.99.1:9000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.99.2:9000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.99.3:9000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.99.4:9000</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">9000</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> minio</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">proxy_pass</span> http://minio</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">1000m</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-访问测试" tabindex="-1"><a class="header-anchor" href="#_3-7-访问测试" aria-hidden="true">#</a> 3.7 访问测试</h3><p>浏览器访问minio集群代理地址+9000端口，用户名密码为上文中启动文件run.sh中我们设置的！</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,19),h={href:"https://www.cnblogs.com/lvzhenjiang/p/14943939.html",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=r("ExternalLinkIcon");return o(),l("div",null,[c,n("p",null,[a("从"),n("a",p,[a("官网"),e(s)]),a("获取Minio！")]),u,n("p",null,[n("a",h,[a("Minio分布式集群搭建部署"),e(s)])])])}const _=t(d,[["render",v],["__file","minio-cluster-deploy.html.vue"]]);export{_ as default};
