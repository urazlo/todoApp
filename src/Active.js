import React from 'react';

class Active extends React.Component {

  handleClick = () => {
    this.props.tasksFilter('isDone', true)
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
