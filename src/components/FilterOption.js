import React from 'react';
import classNames from 'classnames'

class FilterOption extends React.Component {
  handleClick = () => {
    this.props.filterTasks(this.props.filterName);
  }

  render() {

    const filterClasses = classNames(
      'filter-item', {
      'filter-selected': this.props.filterName === this.props.filter,
    });

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
