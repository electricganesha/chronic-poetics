import db from "../../../../utils/db";

const getPieces = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        const query = db
          .collection("pieces")
          .where("conditions", "array-contains", req.query.id);

        query.get().then((pieces) => {
          const pieceData = pieces.docs.map((piece) => piece.data());
          res.status(200).json(pieceData);
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
