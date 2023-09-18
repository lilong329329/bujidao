import{_ as s,W as t,X as e,Z as n,$ as p,a0 as o,Y as i,D as c}from"./framework-4b7e9ff4.js";const l={},u=i(`<h1 id="微信商户付款零钱实现-企业打款-提现" tabindex="-1"><a class="header-anchor" href="#微信商户付款零钱实现-企业打款-提现" aria-hidden="true">#</a> 微信商户付款零钱实现(企业打款/提现)</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>微信商户付款 是 商户主动<strong>向微信用户个人付款</strong></p><blockquote><p>目前支持<strong>向指定微信用户的openid付款</strong></p></blockquote><p>企业付款提供<strong>由商户直接付钱至用户微信零钱</strong>的能力，支持平台操作及接口调用两种方式。具有免费、快速到账、灵活、安全等优点。商户可以使用企业付款，用于如:</p><h3 id="_1-1-场景" tabindex="-1"><a class="header-anchor" href="#_1-1-场景" aria-hidden="true">#</a> 1.1 场景</h3><ul><li><p>费用报销</p></li><li><p>员工福利</p></li><li><p>用户奖励等。</p></li><li><p>如果你是做电商或者某些有福利返利的系统，基本上会遇到诸如 <code>余额提现</code> 这类需求，主要就是平台向用户返利现金，积累到某一个门槛，可以领取到自己的余额账号、银行卡；或者是使用为用户发送现金红包的方式。</p></li></ul><h3 id="_1-2-特点" tabindex="-1"><a class="header-anchor" href="#_1-2-特点" aria-hidden="true">#</a> 1.2 特点</h3><ul><li><p><strong>免费:不收取付款手续费，节省企业成本。</strong></p></li><li><p>灵活:可通过页面或接口发起付款，灵活满足企业不同场景的付款需求。</p></li><li><p>友好:通过openid即可实现付款，用户授权即可，体验更好。</p></li><li><p>快速:在发起后，及时到账用户零钱。通过微信消息触达，用户及时获知入账详情。</p></li><li><p>安全:提供多种安全工具，满足不同场景安全需求。如:按需调整付款额度;支持收款账户限制;支持安全防刷，拦截恶意用户、小号、机器号码。</p></li><li><p>支持自定义大额通知等。</p></li></ul><h2 id="_2-开通企业付款" tabindex="-1"><a class="header-anchor" href="#_2-开通企业付款" aria-hidden="true">#</a> 2. 开通企业付款</h2><h3 id="_2-1-开通入口" tabindex="-1"><a class="header-anchor" href="#_2-1-开通入口" aria-hidden="true">#</a> 2.1 开通入口</h3><ol><li><p>微信商户平台</p></li><li><p>产品中心</p></li><li><p>我的产品</p></li><li><p>运营工具</p></li><li><p>企业付款到零钱</p></li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220505212608993.png" alt="image-20220505212608993" tabindex="0" loading="lazy"><figcaption>image-20220505212608993</figcaption></figure><blockquote><p>企业付款也支持到个人银行卡，此处用的比较少，不过多介绍</p></blockquote><h3 id="_2-2-开通条件" tabindex="-1"><a class="header-anchor" href="#_2-2-开通条件" aria-hidden="true">#</a> 2.2 开通条件：</h3><p>入账方式为即时入账至商户号，结算周期为T+1的商户，需满足三个条件：</p><ol><li>入驻满90天，</li><li>连续正常交易30天，</li><li>保持正常健康交易。其余结算周期的商户无90天/30天开通限制，但仍需保持正常健康交易。</li></ol><h2 id="_3-具体实现" tabindex="-1"><a class="header-anchor" href="#_3-具体实现" aria-hidden="true">#</a> 3. 具体实现</h2><h3 id="_3-1-证书配置" tabindex="-1"><a class="header-anchor" href="#_3-1-证书配置" aria-hidden="true">#</a> 3.1 证书配置</h3><p>参考微信小程序退款实现-4.1 证书文件下载</p><p><a href="./%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%80%80%E6%AC%BE%E5%AE%9E%E7%8E%B0">4.1 证书文件下载</a></p><h3 id="_3-2-企业付款实现" tabindex="-1"><a class="header-anchor" href="#_3-2-企业付款实现" aria-hidden="true">#</a> 3.2 企业付款实现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@Api</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;企业付款&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/entPay&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EntPayController</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@GetMapping</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testEntPay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">WxPayException</span> <span class="token punctuation">{</span>
        <span class="token class-name">WxPayService</span> wxPayService <span class="token operator">=</span> <span class="token class-name">WxPayConfiguration</span><span class="token punctuation">.</span><span class="token function">getPayService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">long</span> now <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">EntPayRequest</span> request <span class="token operator">=</span> <span class="token class-name">EntPayRequest</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">partnerTradeNo</span><span class="token punctuation">(</span><span class="token string">&quot;TradeNo&quot;</span><span class="token operator">+</span>now<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">openid</span><span class="token punctuation">(</span><span class="token string">&quot;ozy_G4go3beml0KSumdHLik2HoFo&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">spbillCreateIp</span><span class="token punctuation">(</span><span class="token string">&quot;10.10.10.10&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">checkName</span><span class="token punctuation">(</span><span class="token class-name">WxPayConstants<span class="token punctuation">.</span>CheckNameOption</span><span class="token punctuation">.</span><span class="token constant">NO_CHECK</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&quot;描述信息&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        wxPayService<span class="token punctuation">.</span><span class="token function">getEntPayService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entPay</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,24),r={href:"https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_2",target:"_blank",rel:"noopener noreferrer"};function d(k,h){const a=c("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[p("微信官方文档"),o(a)])])])}const m=s(l,[["render",d],["__file","wx-merchant-withdrawal.html.vue"]]);export{m as default};
