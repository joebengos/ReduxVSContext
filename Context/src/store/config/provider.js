import React, { useReducer } from 'react';
import Context from './config';
import middleware from "./middleware";
import loginReducer, { loginStore } from '../reducers/login.reducers';

const Store = props => {
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    loginStore
  );

  const trigglerDispatchs = action => {
    const dispatchs = [loginDispatch];
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };

  const middlewareContrutor = action => {
    middleware(action)(trigglerDispatchs);
  };

  const combinedReducers = {
    store: {
      ...loginState
    },
    dispatch: middlewareContrutor
  };

  
  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
