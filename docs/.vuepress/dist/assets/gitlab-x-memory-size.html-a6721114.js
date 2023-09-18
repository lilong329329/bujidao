import{_ as e,W as a,X as i,Y as r}from"./framework-4b7e9ff4.js";const d={},n=r(`<h1 id="gitlab内存占用过大" tabindex="-1"><a class="header-anchor" href="#gitlab内存占用过大" aria-hidden="true">#</a> gitlab内存占用过大</h1><p>我的服务器配置是2核4G内存，启动gitlab 就占用了很大内存空间(停止gitlab 会释放1.5G内存)</p><h2 id="_1-解决方案" tabindex="-1"><a class="header-anchor" href="#_1-解决方案" aria-hidden="true">#</a> 1. 解决方案</h2><h3 id="_1-1-减少-unicorn-worker进程数" tabindex="-1"><a class="header-anchor" href="#_1-1-减少-unicorn-worker进程数" aria-hidden="true">#</a> 1.1 减少 unicorn worker进程数</h3><p>我们可以使用 top -ac 先看一下开启了多少unicorn worker进程，gitlab默认开启进程数与CPU内核数相同</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/gitlab/gitlab.rb
unicorn[&#39;worker_processes&#39;] = 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认是被注释掉的，官方建议该值是CPU核心数加一，可以提高服务器的响应速度，如果内存只有4G，或者服务器上有其它业务，就不要改了，以免内存不足。另外，这个参数最小值是2，设为1，服务器可能会卡死。</p><h3 id="_1-2-减少数据库缓存" tabindex="-1"><a class="header-anchor" href="#_1-2-减少数据库缓存" aria-hidden="true">#</a> 1.2 减少数据库缓存</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> postgresql[&#39;shared_buffers&#39;] = &quot;128MB&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认为256MB，可适当改小</p><h3 id="_1-3-减少数据库并发数" tabindex="-1"><a class="header-anchor" href="#_1-3-减少数据库并发数" aria-hidden="true">#</a> 1.3 减少数据库并发数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>postgresql[&#39;max_worker_processes&#39;] = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认为8，可适当减少</p><h3 id="_1-4-减少sidekiq并发数" tabindex="-1"><a class="header-anchor" href="#_1-4-减少sidekiq并发数" aria-hidden="true">#</a> 1.4 减少sidekiq并发数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sidekiq[&#39;concurrency&#39;] = 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认是25，可适当改小</p>`,16),s=[n];function t(c,l){return a(),i("div",null,s)}const h=e(d,[["render",t],["__file","gitlab-x-memory-size.html.vue"]]);export{h as default};
