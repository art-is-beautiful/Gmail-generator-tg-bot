require('dotenv').config();

const TelegramApi = require('node-telegram-bot-api');
const token = process.env.TG_BOT_TOKEN;
const bot = new TelegramApi(token, { polling: true });

import botCommands from './settings/commands';
import startController from './controller/start';
import generatorController from './controller/generator';


(async function start(){

  try {

    await botCommands(bot);
    await startController(bot);
    await generatorController(bot);

  } catch(err) {
    console.log('Programm Error. ' + err)
  }

})()



