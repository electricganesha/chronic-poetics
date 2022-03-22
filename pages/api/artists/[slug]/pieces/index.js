import db from '/utils/db';

const getPiece = async (req, res) => {
    try {
        switch (req.method) {
            case "GET": {
                let query = db.collection("pieces").where("artistSlug", "==", req.query.slug)

                query.get().then((pieces) => {
                    const piecesData = pieces.docs.map((piece) => piece.data());
                    res.status(200).json(piecesData);
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

export default getPiece;
