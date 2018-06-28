import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class ProjectPost extends Component {
  render() {
    const { title, slug, tags, date, log } = this.props.data.contentfulProject
    const metaKeywords = tags.join(', ')
    return (
      <div>
        <Helmet
          title={`Westley Cho | ${title}`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: metaKeywords },
          ]}
        />
        <h2>{title}</h2>
        <ul>
          {tags.map((tag, i) => {
            return (
              <li className="tag" key={i}>
                {tag}
              </li>
            )
          })}
        </ul>
        <div
          className="content-box content-box--project"
          dangerouslySetInnerHTML={{ __html: log.childMarkdownRemark.html }}
        />
      </div>
    )
  }
}

export default ProjectPost

export const pageQuery = graphql`
  query projectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      tags
      date
      log {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
