import db from "../../../utils/db";

const getConditions = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        const entries = await db
          .collection("conditions")
          .orderBy("name", "asc")
          .get();
        const entriesData = entries.docs.map((conditions) => conditions.data());
        res.status(200).json(entriesData);

        break;
      }
      default: {
        res.status(405).end();
      }
    }
  } catch (error) {
    res.statusMessage = "Could not retrieve conditions";
    res.status(503).end(err);
  }
};

export default getConditions;
