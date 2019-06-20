import types from './types';
import todoData from '../../mock-data/todos';

export const fetchAllTodos = () => dispatch => {
  dispatch({
    type: types.FETCH_TODOS,
    payload: todoData
  })
}
