import jwtDecode from "jwt-decode";
import { createContext, useEffect, useReducer } from "react";

const session = JSON.parse(localStorage.getItem("user"));

const extractUser = (token) => {
  const decode = jwtDecode(token);
  try {
    return {
      username: decode.username,
      role: decode.role,
    };
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const initial_state = {
  user: session ? extractUser(session) : null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload
          ? {
              token: action.payload.token,
              role: action.payload.role,
              username: action.payload.username,
            }
          : null,
        loading: false,
        error: null,
        isAdmin: action.payload.role === "admin",
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        user: null,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(state.user));
  // }, [state.user]);
  useEffect(() => {
    if (state.user) {
      const { token, role, username } = state.user;
      localStorage.setItem("user", JSON.stringify({ token, role, username }));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
