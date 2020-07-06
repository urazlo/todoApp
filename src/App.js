import React from 'react';
import './App.css';
import Header from './header.js';
import Section from './section.js';
import Footer from './footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: 1,
          title: '',
          done: false
        }
      ],
      value: '',
    };
  }

  addTask = () => {
    const { value } = this.state;
    if (value) {
      this.props.addTask(value);
      this.setState({ value: '' });
    }
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleEnter = (e) => {
    if (e.key === 'Enter') { this.addTask(); }
  };

  render() {
    const { value, tasks } = this.state;

    return (
      <>
        <Header
          value={value}
          handleChange={this.handleChange}
          handleEnter={this.handleEnter}
        />
        <Section className="main" tasks={tasks} />
        <Footer className="footer" />
      </>
    );
  }
}

export default App;
