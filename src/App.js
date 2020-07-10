import React from 'react';
import './App.css';
import Section from './Section';
import Footer from './Footer';
import Header from './Header';

const tasksStorageKey = 'tasksStorage';

const tasksStorage = {
  get: () => {

    try {
      return JSON.parse(localStorage.getItem(tasksStorageKey)) || [];
    } catch (error) {
      return [];
    }
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
      hash: "#/"
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

  tasksFilter = (type, value) => {
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
    const { value, tasks, isAll, isDone } = this.state;

    const allTasks = isAll
      ? tasks
      : tasks.filter((task) => task.isDone !== isDone);

    const activeTasks = allTasks.filter((task) =>
      task.isDone !== true);

    const completedTasks = allTasks.filter((task) =>
      task.isDone === true);

    console.log('active', activeTasks.length);
    console.log('completed', completedTasks.length);
    console.log('all', allTasks.length);
    console.log('-----------------');

    const allTasksCounter = allTasks.length;
    const completedTasksCounter = completedTasks.length;

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
          isDone={isDone}
          editTask={this.editTask}
          allTasks={allTasks}
          deleteTask={this.deleteTask}
          markTask={this.markTask}
          markAllTasks={this.markAllTasks}
        />
        <Footer
          className="footer"
          allTasksCounter={allTasksCounter}
          completedTasksCounter={completedTasksCounter}
          tasksFilter={this.tasksFilter}
          deleteDoneTasks={this.deleteDoneTasks}
          allTasks={allTasks}
          activeTasks={activeTasks}
          completedTasks={completedTasks}

        />
      </>
    );
  }
}

export default App;
