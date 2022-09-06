import db from "../../../utils/db";

const getPieces = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        const entries = await db
          .collection("pieces")
          .where("slug", "==", req.query.slug)
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
    res.statusMessage = "Could not retrieve piece";
    res.status(503).end(error);
  }
};

export default getPieces;
