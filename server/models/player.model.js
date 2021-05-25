const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    
    playerName:{
        type:String,
        required:[true, "must include a name!"],
        validate:{
            validator: (input) => {
                return input.length >= 3;
            },
            message: (input) => `${input.value} is not 3 characters or more!`
        }
    },

    playerDescription:{
        type:String,
        required:[true, "must include a description!"],
        validate:{
            validator: (input) => {
                return input.length >= 3;
            },
            message: (input) => `${input.value} is not 3 characters or more!`
        }
    },

    playerType:{
        type:String,
        required:[true, "must include a type!"],
        validate:{
            validator: (input) => {
                return input.length >= 3;
            },
            message: (input) => `${input.value} is not 3 characters or more!`
        }
    },

    skillOne: String,

    skillTwo: String,

    skillThree: String
})

module.exports.Player = mongoose.model('Player', PlayerSchema);