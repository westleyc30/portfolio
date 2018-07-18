import React, { Component } from 'react';

class Tags extends Component {
  render() {
    const tags = this.props.tags;
    return (
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
    );
  }
}

export default Tags;
