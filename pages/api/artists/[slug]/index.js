import db from "/utils/db";

const getArtists = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        try {
          let query = db
            .collection("artists")
            .where("slug", "==", req.query.slug);

          await query.get().then(async artists => {
            const artistsData = await artists.docs.map(artist => artist.data());
            res.status(200).json(artistsData[0]);
          });
        } catch (error) {
          res.status(500).end();
        }
        break;
      }
      default: {
        res.status(405).end();
      }
    }
  } catch (error) {
    console.log(error);
    res.statusMessage = "Could not retrieve artist";
    res.status(503).end();
  }
};

export default getArtists;
