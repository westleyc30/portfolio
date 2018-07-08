import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Meta extends Component {
  state = {};
  render() {
    return (
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'A portfolio site for me' },
          {
            name: 'keywords',
            content:
              'portfoio, web developer, web designer, html, css, javascript, react, sass'
          },
          { name: 'twitter:title', content: data.site.siteMetadata.title },
          { name: 'referrer', content: 'always' }
        ]}
      />
    );
  }
}

export default Meta;
