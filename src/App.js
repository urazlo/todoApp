import React from 'react';
import './App.css';
import Section from './section';
import Footer from './footer';
import Header from './header';

const storage = localStorage.getItem('storage');
// window.location.hash = '#/';

class App extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      tasks: [storage],
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
      this.setState({ tasks: [...tasks, task], value: '' });
    }
    localStorage.setItem('storage', this.state.tasks);
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

  tasksFilter = (type, value) => {
    this.setState({
      isAll: type === 'isAll' ? true : false,
      isDone: value
    });
  }


  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleEnter = (e) => {
    if (e.key === 'Enter') { this.addTask(); }
  };

  render() {
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
          filteredTasks={filteredTasks}
          deleteTask={this.deleteTask}
          markTask={this.markTask}
          markAllTasks={this.markAllTasks}
        />
        <Footer
          className="footer"
          counter={counter}
          completedCounter={completedCounter}
          tasksFilter={this.tasksFilter}
          deleteDoneTasks={this.deleteDoneTasks}
        />
      </>
    );
  }
}

export default App;

// var initial_model = {
//   todos: [],
//   hash: "#/"
// }

      // new_model.hash =  (window && window.location && window.location.hash) ?
      //   window.location.hash : '#/';