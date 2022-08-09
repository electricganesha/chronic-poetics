import db from "../../../utils/db";

const getPieces = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        let query = db.collection("pieces");

        query.get().then((pieces) => {
          const piecesData = pieces.docs.map((piece) => piece.data());
          res.status(200).json(piecesData);
        });

        break;
      }
      default: {
        res.status(405).end();
      }
    }
  } catch (error) {
    console.log(error);
    res.statusMessage = "Could not retrieve pieces";
    res.status(503).end();
  }
};

export default getPieces;
