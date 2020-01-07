let chai = require('chai');
chai.should();

describe('Content module acos-jsparsons-python', () => {

  describe('Frontpage block', () => {

    it('should exist once and have teaser links', () => {
      browser.url('/');

      let matches = $$('.contentPackage')
        .filter(div => div.$('.packageTitle').getText() == 'jsparsons-python');
      matches.should.have.lengthOf(1);

      let items = matches[0].$$('.teaserContent a').map(a => a.getText());
      items.should.include('ps_hello');
  items.should.include('ps_simple_function');
    });

  });

  function hasEachOnce(selectors) {
    selectors.forEach(selector => {
      let matches = $$(selector);
      matches.should.have.lengthOf(1);
      matches[0].isDisplayed().should.be.true;
    });
  }

  function dragAndDropNear(source, target, x, y) {
    var loc = source.getLocation();
    let sourceX = parseInt(loc.x + 5);
    let sourceY = parseInt(loc.y + 5);
    loc = target.getLocation();
    let targetX = parseInt(loc.x + x) - sourceX;
    let targetY = parseInt(loc.y + y) - sourceY;
    browser.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'mouse' },
      actions: [
        { type: 'pointerMove', duration: 0, x: sourceX, y: sourceY },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 10 },
        { type: 'pointerMove', duration: 100, origin: 'pointer', x: targetX, y: targetY },
        { type: 'pointerUp', button: 0 }
      ]
    }]);
  }

  describe('Exercise ps_hello', () => {

    it('exercise page should open and have main components', () => {
      browser.url('/html/jsparsons/jsparsons-python/ps_hello');
      hasEachOnce(['#ul-sortableTrash', '#sortable']);
    });

    it('first line added to solution should yield incorrect', () => {
      dragAndDropNear($('#sortablecodeline0'), $('#ul-sortable'), 10, 10);
      $('#feedbackLink').click();
      browser.acceptAlert();
      $('#ul-sortable').getAttribute('class').should.contain('incorrect');
    });

    it('second line added to solution should yield correct', () => {
      dragAndDropNear($('#sortablecodeline1'), $('#ul-sortable'), 10, 40);
      $('#feedbackLink').click();
      let cls = $('#ul-sortable').getAttribute('class');
      cls.should.not.contain('incorrect');
      cls.should.contain('correct');
    });
  });

  describe('Exercise ps_simple_function', () => {

    it('exercise page should open and have main components', function() {
      browser.url('/html/jsparsons/jsparsons-python/ps_simple_function');
      hasEachOnce(['#ul-sortableTrash', '#sortable']);
    });

    it('first line added to solution should yield incorrect', () => {
      dragAndDropNear($('#sortablecodeline0'), $('#ul-sortable'), 10, 10);
      $('#feedbackLink').click();
      browser.acceptAlert();
      $('#ul-sortable').getAttribute('class').should.contain('incorrect');
    });

    it('second line added to solution should yield incorrect', () => {
      dragAndDropNear($('#sortablecodeline1'), $('#ul-sortable'), 60, 40);
      $('#feedbackLink').click();
      browser.acceptAlert();
      $('#ul-sortable').getAttribute('class').should.contain('incorrect');
    });

    it('third line added to solution should yield correct', () => {
      dragAndDropNear($('#sortablecodeline2'), $('#ul-sortable'), 10, 70);
      $('#feedbackLink').click();
      let cls = $('#ul-sortable').getAttribute('class');
      cls.should.not.contain('incorrect');
      cls.should.contain('correct');
    });

  });

  describe('Exercise ps_simple_params', () => {

    it('exercise page should open and have main components', function() {
      browser.url('/html/jsparsons/jsparsons-python/ps_simple_params');
      hasEachOnce(['#ul-sortableTrash', '#sortable']);
    });

    it('first line added to solution should yield incorrect', () => {
      dragAndDropNear($('#sortablecodeline0'), $('#ul-sortable'), 10, 10);
      $('#feedbackLink').click();
      browser.acceptAlert();
      $('#ul-sortable').getAttribute('class').should.contain('incorrect');
    });

    it('second line added to solution should yield incorrect', () => {
      dragAndDropNear($('#sortablecodeline1'), $('#ul-sortable'), 60, 40);
      $('#feedbackLink').click();
      browser.acceptAlert();
      $('#ul-sortable').getAttribute('class').should.contain('incorrect');
    });

    it('third line added to solution should yield correct', () => {
      dragAndDropNear($('#sortablecodeline2'), $('#ul-sortable'), 10, 70);
      $('#feedbackLink').click();
      let cls = $('#ul-sortable').getAttribute('class');
      cls.should.not.contain('incorrect');
      cls.should.contain('correct');
    });

  });

});
