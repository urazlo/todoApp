import React from 'react';

class All extends React.Component {

  handleClick = () => {
    this.props.tasksFilter('isAll', true);
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
