import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Tags from '../Tags';
// import PropTypes from 'prop-types';

class ProjectPost extends Component {
  render() {
    const { title, tags, log } = this.props.data.contentfulProject;
    const metaKeywords = tags.join(', ');
    return (
      <div>
        <Helmet
          title={`Westley Cho | ${title}`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: metaKeywords }
          ]}
        />
        <h2>{title}</h2>
        <Tags tags={tags} />
        <div
          className="content-box content-box--project"
          dangerouslySetInnerHTML={{ __html: log.childMarkdownRemark.html }}
        />
      </div>
    );
  }
}

export default ProjectPost;

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
`;
