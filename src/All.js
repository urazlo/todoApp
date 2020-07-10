import React from 'react';

class All extends React.Component {

  handleClick = () => {
    this.props.tasksFilter('all');
  }

  render() {

    return (
      <li>
        <a href="#/" onClick={this.handleClick}>
          All
      </a>
      </li>
    );
  }
}

export default All;
