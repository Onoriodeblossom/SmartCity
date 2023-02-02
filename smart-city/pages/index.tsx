import React, {useState} from "react";
import { Provider } from "react-redux";
import LoginPage from "./login";
import store from "./store/store";
import HostelDetails from "./hostelDetails";
import Homes from "./home";
import LandingPage from  "./landing"
import Slash2 from "../pages/slash2/slash2"


 const Home = () => {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default Home;
