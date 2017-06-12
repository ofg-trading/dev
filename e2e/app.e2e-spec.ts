import { OfgTradingPage } from './app.po';

describe('ofg-trading App', function() {
  let page: OfgTradingPage;

  beforeEach(() => {
    page = new OfgTradingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
