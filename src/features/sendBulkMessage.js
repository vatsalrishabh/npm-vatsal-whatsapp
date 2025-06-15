const { client } = require("../core/client");

/**
 * Basic country lookup based on prefix
 */
function detectCountry(number) {
  if (number.startsWith("91")) return { countryCode: "IN", country: "India" };
  if (number.startsWith("1")) return { countryCode: "US", country: "USA" };
  if (number.startsWith("44")) return { countryCode: "UK", country: "United Kingdom" };
  if (number.startsWith("971")) return { countryCode: "AE", country: "UAE" };
  if (number.startsWith("92")) return { countryCode: "PK", country: "Pakistan" };
  if (number.startsWith("880")) return { countryCode: "BD", country: "Bangladesh" };
  // Add more as needed...
  return { countryCode: "Unknown", country: "Unknown" };
}

/**
 * Send a WhatsApp message to multiple numbers.
 * @param {string[]} numbersArray - Array of phone numbers in international format (without '+' sign)
 * @param {string} message - Message to send
 * @returns {Promise<Object[]>} - Array of results with number, status, and country info
 */
async function sendBulkMessage(numbersArray, message) {
  if (!client) {
    throw new Error("WhatsApp client not initialized");
  }

  const results = [];

  for (let number of numbersArray) {
    const chatId = `${number}@c.us`;
    const countryInfo = detectCountry(number);

    try {
      const isRegistered = await client.isRegisteredUser(chatId);

      if (isRegistered) {
        await client.sendMessage(chatId, message);
        results.push({ number, status: "sent", ...countryInfo });
      } else {
        results.push({ number, status: "not_registered", ...countryInfo });
      }
    } catch (err) {
      console.error(`❌ Error sending to ${number}:`, err.message);
      results.push({
        number,
        status: "failed",
        error: err.message,
        ...countryInfo,
      });
    }
  }

  return results;
}

module.exports = sendBulkMessage;
