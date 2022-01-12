export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61df19f3fdbe311f5c1169f8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4pcujgx9',
                  apiId: '7b897fba-2446-4082-a327-2fdfee580a2f'
                },
                {
                  buildHookId: '61df19f39c4b9d1ba7e77a33',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qdrkiq5m',
                  apiId: 'eb904d28-579d-42f5-9a31-172bc32a2bd4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/connors511/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qdrkiq5m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
