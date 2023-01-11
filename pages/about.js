import styles from "../styles/About.module.scss";
import TeamMemberCard from "../components/TeamMemberCard";
import Spinner from "../components/Spinner";
import { useRouter } from "next/router";
import MetaTags from "../components/MetaTags";

export default function AboutPage() {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <MetaTags
        title="Chronic Poetics - About / Team"
        description="Chronic Poetics is an anthology that features artists who experience chronic disability or pain and features essays, prose, illustration and poetry."
        keywords="about, team"
        url={`${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1662465901/chronic-poetics/chronic_poetics_opengraph.png"
      />
      <main className={styles.about}>
        <h1 className={styles.about__title}>
          This collection exclusively features artists with an experience of
          chronic disability and chronic pain
        </h1>
        <div className={styles.info}>
          <div className={styles.info__content}>
            <div className={styles.info__column}>
              <p>
                Chronic Poetics is a new anthology published and produced by{" "}
                <a
                  href="https://pointpositive.weebly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Point Positive Publishing
                </a>{" "}
                and{" "}
                <a
                  href="https://www.collidinglines.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colliding Lines
                </a>
                . Through essays, poetry, images and design, this collection is
                what we wish people understood about living with a chronic
                condition.
              </p>
              <p>
                This website accompanies the print collection and features
                interviews with the published artists, additional pieces not
                published in the book, and medical information for further
                reading.
              </p>
            </div>
            <div className={styles.info__column}>
              <p>
                Chronic Poetics is supported using public funding by the
                National Lottery through{" "}
                <a
                  href="https://www.artscouncil.org.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Arts Council England
                </a>
                .
              </p>
              <p>
                We are open to submissions for online publication. For more
                information please see our open call page{" "}
                <a
                  href="https://forms.gle/UxLLv6PxEahHiRjZ9"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
          <h1 className={styles.team__title}>Our team</h1>
          <div className={styles.team}>
            <TeamMemberCard
              photo="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1659884930/chronic-poetics/team-photos/angharad.jpg"
              name="Angharad Hengyu Owen"
              job="Design"
              bio="Angharad Hengyu Owen is a graphic designer exploring visual narratives through type, engaging in visual communication as a literary and lyrical practice; an interpretation of ideas. She has experience in a range of print and digital projects across cultural, social and corporate sectors, and enjoys pushing the boundaries of meaningful design."
              website="https://www.angharadhengyu.xyz"
              instagram="https://www.instagram.com/angharadhengyu"
            />
            <TeamMemberCard
              photo="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1659884930/chronic-poetics/team-photos/christian.jpg"
              name="Christian Marques"
              job="Web Development"
              bio="Christian Marques is a Lisbon based software engineer with an appetite for the arts and the unknown. In-between writing software, he is also a published poet, amateur songwriter, and hobbyist photographer. His interests span from science to philosophy and anything else in-between and around. His most recent passion is mycology and anything fungus-related."
              website="https://www.christianmarques.com"
              instagram="https://www.instagram.com/electricganesha"
            />
            <TeamMemberCard
              photo="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1659889185/chronic-poetics/team-photos/Daisy_Thurston-Gent.jpg"
              name="Daisy Thurston-Gent"
              job="Promotion"
              bio="Daisy Thurston-Gent is a writer and producer from Cambridge. She is a founding member of London Queer Writers, curating live poetry events and writing workshops for the LGBTQ+ community. She is one half of Radio Xaddy, a brave little podcast about Queer history and culture and co-host of Queer Cambridge on Cambridge 105 radio."
              website="https://daisytg.wordpress.com"
              instagram="https://www.instagram.com/daisytgee"
              instagram2="https://www.instagram.com/radioxaddy"
            />
            <TeamMemberCard
              photo="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1659884931/chronic-poetics/team-photos/molly.jpg"
              name="Molly Haig"
              job="Design"
              bio="Molly Haig is a Berlin-based graphic designer and artist. Her work combines analog and digital processes to explore layers, language, and systems. She holds a BA in psychology and an MFA in graphic design. She works as a designer with Laura Grey Studio in New York and as a university lecturer in Berlin."
              website="https://www.mollyhaig.com"
              instagram="https://www.instagram.com/mollyjensenhaig"
            />
            <TeamMemberCard
              photo="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1659884931/chronic-poetics/team-photos/nikki.jpg"
              name="Nikki Marrone"
              job="Editorial"
              bio="Nikki Marrone is a spoken word performer, published poet, photographer, and coffee addict. She is motivated through feelings, of which she has plenty. Nikki is the winner of multiple poetry slams and has featured at various spoken word nights and festivals internationally but is based in the UK. Author of ‘Psychogenic Fugue’, ‘Honey & Lemon’ and ‘Burning Through the Bloodline’."
              website="https://www.nikkimarrone.co.uk"
              instagram="https://www.instagram.com/poetmarrone"
            />
            <TeamMemberCard
              photo="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1659884931/chronic-poetics/team-photos/wes.jpg"
              name="Wesley Freeman-Smith"
              job="Project Management"
              bio="Wesley Freeman-Smith is an event producer, live arts facilitator and founder of Colliding Lines. Aside from project management and wielding spreadsheets of increasing complexity, he enjoys words and putting word-based things where they shouldn’t be. He currently lives in Cambridge, UK."
              website="https://www.collidinglines.com/team/wes"
              instagram="https://www.instagram.com/tinyshrines_"
              instagram2="https://www.instagram.com/catchingshadowscollective"
            />
          </div>
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
