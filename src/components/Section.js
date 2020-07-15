import React from 'react';
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
        {filtredTasks.map(({ id, title, isDone }, index) => (
          <Task
            key={id}
            id={id}
            title={title}
            isDone={isDone}
            index={index}
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

export default Section;
