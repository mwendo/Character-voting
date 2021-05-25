const PlayerController = require('../controllers/player.controller');

module.exports = function(app){
    app.get('/api', PlayerController.index);
    app.post('/api/new', PlayerController.createPlayer);
    app.get('/api/players', PlayerController.getAllPlayers);
    app.get('/api/player/:_id', PlayerController.getPlayer);
    app.put('/api/player/update/:_id', PlayerController.updatePlayer);
    app.delete('/api/player/delete/:_id', PlayerController.deletePlayer);
    // app.patch('/api/player/:_id/addskill', PlayerController.addSkill);
}