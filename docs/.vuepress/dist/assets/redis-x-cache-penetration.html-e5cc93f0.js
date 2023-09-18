import{_ as e,W as a,X as r,Y as d}from"./framework-4b7e9ff4.js";const i={},h=d('<h1 id="redis缓存穿透" tabindex="-1"><a class="header-anchor" href="#redis缓存穿透" aria-hidden="true">#</a> Redis缓存穿透</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>一般是黑客故意去请求缓存中不存在的数据，导致所有的请求都落到数据库上，造成数据库短时间内承受大量请求而崩掉</p><blockquote><p>我们redis中的数据都是从数据库中放进来的，他之所以会穿透是因为在redis里面没有查到，在数据库里也没有查到。</p><p>这样数据库就不能吧这条数据放到redis里，redis就拿不到那条数据。你每次要来那条数据的时候，都要去查数据库，然后数据库还没有一个反馈，这样就是一个恶性循环。导致了缓存穿透</p><p>如果大量的访问或者恶意的攻击，你直接去查你那条没有的数据。他会给你的数据库造成很大压力。也就是说他跳过了redis缓存。我们使用redis 就是为了减少数据库压力，但是现在redis 就没有起到相应的作用。这样就给数据库造成了很大压力</p></blockquote><h2 id="_2-解决办法" tabindex="-1"><a class="header-anchor" href="#_2-解决办法" aria-hidden="true">#</a> 2. 解决办法</h2><h3 id="方案1-布隆过滤器" tabindex="-1"><a class="header-anchor" href="#方案1-布隆过滤器" aria-hidden="true">#</a> 方案1：布隆过滤器</h3><p>将所有可能存在的数据哈希到一个足够大的bitmap中，一个一定不存在的数据会被 这个bitmap拦截掉。从而避免了对底层存储系统的查询压力</p><h3 id="方案2-返回数据为空也缓存" tabindex="-1"><a class="header-anchor" href="#方案2-返回数据为空也缓存" aria-hidden="true">#</a> 方案2：返回数据为空也缓存</h3><p>如果一个查询返回的数据为空（不管是数据不存在，还是系统故障），我们仍然把这个空结果进行缓存，但它的过期时间会很短，最长不超过5分钟</p><h3 id="方案3" tabindex="-1"><a class="header-anchor" href="#方案3" aria-hidden="true">#</a> 方案3：</h3><p>如果数据库没有，我们可以把他的key存上，给他返回null。然后把这个null 存在redis里面</p><h3 id="方案4" tabindex="-1"><a class="header-anchor" href="#方案4" aria-hidden="true">#</a> 方案4：</h3><p>如果一个ip频繁的访问你数据库里面没有的那个字段，那么我就认定这是一条恶性攻击行为。我会锁定ip</p>',13),t=[h];function s(n,c){return a(),r("div",null,t)}const p=e(i,[["render",s],["__file","redis-x-cache-penetration.html.vue"]]);export{p as default};
