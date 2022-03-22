import db from '/utils/db';

const getArtists = async (req, res) => {
    try {
        switch (req.method) {
            case "GET": {
                let query = db.collection("artists").where("slug", "==", req.query.slug)

                query.get().then((artists) => {
                    const artistsData = artists.docs.map((artist) => artist.data());
                    res.status(200).json(artistsData[0]);
                });

                break;
            }
            default: {
                res.status(405).end();
            }
        }
    } catch (error) {
        console.log(error);
        res.statusMessage = "Could not retrieve artist";
        res.status(503).end();
    }
}

export default getArtists;
