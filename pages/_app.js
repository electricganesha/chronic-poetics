import "../styles/globals.css";
import React from "react";
import {AuthUserProvider} from "../context/AuthUserContext";

function MyApp({Component, pageProps}) {
  return (
    <AuthUserProvider>
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    </AuthUserProvider>
  );
}

export default MyApp;
