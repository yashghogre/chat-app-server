const express = require('express');
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express();
const hs = createServer(app)
const io = require("socket.io")(hs, {
	cors: {
	  origin: "http://localhost:3000",
	  methods: ["GET", "POST"],
	//   allowedHeaders: ["my-custom-header"],
	  credentials: true
	}
  });

app.use(cors({origin: 'http://localhost:3000'}))

io.on("connection", (socket)=> {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg)=> {
		console.log("New message", msg)
		io.emit('msg', msg)
	})
})

hs.listen(9000, () => {
	console.log("Server started at 9000");
});