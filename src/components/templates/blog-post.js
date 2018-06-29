import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Layout from '../layout';

class BlogPost extends Component {
  render() {
    const { title, tags, content } = this.props.data.contentfulBlogPost;
    const metaKeywords = tags.join(', ');
    if (tags) {
      return (
        <Layout>
          <Helmet
            title={`Westley Cho | ${title}`}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: metaKeywords }
            ]}
          />
          <h1>{title}</h1>
          <ul className="taglist">
            {tags.map((tag, i) => {
              return (
                <li className="tag" key={i}>
                  {tag}
                </li>
              );
            })}
          </ul>
          <div
            className="content-box content-box--blog"
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html
            }}
          />
        </Layout>
      );
    }
    return <div>{title}</div>;
  }
}

BlogPost.PropTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      tags
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
