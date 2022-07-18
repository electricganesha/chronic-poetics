import styles from "/styles/Home.module.scss";
import Head from "next/head";
import QuestionAnswerBlock from "../../components/QuestionAnswerBlock";
import ArtistHeader from "../../components/ArtistHeader";
import QuestionsContainer from "../../components/QuestionsContainer";
import Link from "next/link";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

export default function ArtistPage({artist, pieces}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronic Poetics - Artist Page</title>
      </Head>
      <Navbar />
      <div className={styles.artist__container}>
        <div className={styles.artist__leftColumn}>
          <ArtistHeader artist={artist} pieces={pieces} />
        </div>
        <div className={styles.artist__rightColumn}>
          <QuestionsContainer>
            {artist.importance && 
                <QuestionAnswerBlock
                question="How important is participation in the arts for you or your charge?"
                answer={artist.importance}
                />
            }
            {artist.barrier && 
                <QuestionAnswerBlock
                question="What is the biggest barrier you face when it comes to attending an art event?"
                answer={artist.barrier}
                />
            }
            {artist.issues && 
                <QuestionAnswerBlock
                question="What issues prevent you from taking part in arts activities?"
                answer={artist.issues?.map(i => i).join(", ")}
                />
            }
            {artist.encourage && 
                <QuestionAnswerBlock
                question="What three things might encourage you to take part in arts activities more often?"
                answer={artist.encourage?.map(e => e).join(" ")}
                />
            }
            {artist.support && 
                <QuestionAnswerBlock
                question="What support is most important to you in your work as an artist?"
                answer={artist.support}
                />
            }
            {artist.advice &&
                <QuestionAnswerBlock
                question="What advice would you give to any arts organisation planning to develop  activities and events for creative people like yourself?"
                answer={artist.advice}
                />
            }
            {artist.personal && 
                <QuestionAnswerBlock
                question="What do you personally do to make art accessible to yourself?"
                answer={artist.personal}
                />
            }
            {artist.experience && 
                <QuestionAnswerBlock
                question="Tell us about your day-to-day experience of the condition"
                answer={artist.experience}
                />
            }
            {artist.description && 
                <QuestionAnswerBlock
                question="How do you describe your condition to people who don’t know you?"
                answer={artist.description}
                />
            }
            {artist.symptoms && 
                <QuestionAnswerBlock
                question="What symptoms do you experience"
                answer={artist.symptoms?.length > 1 ? artist.symptoms?.map(s =>
                    <p key={s.name}>
                    <Link href={s.link}>
                        {s.name}
                    </Link>
                    </p>
                ) : artist.symptoms}
                />
            }
            {artist.oneThing && 
                <QuestionAnswerBlock
                question="What's the one thing you want people to know about your condition and/or work? "
                answer={artist.oneThing}
                />
            }
          </QuestionsContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}

ArtistPage.getInitialProps = async req => {
  const artistDataRequest = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/artists/${req.query.slug}`
  ).catch(() => {
    console.error("Error fetching artist from API");
  });

  const piecesDataRequest = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/artists/${req.query.slug}/pieces`
  ).catch(() => {
    console.error("Error fetching pieces from API");
  });

  const artist = await artistDataRequest.json();
  const pieces = await piecesDataRequest.json();

  return {
    artist,
    pieces
  };
};
