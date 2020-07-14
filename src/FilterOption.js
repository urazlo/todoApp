import React from 'react';
import classNames from 'classnames'

class FilterOption extends React.Component {
  handleClick = () => {
    this.props.filterTasks(this.props.filterName);
  }

  render() {
    const hash = window.location.hash;

    let filterClasses = classNames({
      'filter-item': true,
      'filter-selected': this.props.filterName === hash,
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
