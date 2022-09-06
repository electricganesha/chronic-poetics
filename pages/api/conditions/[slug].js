import db from "/utils/db";

const getConditions = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        try {
          const entries = await db
            .collection("conditions")
            .where("slug", "==", req.query.slug)
            .get();
          const entriesData = entries.docs.map((conditions) =>
            conditions.data()
          );
          res.status(200).json(entriesData);

          break;
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
    res.statusMessage = "Could not retrieve condition by slug";
    res.status(503).end(error);
  }
};

export default getConditions;
