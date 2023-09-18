const e=JSON.parse('{"key":"v-11039850","path":"/deploy/mq-kafka/kafka-x-zookeeper-store.html","title":"Kafka -在zookeeper中的存储","lang":"zh-CN","frontmatter":{"order":50,"category":["kafka","MQ"],"description":"1. Kafka在zookeeper中存储结构图 image-20230312223910988 2. 分析 2.1　topic注册信息 /brokers/topics/[topic] : 存储某个topic的partitions所有分配信息 ``` [zk: localhost:2181(CONNECTED) 1] get /brokers/topi...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/deploy/mq-kafka/kafka-x-zookeeper-store.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"Kafka -在zookeeper中的存储"}],["meta",{"property":"og:description","content":"1. Kafka在zookeeper中存储结构图 image-20230312223910988 2. 分析 2.1　topic注册信息 /brokers/topics/[topic] : 存储某个topic的partitions所有分配信息 ``` [zk: localhost:2181(CONNECTED) 1] get /brokers/topi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-12T15:00:35.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-12T15:00:35.000Z"}]]},"headers":[{"level":2,"title":"1. Kafka在zookeeper中存储结构图","slug":"_1-kafka在zookeeper中存储结构图","link":"#_1-kafka在zookeeper中存储结构图","children":[]},{"level":2,"title":"2. 分析","slug":"_2-分析","link":"#_2-分析","children":[{"level":3,"title":"2.1　topic注册信息","slug":"_2-1-topic注册信息","link":"#_2-1-topic注册信息","children":[]},{"level":3,"title":"2.2　partition状态信息","slug":"_2-2-partition状态信息","link":"#_2-2-partition状态信息","children":[]},{"level":3,"title":"2.3　Broker注册信息","slug":"_2-3-broker注册信息","link":"#_2-3-broker注册信息","children":[]},{"level":3,"title":"2.4　Controller epoch","slug":"_2-4-controller-epoch","link":"#_2-4-controller-epoch","children":[]},{"level":3,"title":"2.5　Controller注册信息","slug":"_2-5-controller注册信息","link":"#_2-5-controller注册信息","children":[]},{"level":3,"title":"2.6　补充Consumer and Consumer group","slug":"_2-6-补充consumer-and-consumer-group","link":"#_2-6-补充consumer-and-consumer-group","children":[]},{"level":3,"title":"2.7　Consumer均衡算法","slug":"_2-7-consumer均衡算法","link":"#_2-7-consumer均衡算法","children":[]},{"level":3,"title":"2.8　Consumer注册信息","slug":"_2-8-consumer注册信息","link":"#_2-8-consumer注册信息","children":[]},{"level":3,"title":"2.9　Consumer owner","slug":"_2-9-consumer-owner","link":"#_2-9-consumer-owner","children":[]},{"level":3,"title":"2.10　Consumer offset","slug":"_2-10-consumer-offset","link":"#_2-10-consumer-offset","children":[]},{"level":3,"title":"2.11　Re-assign partitions","slug":"_2-11-re-assign-partitions","link":"#_2-11-re-assign-partitions","children":[]},{"level":3,"title":"2.12　Preferred replication election","slug":"_2-12-preferred-replication-election","link":"#_2-12-preferred-replication-election","children":[]},{"level":3,"title":"2.13　删除topics","slug":"_2-13-删除topics","link":"#_2-13-删除topics","children":[]},{"level":3,"title":"2.14　Topic配置","slug":"_2-14-topic配置","link":"#_2-14-topic配置","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1678633235000,"updatedTime":1678633235000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.92,"words":1777},"filePathRelative":"deploy/mq-kafka/kafka-x-zookeeper-store.md","localizedDate":"2023年3月12日","autoDesc":true}');export{e as data};
