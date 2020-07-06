import React from 'react';

const HeaderInput = (props) => {

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={props.value}
      onChange={props.handleChange}
      onKeyPress={props.handleEnter}
    />
  );
}

export default HeaderInput;
