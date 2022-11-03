import React, {useState} from "react";
import { Provider } from "react-redux";
import LoginPage from "./login";
import store from "./store/store"


 const Home = () => {
  return (
    <Provider store={store}>
      <LoginPage/>
    </Provider>
    
  )
}

export default Home;
