import {useEffect, useState} from "react";
import styles from "/styles/Home.module.scss";
import Head from "next/head";
import QRCode from "qrcode";
import Image from "next/image";
import {useRouter} from "next/router";
import NavigablePage from "../../components/NavigablePage";
import WebGLExperience from "../../components/WebGLExperience";
import { slugToName } from '../../utils/string';

export default function QRCodePage({artist, pieces, conditions}) {
  const [qrCodeUrl, setqrCodeUrl] = useState(null);
  const [isDebugMode, setIsDebugMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if(!router.query.p) {
      router.push({
      pathname: router.asPath,
      query: {
        p: 1,
      },
    });
    }

    if(window?.location.hash && window?.location.hash === '#debug') {
      setIsDebugMode(true);

    QRCode.toDataURL(`${process.env.NEXT_PUBLIC_HOST}/p/${artist.slug}`)
      .then(url => {
        setqrCodeUrl(url);
      })
      .catch(err => {
        console.error(err);
      });
    }  
   }, [artist?.slug, router])


  return (
    <div className={styles.container}>
      <Head>
        <title>
          Chronic Poetics - {artist?.name}
        </title>
      </Head>
      <div className={styles.artist__container}>
      { isDebugMode && qrCodeUrl ?
           <Image src={qrCodeUrl} alt="QR Code" width="124" height="124" />
          : null}
      </div>
      <div className={styles.content}>
      {router.query.p === "1" ?
      <NavigablePage  
                      key={artist.name}
                      slug={artist.slug}
                      route={router.route}
                      numPages={4}
                      currentPage={parseInt(router.query.p)}
      >
        <p>
          My name is {artist.name}
        </p>
      </NavigablePage> : null 
    }
{router.query.p === "2" ?
<NavigablePage  
                key={pieces[0].name}
                slug={pieces[0].artistSlug}
                route={router.route}
                numPages={4}
                currentPage={parseInt(router.query.p)}
              >
  <p>
                     My work is called &quot;{pieces[0].name}&quot;
                    </p>
</NavigablePage> : null }
{router.query.p === "3" ?
<NavigablePage  
                key={conditions[0].name}
                slug={conditions[0].artists[0].slug}
                route={router.route}
                numPages={4}
                currentPage={parseInt(router.query.p)}
              >
  <p>
                     I suffer from {conditions[0].name}
                    </p>
</NavigablePage> : null }
{router.query.p === "4" ?
<NavigablePage  
                key={conditions[0].name}
                slug={conditions[0].artists[0].slug}
                route={router.route}
                numPages={4}
                currentPage={parseInt(router.query.p)}
              >
<WebGLExperience name={conditions[0].name}/> </NavigablePage>: null
}
      </div>
    </div>
  );
}

QRCodePage.getInitialProps = async req => {
  const query = req.query.p;

  if(query === "1") {
    const artistDataRequest = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/artists/${req.query.slug}`
    ).catch(() => {
      console.error("Error fetching artist from API");
    });

    const artist = await artistDataRequest.json();
    
    return { artist };
  }

  if(query === "2") {
    const piecesDataRequest = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/artists/${req.query.slug}/pieces`
    ).catch(() => {
      console.error("Error fetching pieces from API");
    });
    const pieces = await piecesDataRequest.json();

    return {pieces};
  }

  if(query === "3" || query === "4") {
    const artistName = slugToName(req.query.slug);
    const conditionsDataRequest = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/artists/${req.query
        .slug}/${artistName}/conditions`
    ).catch(() => {
      console.error("Error fetching conditions from API");
    });

    const conditions = await conditionsDataRequest.json();

    return {conditions};
  }
};
