import React from 'react';

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value } = this.props;
    return (
      <>
        <input type="checkbox" className="toggle-all" />
        <ul className="todo-list">
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{value}</label>
            </div>
          </li>
        </ul>
      </>
    );
  }
}


export default Section;
