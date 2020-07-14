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
      filterTasks,
      tasks,
      activeCounter,
      doneCounter,
    } = this.props;

    const counterText = `${activeCounter} item${activeCounter === 1 ? '' : 's'} left`;

    let clearAllButtonClasses = classNames({
      'clear-all-button': true,
      'hidden': doneCounter === 0
    });

    let footerClasses = classNames({
      'footer': true,
      'hidden': tasks.length === 0,
    });

    return (
      <div className={footerClasses}>
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
          onClick={deleteDoneTasks}>Clear completed [{doneCounter}]
        </button>
      </div>
    );
  }
}

export default Footer;
