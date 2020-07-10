import React from 'react';
import All from './All';
import Active from './Active';
import Completed from './Completed';

class Footer extends React.Component {

  render() {
    const { deleteDoneTasks, allTasksCounter, completedTasksCounter, tasksFilter } = this.props;
    let counterLabelText;

    if (allTasksCounter === 1) {
      counterLabelText = `${allTasksCounter} item left`;
    } else {
      counterLabelText = `${allTasksCounter} items left`
    }

    return (
      <>
        <span className='todo-count'>
          {counterLabelText}
        </span>
        <ul className="filters">
          <All
            className='filters-button'
            tasksFilter={tasksFilter} />
          <Active
            className='filters-button'
            tasksFilter={tasksFilter} />
          <Completed
            className='filters-button'
            tasksFilter={tasksFilter} />
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
