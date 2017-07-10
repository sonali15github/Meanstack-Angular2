import { TelliproPage } from './app.po';

describe('tellipro App', () => {
  let page: TelliproPage;

  beforeEach(() => {
    page = new TelliproPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
