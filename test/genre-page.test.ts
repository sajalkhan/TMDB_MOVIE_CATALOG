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
      await expect(page.title()).resolves.toMatch('React App');
    });

    it('goto genre page url', async () => {
      const link = 'a[href*="/genre/"]';
      await page.waitForSelector(link, { timeout: 3000 });
      await page.evaluate((link: any) => document.querySelector(link).click(), link);
      expect(page.url()).toContain(Url + 'genre');
    });

    it('It contains 10 movies', async () => {
      const card = '.m-card-list__link';
      await page.waitForSelector(card, { timeout: 3000 });
      const result = await page.evaluate(() => document.querySelectorAll('.m-card-list__link').length);
      await expect(result).toBe(10);
    });
  });
};

testFunction('TEST MOVIE-DB GENRE PAGE', '/');
