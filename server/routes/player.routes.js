const PlayerController = require('../controllers/player.controller');

module.exports = function(app){

    app.post('/api/players', PlayerController.createPlayer);
    app.get('/api/players', PlayerController.getPlayers);
    app.get('/api/players/:_id', PlayerController.getPlayer);
    app.put('/api/players/update/:_id', PlayerController.updatePlayer);
    app.delete('/api/players/delete/:_id', PlayerController.deletePlayer);
    
}