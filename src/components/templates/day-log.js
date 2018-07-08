import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Layout from '../layout';
import moment from 'moment';

class DayLog extends Component {
  render() {
    const { title, date, tags, log } = this.props.data.contentfulDayOfCode;
    const metaKeywords = tags.join(', ');
    return (
      <Layout>
        <div className="day-log">
          <Helmet
            title={`Westley Cho | ${title}`}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: metaKeywords }
            ]}
          />
          <header>
            <h2>{title}</h2>
            <p>
              <time datetime={date}>{moment(date).format('MMMM Do YYYY')}</time>
            </p>
          </header>
          <div
            className="content-box content-box--daylog"
            dangerouslySetInnerHTML={{ __html: log.childMarkdownRemark.html }}
          />
          <div>
            <h6>tags</h6>
            <ul className="taglist">
              {tags.map((tag, i) => {
                return (
                  <li className="tag" key={i}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
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
