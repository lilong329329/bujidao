const e=JSON.parse('{"key":"v-11e4f17d","path":"/deploy/mq-kafka/kafka-x-good.html","title":"Kafka - 为什么这么强","lang":"zh-CN","frontmatter":{"order":"6 0","category":["kafka","MQ"],"description":"1. 简介 1.1 概述 Kafka 是一个分布式的基于发布/订阅模式的消息队列，依靠其强悍的吞吐量，Kafka 主要应用于大数据实时处理领域。在数据采集、传输、存储的过程中发挥着举足轻重的作用。 1. Apache Kafka 由 Scala 写成，是由Apache软件基金会开发的一个开源消息系统项目。该项目的目标是为处理实时数据提供一个统一、高通量...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/deploy/mq-kafka/kafka-x-good.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Kafka - 为什么这么强"}],["meta",{"property":"og:description","content":"1. 简介 1.1 概述 Kafka 是一个分布式的基于发布/订阅模式的消息队列，依靠其强悍的吞吐量，Kafka 主要应用于大数据实时处理领域。在数据采集、传输、存储的过程中发挥着举足轻重的作用。 1. Apache Kafka 由 Scala 写成，是由Apache软件基金会开发的一个开源消息系统项目。该项目的目标是为处理实时数据提供一个统一、高通量..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-11T15:14:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-11T15:14:06.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 概述","slug":"_1-1-概述","link":"#_1-1-概述","children":[]},{"level":3,"title":"1.2 Kafka 优点","slug":"_1-2-kafka-优点","link":"#_1-2-kafka-优点","children":[]},{"level":3,"title":"1.3 Kafka 缺点","slug":"_1-3-kafka-缺点","link":"#_1-3-kafka-缺点","children":[]},{"level":3,"title":"1.4 Kafka 架构","slug":"_1-4-kafka-架构","link":"#_1-4-kafka-架构","children":[]},{"level":3,"title":"1.5 ZooKeeper 作用","slug":"_1-5-zookeeper-作用","link":"#_1-5-zookeeper-作用","children":[]}]},{"level":2,"title":"2. Kafka 生成过程","slug":"_2-kafka-生成过程","link":"#_2-kafka-生成过程","children":[{"level":3,"title":"2.1 写入方式","slug":"_2-1-写入方式","link":"#_2-1-写入方式","children":[]},{"level":3,"title":"2.2 分区 Partition","slug":"_2-2-分区-partition","link":"#_2-2-分区-partition","children":[]},{"level":3,"title":"2.3 Kafka 文件存储机制","slug":"_2-3-kafka-文件存储机制","link":"#_2-3-kafka-文件存储机制","children":[]},{"level":3,"title":"2.4 如何保证消息顺序执行","slug":"_2-4-如何保证消息顺序执行","link":"#_2-4-如何保证消息顺序执行","children":[]}]},{"level":2,"title":"4. 数据可靠性","slug":"_4-数据可靠性","link":"#_4-数据可靠性","children":[{"level":3,"title":"4.1 消息传递语义","slug":"_4-1-消息传递语义","link":"#_4-1-消息传递语义","children":[]},{"level":3,"title":"4.2 信息从生产者到 Broker","slug":"_4-2-信息从生产者到-broker","link":"#_4-2-信息从生产者到-broker","children":[]},{"level":3,"title":"4.3 Kafka Broker 信息落磁盘","slug":"_4-3-kafka-broker-信息落磁盘","link":"#_4-3-kafka-broker-信息落磁盘","children":[]},{"level":3,"title":"4.4 消费者从 Kafka Broker 消费数据","slug":"_4-4-消费者从-kafka-broker-消费数据","link":"#_4-4-消费者从-kafka-broker-消费数据","children":[]}]},{"level":2,"title":"5. Kafka 分区分配策略","slug":"_5-kafka-分区分配策略","link":"#_5-kafka-分区分配策略","children":[{"level":3,"title":"5.1  RangeAssignor 范围分区策略","slug":"_5-1-rangeassignor-范围分区策略","link":"#_5-1-rangeassignor-范围分区策略","children":[]},{"level":3,"title":"5.2  RoundRobinAssignor 轮询分区策略","slug":"_5-2-roundrobinassignor-轮询分区策略","link":"#_5-2-roundrobinassignor-轮询分区策略","children":[]}]},{"level":2,"title":"6. Kafka 高效读写","slug":"_6-kafka-高效读写","link":"#_6-kafka-高效读写","children":[{"level":3,"title":"6.1 顺序读写数据","slug":"_6-1-顺序读写数据","link":"#_6-1-顺序读写数据","children":[]},{"level":3,"title":"6.2  Memory Mapped Files 内存映射文件","slug":"_6-2-memory-mapped-files-内存映射文件","link":"#_6-2-memory-mapped-files-内存映射文件","children":[]},{"level":3,"title":"6.3 Zero Copy","slug":"_6-3-zero-copy","link":"#_6-3-zero-copy","children":[]},{"level":3,"title":"6.4 Batch Deal","slug":"_6-4-batch-deal","link":"#_6-4-batch-deal","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1681226046000,"updatedTime":1681226046000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":21.2,"words":6361},"filePathRelative":"deploy/mq-kafka/kafka-x-good.md","localizedDate":"2023年4月11日","autoDesc":true}');export{e as data};
