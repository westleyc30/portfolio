import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import PostLink from '../components/PostLink';
import Link from 'gatsby-link';

class PostList extends Component {
  render() {
    const props = this.props;
    const classList = [props.gridItem, 'list'];

    return (
      <div className={classList.join(' ')}>
        <h2 className="heading-secondary inky">
          <span className="highlight">{props.section}</span>
        </h2>
        <ul>
          {props.data.map((edge, i) => (
            <PostLink
              key={edge.node.slug}
              preSlug={props.section
                .toLowerCase()
                .split(' ')
                .join('-')}
              title={edge.node.title}
              slug={edge.node.slug}
            />
          ))}
          <li className="post-link">
            <Link
              to={`/${props.section
                .toLowerCase()
                .split(' ')
                .join('-')}`}
            >
              more...
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

// PostList.PropTypes = {
//   section: React.PropTypes.string.isRequired,
//   data: React.PropTypes.array.isRequired
// };

export default PostList;
