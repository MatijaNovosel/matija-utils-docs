module.exports = {
  title: "matija-utils",
  description: "Documentation for matija-utils.",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ]
  ],
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Documentation",
        link: "/documentation/"
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org"
      }
    ],
    sidebar: {
      "/documentation/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "gettingStarted"]
        },
        {
          title: "Array",
          collapsable: false,
          children: [
            "intersect",
            "chunk",
            "splitByValue",
            "range",
            "groupBy",
            "generateArray",
            "repeat",
            "end",
            "sample",
            "zip",
            "difference",
            "count",
            "common"
          ].sort((a, b) => a.localeCompare(b))
        },
        {
          title: "Other",
          collapsable: false,
          children: ["sum", "product", "mod", "shadeColor"].sort((a, b) =>
            a.localeCompare(b)
          )
        }
      ]
    }
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"]
};
