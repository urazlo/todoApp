import React from 'react';
import classNames from 'classnames'

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changedTitle: props.title,
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.escapeListener);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeListener);
  }

  escapeListener = (e) => {
    if (e.key === 'Escape') {
      this.props.changeEditableTaskId(null);
    }
  }

  onDelete = () => {
    this.props.deleteTask(this.props.index);
  }

  onToggle = () => {
    this.props.markTask(this.props.id);
  }

  doubleClickHandler = () => {
    this.props.changeEditableTaskId(this.props.id);
  }

  clickHandler = (e) => {
    if (this.props.editableTaskId === this.props.id) {
      e.stopPropagation();
    } else {
      this.props.changeEditableTaskId(null);
      this.setState({ changedTitle: this.props.title });
    }
  }

  clickBlocker = (e) => {
    e.stopPropagation();
  }

  onInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.editTask(this.props.id, this.state.changedTitle);
      this.props.changeEditableTaskId(null);
    }

    if (e.key === 'Escape') {
      this.setState({ changedTitle: this.props.title });
      this.props.changeEditableTaskId(null);
    }
  }

  onEdit = (e) => {
    this.setState({ changedTitle: e.target.value });
  }

  render() {
    const taskClasses = classNames(
      'todo-list-item', {
      'completed-task': this.props.isDone,
    });

    const showInput = this.props.id === this.props.editableTaskId;

    return (
      <div
        className='todo-list'
        onDoubleClick={this.doubleClickHandler}
        onClick={this.clickHandler}
      >
        {showInput && (
          <input
            autoFocus
            className='edit'
            onKeyDown={this.onInputKeyDown}
            value={this.state.changedTitle}
            onChange={this.onEdit}
            onClick={this.clickBlocker}
          />
        )}

        <input
          className='toggle'
          type='checkbox'
          checked={this.props.isDone}
          onChange={this.onToggle}
          onDoubleClick={this.clickBlocker}
        />

        <span className={taskClasses}>
          {this.props.title}
        </span>

        <button
          onClick={this.onDelete}
          className="delete-task-btn"
        >
          X
        </button>
      </div>
    );
  }
}

export default Task;
