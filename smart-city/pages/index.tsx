import React, { useState } from "react";
import { Provider } from "react-redux";
import LoginPage from "./login";
import store from "./store/store";
import Slash2 from "./slash2/slash2";
import Homes from "./home";
import PostHostel from "./postHostel";

const Home = () => {
  return (
    // <Provider store={store}>
      <PostHostel/>
    // </Provider>
  );
};

export default Home;
