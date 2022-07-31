import db from "/utils/db";

const getConditions = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        let query = db.collection("conditions").doc(req.query.id);

        query.get().then(condition => res.status(200).json(condition.data()));

        break;
      }
      default: {
        res.status(405).end();
      }
    }
  } catch (error) {
    console.log(error);
    res.statusMessage = "Could not retrieve condition";
    res.status(503).end();
  }
};

export default getConditions;
