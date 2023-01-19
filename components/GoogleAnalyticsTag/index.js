import Head from "next/head";

function GoogleAnalyticsTag() {
  const script = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);};
    gtag('js', new Date());

    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
`;

  return (
    <Head>
      <script
        async
        id="script/google-analytics"
        key="script/google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <script
        id="gtag-init"
        async
        dangerouslySetInnerHTML={{
          __html: script,
        }}
      />
    </Head>
  );
}

export default GoogleAnalyticsTag;
