import types from '../actions/types';
import todosData from '../../mock-data/todos';

const initialState = {
  todos: todosData,
  title: 'Title',
  todoType: 'new',
  placeholder: `
  Add some text here. E.g.

  - get some milk
  
  - call mum
  
  - walk the dog`
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
