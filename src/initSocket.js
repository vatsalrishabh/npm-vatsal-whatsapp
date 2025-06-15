//src/initSocket.js
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const giveQRCode = require("./src/core/qrManager");
const connectionStatus = require("./src/core/connectionStatus");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log("✅ Client connected:", socket.id);

  // Emit connection status
  socket.emit("status", connectionStatus());

  // Emit QR code on connection if available
  giveQRCode()
    .then((qr) => socket.emit("qrCode", qr))
    .catch(() => socket.emit("qrCode", null));

  // Handle client-initiated QR code request
  socket.on("getQRCode", async () => {
    try {
      const qr = await giveQRCode();
      socket.emit("qrCode", qr);
    } catch (err) {
      socket.emit("error", "QR not available yet");
    }
  });

  socket.on("getStatus", () => {
    socket.emit("status", connectionStatus());
  });

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

const PORT = process.env.WHATSAPP_PORT || 5050;
server.listen(PORT, () => {
  console.log(`📡 vatsal-whatsapp running at http://localhost:${PORT}`);
});
