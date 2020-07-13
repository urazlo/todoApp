import React from 'react';
import FilterOption from './FilterOption';
import { filterNames } from './utils/constants'
import classNames from 'classnames'

class Footer extends React.Component {
  render() {
    const {
      all,
      inProgress,
      completed,
    } = filterNames;

    const {
      deleteDoneTasks,
      activeCounter,
      doneCounter,
      filterTasks,
    } = this.props;

    let counterText;

    if (activeCounter === 1) {
      counterText = `${activeCounter} item left`;
    } else {
      counterText = `${activeCounter} items left`
    }

    let clearAllButtonClasses = classNames({
      'clear-all-button': true,
      'hidden': doneCounter === 0
    });

    return (
      <div className="footer">
        <span className='todo-count'>
          {counterText}
        </span>
        <div className="filters">
          <FilterOption
            filterName={all}
            filterTasks={filterTasks}
          >
            All
          </FilterOption>
          <FilterOption
            filterName={inProgress}
            filterTasks={filterTasks}
          >
            Active
          </FilterOption>
          <FilterOption
            filterName={completed}
            filterTasks={filterTasks}
          >
            Completed
          </FilterOption>
        </div>
        <button
          className={clearAllButtonClasses}
          onClick={() => deleteDoneTasks()}>Clear completed [{doneCounter}]
        </button>
      </div>
    );
  }
}

export default Footer;
