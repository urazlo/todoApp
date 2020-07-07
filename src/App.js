import React from 'react';
import './App.css';
import Section from './section';
import Footer from './footer';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      value: ''
    };
  }

  addTask = () => {
    const { tasks, value } = this.state;
    const id = Math.random().toString(36).substr(2, 9);

    if (value) {
      const task = {
        id,
        title: value,
        isDone: false,
      };

      this.setState({ tasks: [...tasks, task], value: '' });
    }
  };

  deleteTask = (index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  };

  markTask = (id) => {
    const { tasks } = this.state;
    const newTasks = tasks.map((task) => {

      if (id === task.id) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }

      return task;
    });

    this.setState({ tasks: newTasks });
  };

  markAllTasks = () => {
    const { tasks } = this.state;
    const newTasks = tasks.map((task) => {
      return {
        ...task,
        isDone: !task.isDone
      }
    });

    this.setState({ tasks: newTasks });
  }

  deleteDoneTasks = () => {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter((task) => !task.isDone) });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleEnter = (e) => {
    if (e.key === 'Enter') { this.addTask(); }
  };

  render() {
    const { value, tasks } = this.state;
    const counter = tasks.length;

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
          tasks={tasks}
          deleteTask={this.deleteTask}
          markTask={this.markTask}
          markAllTasks={this.markAllTasks}
        />
        <Footer
          className="footer"
          counter={counter}
          deleteDoneTasks={this.deleteDoneTasks}
        />
      </>
    );
  }
}

export default App;
