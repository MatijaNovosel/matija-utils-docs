const { version } = require("../../package");

module.exports = {
  title: `matija-utils ${version}`,
  description: "Documentation for matija-utils.",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#3a0839"
      }
    ],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }]
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
            "common",
            "onlyTruthy",
            "onlyFalsy"
          ].sort((a, b) => a.localeCompare(b))
        },
        {
          title: "Other",
          collapsable: false,
          children: [
            "sum",
            "product",
            "mod",
            "shadeColor",
            "acronym",
            "textEllipsis",
            "randomColorHex",
            "generateRandomString",
            "abbreviateNumber",
            "randInt"
          ].sort((a, b) => a.localeCompare(b))
        }
      ]
    }
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"]
};
