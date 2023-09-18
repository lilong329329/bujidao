import{_ as i,W as l,X as o,Z as n,$ as a,a0 as t,Y as s,D as p}from"./framework-4b7e9ff4.js";const c={},r=s('<h1 id="fastdfs安装" tabindex="-1"><a class="header-anchor" href="#fastdfs安装" aria-hidden="true">#</a> FastDFS安装</h1><h2 id="_1-什么是-fastdfs" tabindex="-1"><a class="header-anchor" href="#_1-什么是-fastdfs" aria-hidden="true">#</a> 1.什么是 FastDFS</h2><h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3><p>FastDFS 由淘宝的余庆大佬在 2008 年开源的一款轻量级分布式文件管理系统，FastDFS 用 C 语言实现，支持 Linux、FreeBSD、MacOS 等类 UNIX 系统。FastDFS 类似 google FS，属于应用级文件系统，不是通用的文件系统，只能通过专有 API 访问，目前提供了 C 和 Java SDK ，以及 PHP 扩展 SDK。</p><p>FastDFS 专为互联网应用量身定做，解决大容量文件存储问题，追求高性能和高扩展性，它可以看做是基于文件的 key/value 存储系统，key 为文件 ID，value 为文件内容，因此称作分布式文件存储服务更为合适。</p><h3 id="_1-2-为什么需要-fastdfs" tabindex="-1"><a class="header-anchor" href="#_1-2-为什么需要-fastdfs" aria-hidden="true">#</a> 1.2 为什么需要 FastDFS</h3><p>传统的企业级开发对于高并发要求不是很高，而且数据量可能也不大，在这样的环境下文件管理可能非常 Easy。</p><p>但是互联网应用访问量大、数据量大，在互联网应用中，我们必须考虑解决文件大容量存储和高性能访问的问题，而 FastDFS 就特别适合干这件事情，常见的图片存储、视频存储、文档存储等等我们都可以采用 FastDFS 来做。</p><h3 id="_1-3-fastdfs-架构" tabindex="-1"><a class="header-anchor" href="#_1-3-fastdfs-架构" aria-hidden="true">#</a> 1.3 FastDFS 架构</h3><p>作为一款分布式文件管理系统，FastDFS 主要包括四个方面的功能：</p><ul><li>文件存储</li><li>文件同步</li><li>文件上传</li><li>文件下载</li></ul><p>这个方面的功能，基本上就能搞定我们常见的文件管理需求了。</p><p>下面这是一张来自 FastDFS 官网的系统架构图：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201211172156714.png" alt="image-20201211172156714" tabindex="0" loading="lazy"><figcaption>image-20201211172156714</figcaption></figure><p>从上面这张图中我们可以看到，<strong>FastDFS 架构包括 Tracker 和 Storage 两部分，看名字大概就能知道，Tracker 用来追踪文件，相当于是文件的一个索引，而 Storage 则用来保存文件。</strong></p><p>我们上传文件的文件最终保存在 Storage 上，文件的元数据信息保存在 Tracker 上，通过 Tracker 可以实现对 Storage 的负载均衡。</p><p>Storage 一般会搭建成集群，一个 Storage Cluster 可以由多个组构成，不同的组之间不进行通信，一个组又相当于一个小的集群，组由多个 Storage Server 组成，组内的 Storage Server 会通过连接进行文件同步来保证高可用。</p><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2. 安装</h2><p>为了测试方便，不开启多台虚拟机，Tracker 和 Storage 我将安装在同一台服务器上。</p><p>图片上传我们一般使用 FastDFS，图片上传成功之后，接下来的图片访问我们一般采用 Nginx。我们分别从以下三个方面介绍</p><ul><li>Tracker 安装</li><li>Storage 安装</li><li>Nginx 安装（只介绍关键配置）</li></ul><h3 id="_2-1-tracker-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-tracker-安装" aria-hidden="true">#</a> 2.1 Tracker 安装</h3><p>安装，我们首先需要准备一个环境两个库以及一个安装包。</p>',23),d=n("li",null,[n("p",null,"一个环境"),n("p",null,"FastDFS 采用 C 语言开发，所以在安装之前，如果没有 gcc 环境，需要先安装，安装命令如下："),n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`yum install gcc-c++
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])],-1),u=n("p",null,"两个库",-1),g=n("li",null,[n("p",null,"libevent"),n("p",null,"FastDFS 依赖 libevent 库，安装命令如下："),n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`yum -y install libevent
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])],-1),v=n("p",null,"libfastcommon",-1),m=n("p",null,"FastDFS 官方提供的，它包含了 FastDFS 运行所需要的一些基础库。",-1),k={href:"https://github.com/happyfish100/libfastcommon/archive/V1.0.43.tar.gz",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/happyfish100/libfastcommon/archive/V1.0.43.tar.gz",target:"_blank",rel:"noopener noreferrer"},b=s(`<p>将下载好的 libfastcommon 拷贝至 /usr/local/ 目录下，然后依次执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token builtin class-name">cd</span> /usr/local
 <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> libfastcommon-1.0.43.tar.gz 
 <span class="token builtin class-name">cd</span> libfastcommon-1.0.43/
 ./make.sh
 ./make.sh <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=n("p",null,"一个安装包",-1),_=n("p",null,[a("接下来我们下载 Tracker，注意，"),n("strong",null,"由于 Tracker 和 Storage 是相同的安装包"),a("，所以下载一次即可")],-1),x={href:"https://github.com/happyfish100/fastdfs/archive/V6.06.tar.gz",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/happyfish100/fastdfs/archive/V6.06.tar.gz",target:"_blank",rel:"noopener noreferrer"},y=s(`<p>下载成功后，将下载文件拷贝到 /usr/local 目录下，然后依次执行如下命令安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> fastdfs-6.06.tar.gz
<span class="token builtin class-name">cd</span> fastdfs-6.06/
./make.sh
./make.sh <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装成功后，执行如下命令，将安装目录内 conf 目录下的配置文件拷贝到 /etc/fdfs 目录下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd conf/
cp ./* /etc/fdfs/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),z=s(`<li><p>配置</p><p>进入 /etc/fdfs/ 目录下进行配置：</p><p>打开 tracker.conf 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> tracker.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改如下配置：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201211094903515.png" alt="image-20201211094903515" tabindex="0" loading="lazy"><figcaption>image-20201211094903515</figcaption></figure></li>`,1),F=s(`<ul><li>默认端口:22122 （无特殊需求暂不做修改）</li><li>元数据的保存目录：（注意目录要存在）</li></ul><ol start="5"><li><p>启动</p><p>接下来执行如下命令启动 Tracker：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/bin/fdfs_trackerd /etc/fdfs/tracker.conf start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_2-2-storage-安装" tabindex="-1"><a class="header-anchor" href="#_2-2-storage-安装" aria-hidden="true">#</a> 2.2 Storage 安装</h3><p>这里我们搭建一个 Storage 实例即可。Storage 安装也需要 libevent 和 libfastcommon，这两个库的安装参考上文</p><p>Storage 本身的安装，也和 Tracker 一致，执行命令也都一样，因为我这里将 Tracker 和 Storage 安装在同一台服务器上，所以不用再执行安装命令了（相当于安装 Tracker 时已经安装了 Storage 了）。</p><p>唯一要做的，就是进入到 /etc/fdfs 目录下，配置 Storage：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi storage.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201211101021672.png" alt="image-20201211101021672" tabindex="0" loading="lazy"><figcaption>image-20201211101021672</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201211100945362.png" alt="image-20201211100945362" tabindex="0" loading="lazy"><figcaption>image-20201211100945362</figcaption></figure><p>这里一共配置三个地方，分别是 base_path、store_path0 以及 tracker_server ，tracker_server 模板有两个地址，我们这里只有一个，配置完成后，记得注释掉另外一个不用的。</p><p>配置完成后，执行如下命令启动 Storage：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/bin/fdfs_storaged /etc/fdfs/storage.conf start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这两个启动完成后，现在就可以做文件的上传了，但是一般如果是图片文件，我们还需要提供一个图片的访问功能，目前来说最佳方案当然是 Nginx 了，所以我们这里连同 Nginx 一起配置好，再来做测试。</p><h3 id="_2-3-nginx-安装" tabindex="-1"><a class="header-anchor" href="#_2-3-nginx-安装" aria-hidden="true">#</a> 2.3 Nginx 安装</h3><p>Nginx 的安装分为两个步骤：</p><ul><li>安装 Nginx</li><li>首先在 Storage 下安装 fastdfs-nginx-module</li></ul><h4 id="_2-3-1-安装nginx" tabindex="-1"><a class="header-anchor" href="#_2-3-1-安装nginx" aria-hidden="true">#</a> 2.3.1 安装Nginx</h4>`,17),w={href:"http://java.isture.com/linux/nginx/%E5%AE%89%E8%A3%85nginx.html",target:"_blank",rel:"noopener noreferrer"},E=n("h4",{id:"_2-3-2-storage-下安装-fastdfs-nginx-module",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-3-2-storage-下安装-fastdfs-nginx-module","aria-hidden":"true"},"#"),a(" 2.3.2 Storage 下安装 fastdfs-nginx-module")],-1),D=n("p",null,"下载fastdfs-nginx-module",-1),A={href:"https://github.com/happyfish100/fastdfs-nginx-module/releases",target:"_blank",rel:"noopener noreferrer"},T=s(`<li><p>下载完成后，将下载的文件拷贝到 /usr/local 目录下。然后进入 /usr/local 目录，分别执行如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /usr/local/
tar -zxvf fastdfs-nginx-module-1.22.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>然后将 <code>/usr/local/fastdfs-nginx-module-1.22/src/mod_fastdfs.conf</code> 文件拷贝到 <code>/etc/fdfs/</code> 目录下，并修改该文件的内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> /usr/local/fastdfs-nginx-module-1.22/src/mod_fastdfs.conf /etc/fdfs/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改mod_fastdfs.conf的内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /etc/fdfs/mod_fastdfs.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201211102958727.png" alt="image-20201211102958727" tabindex="0" loading="lazy"><figcaption>image-20201211102958727</figcaption></figure></li><li><p>接下来，回到第一步下载的 nginx 安装文件的解压目录中，执行如下命令，重新配置编译安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure --add-module<span class="token operator">=</span>/usr/local/fastdfs-nginx-module-1.22/src
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装完成后，修改 nginx 的配置文件，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>	server {
        listen          80;
        server_name     127.0.0.1;       
		location ~/group([0-9]) {
            ngx_fastdfs_module;
       	}
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里配置 nginx 请求转发。</p><p>配置完成后，启动 nginx，看到如下日志，表示 nginx 启动成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ngx_http_fastdfs_set pid=19040
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>疑问：fastdfs-nginx-module 有啥用</strong></p><p>看了整个安装过程之后，很多小伙伴有疑问，到头来还是 nginx 本身直接找到了图片文件目录，fastdfs-nginx-module 到底有啥用？</p><p>前面我们说过，Storage 由很多组构成，每个组又是一个小的集群，在每一个组里边，数据会进行同步，但是如果数据还没同步，这个时候就有请求发来了，该怎么办？此时<strong>fastdfs-nginx-module 会帮助我们直接从源 Storage 上获取文件。</strong></p></li>`,5),j=s(`<h2 id="_3-启动fastdfs" tabindex="-1"><a class="header-anchor" href="#_3-启动fastdfs" aria-hidden="true">#</a> 3. 启动fastDFS</h2><p>重启tracker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/bin/fdfs_trackerd /etc/fdfs/tracker.conf start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启storage</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/bin/fdfs_storaged /etc/fdfs/storage.conf start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-java客户端调用" tabindex="-1"><a class="header-anchor" href="#_4-java客户端调用" aria-hidden="true">#</a> 4. Java客户端调用</h2><h3 id="_4-1-相关配置" tabindex="-1"><a class="header-anchor" href="#_4-1-相关配置" aria-hidden="true">#</a> 4.1 相关配置</h3><p>安装成功后，接下来我们就用 Java 客户端来测试一下文件上传下载。</p><ol><li><p>添加maven 依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>net.oschina.zcx7878<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>fastdfs-client-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.27.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在项目的 resources 目录下添加 FastDFS 的配置文件 fastdfs-client.properties，内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fastdfs.connect_timeout_in_seconds = 5
fastdfs.network_timeout_in_seconds = 30
fastdfs.charset = UTF-8
fastdfs.http_anti_steal_token = false
fastdfs.http_secret_key = FastDFS1234567890
fastdfs.http_tracker_http_port = 80
fastdfs.tracker_servers = 120.79.200.222:22122
fastdfs.connection_pool.enabled = true
fastdfs.connection_pool.max_count_per_entry = 500
fastdfs.connection_pool.max_idle_time = 3600
fastdfs.connection_pool.max_wait_time_in_ms = 1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fastdfs.tracker_servers: 这是 Tracker 的地址，根据实际情况配置即可。</p></li></ol><h3 id="_4-2-文件上传" tabindex="-1"><a class="header-anchor" href="#_4-2-文件上传" aria-hidden="true">#</a> 4.2 文件上传</h3><p>配置完成后，先来看文件上传，代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testUpload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">ClientGlobal</span><span class="token punctuation">.</span><span class="token function">initByProperties</span><span class="token punctuation">(</span><span class="token string">&quot;fastdfs-client.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TrackerClient</span> tracker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TrackerClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TrackerServer</span> trackerServer <span class="token operator">=</span> tracker<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">StorageServer</span> storageServer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token class-name">StorageClient1</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StorageClient1</span><span class="token punctuation">(</span>trackerServer<span class="token punctuation">,</span> storageServer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">NameValuePair</span> nvp<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token comment">//上传到文件系统</span>
            <span class="token class-name">String</span> fileId <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">upload_file1</span><span class="token punctuation">(</span><span class="token string">&quot;img\\test.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jpg&quot;</span><span class="token punctuation">,</span>
                    nvp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>fileId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行步骤</p>`,13),C=n("li",null,[n("p",null,"首先加载配置文件")],-1),B=n("li",null,[n("p",null,"然后构造一个 TrackerClient 对象")],-1),I=n("li",null,[n("p",null,"根据这个对象获取到一个 TrackerServer")],-1),q=n("li",null,[n("p",null,"然后创建一个 StorageClient1 实例")],-1),N=n("li",null,[n("p",null,"NameValuePair 中保存的是文件的元数据信息，如果有的话，就以 key/value 的方式来设置，如果没有的话，直接给一个 null 即可。")],-1),P=n("p",null,"调用 client 的 upload_file1 方法上传文件，第一个参数是文件路径，第二个参数是文件的扩展名，第三个参数就是文件的元数据信息，这个方法的返回值，就是上传文件的访问路径。",-1),M=n("p",null,"执行该方法，打印日志如下：",-1),H=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`group1/M00/00/00/eE_Ib1_S57OAa6pQAADzHWHkPwM335.jpg
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),O={href:"http://120.79.200.xxx:8701/group1/M00/00/00/eE_Ib1_S57OAa6pQAADzHWHkPwM335.jpg",target:"_blank",rel:"noopener noreferrer"},V=s(`<h4 id="_4-2-1-图片显示不出" tabindex="-1"><a class="header-anchor" href="#_4-2-1-图片显示不出" aria-hidden="true">#</a> 4.2.1 图片显示不出</h4><p>FastDFS 配好了，Nginx也配好了，可是网页打开图片地址就是访问不了，查看Nginx的log文件看到</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  ERROR - file: /usr/local/src/fastdfs-nginx-module-1.20/src/common.c, line: <span class="token number">111</span>, section: group1, you must <span class="token builtin class-name">set</span> parameter: group_name<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到 mod_fastdfs.conf ，发现groupname 没有写对(被注释了)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># when support multi-group on this storage server, uncomment following section</span>
  <span class="token punctuation">[</span>group1<span class="token punctuation">]</span>
  <span class="token assign-left variable">group_name</span><span class="token operator">=</span>group1
  <span class="token assign-left variable">storage_server_port</span><span class="token operator">=</span><span class="token number">23000</span>
  <span class="token assign-left variable">store_path_count</span><span class="token operator">=</span><span class="token number">1</span>
  <span class="token assign-left variable">store_path0</span><span class="token operator">=</span>/home/fastdfsuser/fastdfs
  <span class="token comment">#store_path1=/home/yuqing/fastdfs1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启fastdfs 和 nginx</p><h3 id="_4-3-文件下载" tabindex="-1"><a class="header-anchor" href="#_4-3-文件下载" aria-hidden="true">#</a> 4.3 文件下载</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testDownload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">ClientGlobal</span><span class="token punctuation">.</span><span class="token function">initByProperties</span><span class="token punctuation">(</span><span class="token string">&quot;fastdfs-client.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TrackerClient</span> tracker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TrackerClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TrackerServer</span> trackerServer <span class="token operator">=</span> tracker<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">StorageServer</span> storageServer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token class-name">StorageClient1</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StorageClient1</span><span class="token punctuation">(</span>trackerServer<span class="token punctuation">,</span> storageServer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">download_file1</span><span class="token punctuation">(</span><span class="token string">&quot;group1/M00/00/00/eE_Ib1_S57OAa6pQAADzHWHkPwM335.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;img\\\\out.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
            fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接调用 download_file1 方法获取到一个 byte 数组，然后通过 IO 流写出到本地文件即可。</p><h2 id="_5-安全问题" tabindex="-1"><a class="header-anchor" href="#_5-安全问题" aria-hidden="true">#</a> 5. 安全问题</h2><p>现在，任何人都可以访问我们服务器上传文件，这肯定是不行的，这个问题好解决，加一个上传时候的令牌即可。</p>`,11),W=s(`<li><p>首先我们在服务端开启令牌校验：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /etc/fdfs/http.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201211150330620.png" alt="image-20201211150330620" tabindex="0" loading="lazy"><figcaption>image-20201211150330620</figcaption></figure></li><li><p>重启服务端</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./nginx -s stop
./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),Q=s(`<p>前端获取令牌</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> ts <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token class-name">Instant</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getEpochSecond</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> token <span class="token operator">=</span> <span class="token class-name">ProtoCommon</span><span class="token punctuation">.</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token string">&quot;M00/00/00/eE_Ib1_S57OAa6pQAADzHWHkPwM335.jpg&quot;</span><span class="token punctuation">,</span> ts<span class="token punctuation">,</span> <span class="token string">&quot;FastDFS1234567890&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;?token=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;ts=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>ts<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据 ProtoCommon.getToken 方法来获取令牌</p><ul><li>第一个参数是你要访问的文件 id，<strong>注意，这个地址里边不包含 group，千万别搞错了；</strong></li><li>第二个参数是时间戳</li><li>第三个参数是密钥，密钥要和服务端的配置一致。</li></ul><p>将生成的字符串拼接，追加到访问路径后面，如：</p>`,5),X={href:"http://120.79.200.xxx:8701/group1/M00/00/00/eE_Ib1_S57OAa6pQAADzHWHkPwM335.jpg?token=94a8e7167e1583b0efa674d0dbf5fc63&ts=1607670503%E3%80%82**%E6%AD%A4%E6%97%B6%E8%AE%BF%E9%97%AE%E8%B7%AF%E5%BE%84%E9%87%8C%E8%BE%B9%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E4%BB%A4%E7%89%8C%EF%BC%8C%E4%BC%9A%E8%AE%BF%E9%97%AE%E5%A4%B1%E8%B4%A5%E3%80%82",target:"_blank",rel:"noopener noreferrer"},G=s(`<h2 id="_6-异常处理" tabindex="-1"><a class="header-anchor" href="#_6-异常处理" aria-hidden="true">#</a> 6.异常处理</h2><h3 id="_6-1-getstorestorage-fail-errno-code-28" tabindex="-1"><a class="header-anchor" href="#_6-1-getstorestorage-fail-errno-code-28" aria-hidden="true">#</a> 6.1 getStoreStorage fail, errno code: 28</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201211113209071.png" alt="image-20201211113209071" tabindex="0" loading="lazy"><figcaption>image-20201211113209071</figcaption></figure><p>引起错误的原因是，在我们配置tracker的时候，里面有一个配置项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># reserved storage space for system or other applications.
# if the free(available) space of any stoarge server in
# a group &lt;= reserved_storage_space, no file can be uploaded to this group.
# bytes unit can be one of follows:
### G or g for gigabyte(GB)
### M or m for megabyte(MB)
### K or k for kilobyte(KB)
### no unit for byte(B)
### XX.XX% as ratio such as: reserved_storage_space = 10%
reserved_storage_space = 10%

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该配置项是配置storage服务预留磁盘空间的大小的比值，默认是10%，即当磁盘空间不足10%时，则tracker拒绝上传文件。</p><p>解决方法：</p><ol><li>删除不用文件，最好调用DFS的删除API执行删除，因为DFS会维护一个索引文件，调用API删除时会连同索引文件都会删除。这种方式谨慎使用。</li><li>如果文件不允许删除，则需要扩展磁盘。</li><li>临时解决方案，调小该比例</li></ol><h3 id="_6-2-客户端连接超时" tabindex="-1"><a class="header-anchor" href="#_6-2-客户端连接超时" aria-hidden="true">#</a> 6.2 客户端连接超时</h3><p>connect timed out</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210324234312735.png" alt="image-20210324234312735" tabindex="0" loading="lazy"><figcaption>image-20210324234312735</figcaption></figure><p>我们需要确认fdfs 端口是否打开，如果是阿里云服务器，则需要配置安全组</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210324234130717.png" alt="image-20210324234130717" tabindex="0" loading="lazy"><figcaption>image-20210324234130717</figcaption></figure><p>端口有两个：<strong>22122 和23000 都要开启</strong>！！！！</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,15),K={href:"https://blog.csdn.net/u012702547/article/details/104589468",target:"_blank",rel:"noopener noreferrer"},J={href:"https://blog.csdn.net/weixin_42591789/article/details/87931282",target:"_blank",rel:"noopener noreferrer"};function L(R,U){const e=p("ExternalLinkIcon");return l(),o("div",null,[r,n("ol",null,[d,n("li",null,[u,n("ul",null,[g,n("li",null,[v,m,n("p",null,[n("a",k,[a("下载地址"),t(e)]),a(" : "),n("a",f,[a("https://github.com/happyfish100/libfastcommon/archive/V1.0.43.tar.gz"),t(e)])]),b])])]),n("li",null,[h,_,n("p",null,[n("a",x,[a("下载地址"),t(e)]),a(" : "),n("a",S,[a("https://github.com/happyfish100/fastdfs/archive/V6.06.tar.gz"),t(e)])]),y]),z]),F,n("p",null,[a("参考："),n("a",w,[a("安装nginx"),t(e)])]),E,n("ol",null,[n("li",null,[D,n("p",null,[n("a",A,[a("下载地址"),t(e)])])]),T]),j,n("ol",null,[C,B,I,q,N,n("li",null,[P,M,H,n("p",null,[a("就是文件的路径，此时，在浏览器中输入"),n("a",O,[a("http://120.79.200.xxx:8701/group1/M00/00/00/eE_Ib1_S57OAa6pQAADzHWHkPwM335.jpg"),t(e)]),a(" 就可以看到上传的图片了。")])])]),V,n("ol",null,[W,n("li",null,[Q,n("p",null,[n("a",X,[a("http://120.79.200.xxx:8701/group1/M00/00/00/eE_Ib1_S57OAa6pQAADzHWHkPwM335.jpg?token=94a8e7167e1583b0efa674d0dbf5fc63&ts=1607670503。**此时访问路径里边如果没有令牌，会访问失败。"),t(e)]),a("**")])])]),G,n("p",null,[n("a",K,[a("手把手教你用 FastDFS 构建分布式文件管理系统"),t(e)])]),n("p",null,[n("a",J,[a("FastDFS + Nginx 网页访问不了"),t(e)])])])}const Z=i(c,[["render",L],["__file","filesystem-fastdfs.html.vue"]]);export{Z as default};
