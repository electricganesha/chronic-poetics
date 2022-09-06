import db from "../../../../utils/db";

const getPieces = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        const entries = await db
          .collection("pieces")
          .where("conditions", "array-contains", req.query.id)
          .get();
        const entriesData = entries.docs.map((pieces) => pieces.data());
        res.status(200).json(entriesData);

        break;
      }
      default: {
        res.status(405).end();
      }
    }
  } catch (error) {
    res.statusMessage = "Could not retrieve pieces";
    res.status(503).end(error);
  }
};

export default getPieces;
