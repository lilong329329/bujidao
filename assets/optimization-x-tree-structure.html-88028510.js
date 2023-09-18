import{_ as n,W as s,X as a,Y as t}from"./framework-4b7e9ff4.js";const p={},e=t(`<h1 id="树结构优化记录" tabindex="-1"><a class="header-anchor" href="#树结构优化记录" aria-hidden="true">#</a> 树结构优化记录</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>本来是很简单的一个树结构，但是我们数据库中的数据过大，导致查询SQL 和 转换为树结构的时候速度过慢</p><h2 id="_2-优化前数据" tabindex="-1"><a class="header-anchor" href="#_2-优化前数据" aria-hidden="true">#</a> 2. 优化前数据</h2><table><thead><tr><th>数据量</th><th>SQL 查询耗时</th><th>转为树结构</th></tr></thead><tbody><tr><td>6000条</td><td>1881ms</td><td>12658ms</td></tr></tbody></table><p>我们前端10s 就超时了，所以这里总共耗费14s 是不能接受的</p><h2 id="_3-优化前代码" tabindex="-1"><a class="header-anchor" href="#_3-优化前代码" aria-hidden="true">#</a> 3. 优化前代码</h2><p>Controller 层</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     * 获取部门下拉树列表
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/treeselect&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">treeselect</span><span class="token punctuation">(</span><span class="token class-name">SysDept</span> dept<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> depts <span class="token operator">=</span> deptService<span class="token punctuation">.</span><span class="token function">selectDeptList</span><span class="token punctuation">(</span>dept<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>deptService<span class="token punctuation">.</span><span class="token function">buildDeptTreeSelect</span><span class="token punctuation">(</span>depts<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>查询部门下所有数据</li><li>将数据转为树结构</li></ol><p>service 层</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token doc-comment comment">/**
     * 构建前端所需要下拉树结构
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">depts</span> 部门列表
     * <span class="token keyword">@return</span> 下拉树结构列表
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildDeptTreeSelect</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> depts<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> deptTrees <span class="token operator">=</span> <span class="token function">buildDeptTree</span><span class="token punctuation">(</span>depts<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> deptTrees<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">TreeSelect</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    
        <span class="token doc-comment comment">/**
     * 构建前端所需要树结构
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">depts</span> 部门列表
     * <span class="token keyword">@return</span> 树结构列表
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildDeptTree</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> depts<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> returnList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> tempList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SysDept</span> dept <span class="token operator">:</span> depts<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            tempList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dept<span class="token punctuation">.</span><span class="token function">getDeptId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span> depts<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">SysDept</span> dept <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SysDept</span><span class="token punctuation">)</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 如果是顶级节点, 遍历该父节点的所有子节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tempList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>dept<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token function">recursionFn</span><span class="token punctuation">(</span>depts<span class="token punctuation">,</span> dept<span class="token punctuation">)</span><span class="token punctuation">;</span>
                returnList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dept<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>returnList<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            returnList <span class="token operator">=</span> depts<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> returnList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
     <span class="token doc-comment comment">/**
     * 递归列表
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">recursionFn</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token class-name">SysDept</span> t<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 得到子节点列表</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> childList <span class="token operator">=</span> <span class="token function">getChildList</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token punctuation">.</span><span class="token function">setChildren</span><span class="token punctuation">(</span>childList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SysDept</span> tChild <span class="token operator">:</span> childList<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasChild</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> tChild<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token function">recursionFn</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> tChild<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其用递归实现树结构排序，导致排序非常耗时</p><h2 id="_4-优化后代码" tabindex="-1"><a class="header-anchor" href="#_4-优化后代码" aria-hidden="true">#</a> 4. 优化后代码</h2><h3 id="_4-1-使用非递归方式构建树" tabindex="-1"><a class="header-anchor" href="#_4-1-使用非递归方式构建树" aria-hidden="true">#</a> 4.1 使用非递归方式构建树</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token doc-comment comment">/**
     * 用非递归的方式实现转换为数结构
     *
     * <span class="token keyword">@param</span> <span class="token parameter">depts</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildDeptTreeSelectNoRecursion</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> depts<span class="token punctuation">,</span> <span class="token class-name">Long</span> parentId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//配置</span>
        <span class="token class-name">TreeNodeConfig</span> treeNodeConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNodeConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeNodeConfig<span class="token punctuation">.</span><span class="token function">setNameKey</span><span class="token punctuation">(</span><span class="token string">&quot;label&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 自定义属性名 都要默认值的</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> treeList <span class="token operator">=</span> <span class="token class-name">TreeUtil</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>depts<span class="token punctuation">,</span> parentId<span class="token punctuation">,</span> treeNodeConfig<span class="token punctuation">,</span>
                <span class="token punctuation">(</span>treeNode<span class="token punctuation">,</span> tree<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    tree<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span><span class="token function">getDeptId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    tree<span class="token punctuation">.</span><span class="token function">setParentId</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    tree<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span><span class="token function">getDeptName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    tree<span class="token punctuation">.</span><span class="token function">putExtra</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> treeNode<span class="token punctuation">.</span><span class="token function">getDeptId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> treeList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-优化后数据" tabindex="-1"><a class="header-anchor" href="#_4-优化后数据" aria-hidden="true">#</a> 4. 优化后数据</h2><table><thead><tr><th></th><th>数据量</th><th>SQL 查询耗时</th><th>转为树结构</th></tr></thead><tbody><tr><td>优化前</td><td>6000条</td><td>1881ms</td><td>12658ms</td></tr><tr><td>优化后</td><td>6000条</td><td></td><td>22ms</td></tr></tbody></table>`,18),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","optimization-x-tree-structure.html.vue"]]);export{k as default};
