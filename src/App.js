import React from 'react';
import './App.css';
import Section from './Section';
import Footer from './Footer';
import Header from './Header';
import { tasksStorage, filterNames } from './utils/constants';


class App extends React.Component {
  constructor(props) {
    super(props);

    let { hash } = window.location;
    if (!Object.keys(filterNames).map((key) => filterNames[key]).includes(hash)) {
      hash = filterNames.all;
      window.location.hash = hash;
    }

    this.state = {
      tasks: tasksStorage.get(),
      value: '',
      filter: hash
    };
  }

  addTask = () => {
    const { tasks, value } = this.state;
    const id = Math.random().toString(36).substr(2, 9);

    if (value.trim()) {
      const task = {
        id,
        title: value.trim(),
        isDone: false,
      };

      this.setState({ tasks: [...tasks, task], value: '' }, this.updateLocalStorage);
    }
  }

  deleteTask = (index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks: tasks }, this.updateLocalStorage);
  };

  markTask = (index) => {
    const tasks = [...this.state.tasks];

    tasks[index].isDone = !tasks[index].isDone;

    this.setState({ tasks }, this.updateLocalStorage);
  };


  markAllTasks = () => {
    const { tasks } = this.state;
    let clonnedTask = [];

    const undoneTasks = tasks.filter((task) => {
      return task.isDone === false;
    }).length === 0
      ? false
      : true;

    clonnedTask = tasks.map((task) => {
      return {
        ...task,
        isDone: undoneTasks
      }
    });

    this.setState({ tasks: clonnedTask }, this.updateLocalStorage)
  }

  deleteDoneTasks = () => {
    const { tasks } = this.state;

    this.setState({ tasks: tasks.filter((task) => !task.isDone) }, this.updateLocalStorage);
  };

  tasksFilter = (name) => {
    window.location.hash = filterNames[name];
    this.setState({
      filter: filterNames[name],
    });
  }

  updateLocalStorage = () => {
    tasksStorage.set(this.state.tasks)
  }

  editTask = (index, text) => {
    const tasks = [...this.state.tasks];

    tasks[index].title = text;

    this.setState({ tasks }, this.updateLocalStorage);

  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleEnter = (e) => {
    if (e.key === 'Enter') { this.addTask(); }
  };

  render() {
    const {
      value,
      tasks,
      nameFilter,
      filter,
    } = this.state;

    const allTasks = filter === filterNames.all
      ? tasks
      : tasks.filter((task) => task.isDone === (filterNames.completed === filter));

    return (
      <>
        <Header
          value={value}
          tasks={tasks}
          handleChange={this.handleChange}
          handleEnter={this.handleEnter}
        />
        <Section
          nameFilter={nameFilter}
          editTask={this.editTask}
          allTasks={allTasks}
          deleteTask={this.deleteTask}
          markTask={this.markTask}
          markAllTasks={this.markAllTasks}
        />
        <Footer
          setRoute={this.setRoute}
          filterNames={filterNames}
          // allTasksCounter={allTasksCounter}
          // completedTasksCounter={completedTasksCounter}
          tasksFilter={this.tasksFilter}
          deleteDoneTasks={this.deleteDoneTasks}
        />
      </>
    );
  }
}

export default App;
