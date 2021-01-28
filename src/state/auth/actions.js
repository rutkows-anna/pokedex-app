import { SET_SIGNIN, SET_SIGNOUT, SET_ERROR } from "./actionTypes";
import { signInRequest } from "../../helpers/api";

export const setSignIn = (username) => ({
  type: SET_SIGNIN,
  payload: username,
});
export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
export const setSignOut = () => ({
  type: SET_SIGNOUT,
});

export const signIn = (user) => async (dispatch) => {
  try {
    let token = await signInRequest(user);
    localStorage.setItem(token, JSON.stringify(user.username));
    dispatch(setSignIn(user.username));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const checkSignIn = () => (dispatch) => {
  const signedInUser = localStorage.getItem("token");
  if (signedInUser) {
    const user = JSON.parse(signedInUser);
    dispatch(setSignIn(user));
  }
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(setSignOut());
};
