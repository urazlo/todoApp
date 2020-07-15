import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { TaskType } from 'utils/types';

class Toggler extends React.Component {
  render() {
    const {
      filtredTasks,
      activeCounter,
      toggleAllTasks,
    } = this.props;
    const isComplete = activeCounter === 0;

    const toggleButtonClasses = classNames(
      'toggle-all',
      {
        hidden: filtredTasks.length === 0,
      },
    );

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

Toggler.propTypes = {
  filtredTasks: PropTypes.arrayOf(TaskType),
  activeCounter: PropTypes.number,
  toggleAllTasks: PropTypes.func,
};

Toggler.defaultProps = {
  filtredTasks: [],
  activeCounter: 0,
  toggleAllTasks: () => null,
};

export default Toggler;
