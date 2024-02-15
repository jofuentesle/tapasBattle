const Vote = require('../models/vote.model');

const toVote = (req, res, next) => {

    try {

        const voteDB = new Vote( req.body, req.uid );
        voteDB.guestId = req.uid;

        
        res.status(200).json({
            ok: true,
            voteDB
        });

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: "Error en la votación"
        });
    }
}

module.exports = {
    toVote
}