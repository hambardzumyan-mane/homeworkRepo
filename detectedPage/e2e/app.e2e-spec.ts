import { DetectedPagePage } from './app.po';

describe('detected-page App', () => {
  let page: DetectedPagePage;

  beforeEach(() => {
    page = new DetectedPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
