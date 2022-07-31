import {useEffect, useState} from "react";
import styles from "/styles/Home.module.scss";
import Head from "next/head";
import QRCode from "qrcode";
import Image from "next/image";
import {useRouter} from "next/router";
import NavigablePage from "../../components/NavigablePage";
import WebGLExperience from "../../components/WebGLExperience";

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
                key={pieces.name}
                slug={'mark-tulin'}
                route={router.route}
                numPages={4}
                currentPage={parseInt(router.query.p)}
              >
  <p>
                     My work is called &quot;{pieces.name}&quot;
                    </p>
</NavigablePage>
 : null }
{router.query.p === "3" ?
<NavigablePage  
                key={conditions.name}
                slug={'mark-tulin'}
                route={router.route}
                numPages={4}
                currentPage={parseInt(router.query.p)}
              >
  <p>
                     I suffer from {conditions.name}
                    </p>
</NavigablePage> : null }
{router.query.p === "4" ?
<NavigablePage  
                key={conditions.name}
                slug={artist.slug}
                route={router.route}
                numPages={4}
                currentPage={parseInt(router.query.p)}
              >
<WebGLExperience name={conditions.name}/> </NavigablePage>: null
}
      </div>
    </div>
  );
}

QRCodePage.getInitialProps = async req => {
  const query = req.query.p;

    const artistDataRequest = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/artists/${req.query.slug}`
    ).catch(() => {
      console.error("Error fetching artist from API");
    });

    const artist = await artistDataRequest.json();

  if(query === "1") {
    return {artist};    
}

  if(query === "2") {
    const piecesDataRequest = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/pieces/id/${artist.pieces[0]}`
    ).catch(() => {
      console.error("Error fetching pieces from API");
    });
    const pieces = await piecesDataRequest.json();

    return {artist, pieces};
  }

  if(query === "3" || query === "4") {
    const conditionsDataRequest = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/conditions/id/${artist.conditions[0]}`
    ).catch(() => {
      console.error("Error fetching conditions from API");
    });

    const conditions = await conditionsDataRequest.json();

    return {artist, conditions};
  }
};
