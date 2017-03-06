import { MultimeterPage } from './app.po';

describe('multimeter App', () => {
  let page: MultimeterPage;

  beforeEach(() => {
    page = new MultimeterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
