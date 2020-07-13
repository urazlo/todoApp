import React from 'react';
import Task from './Task';

class Section extends React.Component {
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
