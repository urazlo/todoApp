import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

    return (
      <StyledFooter
        isHidden={completedCounter + activeCounter === 0}
        isHidden1={completedCounter === 0}
      >
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
          className="clear-all-button"
          onClick={deleteCompletedTasks}
        >
          Clear completed [{completedCounter}]
        </button>
      </StyledFooter>
    );
  }
}

const StyledFooter = styled.div`
  color: #777;
  padding: 10px 0;
  border-top: 1px solid #e6e6e6;
  display: flex;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};

  .todo-count {
  font-size: 15px;
  padding: 4px;
  flex-grow: 1;
  float: left;
  flex-basis: 3%;
}

.filters {
  display: flex;
  font-size: 16px;
  flex-grow: 2;
  justify-content: space-around;
}

.clear-all-button {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  float: right;
  font-size: 15px;
  padding: 4px;
  opacity: ${({ isHidden1 }) => (isHidden1 ? 0 : 1)};
}

&:focus {
  outline: none
}
`;

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
