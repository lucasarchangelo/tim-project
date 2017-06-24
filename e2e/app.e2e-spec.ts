import { TimProjectPage } from './app.po';

describe('tim-project App', () => {
  let page: TimProjectPage;

  beforeEach(() => {
    page = new TimProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
