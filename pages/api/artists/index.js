import db from "../../../utils/db";

const getArtists = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        const entries = await db
          .collection("artists")
          .orderBy("name", "asc")
          .get();
        const entriesData = entries.docs.map((artists) => artists.data());
        res.status(200).json(entriesData);

        break;
      }
      default: {
        res.status(405).end();
      }
    }
  } catch (error) {
    res.statusMessage = "Could not retrieve artists";
    res.status(503).end(err);
  }
};

export default getArtists;
