exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /bad-module/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }


const path = require('path')
module.exports.onCreateNode = ({node, actions }) => {
    const { createNodeField } = actions
    if( node.internal.type === 'allRestApiPhotos,allRestApiPosts'){
        const slug = path.basename(node.fileAbsolutePath)
        createNodeField({
            node,
            name: 'slug',
            value:slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions}) =>{
    const {createPage} = actions
    const posttempalte = path.resolve('./src/template/articles.js')
    const res = await graphql(`
        query {
            thumbnail : allRestApiPhotos{
                edges {
                    node {
                        url
                        thumbnailUrl
                        title
                    }
                }
            }
            allRestApiPosts{
                edges {
                  node {
                        endpointId
                        title
                        body
                    }
                }
            }
        }
    `)

    res.data.thumbnail.edges.forEach((edge) => {
        createPage({
            component: posttempalte,
            path: `/articles/${edge.node.title}`,
            contex: {
                slug: edge.node.slug
            }
        })
    });
    res.data.allRestApiPosts.edges.forEach((edge) => {
        createPage({
            component: posttempalte,
            path: `/articles/${edge.node.endpointId}`,
            contex: {
                slug: edge.node.slug
            }
        })
    });
}
