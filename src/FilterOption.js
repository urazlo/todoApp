import React from 'react';

class FilterOption extends React.Component {

  handleClick = () => {
    this.props.tasksFilter(this.props.filterName);
  }

  render() {

    return (
      <li onClick={this.handleClick}>
        {this.props.children}
      </li>
    );
  }
}

export default FilterOption;

//dobavit hash