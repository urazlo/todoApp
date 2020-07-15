import React from 'react';
import PropTypes from 'prop-types';

import { TaskType } from 'utils/types';
import Toggler from './Toggler';

class Header extends React.Component {
  render() {
    const {
      value,
      handleChange,
      handleEnter,
      activeCounter,
      toggleAllTasks,
      filtredTasks,
    } = this.props;

    return (
      <div className="header">
        <h1>todos</h1>

        <Toggler
          activeCounter={activeCounter}
          filtredTasks={filtredTasks}
          toggleAllTasks={toggleAllTasks}
        />

        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={value}
          onKeyPress={handleEnter}
          onChange={handleChange}
        />
      </div>
    );
  }
}

Header.propTypes = {
  value: PropTypes.string,
  activeCounter: PropTypes.number,
  filtredTasks: PropTypes.arrayOf(TaskType),
  handleChange: PropTypes.func,
  handleEnter: PropTypes.func,
  toggleAllTasks: PropTypes.func,
};

Header.defaultProps = {
  value: '',
  activeCounter: 0,
  filtredTasks: [],
  handleChange: () => null,
  handleEnter: () => null,
  toggleAllTasks: () => null,
};

export default Header;
