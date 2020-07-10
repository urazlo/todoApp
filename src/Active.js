import React from 'react';

class Active extends React.Component {

  handleClick = () => {
    this.props.tasksFilter('active');
  }

  render() {

    return (
      <li>
        <a href="#/active" onClick={this.handleClick}>
          Active
        </a>
      </li>
    );
  }
}

export default Active;
