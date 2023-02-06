import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartRducer";
import { userReducer } from "../reducers/userRducer";
import data from "../store";

export const AppContext = createContext();
export function AppProvider({ children }) {
  let userData = {};
  if (localStorage.getItem("isAuth")) {
    userData = {
      isAuth: localStorage.getItem("isAuth"),
      accessToken: localStorage.getItem("accessToken"),
      email: localStorage.getItem("email"),
      isActivated: localStorage.getItem("isActivated"),
      name: localStorage.getItem("name"),
      surname: localStorage.getItem("surname"),
      id: localStorage.getItem("id"),
      adress: localStorage.getItem("adress"),
      phone: localStorage.getItem("phone"),
    };
  }
  const [cartState, dispatchCart] = useReducer(cartReducer, data);
  const [userState, dispatchUser] = useReducer(userReducer, userData);
  return (
    <AppContext.Provider
      value={{ cartState, dispatchCart, userState, dispatchUser }}
    >
      {children}
    </AppContext.Provider>
  );
}
