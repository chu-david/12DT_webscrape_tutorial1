const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,  // Run in headless mode
    args: [
      '--no-sandbox',  // Necessary for containerized environments like Codespaces
      '--disable-setuid-sandbox'  // Additional sandbox-related option
    ]
  });

  const page = await browser.newPage();
  await page.goto('https://074.drakes.com.au/category/dairy');
  console.log(await page.title());
  await browser.close();
})();