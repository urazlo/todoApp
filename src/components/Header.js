import React from 'react';
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

export default Header;
