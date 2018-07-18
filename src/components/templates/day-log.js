import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../header';
import Layout from '../layout';
import moment from 'moment';
import Tags from '../Tags';

class DayLog extends Component {
  render() {
    const { title, date, tags, log } = this.props.data.contentfulDayOfCode;
    const metaKeywords = tags.join(', ');
    return (
      <div className="container u-margin-top-large">
        <Helmet
          title={`Westley Cho | ${title}`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: metaKeywords }
          ]}
        />

        <div className="grid-main">
          <Header />
          <div className="content-main day-log">
            <header className="blog__header">
              <h2>{title}</h2>
              <p>
                <time datetime={date}>
                  {moment(date).format('MMMM Do YYYY')}
                </time>
              </p>
            </header>
            <div
              className="content-box content-box--daylog"
              dangerouslySetInnerHTML={{ __html: log.childMarkdownRemark.html }}
            />
            <Tags tags={tags} />
          </div>
        </div>
      </div>
    );
  }
}

DayLog.PropTypes = {
  data: PropTypes.object.isRequired
};

export default DayLog;

export const pageQuery = graphql`
  query dayLogQuery($slug: String!) {
    contentfulDayOfCode(slug: { eq: $slug }) {
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
