const express = require('express');
const http = require('http')
// const { Server } = require('socket.io')
const cors = require('cors')

const app = express();
const hs = http.createServer(app)
const io = require("socket.io")(hs, {
	cors: {
		// origin: "http://localhost:3000",
		//   origin: "*",
		origin: true,
		methods: ["GET", "POST"],
		//   allowedHeaders: ["my-custom-header"],
		credentials: true
	},
});

app.use(express.json())
// app.use(cors())
// app.use(cors({ origin: 'http://localhost:3000/' }))
app.use(cors({ origin: 'https://chat-app-gold-delta.vercel.app/' }))

const chat2 = io.of('/chat2')
const chat3 = io.of('/chat3')
const chat4 = io.of('/chat4')
const chat5 = io.of('/chat5')
const chat6 = io.of('/chat6')
const chat7 = io.of('/chat7')
const chat8 = io.of('/chat8')
const chat9 = io.of('/chat9')
const chat10 = io.of('/chat10')

io.on("connection", (socket) => {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg) => {
		console.log("New message", msg)
		io.emit('msg', msg)
	})
})

chat2.on("connection", (socket) => {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg) => {
		console.log("New message", msg)
		chat2.emit('msg', msg)
	})
})
chat3.on("connection", (socket) => {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg) => {
		console.log("New message", msg)
		chat3.emit('msg', msg)
	})
})
chat4.on("connection", (socket) => {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg) => {
		console.log("New message", msg)
		chat4.emit('msg', msg)
	})
})
chat5.on("connection", (socket) => {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg) => {
		console.log("New message", msg)
		chat5.emit('msg', msg)
	})
})
chat6.on("connection", (socket) => {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg) => {
		console.log("New message", msg)
		chat6.emit('msg', msg)
	})
})
chat7.on("connection", (socket) => {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg) => {
		console.log("New message", msg)
		chat7.emit('msg', msg)
	})
})
chat8.on("connection", (socket) => {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg) => {
		console.log("New message", msg)
		chat8.emit('msg', msg)
	})
})
chat9.on("connection", (socket) => {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg) => {
		console.log("New message", msg)
		chat9.emit('msg', msg)
	})
})
chat10.on("connection", (socket) => {
	console.log("Socket.io connected", socket.id)
	socket.on('msg', (msg) => {
		console.log("New message", msg)
		chat10.emit('msg', msg)
	})
})

hs.listen(9000, () => {
	console.log("Server started at 9000");
});
