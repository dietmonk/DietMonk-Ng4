import { DietMonkNg4Page } from './app.po';

describe('diet-monk-ng4 App', () => {
  let page: DietMonkNg4Page;

  beforeEach(() => {
    page = new DietMonkNg4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
