import { Commands } from '../settings/enums';


export default async function start (bot: any) {

  bot.on('message', async (msg: any) => {

    const chatId = msg.chat.id;
    const userName = msg.from.username

    if (msg.text === Commands.START) {
      console.log(msg)

      try {
        await bot.sendMessage(chatId, `Hello ${userName}. Bot has been started.`);
      }
      catch (err) {
        console.log('Start Error: ', err)
      }
    };
  });
}
