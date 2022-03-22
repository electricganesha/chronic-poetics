import db from '/utils/db';

const getPieces = async (req, res) => {
    try {
        switch (req.method) {
            case "GET": {
                let query = db.collection("pieces").where("slug", "==", req.query.slug)

                query.get().then((pieces) => {
                    const pieceData = pieces.docs.map((piece) => piece.data());
                    res.status(200).json(pieceData[0]);
                });

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
}

export default getPieces;
