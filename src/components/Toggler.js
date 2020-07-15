import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TaskType } from 'utils/types';

class Toggler extends React.Component {
  render() {
    const {
      filtredTasks,
      activeCounter,
      toggleAllTasks,
    } = this.props;
    const isComplete = activeCounter === 0;

    return (
      <StyledInput
        isHidden={filtredTasks.length === 0}
        type="checkbox"
        onChange={toggleAllTasks}
        checked={isComplete}
      />
    );
  }
}

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 15px;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
`;

Toggler.propTypes = {
  filtredTasks: PropTypes.arrayOf(TaskType),
  activeCounter: PropTypes.number,
  toggleAllTasks: PropTypes.func,
};

Toggler.defaultProps = {
  filtredTasks: [],
  activeCounter: 0,
  toggleAllTasks: () => null,
};

export default Toggler;
