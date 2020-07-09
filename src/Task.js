import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInput: false,
      changedTitle: props.title
    }
  }

  onDelete = () => {
    this.props.deleteTask(this.props.index);
  }

  onToggle = () => {
    this.props.markTask(this.props.index);
  }

  doubleClickHandler = () => {
    this.setState({ showInput: true });
  }

  handleEnter = (e) => {

    if (e.key === 'Enter') {
      this.setState({ showInput: false });
      this.props.editTask(this.props.index, this.state.changedTitle);
    }

    if (e.key === 'Escape') {
      this.setState({ showInput: false, changedTitle: this.props.title });
    }
  }

  onEdit = (e) => {
    this.setState({ changedTitle: e.target.value });
  }

  render() {

    const { title } = this.props;

    return (

      <div
        className='todo-list'
      >
        {this.state.showInput && (
          <input
            className='editor'
            onKeyDown={this.handleEnter}
            value={this.state.changedTitle}
            onChange={this.onEdit}
          />
        )}
        <input
          className='toggle'
          type='checkbox'
          onChange={this.onToggle}
        />
        <label
          onDoubleClick={this.doubleClickHandler}
          className={this.props.isDone ? 'done' : 'active'}
        >
          {title}
        </label>
        <button
          onClick={this.onDelete}
          className='deleteButton'
        >
          X
        </button>
      </div>
    );
  }
}

export default Task;
