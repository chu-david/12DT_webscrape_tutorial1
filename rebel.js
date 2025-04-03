const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
(async () => {
  const browser = await puppeteer.launch({
    headless: true,  // Run in headless mode
    args: [
      '--no-sandbox',  // Necessary for containerized environments like Codespaces
      '--disable-setuid-sandbox'  // Additional sandbox-related option
    ]
  });

  const page = await browser.newPage();
  //await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");

  await page.goto('https://www.rebelsport.com.au/fitness/weights-and-weight-lifting/dumbbells');
  console.log(await page.title());


  await new Promise(res => setTimeout(res, 500))

  const pageContent = await page.content();

  const $ = cheerio.load(pageContent);
  console.log($('.wrapper-product-detail').eq(0).text());
  await browser.close();
  
})();