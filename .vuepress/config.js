module.exports = {
  title: 'Marlin Network User Interface Design Guidelines',
  description: 'lorem',
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean,
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Responsive', link: '/chapters/responsive.html' },
    //   { text: 'External', link: 'https://google.com' },
    // ],
    sidebar: [
      '/',
      // ['/chapters/responsive.md', 'Responsive Design']
    ]
  },
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3]
    }
  },
  // async ready() {
  //   // ...
  // }
}  