import React from 'react';

class Footer extends React.Component {

  render() {
    const { deleteDoneTasks, filterTask, counter, completedCounter } = this.props;
    let counterLabelText;

    if (counter === 1) {
      counterLabelText = `${counter} item left`;
    } else {
      counterLabelText = `${counter} items left`
    }

    return (
      <>
        <span className='todo-count'>
          {counterLabelText}
        </span>
        <div className='filters'>
          <button
            className='filters-button'
            onClick={() => filterTask('isAll', true)}>All
          </button>
          <button
            className='filters-button'
            onClick={() => filterTask('isDone', true)}>Active
          </button>
          <button
            className='filters-button'
            onClick={() => filterTask('isDone', false)}>Completed
          </button>
          <button
            className='filters-button'
            onClick={() => deleteDoneTasks()}>Clear completed [{completedCounter}]
        </button>
        </div>
      </>
    );
  }
}

export default Footer;
