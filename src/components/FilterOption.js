import React from 'react';
import classNames from 'classnames';

class FilterOption extends React.Component {
  handleClick = () => {
    this.props.filterTasks(this.props.filterName);
  }

  render() {
    const { filterName, filter } = this.props;

    const filterClasses = classNames(
      'filter-item', {
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

export default FilterOption;
