import React from 'react';
import Task from './Task';

class Section extends React.Component {

  render() {
    const { filteredTasks, deleteTask, markTask, markAllTasks, editTask } = this.props;

    return (
      <>
        <input
          type="checkbox"
          className="toggle-all"
          onChange={markAllTasks}
        />
        {filteredTasks.map(({ id, title, isDone }, index) => (
          <Task
            editTask={editTask}
            key={id}
            id={id}
            title={title}
            isDone={isDone}
            index={index}
            deleteTask={deleteTask}
            markTask={markTask}
          />
        ))}
      </>
    );
  }
}

export default Section;

