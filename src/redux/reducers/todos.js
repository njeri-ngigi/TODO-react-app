import types from '../actions/types';
import todosData from '../../mock-data/todos';

const initialState = {
  todos: todosData,
  lastLocation: '/'
}

const todoreducer = (state=initialState, action) => {
  const { MUTATE_TODOS_LIST, LAST_LOCATION } = types;
  const { type, payload } = action

  switch(type) {
    case MUTATE_TODOS_LIST:
      return { ...state, todos: payload }

    case LAST_LOCATION:
      return { ...state, lastLocation: payload }

    default:
      return state
  }
}

export default todoreducer;
