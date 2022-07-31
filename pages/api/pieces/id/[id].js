import db from "/utils/db";

const getPieces = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        let query = db.collection("pieces").doc(req.query.id);

        query.get().then(condition => res.status(200).json(condition.data()));

        break;
      }
      default: {
        res.status(405).end();
      }
    }
  } catch (error) {
    console.log(error);
    res.statusMessage = "Could not retrieve piece";
    res.status(503).end();
  }
};

export default getPieces;
