import React from 'react';
import Task from './Task';
import Checkbox from './Checkbox';

class Section extends React.Component {

  render() {
    const {
      allTasks,
      deleteTask,
      markTask,
      markAllTasks,
      editTask,
    } = this.props;

    return (
      <>
        <Checkbox
          markAllTasks={markAllTasks}
          allTasks={allTasks}
        />
        {allTasks.map(({ id, title, isDone }, index) => (
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
