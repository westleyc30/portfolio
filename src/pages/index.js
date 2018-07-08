import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/PostList';
import PostLink from '../components/PostLink';

class IndexPage extends Component {
  state = {};
  render() {
    const data = this.props.data;
    return (
      <Layout>
        <div className="grid-lists">
          <PostList
            gridItem="blog-list"
            data={data.allContentfulBlogPost.edges}
            section={'Blog'}
          />
          <PostList
            gridItem="log-list"
            data={data.allContentfulDayOfCode.edges}
            section={'Today I Learned'}
          />
          <PostList
            gridItem="project-list"
            data={data.allContentfulProject.edges}
            section={'Projects'}
          />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query pageQuery {
    contentfulPerson {
      name
      email
      twitter
      github
      linkedin
      codepen
      shortBio {
        shortBio
      }
    }
    allContentfulBlogPost(
      limit: 5
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          createdAt
          title
          slug
        }
      }
    }
    allContentfulDayOfCode(
      limit: 5
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          createdAt
          title
          slug
        }
      }
    }
    allContentfulProject(
      limit: 5
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          createdAt
          title
          slug
        }
      }
    }
  }
`;
