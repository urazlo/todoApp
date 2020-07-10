import React from 'react';

class Checkbox extends React.Component {

  toggleChange = () => {
    this.props.markAllTasks();
  }

  render() {

    const isComplete = this.props.allTasks.filter((task) => {
      return task.isDone === false;
    }).length !== 0
      ? false
      : true;

    return (
      <input
        type="checkbox"
        onChange={this.toggleChange}
        checked={isComplete}
      />
    );
  }
}

export default Checkbox;

