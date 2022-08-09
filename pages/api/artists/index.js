import db from "../../../utils/db";

const getArtists = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        let query = db.collection("artists");
        query = query.orderBy("name", "asc");

        await query.get().then(async (artists) => {
          const artistsData = await artists.docs.map((artist) => artist.data());
          res.status(200).json(artistsData);
        });

        break;
      }
      default: {
        res.status(405).end();
      }
    }
  } catch (error) {
    console.log(error);
    res.statusMessage = "Could not retrieve artists";
    res.status(503).end();
  }
};

export default getArtists;
