import { ProjectComPage } from './app.po';

describe('project-com App', function() {
  let page: ProjectComPage;

  beforeEach(() => {
    page = new ProjectComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pc works!');
  });
});
