import "../styles/globals.scss";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { AuthUserProvider } from "../context/AuthUserContext";
import GoogleAnalyticsTag from "../components/GoogleAnalyticsTag";
import Transition from "../components/Transition";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setIsRouteChanging(true);
    };

    const handleRouteChangeComplete = (url, { shallow }) => {
      setIsRouteChanging(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <AuthUserProvider>
      <Script
        id="script/shopify-buy-button"
        key="script/shopify-buy-button"
        src="https://sdks.shopifycdn.com/buy-button/1.0.0/buybutton.js"
      />
      <Navbar />
      <Transition isRouteChanging={isRouteChanging}>
        <Component {...pageProps} />
      </Transition>
      <Footer />
      <GoogleAnalyticsTag />
    </AuthUserProvider>
  );
}

export default MyApp;
