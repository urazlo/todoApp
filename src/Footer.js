import React from 'react';
import All from './All';
import Active from './Active';
import Completed from './Completed';

class Footer extends React.Component {

  render() {
    const {
      deleteDoneTasks,
      allTasksCounter,
      completedTasksCounter,
      tasksFilter,
    } = this.props;

    let counterText;

    if (allTasksCounter === 1) {
      counterText = `${allTasksCounter} item left`;
    } else {
      counterText = `${allTasksCounter} items left`
    }

    return (
      <>
        <span className='todo-count'>
          {counterText}
        </span>
        <ul className="filters">
          <All
            className='filters-button'
            tasksFilter={tasksFilter}
          />
          <Active
            className='filters-button'
            tasksFilter={tasksFilter}
          />
          <Completed
            className='filters-button'
            tasksFilter={tasksFilter}
          />
        </ul>
        <button
          className='filters-button'
          onClick={() => deleteDoneTasks()}>Clear completed [{completedTasksCounter}]
        </button>
      </>
    );
  }
}

export default Footer;
