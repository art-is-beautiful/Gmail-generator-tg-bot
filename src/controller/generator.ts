import { Commands } from '../settings/enums';
const puppeteer = require('puppeteer');
const Pageres = require('pageres');


export default async function showGraphic (bot: any) {

  bot.on('message', async (msg: any) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const userName = msg.from.first_name;

    if (msg.text === Commands.GENERATE) {

      // await bot.sendMessage(chatId, 'Write count of gmails: ')

    // } else if (isNaN(msg.text) && msg.text !== Commands.GENERATE) {

    //     await bot.sendMessage(chatId, 'Write number !!! Stupid son of beaches')

    // } else if ( !isNaN(msg.text) ) {
        
        const browser = await puppeteer.launch({
          // headless: false,
          args: [
            '--incognito',
          ],
        });
        const page = await browser.newPage({
          args: [
            '--incognito',
          ]
        });
        await page.goto('https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp', {
          waitUntil: 'networkidle2'
        });

        //1
        const searchButtonNodeSelector = ".VfPpkd-LgbsSe-OWXEXe-k8QpJ";

        await page.waitForSelector('input[name=firstName]');
        await page.waitForSelector('input[name=lastName]');
        await page.waitForSelector('input[name=Passwd]');
        await page.waitForSelector('input[name=ConfirmPasswd]');

        await page.type('#firstName', 'Adenosien');
        await page.type('#lastName', 'Triphosphate');

        // await page.click(searchButtonNodeSelector);
        // await page.waitForSelector('input[name=Username]');
        const gmail = await page.type('#username', 'adenosinetrip6234');

        const password = await page.type('input[name=Passwd]', 'Xyipizda222');
        await page.type('input[name=ConfirmPasswd]', 'Xyipizda222');

        await page.click(searchButtonNodeSelector);

        await page.waitFor(30000);

        //2
        await page.select('#month', 'April');
        await page.type('#day', '11');
        await page.type('#year', '1998');

        await page.select('#gender', 'Male ');
        await page.click(searchButtonNodeSelector);
        await page.waitFor(30000);

        //3
        await page.click(searchButtonNodeSelector);

        await browser.close();

        await bot.sendMessage(chatId, `Your gmail - ${gmail}, your password - ${password}`);

    }

  });
}
