import React from 'react';

class Completed extends React.Component {

  handleClick = () => {
    this.props.tasksFilter('completed');
  }

  render() {

    return (
      <li>
        <a href="#/completed" onClick={this.handleClick}>
          Completed
        </a>
      </li>
    );
  }
}

export default Completed;
