import React from 'react';

const Footer = () => {
  return (
    <>
      <span className="todo-count" id="count">
        <strong>0 </strong>
        items left
        </span>
      <ul className="filters">
        <li><a href="#/" id="all" className="selected">All</a></li>
        <li><a href="#/active" id="active" className="">Active</a></li>
        <li><a href="#/completed" id="completed" className="">Completed</a></li>
      </ul>
    </>
  );
}

export default Footer;
