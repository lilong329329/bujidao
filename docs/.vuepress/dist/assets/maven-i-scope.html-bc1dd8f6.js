import{_ as e,W as a,X as i,Y as r}from"./framework-4b7e9ff4.js";const t={},n=r('<h1 id="maven依赖中的scope详解" tabindex="-1"><a class="header-anchor" href="#maven依赖中的scope详解" aria-hidden="true">#</a> Maven依赖中的scope详解</h1><h2 id="_1-scope的分类" tabindex="-1"><a class="header-anchor" href="#_1-scope的分类" aria-hidden="true">#</a> 1. scope的分类</h2><p>主要分为：</p><ul><li>compile（默认）</li><li>test</li><li>runntime</li><li>provided</li><li>system</li></ul><h3 id="_1-1-compile-默认" tabindex="-1"><a class="header-anchor" href="#_1-1-compile-默认" aria-hidden="true">#</a> 1.1 compile(默认)</h3><p>compile表示被依赖项目需要参与当前项目的编译，当然后续的测试，运行周期也参与其中，是一个比较强的依赖。打包的时候通常需要包含进去。</p><h3 id="_1-2-test" tabindex="-1"><a class="header-anchor" href="#_1-2-test" aria-hidden="true">#</a> 1.2 test</h3><p>scope为test表示依赖项目仅仅参与测试相关的工作，包括测试代码的编译，执行。比较典型的如junit。</p><h3 id="_1-3-runntime" tabindex="-1"><a class="header-anchor" href="#_1-3-runntime" aria-hidden="true">#</a> 1.3 runntime</h3><p>runntime表示被依赖项目无需参与项目的编译，不过后期的测试和运行周期需要其参与。与compile相比，<strong>跳过编译</strong>而已，</p><p>oracle jdbc驱动架包就是一个很好的例子，一般scope为runntime</p><h3 id="_1-4-provided" tabindex="-1"><a class="header-anchor" href="#_1-4-provided" aria-hidden="true">#</a> 1.4 provided</h3><p>provided意味着打包的时候可以不用包进去，别的设施(Web Container)会提供。事实上该依赖理论上可以参与编译，测试，运行等周期。相当于compile，但是在<strong>打包阶段做了exclude的动作</strong>。</p><h3 id="_1-5-system" tabindex="-1"><a class="header-anchor" href="#_1-5-system" aria-hidden="true">#</a> 1.5 system</h3><p>从参与度来说，也provided相同，不过被依赖项不会从maven仓库抓，而是从本地文件系统拿，一定需<strong>要配合systemPath属性使用</strong></p>',15),s=[n];function d(o,c){return a(),i("div",null,s)}const p=e(t,[["render",d],["__file","maven-i-scope.html.vue"]]);export{p as default};