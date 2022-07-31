import React from 'react';
import styles from '/styles/Home.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import {sortAlphabetically } from '../../utils/array';

export default function Pieces({ pieces, artists }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Chronic Poetics - Pieces</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <h1>
                    Pieces
                </h1>
                <div className={styles.info}>
                    {Object.keys(pieces).map(p => {
                        const reducedPieces = pieces[p];
                        const artist = artists.find(a => a.id === reducedPieces[0].artists[0]);

                        return <div key={artist.slug} style={{ margin: '16px auto', borderBottom: '1px dotted black', maxWidth: '360px' }}>
                            <Link href={`/artists/${artist.slug}`} >
                                <a style={{ fontWeight: 400 }}>{artist.name}</a>
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
            <Footer/>
        </div>
    )
}

Pieces.getInitialProps = async () => {
    const piecesDataRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pieces`).catch(() => {
        console.error('Error fetching pieces from API');
    });

    const pieces = await piecesDataRes.json();
    const mappedArtists = pieces.map(async piece => {
      const fetchedArtist = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/artists/id/${piece.artists[0]}`
      ).catch(() => {
        console.error("Error fetching conditions from API");
      });

      return await fetchedArtist.json();
    });

    const artistsToReturn = await Promise.all(mappedArtists);
    return {
        artists: artistsToReturn,
        pieces: pieces.sort(sortAlphabetically).reduce((group, piece) => {
            const { artists } = piece;

            group[artists[0]] = group[artists[0]] ?? [];
            group[artists[0]].push(piece);
            return group;
        }, {}),
    }
}
