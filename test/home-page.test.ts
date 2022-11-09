import puppeteer from 'puppeteer';

const testFunction = (testName: string, url: string) => {
  describe(testName, () => {
    const Url = URL + url;
    let browser;
    let page;

    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--start-maximized'],
        defaultViewport: null,
      });
      const pages = await browser.pages();
      page = pages[0];
    });

    afterAll(async () => {
      await browser.close();
    });

    it('contains title', async () => {
      const response = await page.goto(Url, {
        waitUntil: 'networkidle2',
      });
      await expect(response.status()).toBe(200);
      await expect(page.title()).resolves.toMatch('The Movie Db');
    });

    it('Contains home page url', async () => {
      expect(page.url()).toContain(Url + 'movies');
    });

    it('Go to movie detail page', async () => {
      const card = '.m-card-list__link';
      await page.waitForSelector(card, { timeout: 3000 });
      await page.click(card);
      expect(page.url()).toBeTruthy();
    });

    it('Go to Watch List page', async () => {
      const button = '.a-button';
      const watchList = "a[href='/watchlist']";

      await page.waitForSelector(button, { timeout: 3000 });
      await page.evaluate((button: any) => document.querySelector(button).click(), button);
      await page.waitForSelector(watchList, { timeout: 3000 });
      const text = await page.evaluate(
        (watchList: string) => document.querySelector(watchList)?.textContent,
        watchList
      );
      expect(text).not.toEqual('Watch List (0)');
      await page.click(watchList);
      expect(page.url()).toContain(Url + 'watchlist');
    });
  });
};

testFunction('TEST MOVIE-DB HOME PAGE', '/');
