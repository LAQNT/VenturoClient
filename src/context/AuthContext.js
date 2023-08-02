import jwtDecode from "jwt-decode";
import { createContext, useReducer } from "react";

const userLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const extractUser = (token) => {
  if (token) {
    let decode = jwtDecode(token);
    try {
      return {
        username: decode.username,
        role: decode.role,
        email: decode.email,
        id: decode.id,
      };
    } catch (error) {
      console.error("Invalid token:", error);
      return {
        username: null,
        role: null,
      };
    }
  }
  return {
    username: null,
    role: null,
  };
};

const initial_state = {
  token: userLocalStorage ? userLocalStorage.token : null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        token: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: action.payload.token,
          loading: false,
          error: null,
        })
      );
      return {
        token: action.payload.token,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        token: null,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        token: null,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: null,
          loading: false,
          error: null,
        })
      );
      return {
        token: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  return (
    <AuthContext.Provider
      value={{
        token: state.token ? extractUser(state.token) : null,
        username: state.token ? extractUser(state.token).username : null,
        email: state.token ? extractUser(state.token).email : null,
        id: state.token ? extractUser(state.token)._id : null,
        role: state.token ? extractUser(state.token).role : null,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
