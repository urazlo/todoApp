import React from 'react';

class Footer extends React.Component {

  render() {
    const { deleteDoneTasks, counter } = this.props;
    let counterLabelText;

    if (counter === 1) {
      counterLabelText = `${counter} item left`;
    } else {
      counterLabelText = `${counter} items left`
    }

    return (
      <>
        <span className="todo-count">
          {counterLabelText}
        </span>
        <ul className="filters">
          <li><a href="#/" className="selected">All</a></li>
          <li><a href="#/active" className="">Active</a></li>
          <li><a href="#/completed" className="">Completed</a></li>
        </ul>
        <button
          className="clear-completed"
          onClick={() => deleteDoneTasks()}
        >
          Clear completed [{counter}]
        </button>
      </>
    );
  }
}

export default Footer;
