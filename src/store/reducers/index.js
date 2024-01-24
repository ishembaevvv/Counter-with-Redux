import { ONMINUS, ONPLUS } from "../actions";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ONPLUS:
      return { count: state.count + 1 };
    case ONMINUS:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
