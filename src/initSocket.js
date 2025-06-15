const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const giveQRCode = require("./core/qrManager");
const connectionStatus = require("./core/connectionStatus");

const app = express();
const server = http.createServer(app); // http server to handle socket.io connections
const io = new Server(server, { // that http server is passed to the socket.io server
  cors: {
    origin: "*", // allow all origins for CORS
    methods: ["GET", "POST"], // allow GET and POST methods
  },
});

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log("✅ Client connected:", socket.id);
  giveQRCode(socket);
  connectionStatus(socket);
});

const PORT = process.env.WHATSAPP_PORT || 5050;
server.listen(PORT, () => {
  console.log(`📡 vatsal-whatsapp Socket.IO server running at http://localhost:${PORT}`);
});
