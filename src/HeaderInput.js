import React from 'react';

class HeaderInput extends React.Component {

  render() {
    const {
      value,
      handleChange,
      addTask
    } = this.props;

    return (
      <div className="header">
        <h1>todos</h1>
        <div onKeyPress={addTask}></div>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default HeaderInput;
