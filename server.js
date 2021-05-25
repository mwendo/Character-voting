const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const server = app.listen(port, () => console.log(`Listening on port: ${port}`));
const io = require("socket.io")(server, {cors: true})
// emitters - passes data where it needs to go (emit)
// on - trigger -- listening for a particular event

// Name of the trigger
io.on('connection', socket => {
    console.log(socket.id)
    socket.on('chat', msg => {
        console.log("Got the message: " + msg);
        io.emit('post chat', msg)
    })
})

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));
require('./server/routes/player.routes')(app);