import PropTypes from 'prop-types';

export const TaskType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  isDone: PropTypes.bool,
});

export const FilterType = PropTypes.oneOf(['all', 'inProgress', 'completed']);
