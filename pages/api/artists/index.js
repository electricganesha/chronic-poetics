import db from "../../../utils/db";
import { mapNavigationForArtist } from "../../../utils/pages";

const getArtists = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        const query = db.collection("artists").orderBy("name", "asc");
        await query.get().then(async (artists) => {
          const artistsData = await artists.docs.map(async (rawArtist) => {
            const artist = rawArtist.data();

            // pieces
            const queryPieces = db
              .collection("pieces")
              .where("artists", "array-contains", artist.id);
            const piecesData = await queryPieces
              .get()
              .then(async (pieces) => pieces.docs.map((piece) => piece.data()));

            // conditions
            const queryConditions = db
              .collection("conditions")
              .where("artists", "array-contains", artist.id);
            const conditionsData = await queryConditions
              .get()
              .then(async (conditions) =>
                conditions.docs.map((condition) => condition.data())
              );

            const navigation = mapNavigationForArtist(
              artist,
              piecesData,
              conditionsData
            );

            return {
              ...artist,
              navigation,
            };
          });

          const data = await Promise.all(artistsData).then((data) => data);

          res.status(200).json(data);
        });
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
