import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

import { FilterType } from 'utils/types';

class FilterOption extends React.Component {
  handleClick = () => {
    this.props.filterTasks(this.props.filterName);
  }

  render() {
    const { filterName, filter } = this.props;

    const filterClasses = classNames(
      {
        'filter--selected': filterName === filter,
      },
    );

    return (
      <StyledFilter
        className={filterClasses}
        onClick={this.handleClick}
      >
        {this.props.children}
      </StyledFilter>
    );
  }
}

const StyledFilter = styled.div`
  border-radius: 5px;
  cursor: pointer;
  padding: 6px;

  &:hover {
    padding: 4px;
    border: 2px solid rgba(25, 0, 255, 0.2);
  }

  &.filter--selected {
    padding: 4px;
    border: 2px solid rgba(25, 0, 255, 0.2);
  }
`;

FilterOption.propTypes = {
  filterName: FilterType,
  filter: FilterType,
  children: PropTypes.string,
};

FilterOption.defaultProps = {
  filterName: 'all',
  filter: 'all',
  children: 'All',
};

export default FilterOption;
