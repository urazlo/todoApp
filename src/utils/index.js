import { tasksStorageKey } from './constants';

export const getTaskId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const tasksStorage = {
  get: () => {
    try {
      return JSON.parse(localStorage.getItem(tasksStorageKey)) || [];
    } catch (error) {
      return [];
    }
  },

  set: (task) => {
    localStorage.setItem(tasksStorageKey, JSON.stringify(task));
  },
};
