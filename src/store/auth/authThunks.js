import { signInWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    console.log({email,password}, 'thunk')
  }
}

export const startGoogleSignIn = () => {
  return async dispatch => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if(!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))
  }
}

export const startWithEmailAndPassword = ({name, email, password}) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    const result = await signInWithEmailAndPassword({name, email, password});
    if(!result.ok) return dispatch(logout(result.errorMessage))
    dispatch(login(result))
  }
}