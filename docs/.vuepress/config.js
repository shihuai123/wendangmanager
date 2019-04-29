module.exports = {
  title: "郑州幻视科技有限公司软件说明文档",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    // nav: [
    //   { text: "Guide", link: "/guide/" },
    // ],
    sidebar: [
        '/',
        '/two',
        '/three',
        'four'

    ],
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'two',
        'three',
        'four',
      ]
    }
  ]
}

