import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FilterType } from 'utils/types';
import { filterNames } from 'utils/constants';
import FilterOption from './FilterOption';

class Footer extends React.Component {
  render() {
    const {
      deleteCompletedTasks,
      filterTasks,
      activeCounter,
      completedCounter,
      filter,
    } = this.props;

    const counterText = `${activeCounter} item${activeCounter === 1 ? '' : 's'} left`;

    const clearAllButtonClasses = classNames('clear-all-button', {
      hidden: completedCounter === 0,
    });

    const footerClasses = classNames('footer', {
      hidden: completedCounter + activeCounter === 0,
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
          onClick={deleteCompletedTasks}
        >
          Clear completed [{completedCounter}]
        </button>
      </div>
    );
  }
}

Footer.propTypes = {
  activeCounter: PropTypes.number,
  completedCounter: PropTypes.number,
  deleteCompletedTasks: PropTypes.func,
  filterTasks: PropTypes.func,
  filter: FilterType,
};

Footer.defaultProps = {
  deleteCompletedTasks: () => null,
  filterTasks: () => null,
  activeCounter: 0,
  completedCounter: 0,
  filter: 'all',
};

export default Footer;
