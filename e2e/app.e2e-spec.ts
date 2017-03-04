import { NcnlPage } from './app.po';

describe('ncnl App', () => {
  let page: NcnlPage;

  beforeEach(() => {
    page = new NcnlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
