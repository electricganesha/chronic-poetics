import "../styles/globals.css";
import React from "react";
import { AuthUserProvider } from "../context/AuthUserContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp;
