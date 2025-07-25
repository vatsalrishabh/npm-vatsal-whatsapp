# Usage
const { giveQRCode, connectionStatus, sendBulkMessage } = require("vatsal-whatsapp");

# vatsal-whatsapp

A lightweight Node.js package to integrate WhatsApp Web automation using [`whatsapp-web.js`](https://github.com/pedroslopez/whatsapp-web.js), with real-time communication via `socket.io`, QR code handling, and an Express API backend.

## ✨ Features

- Send and receive WhatsApp messages via API
- Generate and display QR codes for session authentication
- Real-time updates with Socket.IO
- Persistent session storage
- Easy to integrate into other Node.js apps

---

## 📦 Dependencies

This package relies on the following core dependencies:

| Package             | Purpose                                |
|---------------------|----------------------------------------|
| `express`           | Backend server for API handling        |
| `socket.io`         | Real-time communication (QR code, etc) |
| `cors`              | Enables CORS for frontend access       |
| `whatsapp-web.js`   | WhatsApp Web automation                |
| `qrcode`            | Generate QR code as string or terminal |

---

## 🔧 Installation

You can install this package and its dependencies using:

```bash
npm install vatsal-whatsapp express socket.io cors whatsapp-web.js qrcode puppeteer 


##Ubuntu Design
sudo apt install -y \
  gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 \
  libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 \
  libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 \
  libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 \
  libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates \
  fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget


### 🔧 Modular Design

- **`core/`**: Handles WhatsApp client logic and session management.
- **`features/`**: Extend your module with new capabilities like sending messages, reading chats, or group management.
- **`index.js`**: Public entry point — imports internal features and exposes usable functions.

This design ensures it's easy to grow your package while keeping the codebase clean and maintainable.



## ubuntu 

sudo apt update && sudo apt install -y \
  libgbm-dev libasound2t64 libatk1.0-0 libx11-6 libx11-xcb1 libxcb1 \
  libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 \
  libxrandr2 libxrender1 libxss1 libxtst6 libnss3 libatk-bridge2.0-0 \
  libcups2t64 libxshmfence-dev libnspr4 libglib2.0-0t64 libgtk-3-0t64 \
  libpango-1.0-0 libpangocairo-1.0-0 ca-certificates fonts-liberation \
  lsb-release xdg-utils wget curl

