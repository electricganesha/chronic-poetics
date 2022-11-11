import MetaTags from "../components/MetaTags";
import styles from "../styles/Home.module.scss";
import BuyButton from "../components/BuyButton";
import Spinner from "../components/Spinner";
import { useRouter } from "next/router";

export default function BookPage() {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <MetaTags
        title="Chronic Poetics - Book"
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords="book, buy, shop"
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <main className={styles.book}>
        <h1>Book</h1>

        <div className={styles.info}>
          <div>
            <BuyButton />
          </div>
          <p>TBD</p>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async (req) => {
  return {
    props: {},
  };
};
