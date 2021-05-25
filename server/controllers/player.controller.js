const {Player} = require('../models/player.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json({product: newPlayer}))
        .catch(err => {
            console.log(err);
            res.json({message: "ERROR!", error:err})
        });
}

module.exports.getAllPlayers = (req, res) => {
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

// module.exports.addSkill = (req, res) => {
//     Player.updateOne(
//         {_id: req.params._id },
//         {$push:{skills: req.body.skill}}
//     )
//         .then(result => res.json({result: result}))
//         .catch(err => res.json({message: 'Something went wrong', error: err}));
// }