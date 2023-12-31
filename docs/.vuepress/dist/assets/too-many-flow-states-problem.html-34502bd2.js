import{_ as l,W as i,X as e,Y as a}from"./framework-4b7e9ff4.js";const o={},t=a('<h1 id="多角色业务流程流转状态问题" tabindex="-1"><a class="header-anchor" href="#多角色业务流程流转状态问题" aria-hidden="true">#</a> 多角色业务流程流转状态问题</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>之前处理过这样一个业务需求</p><blockquote><p>用户可以新建方案，方案下可以有多个子例。每个子例中会有状态流转。子例中的状态流转到某一环节方案才可以统一下发。到方案的下一个环节</p></blockquote><p>例如：</p><ul><li><p>方案的状态：创建中，流程A，流程B，流程C，已完成</p></li><li><p>子例：</p><ul><li>流程A10,A21,A22,A30</li><li>流程B10,B21,B22,B30</li><li>流程C10,C20,C30</li></ul><p>注意点：</p><ul><li>流程要全部进入到A30才能下发到B10</li><li>B10流转的时候也不一定直接进入B21,他还需要判断自身情况，决定流转到B21,还是B22</li><li>C10流转的时候也不一定直接进入B20,他还需要判断自身情况，决定流转到B20还是B30</li><li>流程A10,A21等流程是由<strong>多个角色操作</strong>，在每个角色在的状态名又不一致</li></ul></li></ul><h2 id="_2-遇到的问题" tabindex="-1"><a class="header-anchor" href="#_2-遇到的问题" aria-hidden="true">#</a> 2. 遇到的问题</h2><p>因为我用一个状态码，在做业务的流转问题时，我面临以下问题</p><ol><li>在处理状态流转时需要判断特别多的情况</li><li>一个状态码只对应一个流程，流程是否在待开始，进行中，已完成也并不明确</li><li>因为涉及不同角色，显示的文案也不同。我需要校验很多情况</li><li>在与新人沟通状态流转时，特别的晕</li></ol><h2 id="_3-解决" tabindex="-1"><a class="header-anchor" href="#_3-解决" aria-hidden="true">#</a> 3.解决</h2><ol><li>按角色细分状态码 <ol><li>角色A：A10、A21,A30。。。。</li><li>角色B: A10,A22，A30。。。。</li></ol></li></ol>',11),r=[t];function h(n,d){return i(),e("div",null,r)}const c=l(o,[["render",h],["__file","too-many-flow-states-problem.html.vue"]]);export{c as default};
