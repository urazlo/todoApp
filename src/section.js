import React from 'react';

class Section extends React.Component {

  render() {
    const { tasks, deleteTask, markTask, markAllTasks } = this.props;

    return (
      <>
        <input
          type="checkbox"
          className="toggle-all"
          onChange={() => markAllTasks()}
        />
        {tasks.map(({ id, title, isDone }, index) => (
          <div className="todo-list" key={id}>
            <input
              className="toggle"
              type="checkbox"
              onChange={() => markTask(id)}
            />
            <label className={isDone ? 'done' : 'active'}>{title} </label>
            <button
              onClick={() => deleteTask(index)}
              className={'deleteButton'}>
              X
              </button>
          </div>
        ))}
      </>
    );
  }
}

export default Section;
