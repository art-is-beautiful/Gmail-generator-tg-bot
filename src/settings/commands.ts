
export default async function botCommands (bot: any) {
    bot.setMyCommands([
      { command: '/start', description: 'Start bot' },
      { command: '/generate', description: 'Bot will generete random gmail accounts for you :*' }
    ]);
  }
  