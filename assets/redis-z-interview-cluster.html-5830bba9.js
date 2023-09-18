import{_ as e,W as i,X as s,Y as r}from"./framework-4b7e9ff4.js";const a={},d=r('<h1 id="redis面试-集群-分片技术" tabindex="-1"><a class="header-anchor" href="#redis面试-集群-分片技术" aria-hidden="true">#</a> Redis面试 - 集群-分片技术</h1><h2 id="_1-什么是redis-cluster" tabindex="-1"><a class="header-anchor" href="#_1-什么是redis-cluster" aria-hidden="true">#</a> 1 什么是Redis Cluster？</h2><p>Redis-cluster是一种服务器Sharding技术，Redis3.0以后版本正式提供支持。</p><h2 id="_2-说说redis哈希槽的概念-为什么是16384个" tabindex="-1"><a class="header-anchor" href="#_2-说说redis哈希槽的概念-为什么是16384个" aria-hidden="true">#</a> 2 说说Redis哈希槽的概念？为什么是16384个？</h2><p>Redis-cluster没有使用一致性hash，而是引入了<strong>哈希槽</strong>的概念。Redis-cluster中有16384(即2的14次方）个哈希槽，每个key通过CRC16校验后对16383取模来决定放置哪个槽。Cluster中的每个节点负责一部分hash槽（hash slot）。</p><p>比如集群中存在三个节点，则可能存在的一种分配如下：</p><ol><li>节点A包含0到5500号哈希槽；</li><li>节点B包含5501到11000号哈希槽；</li><li>节点C包含11001 到 16384号哈希槽。</li></ol><ul><li><strong>为什么是16384个</strong></li></ul><p>我们知道一致性hash算法是2的16次方，为什么hash slot是2的14次方呢？</p><ol><li><p>如果槽位为65536，发送心跳信息的消息头达8k，发送的心跳包过于庞大。</p><p>如上所述，在消息头中，最占空间的是myslots[CLUSTER_SLOTS/8]。 当槽位为65536时，这块的大小是: 65536÷8÷1024=8kb 因为每秒钟，redis节点需要发送一定数量的ping消息作为心跳包，如果槽位为65536，这个ping消息的消息头太大了，浪费带宽。</p></li><li><p>redis的集群主节点数量基本不可能超过1000个。</p><p>如上所述，集群节点越多，心跳包的消息体内携带的数据越多。如果节点过1000个，也会导致网络拥堵。因此redis作者，不建议redis cluster节点数量超过1000个。 那么，对于节点数在1000以内的redis cluster集群，16384个槽位够用了。没有必要拓展到65536个。</p></li><li><p>槽位越小，节点少的情况下，压缩比高</p><p>Redis主节点的配置信息中，它所负责的哈希槽是通过一张bitmap的形式来保存的，在传输过程中，会对bitmap进行压缩，但是如果bitmap的填充率slots / N很高的话(N表示节点数)，bitmap的压缩率就很低。 如果节点数很少，而哈希槽数量很多的话，bitmap的压缩率就很低。</p></li></ol><h2 id="_3-redis集群会有写操作丢失吗-为什么" tabindex="-1"><a class="header-anchor" href="#_3-redis集群会有写操作丢失吗-为什么" aria-hidden="true">#</a> 3 Redis集群会有写操作丢失吗？为什么？</h2><p>Redis并不能保证数据的强一致性，这意味这在实际中集群在特定的条件下可能会丢失写操作。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>',13),t=[d];function l(h,n){return i(),s("div",null,t)}const p=e(a,[["render",l],["__file","redis-z-interview-cluster.html.vue"]]);export{p as default};
