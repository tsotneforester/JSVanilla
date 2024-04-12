const initialState = {
  counter: 50,
};

export function reducer(state = initialState, action) {
  if (action.type == "INCREASE") {
    return {
      ...state,
      counter: state.counter + 1,
      // questions: action.payload,
    };
  }

  if (action.type == "DECREASE") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  return state;
}
