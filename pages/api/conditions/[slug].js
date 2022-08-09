import db from "/utils/db";

const getConditions = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        try {
          let query = db
            .collection("conditions")
            .where("slug", "==", req.query.slug);

          await query.get().then(async (conditions) => {
            const conditionsData = await conditions.docs.map((condition) =>
              condition.data()
            );
            res.status(200).json(conditionsData[0]);
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
    console.log(error);
    res.statusMessage = "Could not retrieve condition by slug";
    res.status(503).end();
  }
};

export default getConditions;
