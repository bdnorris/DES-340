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
        title: 'Lectures',
        collapsable: true,
        children: [
          'lectures/lecture01-intro.md',
          // 'lectures/lecture02-rwd.md',
          // 'lectures/lecture03-web-how.md',
        ]
      },
      {
        title: 'Exercises',
        collapsable: true,
        children: [
          'exercises/exercise01.md',
          // 'exercises/exercise02.md',
          // 'exercises/exercise03.md',
          // 'exercises/exercise04.md',
          // 'exercises/exercise05.md',
          // 'exercises/exercise06.md',
          // 'exercises/exercise07.md',
          // 'exercises/exercise08.md',
        ]
      },
      {
        title: 'Projects',
        collapsable: true,
        children: [
          'projects/project01A.md',
          // 'projects/project01B.md',
          // 'projects/project02.md',
          // 'projects/project03.md',
          // 'projects/project04.md',
          // 'projects/project05.md',
          // 'projects/project06.md',
        ]
      },
      {
        title: 'Resources',
        collapsable: true,
        children: [
          // 'resources/curated-sources.md',
          // 'resources/required-accounts.md',
          // 'resources/codecademy.md',
          // 'resources/further-learning.md',
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