import React from 'react';
import './App.css';
import Section from './components/Section';
import Footer from './components/Footer';
import Header from './components/Header';
import { tasksStorage } from './utils';
import { filterNames } from './utils/constants';


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
      filter: hash,
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

      this.setState({
        tasks: [...tasks, task],
        value: ''
      }, this.updateLocalStorage);
    }
  }

  deleteTask = (id) => {
    const { tasks } = this.state;

    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    this.setState({ tasks }, this.updateLocalStorage);
  };

  markTask = (id) => {
    const tasks = [...this.state.tasks];

    const index = tasks.findIndex((task) => task.id === id);
    tasks[index].isDone = !tasks[index].isDone;

    this.setState({ tasks }, this.updateLocalStorage);
  };

  markAllTasks = () => {
    const { tasks } = this.state;
    let clonnedTasks;

    const completedTasks = tasks.filter((task) => {
      return task.isDone === false;
    }).length === 0
      ? false
      : true;

    if (completedTasks) {
      clonnedTasks = tasks.map((task) => {
        return {
          ...task,
          isDone: true,
        }
      });
    } else {
      clonnedTasks = tasks.map((task) => {
        return {
          ...task,
          isDone: false,
        }
      });
    }

    this.setState({ tasks: clonnedTasks }, this.updateLocalStorage)
  }

  deleteDoneTasks = () => {
    const tasks = this.state.tasks.filter((task) => !task.isDone);

    this.setState({ tasks }, this.updateLocalStorage);
  };

  filterTasks = (filter) => {
    window.location.hash = filter;

    this.setState({ filter });
  }

  updateLocalStorage = () => {
    tasksStorage.set(this.state.tasks);
  }

  editTask = (id, text) => {
    const tasks = [...this.state.tasks];

    const index = tasks.findIndex((task) => task.id === id);
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
      filter,
    } = this.state;

    let activeCounter = 0;
    let doneCounter = 0;

    const filtredTasks = tasks.filter((task) => {
      task.isDone && doneCounter++;
      !task.isDone && activeCounter++;

      if (filter === filterNames.all) {
        return true;
      }

      return task.isDone === (filterNames.completed === filter);
    });

    return (
      <>
        <Header
          value={value}
          filtredTasks={filtredTasks}
          handleChange={this.handleChange}
          handleEnter={this.handleEnter}
          markAllTasks={this.markAllTasks}
          activeCounter={activeCounter}
        />

        <Section
          editTask={this.editTask}
          filtredTasks={filtredTasks}
          deleteTask={this.deleteTask}
          markTask={this.markTask}
        />

        <Footer
          setRoute={this.setRoute}
          filterNames={filterNames}
          activeCounter={activeCounter}
          doneCounter={doneCounter}
          filterTasks={this.filterTasks}
          tasks={this.state.tasks}
          deleteDoneTasks={this.deleteDoneTasks}
          filter={this.state.filter}
          filtredTasks={filtredTasks}
        />
      </>
    );
  }
}

export default App;
