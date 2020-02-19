import initialState from './initialState';
import ACTION_TYPES from './actionTypes';

const reducers = {
  [ACTION_TYPES.HIDE]: (state) => {
    return {
      ...state,
      content: initialState.content,
      show: false,
    };
  },

  [ACTION_TYPES.SHOW]: (state, action) => {
    return {
      ...state,
      content: action.payload.content,
      show: true,
      type: action.payload.type,
    };
  },
};

const messageReducer = (state = initialState, action) => {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}

export default messageReducer;
