import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { FaTwitter, FaCodepen, FaLinkedin, FaGithub } from 'react-icons/lib/fa';

class Social extends Component {
  state = {};

  render() {
    const data = this.props.data;
    return (
      <div className="social">
        <ul>
          <li>
            <a href="https://twitter.com/hideshis">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/westleyc30">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/westley-cho-7a097073/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/westleyc30/">
              <FaCodepen />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
