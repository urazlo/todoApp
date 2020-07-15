import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changedTitle: props.title,
    };
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
    this.props.deleteTask(this.props.id);
  }

  onToggle = () => {
    this.props.toggleTask(this.props.id);
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
    const { changedTitle } = this.state;
    const {
      id,
      isDone,
      title,
      editableTaskId,
    } = this.props;

    const taskClasses = classNames(
      'todo-list-item',
      {
        'completed-task': isDone,
      },
    );

    const showInput = id === editableTaskId;

    return (
      <div
        className="todo-list"
        onDoubleClick={this.doubleClickHandler}
        onClick={this.clickHandler}
      >
        {showInput && (
          <input
            className="edit"
            autoFocus
            value={changedTitle}
            onKeyDown={this.onInputKeyDown}
            onChange={this.onEdit}
            onClick={this.clickBlocker}
          />
        )}

        <input
          type="checkbox"
          className="toggle"
          checked={isDone}
          onChange={this.onToggle}
          onDoubleClick={this.clickBlocker}
        />

        <span className={taskClasses}>{title}</span>

        <button
          className="delete-task-btn"
          onClick={this.onDelete}
          onDoubleClick={this.clickBlocker}
        >
          X
        </button>
      </div>
    );
  }
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  editableTaskId: PropTypes.string,
  isDone: PropTypes.bool,
  title: PropTypes.string,
};

Task.defaultProps = {
  isDone: false,
  title: '',
  editableTaskId: null,
};

export default Task;
