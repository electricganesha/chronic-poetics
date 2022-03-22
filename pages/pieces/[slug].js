import { useState } from 'react';
import Image from 'next/image'
import QRCode from 'qrcode'
import styles from '/styles/Home.module.scss'
import Head from 'next/head';
import Link from 'next/link';

export default function PiecePage({ piece }) {
    const [qrCodeUrl, setqrCodeUrl] = useState(null);

    QRCode.toDataURL(`${process.env.NEXT_PUBLIC_HOST}/pieces/${piece.slug}`)
        .then(url => {
            setqrCodeUrl(url);
        })
        .catch(err => {
            console.error(err)
        })


    return (
        <div className={styles.container}>
            <Head>
                <title>Chronic Poetics - Piece Page</title>
            </Head>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
                {qrCodeUrl
                    ? <Image src={qrCodeUrl} alt="QR Code" width="124" height="124" />
                    : null
                }
                <h1 style={{ display: 'inline-block' }}>
                    {piece.name}
                </h1>
                <h3>
                    A piece by <Link href={`/artists/${piece.artistSlug}`}>{piece.artist}</Link>
                </h3>
            </div>
        </div>
    )
}

PiecePage.getInitialProps = async (req) => {
    const pieceDataRequest = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pieces/${req.query.slug}`).catch(() => {
        console.error('Error fetching piece from API');
    });

    const piece = await pieceDataRequest.json();


    return {
        piece,
    }
}
