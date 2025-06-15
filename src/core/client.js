const { Client, LocalAuth } = require("whatsapp-web.js");

// Persistent client using LocalAuth
const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "vatsal-whatsapp-session", // Unique ID for session storage
  }),
  puppeteer: {
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-zygote",
      "--single-process",
      "--disable-gpu",
    ],
  },
  restartOnAuthFail: true, // Auto-restart if auth fails
  takeoverOnConflict: true, // Force session takeover if needed
  takeoverTimeoutMs: 3000,  // Short timeout to reclaim session
});

client.initialize();

// Log status updates
client.on("authenticated", () => {
  console.log("✅ WhatsApp authenticated successfully");
});

client.on("ready", () => {
  console.log("🟢 WhatsApp is ready to use");
});

client.on("auth_failure", (msg) => {
  console.error("❌ Authentication failed:", msg);
});

client.on("disconnected", (reason) => {
  console.warn("⚠️ WhatsApp disconnected:", reason);
  client.initialize(); // Re-initialize client on disconnect
});

module.exports = client;
