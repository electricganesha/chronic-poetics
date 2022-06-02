import db from "/utils/db";

const getConditions = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        let query = db
          .collection("conditions")
          .where("slug", "==", req.query.slug);

        query.get().then(conditions => {
          const conditionData = conditions.docs.map(condition =>
            condition.data()
          );
          res.status(200).json(conditionData[0]);
        });

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
