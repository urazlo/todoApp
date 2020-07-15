import React from 'react';
import PropTypes from 'prop-types';

import { TaskType } from 'utils/types';
import Task from './Task';

class Section extends React.Component {
  state = { editableTaskId: null }

  changeEditableTaskId = (editableTaskId) => {
    this.setState({ editableTaskId });
  }

  render() {
    const {
      filtredTasks,
      deleteTask,
      toggleTask,
      editTask,
    } = this.props;

    return (
      <div className="main">
        {filtredTasks.map(({ id, title, isDone }) => (
          <Task
            key={id}
            id={id}
            title={title}
            isDone={isDone}
            editableTaskId={this.state.editableTaskId}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            changeEditableTaskId={this.changeEditableTaskId}
          />
        ))}
      </div>
    );
  }
}

Section.propTypes = {
  filtredTasks: PropTypes.arrayOf(TaskType),
  editTask: PropTypes.func,
  deleteTask: PropTypes.func,
  toggleTask: PropTypes.func,
};

Section.defaultProps = {
  editTask: () => null,
  deleteTask: () => null,
  toggleTask: () => null,
  filtredTasks: [],
};

export default Section;
