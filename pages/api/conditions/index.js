import db from "../../../utils/db";

const getConditions = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        let query = db.collection("conditions");
        query = query.orderBy("name", "asc");

        query.get().then(conditions => {
          const conditionsData = conditions.docs.map(condition =>
            condition.data()
          );
          res.status(200).json(conditionsData);
        });

        break;
      }
      default: {
        res.status(405).end();
      }
    }
  } catch (error) {
    console.log(error);
    res.statusMessage = "Could not retrieve conditions";
    res.status(503).end();
  }
};

export default getConditions;
