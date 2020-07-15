import React from 'react';
import classNames from 'classnames'

class Toggler extends React.Component {
  render() {
    const {
      filtredTasks,
      activeCounter,
      toggleAllTasks,
    } = this.props;
    const isComplete = activeCounter === 0;

    const toggleButtonClasses = classNames(
      'toggle-all', {
      'hidden': filtredTasks.length === 0,
    });

    return (
      <input
        className={toggleButtonClasses}
        type="checkbox"
        onChange={toggleAllTasks}
        checked={isComplete}
      />
    );
  }
}

export default Toggler;
