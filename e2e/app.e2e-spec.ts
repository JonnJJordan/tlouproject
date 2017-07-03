import { TlouprojectPage } from './app.po';

describe('tlouproject App', () => {
  let page: TlouprojectPage;

  beforeEach(() => {
    page = new TlouprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
