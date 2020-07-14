import React from 'react';
import classNames from 'classnames'

class Checkbox extends React.Component {
  render() {
    const { filtredTasks, activeCounter } = this.props;
    const isComplete = activeCounter === 0;

    let toggleButtonClasses = classNames({
      'toggle-all': true,
      'hidden': filtredTasks.length === 0,
    });

    return (
      <input
        className={toggleButtonClasses}
        type="checkbox"
        onChange={this.props.markAllTasks}
        checked={isComplete}
      />
    );
  }
}

export default Checkbox;
