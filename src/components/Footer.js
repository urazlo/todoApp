import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'styles/theme';
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
        isButtonHidden={completedCounter === 0}
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

@media (max-width: ${theme.sizes.lg}){  
  height: 70px;
  position: relative;
  margin: 0 auto;
} 

.todo-count {
  font-size: 15px;
  padding: 4px;
  flex-grow: 1;
  float: left;
  flex-basis: 3%;

@media (max-width: ${theme.sizes.lg}){  
  position: absolute;
  font-size: 14px;
  bottom: 15px;
  left: 125px;
}   

@media (max-width: ${theme.sizes.md}){  
  bottom: 15px;
   left: 100px;
} 

@media (max-width: ${theme.sizes.l}){  
  bottom: 15px;
  left: 75px;
} 

@media (max-width: ${theme.sizes.m}){  
  bottom: 15px;
  left: 65px;
} 

@media (max-width: ${theme.sizes.xs}){  
  bottom: 15px;
  left: 50px;
} 
}

.filters {
  display: flex;
  font-size: 16px;
  flex-grow: 2;
  justify-content: space-around;

@media (max-width: ${theme.sizes.lg}){  
  max-height: 30px;
  justify-content: space-evenly;
}   
}

.clear-all-button {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  float: right;
  font-size: 15px;
  padding: 4px;
  opacity: ${({ isButtonHidden }) => (isButtonHidden ? 0 : 1)};

@media (max-width: ${theme.sizes.lg}){  
  font-size: 14px;
  position: absolute;
  bottom: 17px;
  right: 125px;
}   

@media (max-width: ${theme.sizes.md}){  
  bottom: 17px;
  right: 100px;
} 

@media (max-width: ${theme.sizes.l}){  
  bottom: 17px;
  right: 75px;
} 

@media (max-width: ${theme.sizes.m}){  
  bottom: 17px;
  right: 60px;
} 

@media (max-width: ${theme.sizes.xs}){  
  bottom: 17px;
  right: 45px;
} 
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
