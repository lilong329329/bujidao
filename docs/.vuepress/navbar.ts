import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // "/home",
  {
    text: "Java",
    // icon: "creative",
    prefix: "/java/",
    children: [
      {text: "Java基础", link: "base/Java-basis-oop"},
      {text: "Java IO", link: "io/java-io-overview"},
      {text: "Java集合", link: "collection/java-collection-overview"},
      {text: "Java并发", link: "thread/java-thread-x-theorty"},
      {text: "Java8", link: "java8/java8-lambda"},
      {text: "JVM", link: "jvm/jvm-overview"},
    ]
  },

  {
    text: "数据库",
    prefix: "/db/",
    children: [
      {text: "数据库基础/SQL基础", link: "sql/sql-x-basic"},
      {text: "Sql数据库",
        children: [
          { text: "Mysql", link: "mysql/sql-mysql-overview" },
          { text: "Oracle", link: "oracle/oracle-b-sequence" },
          // { text: "达梦", link: "dm/dm-operation-console" },
        ],
      },
      {
        text: "NoSql数据库",
        children: [
          { text: "Redis", link: "redis/db-redis-introduce" },
          { text: "MongoDB", link: "mongodb/mongo-x-basic" },
          { text: "Elasticsearch", link: "es/elasticsearch-x-introduce-1" },
        ],
      },
    ]

  },
  {
    text: "框架|依赖",

    prefix: "/dependencies/",
    children:[
      {
        text: "Spring",
        children: [
          { text: "Spring", link: "spring/spring-overview" },
          { text: "SpringBoot", link: "spring-boot/springboot-x-overview" }
        ],
      },
      {
        text: "ORM",
        children: [
          { text: "Mybatis", link: "mybatis/mybatis-y-arch" },
          { text: "Mybatis-Plus", link: "mybatis-plus/mybatis-plus-x-gen-code" }
        ],
      },
      { text: "Office文档操作", link: "office/office-x-aspose" },
      { text: "CAS单点登录", link: "cas/cas-x-overview" },

    ]
  },

  {
    text: "开发|测试",

    prefix: "/develop/",
    children: [
      {
        text: "开发-常用类库",
        link: "devlibrary/dev-lib-lombok"
      },
      {
        text: "开发-安全",
        link: "security/dev-security-x-injection"
      },
      {
        text: "开发 - 优化",
        link: "optimization/optimization-x-interface-optimization"
      },
      {
        text: "开发 - 规范/风格",
        link: "style/dev-qt-code-style"
      },
      {
        text: "测试",
        link: "test/ut-overview"
      },
    ]

  },

  {
    text: "软件|部署",

    prefix: "/deploy/",
    children: [
      {
        text: "Docker",
        link: "docker/docker-basic-overview"
      },
      {
        text: "消息队列",
        children: [
          { text: "消息队列", link: "mq/mq-a-overview" },
          { text: "RabbitMQ", link: "mq-rabbitmq/rabbitmq-x-overview" },
          { text: "Kafka", link: "mq-kafka/kafka-x-overview" }
        ],
      },
      {
        text: "Skywalking",
        link: "skywalking/skywalking-x-principle"
      },
      {
        text: "Linux",
        link: "linux/linux-j-monitor-overview"
      },
      {
        text: "Jenkins",
        link: "jenkins/jenkins-overview"
      },
      {
        text: "Nginx",
        link: "nginx/nginx-x-overview"
      },

      {
        text: "部署",
        link: "deploy/docker-basic-overview"
      },

    ]
  },
  {
    text: "架构|系统",
    prefix: "/arch/",
    children: [
      {text: "架构基础", link: "base/arch-basic"},
      {text: "分布式系统", link: "distributed/arch-id"},
      {text: "微服务", link: "microservices/ms-overview"},
      {text: "对象存储-Minio", link: "minio/minio-concept"},
      {text: "后台管理系统", link: "manage-system/manage-system-technical-selection"},
      {text: "商城设计", link: "mall/mall-sku"},
    ]

  },
  {
    text: "软件|资源|教程",
    prefix: "/softSource/",
    children: [
      {text: "Office系列",link: "Office系列"},
      {text: "Adobe系列",link: "Adobe系列"},
      {text: "jetBrains系列",link: "jetBrains系列"},
      {text: "远程链接工具",link: "远程链接工具"},
      {text: "亲测好用工具",link: "亲测好用工具"},
      {text: "overWall",link: "overWall"},

    ]
  },
  {
    text: "语言|平台",
    prefix: "/language/",
    children:[
      {text: "前端", link: "frontend-layout/flex-layout-overview"},
      {text: "python", link: "python/python-advantage"},
      {text: "微信", link: "weixin/wx-package-Optimization"},
      {text: "AI人工智能", link: "ai/knowledge-graph-build"},
    ]
  },
  {
    text: "杂项|思考",

    prefix: "/think/",
    children:[
      {text: "印象深刻bug", link: "deepImpression/redis-bigdata-slow-problem"},
      {text: "优化", link: "optimization/optimization-x-frequent-operation-db"},
      {text: "杂项", link: "misc/misc-x-middleware"},
      { text: "人生思考", link: "人生思考"},
      { text: "传记相关", link: "传记相关"},
      { text: "军事相关", link: "军事相关"},
      { text: "历史相关", link: "历史相关"},
      { text: "科技相关", link: "科技相关"},
      { text: "工作总结", link: "工作总结"},
    ]
  },
  {
    text: "关于我",
    prefix: "/about/",
    children:[
      {text: "个人经历|简历", link: "Resume"},
      {text: "目前正做", link: "CurrentDoing"},
      {text: "未来规划", link: "FuturePlan"},
    ]
  }
]);
