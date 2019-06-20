import types from '../actions/types';

const initialState = {
  todos: []
}

const todoreducer = (state=initialState, action) => {
  const { FETCH_TODOS } = types;
  const { type, payload } = action

  switch(type) {
    case FETCH_TODOS:
      return { ...state, todos: payload }

    default:
      return state
  }
}

export default todoreducer;
