const e=JSON.parse('{"key":"v-4e8fe46f","path":"/db/es/elasticsearch-x-agg-metric.html","title":"ES详解 - 聚合：聚合查询之Metric聚合详解","lang":"zh-CN","frontmatter":{"order":130,"category":["ElasticSearch"],"description":"前文主要讲了 ElasticSearch提供的三种聚合方式之桶聚合（Bucket Aggregation)，本文主要讲讲指标聚合（Metric Aggregation)。 1. 如何理解metric聚合\\r 在bucket聚合 (https://pdai.tech/md/db/nosql-es/elasticsearch-x-agg-bucket.htm...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/db/es/elasticsearch-x-agg-metric.html"}],["meta",{"property":"og:site_name","content":"布吉岛的知识笔记"}],["meta",{"property":"og:title","content":"ES详解 - 聚合：聚合查询之Metric聚合详解"}],["meta",{"property":"og:description","content":"前文主要讲了 ElasticSearch提供的三种聚合方式之桶聚合（Bucket Aggregation)，本文主要讲讲指标聚合（Metric Aggregation)。 1. 如何理解metric聚合\\r 在bucket聚合 (https://pdai.tech/md/db/nosql-es/elasticsearch-x-agg-bucket.htm..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 如何理解metric聚合","slug":"_1-如何理解metric聚合","link":"#_1-如何理解metric聚合","children":[]},{"level":2,"title":"2. 单值分析: 标准stat类型","slug":"_2-单值分析-标准stat类型","link":"#_2-单值分析-标准stat类型","children":[{"level":3,"title":"2.1 avg 平均值","slug":"_2-1-avg-平均值","link":"#_2-1-avg-平均值","children":[]},{"level":3,"title":"2.2 max 最大值","slug":"_2-2-max-最大值","link":"#_2-2-max-最大值","children":[]},{"level":3,"title":"2.3 min 最小值","slug":"_2-3-min-最小值","link":"#_2-3-min-最小值","children":[]},{"level":3,"title":"2.4 sum 和","slug":"_2-4-sum-和","link":"#_2-4-sum-和","children":[]},{"level":3,"title":"2.5 value_count 数量","slug":"_2-5-value-count-数量","link":"#_2-5-value-count-数量","children":[]}]},{"level":2,"title":"3. 单值分析: 其它类型","slug":"_3-单值分析-其它类型","link":"#_3-单值分析-其它类型","children":[{"level":3,"title":"3.1 weighted_avg 带权重的avg","slug":"_3-1-weighted-avg-带权重的avg","link":"#_3-1-weighted-avg-带权重的avg","children":[]},{"level":3,"title":"3.2 cardinality 基数（distinct去重）","slug":"_3-2-cardinality-基数-distinct去重","link":"#_3-2-cardinality-基数-distinct去重","children":[]},{"level":3,"title":"3.3 median_absolute_deviation 中位值","slug":"_3-3-median-absolute-deviation-中位值","link":"#_3-3-median-absolute-deviation-中位值","children":[]}]},{"level":2,"title":"4. 非单值分析：stats型","slug":"_4-非单值分析-stats型","link":"#_4-非单值分析-stats型","children":[{"level":3,"title":"4.1  stats 包含avg,max,min,sum和count","slug":"_4-1-stats-包含avg-max-min-sum和count","link":"#_4-1-stats-包含avg-max-min-sum和count","children":[]},{"level":3,"title":"4.2 matrix_stats 针对矩阵模型","slug":"_4-2-matrix-stats-针对矩阵模型","link":"#_4-2-matrix-stats-针对矩阵模型","children":[]},{"level":3,"title":"4.3 extended_stats","slug":"_4-3-extended-stats","link":"#_4-3-extended-stats","children":[]},{"level":3,"title":"4.4 string_stats 针对字符串","slug":"_4-4-string-stats-针对字符串","link":"#_4-4-string-stats-针对字符串","children":[]}]},{"level":2,"title":"5. 非单值分析：百分数型","slug":"_5-非单值分析-百分数型","link":"#_5-非单值分析-百分数型","children":[{"level":3,"title":"5.1  percentiles 百分数范围","slug":"_5-1-percentiles-百分数范围","link":"#_5-1-percentiles-百分数范围","children":[]},{"level":3,"title":"5.2 percentile_ranks 百分数排行","slug":"_5-2-percentile-ranks-百分数排行","link":"#_5-2-percentile-ranks-百分数排行","children":[]}]},{"level":2,"title":"6. 非单值分析：地理位置型","slug":"_6-非单值分析-地理位置型","link":"#_6-非单值分析-地理位置型","children":[{"level":3,"title":"6.1  geo_bounds Geo bounds","slug":"_6-1-geo-bounds-geo-bounds","link":"#_6-1-geo-bounds-geo-bounds","children":[]},{"level":3,"title":"6.2 geo_centroid Geo-centroid","slug":"_6-2-geo-centroid-geo-centroid","link":"#_6-2-geo-centroid-geo-centroid","children":[]},{"level":3,"title":"6.3 geo_line Geo-Line","slug":"_6-3-geo-line-geo-line","link":"#_6-3-geo-line-geo-line","children":[]}]},{"level":2,"title":"7. 非单值分析：Top型","slug":"_7-非单值分析-top型","link":"#_7-非单值分析-top型","children":[{"level":3,"title":"7.1 top_hits 分桶后的top hits","slug":"_7-1-top-hits-分桶后的top-hits","link":"#_7-1-top-hits-分桶后的top-hits","children":[]},{"level":3,"title":"7.2 top_metrics","slug":"_7-2-top-metrics","link":"#_7-2-top-metrics","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":6.38,"words":1914},"filePathRelative":"db/es/elasticsearch-x-agg-metric.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
