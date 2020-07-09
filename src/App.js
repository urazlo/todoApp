import React from 'react';
import './App.css';
import Section from './Section';
import Footer from './Footer';
import Header from './Header';

const tasksStorageKey = 'tasksStorage';

const tasksStorage = {
  get: () => {

    if (JSON.parse(localStorage.getItem(tasksStorageKey) !== null)) {
      return JSON.parse(localStorage.getItem(tasksStorageKey));
    }
    return [];
  },

  set: (task) => {
    localStorage.setItem(tasksStorageKey, JSON.stringify(task))
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: tasksStorage.get(),
      value: '',
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
        isAll: true,
      };
      this.setState({ tasks: [...tasks, task], value: '' }, this.updateLocalStorage);
    }
  }

  deleteTask = (index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  };

  markTask = (index) => {
    const tasks = [...this.state.tasks];

    tasks[index].isDone = !tasks[index].isDone;

    this.setState({ tasks }, this.updateLocalStorage);
  };

  markAllTasks = () => {
    const { tasks } = this.state;
    const updatedTask = tasks.map((task) => {
      return {
        ...task,
        isDone: !task.isDone
      }
    });
    this.setState({ tasks: updatedTask }, this.updateLocalStorage)
  }

  deleteDoneTasks = () => {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter((task) => !task.isDone) }, this.updateLocalStorage);
  };

  filterTask = (type, value) => {
    this.setState({
      isAll: type === 'isAll' ? true : false,
      isDone: value
    });
  }

  updateLocalStorage = () => {
    tasksStorage.set(this.state.tasks)
  }

  editTask = (index, value) => {
    const tasks = [...this.state.tasks];

    tasks[index].title = value;

    this.setState({ tasks }, this.updateLocalStorage);

  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleEnter = (e) => {
    if (e.key === 'Enter') { this.addTask(); }
  };

  render() {
    console.log(tasksStorage.get());

    const { value, tasks, isAll, isDone } = this.state;
    const filteredTasks = isAll
      ? tasks
      : tasks.filter((task) => task.isDone !== isDone);

    const counter = filteredTasks.length;
    const completedCounter = filteredTasks.filter((task) => task.isDone).length;

    return (
      <>
        <Header
          value={value}
          tasks={tasks}
          handleChange={this.handleChange}
          handleEnter={this.handleEnter}
        />
        <Section
          className="main"
          editTask={this.editTask}
          filteredTasks={filteredTasks}
          deleteTask={this.deleteTask}
          markTask={this.markTask}
          markAllTasks={this.markAllTasks}
        />
        <Footer
          className="footer"
          counter={counter}
          completedCounter={completedCounter}
          filterTask={this.filterTask}
          deleteDoneTasks={this.deleteDoneTasks}
        />
      </>
    );
  }
}

export default App;
