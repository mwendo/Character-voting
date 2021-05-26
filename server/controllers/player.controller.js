const {Player} = require('../models/player.model');

module.exports.createPlayer = (req, res) => {
    Player.insertMany([
        {firstName: Kelvin, position: SG},
        {firstName: Michael, position: F}
    ])
    .then(newPlayer => res.json({product: newPlayer}))
    .catch(err => {
        console.log(err);
        res.json({message: "ERROR!", error:err})
    });
}

module.exports.getPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json({product: allPlayers}))
        .catch(err => {
            console.log(err);
            res.json({message: "ERROR!"})
        });
}

module.exports.getPlayer = (req, res) => {
    Player.findOne({_id: req.params._id})
        .then(onePlayer => res.json({product: onePlayer}))
        .catch(err => res.json({message: "ERROR!"}))
}

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params._id}, req.body, {new:true})
        .then(updatedPlayer => res.json({product: updatedPlayer}))
        .catch(err => {
            console.log(err);
            res.json({message: "ERROR!", error:err})
        });
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params._id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message: "ERROR!"}));
}