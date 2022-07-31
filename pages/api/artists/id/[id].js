import db from "/utils/db";

const getArtist = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        let query = db.collection("artists").doc(req.query.id);

        query.get().then(artist => res.status(200).json(artist.data()));

        break;
      }
      default: {
        res.status(405).end();
      }
    }
  } catch (error) {
    console.log(error);
    res.statusMessage = "Could not retrieve artist by id";
    res.status(503).end();
  }
};

export default getArtist;
