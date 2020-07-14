import React from 'react';
import FilterOption from './FilterOption';
import { filterNames } from '../utils/constants'
import classNames from 'classnames'

class Footer extends React.Component {
  render() {
    const {
      deleteDoneTasks,
      filterTasks,
      tasks,
      activeCounter,
      doneCounter,
      filter,
    } = this.props;

    const counterText = `${activeCounter} item${activeCounter === 1 ? '' : 's'} left`;

    const clearAllButtonClasses = classNames('clear-all-button', {
      'hidden': doneCounter === 0,
    });

    const footerClasses = classNames('footer', {
      'hidden': tasks.length === 0,
    });

    return (
      <div className={footerClasses}>
        <span className='todo-count'>
          {counterText}
        </span>
        <div className="filters">

          <FilterOption
            filterName={filterNames.all}
            filterTasks={filterTasks}
            filter={filter}
          >
            All
          </FilterOption>

          <FilterOption
            filterName={filterNames.inProgress}
            filterTasks={filterTasks}
            filter={filter}
          >
            Active
          </FilterOption>

          <FilterOption
            filterName={filterNames.completed}
            filterTasks={filterTasks}
            filter={filter}
          >
            Completed
          </FilterOption>

        </div>
        <button
          className={clearAllButtonClasses}
          onClick={deleteDoneTasks}
        >
          Clear completed [{doneCounter}]
        </button>
      </div>
    );
  }
}

export default Footer;
