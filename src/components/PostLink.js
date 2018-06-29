import React, { Component } from 'react';
import Link from 'gatsby-link';
// import PropTypes from 'prop-types';

const LinkTo = props => {
  return (
    <li className="post-link">
      <Link to={`/${props.preSlug}/${props.slug}`}>{props.title}</Link>
    </li>
  );
};

// LinkTo.propTypes = {
//   preSlug: React.PropTypes.string.isRequired,
//   title: React.PropTypes.string.isRequired,
//   slug: React.PropTypes.string.isRequired
// };

export default LinkTo;
