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
        <h1>Chronic Poetics</h1>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.logos} style={{}}>
            <span style={{ marginRight: "12px" }}>A project by</span>{" "}
            <Image
              placeholder="blur"
              blurDataURL={convertToCloudinaryBlurURL(
                "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660145425/chronic-poetics/logos/cl-logo.jpg"
              )}
              src={cleanUpCloudinaryURL(
                "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660145425/chronic-poetics/logos/cl-logo.jpg"
              )}
              alt="Colliding Lines Logo"
              width="120"
              height="120"
            />
            <Image
              placeholder="blur"
              blurDataURL={convertToCloudinaryBlurURL(
                "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660146347/chronic-poetics/logos/ppp-logo.png"
              )}
              src={cleanUpCloudinaryURL(
                "https://res.cloudinary.com/dhgkpiqzg/image/upload/v1660146347/chronic-poetics/logos/ppp-logo.png"
              )}
              alt="Point Positive Logo"
              width="150"
              height="150"
            />
          </div>
        </h3>
      </main>
      <Footer />
    </div>
  );
}
