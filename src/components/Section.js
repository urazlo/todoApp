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
      markTask,
      editTask,
    } = this.props;

    return (
      <div className="main">
        {filtredTasks.map(({ id, title, isDone }, index) => (
          <Task
            editTask={editTask}
            key={id}
            id={id}
            editableTaskId={this.state.editableTaskId}
            changeEditableTaskId={this.changeEditableTaskId}
            title={title}
            isDone={isDone}
            index={index}
            deleteTask={deleteTask}
            markTask={markTask}
          />
        ))}
      </div>
    );
  }
}

export default Section;
