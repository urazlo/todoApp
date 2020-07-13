import React from 'react';
import Checkbox from './Checkbox';

class Header extends React.Component {
  render() {
    const {
      value,
      handleChange,
      handleEnter,
      activeCounter,
      markAllTasks,
      filtredTasks
    } = this.props;

    return (
      <div className='header'>
        <h1>todos</h1>
        <Checkbox
          activeCounter={activeCounter}
          markAllTasks={markAllTasks}
          filtredTasks={filtredTasks}
        />
        <input
          className='new-todo'
          placeholder='What needs to be done?'
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
