module.exports = {
  title: '无何有之乡',
  description: '我也不知道我在说什么',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: '文章',
        link: '/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/leuction',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/wsha8',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
    comment: {
      service: "vssue",
      autoCreateIssue: true,
      prefix: "[Post]",
      owner: "leuction",
      repo: "blog-template",
      clientId: "3a23a9541b4ffb5433ee",
      clientSecret: "adf2d190536b3157ec30da7d38370f10df7acc01",
    }
  },
}
