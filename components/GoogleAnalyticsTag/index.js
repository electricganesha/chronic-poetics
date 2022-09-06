import Script from "next/script";
import { useEffect } from "react";

function GoogleAnalyticsTag() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`);
  }, []);

  return (
    <Script
      id="script/google-analytics"
      key="script/google-analytics"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
    />
  );
}

export default GoogleAnalyticsTag;
