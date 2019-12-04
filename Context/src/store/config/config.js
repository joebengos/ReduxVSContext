import React from "react";
import { loginStore } from '../reducers/login.reducers';

export const initialState = {
  store: {
    ...loginStore
  },
  dispatch: () => {}
};

const Context = React.createContext(initialState);

export default Context;
