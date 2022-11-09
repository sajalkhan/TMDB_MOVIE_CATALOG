import puppeteer from 'puppeteer';

const testFunction = (testName: string, url: string) => {
  describe(testName, () => {
    const Url = URL + url;
    let browser;
    let page;

    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--start-maximized'],
        defaultViewport: null,
      });
      const pages = await browser.pages();
      page = pages[0];

      await page.goto(Url, {
        waitUntil: 'networkidle2',
      });
    });

    afterAll(async () => {
      await browser.close();
    });

    it(`go to ${testName} page`, async () => {
      const isElementExist = await page.evaluate(() => {
        if (document.querySelector('.p-not-found')) {
          return false;
        }
        return true;
      });
      expect(isElementExist).toBeTruthy();
    });
  });
};

testFunction('Home', '/movies');
testFunction('Genre', '/genre/28');
testFunction('Movie Details', '/movies/361743');
testFunction('Watch List', '/watchlist');
