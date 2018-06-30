import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../../css/main.css';

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A portfolio site for me' },
            {
              name: 'keywords',
              content:
                'portfoio, web developer, web designer, html, css, javascript, react, sass'
            }
          ]}
        />
        <div className="grid-main">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="content-main">{children}</div>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
