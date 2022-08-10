import "../styles/globals.css";
import React from "react";
import Script from "next/script";
import { AuthUserProvider } from "../context/AuthUserContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Script
        id="script/shopify-buy-button"
        key="script/shopify-buy-button"
        src="https://sdks.shopifycdn.com/buy-button/1.0.0/buybutton.js"
      />
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp;
