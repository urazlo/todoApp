import React from 'react';

class Header extends React.Component {

  render() {
    const { value, handleChange, handleEnter } = this.props;

    return (
      <div className="todoapp">
        <h1>todos</h1>
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
