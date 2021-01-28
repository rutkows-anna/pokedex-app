import * as actions from "./actionTypes";

const initialState = {
  token: "",
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_SIGNIN:
      return {
        ...state,
       token: action.payload,
      };
      case actions.SET_ERROR:
      return {
        ...state,
       error: action.payload,
      };
      case actions.SET_SIGNOUT:
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
};

export default authReducer;