/*
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
    const dayOfCodeTemplate = path.resolve('./src/templates/day-log.js')
    const projectTemplate = path.resolve('./src/templates/project-post.js')
    resolve(
      graphql(`
        {
          allContentfulProject {
            edges {
              node {
                title
                slug
                tags
                log {
                  log
                }
              }
            }
          }
          allContentfulBlogPost(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
          allContentfulDayOfCode {
            edges {
              node {
                title
                slug
                date
                tags
                log {
                  log
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlogPost.edges.forEach(edge => {
          createPage({
            path: `/blog/${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        result.data.allContentfulDayOfCode.edges.forEach(edge => {
          createPage({
            path: `/today-i-learned/${edge.node.slug}`,
            component: dayOfCodeTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        result.data.allContentfulProject.edges.forEach(edge => {
          createPage({
            path: `/projects/${edge.node.slug}`,
            component: projectTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        return
      })
    )
  })
}
*/
