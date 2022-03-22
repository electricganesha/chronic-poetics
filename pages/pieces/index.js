import React from 'react';
import styles from '/styles/Home.module.scss';
import Head from 'next/head';
import Link from 'next/link';

export default function Pieces({ pieces }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Chronic Poetics - Pieces</title>
            </Head>
            <main className={styles.main}>
                <h1>
                    Pieces
                </h1>
                <div className={styles.info}>
                    {Object.keys(pieces).map(p => {
                        const reducedPieces = pieces[p];
                        const { artist, artistSlug } = reducedPieces[0];

                        return <div key={artistSlug} style={{ margin: '16px auto', borderBottom: '1px dotted black', maxWidth: '360px' }}>
                            <Link href={`/artists/${artistSlug}`} >
                                <a style={{ fontWeight: 400 }}>{artist}</a>
                            </Link>
                            <ul style={{ padding: 0 }}>
                                {
                                    reducedPieces.map(piece => <li key={piece.slug} style={{ display: 'block' }}>
                                        <Link href={`/pieces/${piece.slug}`}>
                                            {piece.name}
                                        </Link>
                                    </li>)
                                }
                            </ul>
                        </div>;
                    })}
                </div>
            </main>
        </div>
    )
}

Pieces.getInitialProps = async () => {
    const piecesDataRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pieces`).catch(() => {
        console.error('Error fetching pieces from API');
    });

    const pieces = await piecesDataRes.json();

    return {
        pieces: pieces.reduce((group, piece) => {
            const { artistSlug } = piece;
            group[artistSlug] = group[artistSlug] ?? [];
            group[artistSlug].push(piece);
            return group;
        }, {}),
    }
}
