//index.js
const giveQRCode = require("./src/core/qrManager");
const connectionStatus = require("./src/core/connectionStatus");
const {sendBulkMessage} = require("./src/features/sendBulkMessage");

// In future, you can add more features here
// const sendMessage = require("./features/sendMessage");

module.exports = {
  giveQRCode,
  connectionStatus,
  sendBulkMessage,
};
