const express = require('express');
const http = require('http')
// const { Server } = require('socket.io')
const cors = require('cors')

const app = express();
const hs = http.createServer(app)
const io = require("socket.io")(hs, {
	cors: {
	  origin: "https://chat-app-yashghogre.vercel.app/",
	  methods: ["GET", "POST"],
	//   allowedHeaders: ["my-custom-header"],
	  credentials: true
	}
  });

app.use(cors({origin: 'https://chat-app-yashghogre.vercel.app/'}))

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
