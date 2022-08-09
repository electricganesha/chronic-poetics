import db from "../../../../utils/db";
import { mapNavigationForArtist } from "../../../../utils/pages";

const getArtists = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        try {
          const query = db
            .collection("artists")
            .where("slug", "==", req.query.slug);
          await query.get().then(async (artists) => {
            const artistsData = await artists.docs.map((artist) =>
              artist.data()
            );

            // pieces
            const queryPieces = db
              .collection("pieces")
              .where("artists", "array-contains", artistsData[0].id);
            const piecesData = await queryPieces
              .get()
              .then(async (pieces) => pieces.docs.map((piece) => piece.data()));

            // conditions
            const queryConditions = db
              .collection("conditions")
              .where("artists", "array-contains", artistsData[0].id);
            const conditionsData = await queryConditions
              .get()
              .then(async (conditions) =>
                conditions.docs.map((condition) => condition.data())
              );

            const navigation = mapNavigationForArtist(
              artistsData[0],
              piecesData,
              conditionsData
            );

            res.status(200).json({
              ...artistsData[0],
              pieces: {
                ...artistsData[0].pieces,
                data: piecesData,
              },
              conditions: {
                ...artistsData[0].conditions,
                data: conditionsData,
              },
              navigation,
            });
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
    res.statusMessage = `Could not retrieve artist : ${error}`;
    res.status(503).end();
  }
};

export default getArtists;
