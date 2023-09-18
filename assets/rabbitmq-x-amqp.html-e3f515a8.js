import{_ as i,W as r,X as t,Z as e,$ as l,a0 as o,Y as n,D as p}from"./framework-4b7e9ff4.js";const s={},c=n('<h1 id="rabbitmq相关概念-aqmp-协议介绍" tabindex="-1"><a class="header-anchor" href="#rabbitmq相关概念-aqmp-协议介绍" aria-hidden="true">#</a> RabbitMQ相关概念 - AQMP 协议介绍</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>RabbitMQ 是 AMQP 协议的 Erlang 的实现（RabbitMQ 还支持 STOMP、MQTT 等协议）。</p><p>AMQP 的模型架构和 RabbitMQ 的模型架构是一样的：</p><ol><li>生产者发送消息给交换器</li><li>交换器和队列绑定</li><li>当 RoutingKey 和 BindingKey 相匹配时，消息被存入相应的队列中</li><li>消费者可以订阅相应的队列来获取消息。</li></ol><p>RabbitMQ 中的交换器、交换器类型、队列、绑定、路由键等都遵循 AMQP 协议中相应的概念。本书讲解的 RabbitMQ 版本对应的是 <code>AMQP 0-9-1 </code>版本协议。如无特指，则以该协议为基准介绍。</p><blockquote><ul><li>STOPM：Simple/Streaming Text Oriented Messaging Protocol</li></ul><p>简单/流文本面向消息协议，提供了一个可互操作的连接格式，运行 STOMP 客户端与任意 STOMP 消息代理（Broker）进行交互。</p><p>STOMP 协议由于设计简单，易于开发客户端，因此在多种遇上和平台上得到广泛应用</p><ul><li>MQTT：Message Queuing Telemetry Transport</li></ul><p>消息队列遥测传输。是 IBM 开发的一个 <strong>及时通信协议</strong>，有可能成为物联网的重要组成部分。</p><p>该协议支持所有平台，几乎可以把所有物联网和外部连接起来，被用来当做传感器和制动器的通信协议。</p></blockquote><h2 id="_2-amqp-三层协议" tabindex="-1"><a class="header-anchor" href="#_2-amqp-三层协议" aria-hidden="true">#</a> 2. AMQP 三层协议</h2><p>AMQP 协议本身包括三层：</p><ul><li><p>Module Layer：</p><p>位于协议最高层，主要定义了一些供客户端调用的命令，客户端可以利用这些命令实现自己的业务逻辑。</p><p>例如：客户端可以使用 <code>Queue.Declare</code> 命令声明一个队列或使用 <code>Basic.Consume</code> 订阅消费一个队列中的消息。</p></li><li><p>Session Layer：</p><p>位于中间层，主要负责将客户端的命令发送给服务器，再将服务端的应答返回给客户端，主要为客户端与服务器之间的通信提供可靠性同步机制和错误处理。</p></li><li><p>Transport Layer：</p><p>位于最底层，主要传输二进制数据流，提供帧的处理、信道复用、错误检测和数据表示等。</p></li></ul><h2 id="_3-amqp-报文交互" tabindex="-1"><a class="header-anchor" href="#_3-amqp-报文交互" aria-hidden="true">#</a> 3. AMQP 报文交互</h2><p>AMQP 是一个通信协议，会涉及到 <strong>报文交互</strong>：</p><ul><li>从 low-level 举例来说，AMQP 本身是应用层的协议，填充于 TCP 协议层的数据部分</li><li>从 high-level 来说，AMQP 是通过协议命令进行交互的。可以看成是一系列结构化命令的集合，这里的命令代表一种操作，类似于 HTTP 中的方法，GET、POST...</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',14),d={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/02/02.html",target:"_blank",rel:"noopener noreferrer"};function h(b,u){const a=p("ExternalLinkIcon");return r(),t("div",null,[c,e("p",null,[e("a",d,[l("AQMP 协议介绍"),o(a)])])])}const m=i(s,[["render",h],["__file","rabbitmq-x-amqp.html.vue"]]);export{m as default};
