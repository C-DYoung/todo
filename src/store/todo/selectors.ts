// // import { createSelector } from '@reduxjs/toolkit';
// import { createSelector } from 'reselect';
// import { RootState } from 'types';
// import { initialState } from './index';

// // export const baseSelector = (state: RootState) => state.todo;
// export const baseSelector = (state: RootState) => state.todo ?? initialState;

// export const TodoListSelector = createSelector(
//   baseSelector,
//   state => state.todolist,
// );

import { createSelector } from 'reselect';
import { RootState } from 'types';
import { initialState } from './index';

export const baseSelector = (state: RootState) => state?.todo ?? initialState;

export const TodoListSelector = createSelector(
  baseSelector,
  state => state.todolist,
);
