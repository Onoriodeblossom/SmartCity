import React, {useState} from "react";
import { Provider } from "react-redux";
import LoginPage from "./login";
import store from "./store/store";
import HostelDetails from "./hostelDetails";


 const Home = () => {
  return (
    <Provider store={store}>
      <HostelDetails />
    </Provider>
  );
}

export default Home;
