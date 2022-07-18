import db from "/utils/db";

const getConditions = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        try {
          let query = db
            .collection("conditions")
            .where("artists", "array-contains", {
              slug: req.query.slug,
              name: req.query.name
            });

          await query.get().then(async conditions => {
            const conditionsData = await conditions.docs.map(condition =>
              condition.data()
            );

            await res.status(200).json(conditionsData);
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
    res.statusMessage = "Could not retrieve conditions";
    res.status(503).end();
  }
};

export default getConditions;
