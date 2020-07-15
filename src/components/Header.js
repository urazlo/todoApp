import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TaskType } from 'utils/types';
import Toggler from './Toggler';

class Header extends React.Component {
  render() {
    const {
      value,
      handleChange,
      handleEnter,
      activeCounter,
      toggleAllTasks,
      filtredTasks,
    } = this.props;

    return (
      <StyledHeader>
        <h1 className="header-title">todos</h1>

        <Toggler
          activeCounter={activeCounter}
          filtredTasks={filtredTasks}
          toggleAllTasks={toggleAllTasks}
        />

        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={value}
          onKeyPress={handleEnter}
          onChange={handleChange}
        />
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  background: #fff;
  margin-top: 130px;
  position: relative;
  border-bottom: 2px solid rgba(98, 77, 216, 0.308);

  .header-title {
    position: absolute;
    top: -140px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
  color: rgba(72, 50, 202, 0.15);
  }

  .new-todo {
    margin: 0;
   font-size: 24px;
   line-height: 1.4em;
   box-sizing: border-box;
   position: relative;
   width: 85%;
   padding: 15px;
   border: none;
   color: inherit;
  }

  &:focus{
    outline: none
  }
`;

Header.propTypes = {
  value: PropTypes.string,
  activeCounter: PropTypes.number,
  filtredTasks: PropTypes.arrayOf(TaskType),
  handleChange: PropTypes.func,
  handleEnter: PropTypes.func,
  toggleAllTasks: PropTypes.func,
};

Header.defaultProps = {
  value: '',
  activeCounter: 0,
  filtredTasks: [],
  handleChange: () => null,
  handleEnter: () => null,
  toggleAllTasks: () => null,
};

export default Header;
