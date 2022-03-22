import styles from '/styles/Home.module.scss';
import Head from 'next/head';

import Link from 'next/link';

export default function Artists({ artists }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Chronic Poetics - Artists</title>
            </Head>
            <main className={styles.main}>
                <h1>
                    Artists
                </h1>
                <div className={styles.info}>
                    <ul style={{ padding: 0 }}>
                        {artists.map(artist => <li key={artist.slug} style={{ margin: 'auto', padding: '16px 0', borderBottom: '1px dotted black', maxWidth: '360px' }}>
                            <Link href={`/artists/${artist.slug}`}>
                                {artist.name}
                            </Link>
                        </li>
                        )}
                    </ul>
                </div>
            </main>
        </div>
    )
}

Artists.getInitialProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/artists`).catch(() => {
        console.error('Error fetching artists from API');
    });

    const json = await res.json();

    return {
        artists: json,
    }
}
