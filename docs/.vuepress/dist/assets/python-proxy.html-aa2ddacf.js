import{_ as t,W as o,X as i,Z as n,$ as s,a0 as p,Y as e,D as l}from"./framework-4b7e9ff4.js";const c={},u=e('<h1 id="小象代理" tabindex="-1"><a class="header-anchor" href="#小象代理" aria-hidden="true">#</a> 小象代理</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>反爬虫技术中最常见的技术就是封ip，那么我们如何对抗呢？我们可以使用高匿ip。这个高匿ip只存活1-2分钟。我们每格10秒换一个ip</p><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2. 使用</h2>',4),r={href:"https://www.xiaoxiangdaili.com/ip-short/guide",target:"_blank",rel:"noopener noreferrer"},d=n("li",null,[n("p",null,"申请试用"),n("figure",null,[n("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210302095623043.png",alt:"image-20210302095623043",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image-20210302095623043")])],-1),k=n("p",null,"获取代理的ip",-1),v={href:"https://api.xiaoxiangdaili.com/ip/get?appKey=683854977391022080&appSecret=IXhGvwsx&cnt=20&wt=json",target:"_blank",rel:"noopener noreferrer"},m=n("figure",null,[n("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210302100007951.png",alt:"image-20210302100007951",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image-20210302100007951")],-1),_=n("h2",{id:"_3-项目集成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-项目集成","aria-hidden":"true"},"#"),s(" 3. 项目集成")],-1),b=n("p",null,"思路：",-1),y=n("ol",null,[n("li",null,"每隔4s取一次高匿ip"),n("li",null,"将高匿ip保存到redis list"),n("li",null,"当redis中的ip>=20 的时候，不再往里添加"),n("li",null,"每次请求消耗一个ip")],-1),g=n("p",null,"代码",-1),f=e(`<li><p>redis 代码: db_handle_redis.py</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> redis
<span class="token keyword">import</span> json

<span class="token keyword">class</span> <span class="token class-name">DbHandleRedis</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> db_host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>db_port<span class="token operator">=</span><span class="token number">6379</span><span class="token punctuation">,</span>db_index<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>db_host <span class="token operator">=</span> db_host
        self<span class="token punctuation">.</span>db_port <span class="token operator">=</span> db_port
        self<span class="token punctuation">.</span>db_index <span class="token operator">=</span> db_index
        self<span class="token punctuation">.</span>redis_conn <span class="token operator">=</span> redis<span class="token punctuation">.</span>StrictRedis<span class="token punctuation">(</span>self<span class="token punctuation">.</span>db_host<span class="token punctuation">,</span>self<span class="token punctuation">.</span>db_port<span class="token punctuation">,</span>self<span class="token punctuation">.</span>db_index<span class="token punctuation">,</span>decode_responses<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__del__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>redis_conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">rpush_ip_proxy</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>ip_proxy<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>redis_conn<span class="token punctuation">.</span>rpush<span class="token punctuation">(</span><span class="token string">&#39;ip_proxy_list&#39;</span><span class="token punctuation">,</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>ip_proxy<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">lpop_ip_proxy</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ip_proxy_json <span class="token operator">=</span> self<span class="token punctuation">.</span>redis_conn<span class="token punctuation">.</span>lpop<span class="token punctuation">(</span><span class="token string">&#39;ip_proxy_list&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> ip_proxy_json <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        ip_proxy_json <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>ip_proxy_json<span class="token punctuation">)</span>
        <span class="token keyword">return</span> ip_proxy_json

    <span class="token keyword">def</span> <span class="token function">llen_ip_proxy</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>redis_conn<span class="token punctuation">.</span>llen<span class="token punctuation">(</span><span class="token string">&#39;ip_proxy_list&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取高匿ip代码： ip_proxy_handle.py</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> requests
<span class="token keyword">from</span> db_handle_redis <span class="token keyword">import</span> DbHandleRedis


<span class="token keyword">def</span> <span class="token function">get_proxy_ip</span><span class="token punctuation">(</span>db_redis<span class="token punctuation">)</span><span class="token punctuation">:</span>
    base_url <span class="token operator">=</span> <span class="token string">&#39;https://api.xiaoxiangdaili.com/ip/get?appKey=683854977391022080&amp;appSecret=IXhGvwsx&amp;cnt=20&amp;wt=json&#39;</span>
    headers <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 间隔4s轮询</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
        <span class="token comment"># redis 中的ip如果大于20个，则不再往里添加</span>
        ip_proxy_len <span class="token operator">=</span> db_redis<span class="token punctuation">.</span>llen_ip_proxy<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> ip_proxy_len <span class="token operator">&gt;=</span> <span class="token number">20</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;redis中的高匿ip超过20个&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span>base_url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
                resp_data <span class="token operator">=</span> resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> resp_data<span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
                    <span class="token comment"># 提取出ip和端口，记录当前时间。保存在数据库中</span>
                    ip_data <span class="token operator">=</span> resp_data<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;ip&#39;</span><span class="token punctuation">]</span>
                    port_data <span class="token operator">=</span> resp_data<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;port&#39;</span><span class="token punctuation">]</span>
                    ip_proxy <span class="token operator">=</span> <span class="token string">&#39;{}:{}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>ip_data<span class="token punctuation">,</span> port_data<span class="token punctuation">)</span>
                    current_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
                    ip_info <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                    ip_info<span class="token punctuation">[</span><span class="token string">&#39;ip_proxy&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> ip_proxy
                    ip_info<span class="token punctuation">[</span><span class="token string">&#39;time&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> current_time
                    db_redis<span class="token punctuation">.</span>rpush_ip_proxy<span class="token punctuation">(</span>ip_info<span class="token punctuation">)</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;ip代理信息：&#39;</span> <span class="token operator">+</span> ip_proxy<span class="token punctuation">)</span>
                <span class="token keyword">elif</span> resp_data<span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1003</span><span class="token punctuation">:</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;ip proxy is over.&#39;</span><span class="token punctuation">)</span>
                    <span class="token keyword">break</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;e:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    db_redis <span class="token operator">=</span> DbHandleRedis<span class="token punctuation">(</span><span class="token punctuation">)</span>
    get_proxy_ip<span class="token punctuation">(</span>db_redis<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),h={href:"http://crawler.py",target:"_blank",rel:"noopener noreferrer"},x=e(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> requests

<span class="token keyword">class</span> <span class="token class-name">CrawlerApp</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> db_redis<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>db_redis <span class="token operator">=</span> db_redis

    <span class="token keyword">def</span> <span class="token function">get_ip_proxy</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ip_proxy_info <span class="token operator">=</span> self<span class="token punctuation">.</span>db_redis<span class="token punctuation">.</span>lpop_ip_proxy<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> ip_proxy_info <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------未获取到ip_proxy-------&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            current_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> current_time <span class="token operator">-</span> ip_proxy_info<span class="token punctuation">[</span><span class="token string">&#39;time&#39;</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span><span class="token number">120</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------ip_proxy 超过2分钟-------&#39;</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            self<span class="token punctuation">.</span>ip_proxy <span class="token operator">=</span> ip_proxy_info<span class="token punctuation">[</span><span class="token string">&#39;ip_proxy&#39;</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>

    <span class="token comment"># 具体业务请求的时候，先获取ip。判断是否超时，不超时添加到代理</span>
    <span class="token keyword">def</span> <span class="token function">get_yewu</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        bool_result <span class="token operator">=</span> self<span class="token punctuation">.</span>get_ip_proxy<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> bool_result <span class="token operator">==</span> <span class="token boolean">False</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>

        ip_proxies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        ip_proxies<span class="token punctuation">[</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>ip_proxy

        requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://example.org&quot;</span><span class="token punctuation">,</span> proxies<span class="token operator">=</span>ip_proxies<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function w(j,z){const a=l("ExternalLinkIcon");return o(),i("div",null,[u,n("p",null,[n("a",r,[s("https://www.xiaoxiangdaili.com/ip-short/guide"),p(a)])]),n("ol",null,[d,n("li",null,[k,n("p",null,[n("a",v,[s("https://api.xiaoxiangdaili.com/ip/get?appKey=683854977391022080&appSecret=IXhGvwsx&cnt=20&wt=json"),p(a)])]),m])]),_,b,y,g,n("ol",null,[f,n("li",null,[n("p",null,[s("具体的抓包设置代理："),n("a",h,[s("crawler.py"),p(a)])]),x])])])}const q=t(c,[["render",w],["__file","python-proxy.html.vue"]]);export{q as default};
