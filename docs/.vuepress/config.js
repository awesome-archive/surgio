module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Surgio',
      description: '一站式各类代理规则生成器',
    }
  },
  themeConfig: {
    nav: [
      {
        text: 'Changelog',
        link: 'https://github.com/geekdada/surgio/blob/master/CHANGELOG.md'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/geekdada/surgio'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            'getting-started',
            {
              title: '自定义',
              collapsable: false,
              children: [
                'custom-config',
                'custom-provider',
                'custom-template',
                'custom-artifact',
              ]
            },
          ]
        },
      ],
    },
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-146417304-1'
      }
    ]
  ]
};
