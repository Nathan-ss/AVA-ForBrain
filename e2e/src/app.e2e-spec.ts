import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
<<<<<<< HEAD
    expect(await page.getTitleText()).toEqual('AVA-ForBrain app is running!');
=======
    expect(await page.getTitleText()).toEqual('forBrain app is running!');
>>>>>>> 2fe0510d4b5cc547bbb06f35fe4a041927b21c7d
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
