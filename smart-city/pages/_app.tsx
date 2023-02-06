import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

interface Props {
  Component: React.ComponentType;
  pageProps: any;
}

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  // const url = "https://smatcity.000webhostapp.com/api/";
  const url = "https://smatcity.com/";
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const setTokenHandler = (_token) => {
    setToken(_token);
    sessionStorage.setItem("_token", _token);
  };

  const setUserHandler = (_user) => {
    setUser(_user);
    sessionStorage.setItem("user", JSON.stringify(_user));
  };

  const logoutHandler = () => {
    sessionStorage.clear();
    setToken("");
    setUser({});
  };

  useEffect(() => {
    setToken(sessionStorage.getItem("_token") || "");
    setUser(JSON.parse(sessionStorage.getItem("user")) || {});
  }, []);

  return (
    // <ChakraProvider>
    <MainContext.Provider
      value={{
        url: url,
        token: token,
        user: user,
        setToken: setTokenHandler,
        setUser: setUserHandler,
        logout: logoutHandler,
      }}
    >
      <Toaster
        position="bottom-left"
        toastOptions={{
          style: {
            background: "#372828",
            borderLeft: "5px solid #003",
            fontSize: "14px",
            color: "#fff",
          },
        }}
      />
      <Component {...pageProps} />
    </MainContext.Provider>
  );
  // </ChakraProvider>
};

export default MyApp;

export const MainContext = React.createContext({
  url: null,
  user: null,
  token: null,
  setToken: () => {},
  logout: () => {},
  setUser: () => {},
});
