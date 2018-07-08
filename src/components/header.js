import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Social from './Social';

const Header = ({ siteTitle }) => (
  <div
    className="header-main"
    style={{
      marginBottom: '1.45rem'
    }}
  >
    <div>
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#343434'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2>
        <span style={{ fontFamily: 'Montserrat' }}>
          web developer / designer
        </span>
      </h2>
      <Social />
    </div>
  </div>
);

// Header.PropTypes = {
//   siteTitle: React.PropTypes.string.isRequired
// };

export default Header;
