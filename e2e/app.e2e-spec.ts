import { SeConDemoPage } from './app.po';

describe('se-con-demo App', () => {
  let page: SeConDemoPage;

  beforeEach(() => {
    page = new SeConDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
