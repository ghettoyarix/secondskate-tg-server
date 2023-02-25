import { Message } from 'node-telegram-bot-api';

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = '6246620469:AAE0vRdUTWHC727eSoV6MMQNePPeNrUe2Cc';
const webAppUrl = ' ';

const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json());
app.use(cors());

app.post('/web-data', async (req, res) => {
  const {} = req.body;
  try {
    return res.status(200).json({});
  } catch (e) {
    return res.status(500).json({});
  }
});

const PORT = 8000;

app.listen(PORT, () => console.log('server started on PORT ' + PORT));
