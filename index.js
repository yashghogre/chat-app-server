const express = require('express');
const http = require('http')
// const { Server } = require('socket.io')
const cors = require('cors')

const app = express();
const hs = http.createServer(app)
const io = require("socket.io")(hs, {
	cors: {
		//   origin: "http://localhost:3000",
		origin: true,
		methods: ["GET", "POST"],
		//   allowedHeaders: ["my-custom-header"],
		credentials: true
	},
	allowEIO3: true,
});

app.use(express.json())
// app.use(cors({origin: 'http://localhost:3000'}))
app.use(cors({ origin: 'https://chat-app-gold-delta.vercel.app/' }))

io.on("connection", (socket) => {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg) => {
		console.log("New message", msg)
		io.emit('msg', msg)
	})
})

hs.listen(9000, () => {
	console.log("Server started at 9000");
});
