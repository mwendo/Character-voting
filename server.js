const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const server = app.listen(port, () => console.log(`Listening on port: ${port}`));
const io = require("socket.io")(server, {cors: true})
let onlineUsers = 0;
// emitters - passes data where it needs to go (emit)
// on - trigger -- listening for a particular event

// Name of the trigger
io.sockets.on('connection', function(socket) {
    onlineUsers++;

    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

    socket.on('disconnect', function() {
        onlineUsers--;
        io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
    });
});

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));
require('./server/routes/player.routes')(app);