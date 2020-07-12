import React from 'react';
import FilterOption from './FilterOption';
import { filterNames } from './utils/constants'

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
      <div className="footer">
        <span className='todo-count'>
          {counterText}
        </span>
        <ul className="filters">
          <FilterOption
            filterName={filterNames.all}
            tasksFilter={tasksFilter}
          >
            All
          </FilterOption>
          <FilterOption
            filterName={filterNames.inProgress}
            tasksFilter={tasksFilter}
          >
            Active
          </FilterOption>
          <FilterOption
            filterName={filterNames.completed}
            tasksFilter={tasksFilter}
          >
            Completed
          </FilterOption>
        </ul>
        <button
          className='clear-all-button'
          onClick={() => deleteDoneTasks()}>Clear completed [{completedTasksCounter}]
        </button>
      </div>
    );
  }
}

export default Footer;
