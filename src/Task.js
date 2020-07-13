import React from 'react';
import classNames from 'classnames'

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInput: false,
      changedTitle: props.title,
      isHovered: false,
    }
  }

  onDelete = () => {
    this.props.deleteTask(this.props.index);
  }

  onToggle = () => {
    this.props.markTask(this.props.id);
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  doubleClickHandler = () => {
    this.setState({ showInput: true });
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.setState({ showInput: false });
      this.props.editTask(this.props.id, this.state.changedTitle);
    }

    if (e.key === 'Escape') {
      this.setState({ showInput: false, changedTitle: this.props.title });
    }
  }

  onEdit = (e) => {
    this.setState({ changedTitle: e.target.value });
  }

  on = () => {
    this.setState({ isHovered: true });
  }

  mouseOverHandler = () => {
    this.setState({ isHovered: true });
  }

  mouseLeaveHandler = () => {
    this.setState({ isHovered: false });
  }

  handleBlur = () => {
    this.setState({ showInput: false, changedTitle: this.props.title });
  }

  render() {

    let taskClasses = classNames({
      'completed-task': this.props.isDone,
    });

    let deleteButtonClass = classNames({
      'delete-task': true,
      'hidden': !this.state.isHovered,
    });

    return (
      <div
        className='todo-list'
        onDoubleClick={this.doubleClickHandler}
        onMouseOver={this.mouseOverHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        {this.state.showInput && (
          <input
            autoFocus
            className='edit'
            onKeyDown={this.handleEnter}
            value={this.state.changedTitle}
            onChange={this.onEdit}
            onBlur={this.handleBlur}
          />
        )}
        <input
          className='toggle'
          type='checkbox'
          checked={this.props.isDone}
          onChange={this.onToggle}
        />
        <label
          className={taskClasses}
        >
          {this.props.title}
        </label>
        <button
          onClick={this.onDelete}
          className={deleteButtonClass}
        >
          X
        </button>
      </div>
    );
  }
}

export default Task;
