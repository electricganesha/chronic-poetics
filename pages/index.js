import MetaTags from "../components/MetaTags";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import {
  convertToCloudinaryBlurURL,
  cleanUpCloudinaryURL,
} from "../utils/cloudinary";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <MetaTags
        title="Chronic Poetics - Home"
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords="home, homepage"
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title} style={{ textAlign: "right" }}>
          Chronic
        </h1>
        <h1 className={styles.title} style={{ textAlign: "left" }}>
          Poetics
          <div className={styles.logos}>
            <div style={{ display: "flex", paddingLeft: 48, marginTop: 12 }}>
              <span style={{ paddingLeft: 24 }}>
                <Image
                  placeholder="blur"
                  blurDataURL={convertToCloudinaryBlurURL(
                    "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660145425/chronic-poetics/logos/cl-logo.png"
                  )}
                  src={cleanUpCloudinaryURL(
                    "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660145425/chronic-poetics/logos/cl-logo.png"
                  )}
                  alt="Colliding Lines Logo"
                  width="100"
                  height="100"
                />
              </span>
              <span
                style={{
                  paddingLeft: 24,
                  paddingTop: 24,
                  display: "inline-block",
                }}
              >
                <Image
                  placeholder="blur"
                  blurDataURL={convertToCloudinaryBlurURL(
                    "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660146347/chronic-poetics/logos/ppp-logo.png"
                  )}
                  src={cleanUpCloudinaryURL(
                    "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660146347/chronic-poetics/logos/ppp-logo.png"
                  )}
                  alt="Point Positive Logo"
                  width="140"
                  height="140"
                />
              </span>
            </div>
          </div>
        </h1>
      </main>
      <Footer />
    </div>
  );
}
