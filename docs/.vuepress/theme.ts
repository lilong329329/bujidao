import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://java.isture.com",

  author: {
    name: "bujidao",
    url: "https://java.isture.com",
  },

  iconAssets: "iconfont",

  logo: "/theme.png",

  // repo: "zszdevelop/java-study-gitbook",   //配置github链接使用

  docsDir: "docs",

   // navbar
   navbar: navbar,

   // sidebar
   sidebar: sidebar,

  footer: "<a href='https://beian.miit.gov.cn' target='_blank' style='color: var(--c-text-lighter);>闽ICP备18001806号-1</a>",

  displayFooter: true,


  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "做一个有深度的开发者",
    intro: "/intro.html",
    medias: {
      GitHub: "hhttps://github.com/zszdevelop",
    },
  },

  encrypt: {
    config: {
      "/db/es/elasticsearch-demo.html": ["321"],
    },
  },

  plugins: {
     // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
       provider: "Giscus",
       repo: "zszdevelop/java-study-gitbook",
       repoId: "MDEwOlJlcG9zaXRvcnkyMTU1MDA3ODM=",
       category: "Ideas",
       categoryId: "DIC_kwDODNhH784CRC9V",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageSize: true,
      include: true,
      katex: false,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

  },
});
