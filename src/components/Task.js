import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
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
      <StyledTask
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
      </StyledTask>
    );
  }
}

const StyledTask = styled.div`
  display: flex;
  position: relative;
  font-size: 24px;
  border-top: 1px solid #ededed;
  background-color: #fff;
  padding: 10px;
  margin-top: 2px;
  align-items: center;
  
  &:hover .delete-task-btn{
    opacity: 1;
    color: #dd2b31;
  }
  
  &:nth-child(1) {
    border-top: none;
  }
  

.edit {
  margin: 0;
  font-size: 24px;
  line-height: 1.4em;
  box-sizing: border-box;
  position: absolute;
  top: -2px;
  left: 40px;
  width: 92.8%;
  padding: 6px;
  color: rgba(26, 112, 224, 0.808);

  &:focus {
  outline: none;
  border: 2px solid rgba(255, 102, 1, 0.465);
}
}

.toggle {
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.completed-task {
  color: #2e2beca9;
  text-decoration: line-through;
}

.todo-list-item {
  margin-left: 10px;
  flex-grow: 2;
  padding: 2px;
}

.delete-task-btn {
  cursor: pointer;
  font-size: 22px;
  margin-right: 10px;
  opacity: 0;
}

&:focus {
  outline: none
}
}
`;

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
