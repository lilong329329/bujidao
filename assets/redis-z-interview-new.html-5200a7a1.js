import{_ as e,W as i,X as d,Y as s}from"./framework-4b7e9ff4.js";const a={},r=s('<h1 id="redis面试-新版本" tabindex="-1"><a class="header-anchor" href="#redis面试-新版本" aria-hidden="true">#</a> Redis面试 - 新版本</h1><h2 id="_1-redis单线程模型-在6-0之前如何提高多核cpu的利用率" tabindex="-1"><a class="header-anchor" href="#_1-redis单线程模型-在6-0之前如何提高多核cpu的利用率" aria-hidden="true">#</a> 1 Redis单线程模型？ 在6.0之前如何提高多核CPU的利用率？</h2><p>可以在同一个服务器部署多个Redis的实例，并把他们当作不同的服务器来使用，在某些时候，无论如何一个服务器是不够的， 所以，如果你想使用多个CPU，你可以考虑一下分片（shard）。</p><h2 id="_2-redis6-0之前的版本真的是单线程的吗" tabindex="-1"><a class="header-anchor" href="#_2-redis6-0之前的版本真的是单线程的吗" aria-hidden="true">#</a> 2 Redis6.0之前的版本真的是单线程的吗?</h2><p>Redis在处理客户端请求时,包括获取(socket读)、解析、执行、内容返回(socket写)等都是由一个顺序串行的主线程执行的,这就是所谓的 单线程.单如果严格讲,从Redis4.0之后并不是单线程,除了主线程之外,它也有后台线程在处理一些较为缓慢的操作,例如 清理脏数据, 无用链接的释放, 大key的删除, 数据持久化bgsave,bgrewriteaof等,都是在主线程之外的子线程单独执行的.</p><h2 id="_3-redis6-0之前为什么一致不用多线程" tabindex="-1"><a class="header-anchor" href="#_3-redis6-0之前为什么一致不用多线程" aria-hidden="true">#</a> 3 Redis6.0之前为什么一致不用多线程?</h2><p>官方曾做过类似问题的回复：使用Redis时，几乎不存在CPU成为瓶颈的情况， Redis主要受限于内存和网络。例如在一个普通的Linux系统上，Redis通过使用pipelining每秒可以处理100万个请求，所以如果应用程序主要使用O(N)或O(log(N))的命令，它几乎不会占用太多CPU。</p><p>使用了单线程后，可维护性高。多线程模型虽然在某些方面表现优异，但是它却引入了程序执行顺序的不确定性，带来了并发读写的一系列问题，增加了系统复杂度、同时可能存在线程切换、甚至加锁解锁、死锁造成的性能损耗。Redis通过AE事件模型以及IO多路复用等技术，处理性能非常高，因此没有必要使用多线程。单线程机制使得 Redis 内部实现的复杂度大大降低，Hash 的惰性 Rehash、Lpush 等等 “线程不安全” 的命令都可以无锁进行。</p><h2 id="_4-redis6-0为什么要引入多线程呢" tabindex="-1"><a class="header-anchor" href="#_4-redis6-0为什么要引入多线程呢" aria-hidden="true">#</a> 4 Redis6.0为什么要引入多线程呢？</h2><p>Redis将所有数据放在内存中，内存的响应时长大约为100纳秒，对于小数据包，Redis服务器可以处理80,000到100,000 QPS，这也是Redis处理的极限了，对于80%的公司来说，单线程的Redis已经足够使用了。</p><p>但随着越来越复杂的业务场景，有些公司动不动就上亿的交易量，因此需要更大的QPS。常见的解决方案是在分布式架构中对数据进行分区并采用多个服务器，但该方案有非常大的缺点，例如要管理的Redis服务器太多，维护代价大；某些适用于单个Redis服务器的命令不适用于数据分区；数据分区无法解决热点读/写问题；数据偏斜，重新分配和放大/缩小变得更加复杂等等。</p><p>从Redis自身角度来说，因为读写网络的read/write系统调用占用了Redis执行期间大部分CPU时间，瓶颈主要在于网络的 IO 消耗, 优化主要有两个方向:</p><ul><li>提高网络 IO 性能，典型的实现比如使用 DPDK 来替代内核网络栈的方式</li><li>使用多线程充分利用多核，典型的实现比如 Memcached</li></ul><p>协议栈优化的这种方式跟 Redis 关系不大，支持多线程是一种最有效最便捷的操作方式。所以总结起来，redis支持多线程主要就是两个原因：</p><ul><li>可以充分利用服务器 CPU 资源，目前主线程只能利用一个核</li><li>多线程任务可以分摊 Redis 同步 IO 读写负荷</li></ul><h2 id="_5-redis6-0默认是否开启了多线程" tabindex="-1"><a class="header-anchor" href="#_5-redis6-0默认是否开启了多线程" aria-hidden="true">#</a> 5 Redis6.0默认是否开启了多线程？</h2><p>Redis6.0的多线程默认是禁用的，只使用主线程。如需开启需要修改redis.conf配置文件：io-threads-do-reads yes</p><h2 id="_6-redis6-0多线程开启时-线程数如何设置" tabindex="-1"><a class="header-anchor" href="#_6-redis6-0多线程开启时-线程数如何设置" aria-hidden="true">#</a> 6 Redis6.0多线程开启时，线程数如何设置？</h2><p>开启多线程后，还需要设置线程数，否则是不生效的。同样修改redis.conf配置文件 io-threads4</p><p>关于线程数的设置，官方有一个建议：4核的机器建议设置为2或3个线程，8核的建议设置为6个线程，线程数一定要小于机器核数。还需要注意的是，线程数并不是越大越好，官方认为超过了8个基本就没什么意义了。</p><h2 id="_7-redis6-0多线程的实现机制" tabindex="-1"><a class="header-anchor" href="#_7-redis6-0多线程的实现机制" aria-hidden="true">#</a> 7 Redis6.0多线程的实现机制？</h2><p>核心思路是，将主线程的IO读写任务拆分出来给一组独立的线程执行，使得多个 socket 的读写可以并行化</p><ul><li>主线程负责接收建立连接的请求,获取socket放到全局等待处理队列</li><li>主线程处理完读事件之后,通过Round Robin将这些连接分配给IO线程(并不会等待队列满)</li><li>主线程阻塞等待IO线程读取socket完毕</li><li>主线程通过单线程的方式执行请求命令，请求数据读取并解析完成，但并不执行</li><li>主线程阻塞等待IO线程将数据回写socket完毕</li><li>解除绑定,清空等待队列</li></ul><p>该线程有如下特点:</p><ul><li>IO线程要么同时在读socket，要么同时在写，不会同时读或写</li><li>IO线程只负责读写socket解析命令，不负责命令处理（主线程串行执行命令）</li></ul><h2 id="_8-开启多线程后-是否会存在线程并发安全问题" tabindex="-1"><a class="header-anchor" href="#_8-开启多线程后-是否会存在线程并发安全问题" aria-hidden="true">#</a> 8 开启多线程后，是否会存在线程并发安全问题？</h2><p>Redis的多线程部分只是用来处理网络数据的读写和协议解析，执行命令仍然是单线程顺序执行,因此不存在线程的并发安全问题</p>',27),h=[r];function l(t,n){return i(),d("div",null,h)}const o=e(a,[["render",l],["__file","redis-z-interview-new.html.vue"]]);export{o as default};
