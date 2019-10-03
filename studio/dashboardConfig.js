export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d95588e28b476d97390dd8b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-smq43n6k',
                  apiId: 'dcc4bc75-0263-4286-aab7-eace2702f12c'
                },
                {
                  buildHookId: '5d95588faa31a9b73cf84eb4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9fybztze',
                  apiId: '6dfd9f24-fda9-4e53-82d1-3312db30b9ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexdkaminski/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9fybztze.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
