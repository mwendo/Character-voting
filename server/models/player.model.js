const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerId: { type: String, unique: true, index: true },
    firstName: String,
    lastName: String,
    team: String,
    postion: String,
    hometown: String,
    college: String,
    photoUrl: String,
    random: { type: [Number], index: '2d' },
    voted: { type: Boolean, default: false }
})

module.exports.Player = mongoose.model('Player', PlayerSchema);