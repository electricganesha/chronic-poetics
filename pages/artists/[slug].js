import { useState } from 'react';
import Image from 'next/image'
import QRCode from 'qrcode'
import styles from '/styles/Home.module.scss'
import Head from 'next/head';
import Link from 'next/link';

export default function ArtistPage({ artist, pieces }) {
    const [qrCodeUrl, setqrCodeUrl] = useState(null);

    QRCode.toDataURL(`${process.env.NEXT_PUBLIC_HOST}/artists/${artist.slug}`)
        .then(url => {
            setqrCodeUrl(url);
        })
        .catch(err => {
            console.error(err)
        })


    return (
        <div className={styles.container}>
            <Head>
                <title>Chronic Poetics - Artist Page</title>
            </Head>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
                {qrCodeUrl
                    ? <Image src={qrCodeUrl} alt="QR Code" width="124" height="124" />
                    : null
                }
                <h1 style={{ display: 'inline-block' }}>
                    {artist.name}
                </h1>
                <ul>
                    {pieces.map(piece =>
                        <li key={piece.slug}>
                            <Link href={`/pieces/${piece.slug}`}>
                                {piece.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

ArtistPage.getInitialProps = async (req) => {
    const artistDataRequest = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/artists/${req.query.slug}`).catch(() => {
        console.error('Error fetching artist from API');
    });

    const piecesDataRequest = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/artists/${req.query.slug}/pieces`).catch(() => {
        console.error('Error fetching pieces from API');
    });

    const artist = await artistDataRequest.json();
    const pieces = await piecesDataRequest.json();


    return {
        artist,
        pieces,
    }
}
