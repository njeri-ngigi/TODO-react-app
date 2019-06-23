import types from './types';

export const mutateTodosList = (todos) => dispatch => {
  dispatch({
    type: types.MUTATE_TODOS_LIST,
    payload: todos
  })
}

export const changeLastLocation = (location) => dispatch => {
  dispatch({
    type: types.LAST_LOCATION,
    payload: location
  })
}
