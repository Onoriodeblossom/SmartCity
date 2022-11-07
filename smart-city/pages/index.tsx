import React, {useState} from "react";
import { Provider } from "react-redux";
import LoginPage from "./login";
import store from "./store/store"
import Homes from "./home"


 const Home = () => {
  return (
    <Provider store={store}>
      <Homes/>
    </Provider>
    
  )
}

export default Home;
