import React from "react";
import Head from "next/head";

function MetaTags({ title, description, keywords, url, image }) {
  const baseKeywords = "art, poetry, chronic";

  return (
    <Head>
      {/* MetaTags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${baseKeywords}, ${keywords}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@chronicpoetics" />
      <meta name="twitter:creator" content="@collidinglines" />

      {/* Open Graph */}
      <meta property="og:url" content={url} key="ogurl" />
      <meta property="og:image" content={image} key="ogimage" />
      <meta
        property="og:site_name"
        content="Chronic Poetics"
        key="ogsitename"
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:locale" content="en_GB" />
    </Head>
  );
}

export default MetaTags;
