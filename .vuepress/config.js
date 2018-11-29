module.exports = {
  title: 'Web Design for Design Majors',
  description: 'DES-340 Documentation Site',
  themeConfig: {
    displayAllHeaders: false, // Default: false
    lastUpdated: 'Last Updated', // string | boolean,
    nav: [
    //   { text: 'Home', link: '/' },
    { text: 'Projects', link: '/projects/' },
    //   { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      {
        title: 'Projects',
        collapsable: true,
        children: [
          'projects/project01.md',
          'projects/project02.md',
        ]
      },
      {
        title: 'Exercises',
        collapsable: true,
        children: [
          'exercises/exercise01.md',
          'exercises/exercise02.md',
        ]
      },
      {
        title: 'Lectures',
        collapsable: true,
        children: [
          'lectures/lecture01.md'
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3]
    }
  },
  base: '/',
  // async ready() {
  //   // ...
  // }
}  