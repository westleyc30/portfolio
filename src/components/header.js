import React, { Component } from 'react';
import Link from 'gatsby-link';
// import PropTypes from 'prop-types';
import Social from './Social';
class Header extends Component {
  state = {};
  render() {
    let headerClass = 'header-main';
    return (
      <div className={headerClass}>
        <div>
          <h1>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: '#343434'
              }}
            >
              Westley Cho
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
  }
}

export default Header;
