import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FilterType } from 'utils/types';

class FilterOption extends React.Component {
  handleClick = () => {
    this.props.filterTasks(this.props.filterName);
  }

  render() {
    const { filterName, filter } = this.props;

    const filterClasses = classNames(
      'filter-item',
      {
        'filter-selected': filterName === filter,
      },
    );

    return (
      <div
        className={filterClasses}
        onClick={this.handleClick}
      >
        {this.props.children}
      </div>
    );
  }
}

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
