import "../styles/globals.css";
import React from "react";
import Script from "next/script";
import { AuthUserProvider } from "../context/AuthUserContext";
import GoogleAnalyticsTag from "../components/GoogleAnalyticsTag";
import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <GoogleAnalyticsTag />
      <Script
        id="script/shopify-buy-button"
        key="script/shopify-buy-button"
        src="https://sdks.shopifycdn.com/buy-button/1.0.0/buybutton.js"
      />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </AuthUserProvider>
  );
}

export default MyApp;
