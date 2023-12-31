# mall框架使用感受

## 1. 为什么选择mall

### 1.1 优点

- 功能丰富，代码
  - 商品（商品，商品分类，sku）
  - 订单完整流程（购物车下单，发货，确认收货，取消订单，退货）

- 当时的业务需求，

  - 优惠券，促销等玩法

  - 积分

  - 商品推荐
  - 秒杀

​		mall 是完全能支持的，减少了二开的工作量。加快开发进度

### 1.2 缺点

- 代码生成模块不实用
- sku 设计不够合理
  - 选择商品属性分类，后出现属性分类，然后刷新类表，要自己输入每件价格，很麻烦
  - 刷新列表，刷新库存，刷新价格很混乱，用户压根不懂用
- 缺少字典管理，非常多的魔法值，少了扩展性
- 代码活跃度不高，跟两三年前的版本基本没差别。
  - github 活跃度倒是挺高的，不过基本都是刷活跃度的，没有实质改动

### 1.3 待完善的功能

- 缺少价格变更相关逻辑
  - 商品在加入购物车时就已经记录了价格，但是修改商品价格后并没有方式通知购物车
- 返回购物车列表的时候没有返回库存量
  - 用户选购商品时，数量可以一直加。只能在结算的时候才发现
  - 且在修改购物车商品数量的时候，也没有校验库存数量
- sku图片设置只能针对第一个属性设置单张图片
  - 希望针对每个规则能设置多张图片
- 缺少商品评价功能
  - 不过国内服务的 UGC 都需要接入公安审计，这就很麻烦了。可能就不容易上架了
- 余额功能
- 排序
  - 很多接口没有排序，或者只有sort 排序，但很多情况默认不设置的时候，应该按创建时间倒序
- 运费模板
  - 设计了表，但还没有实现
  
- 首页为假数据
- 导出功能
- 

### 1.4 无关紧要的规范问题

- 代码中很多魔法值
  - 例如订单状态，只有实体类备注，没有定义成常量或枚举，导致在代码中判断需要判断状态时都是魔法值
- 有全局异常，且一直抛runtime

## 2. bug

- 订单计算优惠的时候，将总优惠平摊到各个商品（四舍五入了）。再加起来计算总优惠，这就导致金额错误
- 

## 3.  吐槽点

1. 多模块设计问题，项目分为admin后端服务和portal前端服务。service都写在各自的服务上，导致服务无法复用。

   且已经抽离不懂了，当前阶段移动到基础库，关联的东西又太多

## 4. 适应自身项目的改造点

1. 项目原本只有分类树，但我们商品数量比较小。只有一个公司的商品。类似于外卖平台，希望展示商品分类同时显示商品
1. 日志模块，采用logback可以更灵活的配置
1. 微信相关功能


## 5. 难点

1. 生成订单时的逻辑。需要考虑的关联因素太多
2. 各种促销规则玩法，关联性强。非常容易影响到其他商品与总价