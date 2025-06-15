const qrcode = require("qrcode");
const client = require("./client");

let lastQR = null;

client.on("qr", (qr) => {
  lastQR = qr;
});

async function giveQRCode() {
  if (!lastQR) throw new Error("QR not available yet");
  return await qrcode.toDataURL(lastQR);
}

module.exports = giveQRCode;
