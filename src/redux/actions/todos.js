import types from './types';
// import todoData from '../../mock-data/todos';

// not used

// export const fetchAllTodos = () => dispatch => {
//   dispatch({
//     type: types.FETCH_TODOS,
//     payload: todoData
//   })
// }

export const createNewTodo = (todos) => dispatch => {
  console.log('Calle me>>>>>>>', todos)
  dispatch({
    type: types.FETCH_TODOS,
    payload: todos
  })
}
