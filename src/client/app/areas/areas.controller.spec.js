/* jshint -W117, -W030 */
describe('AreaController', function() {
  var controller;
  var people = mockData.getMockPeople();

  beforeEach(function() {
    bard.appModule('app.areas');
    bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
  });

  beforeEach(function() {
    sinon.stub(dataservice, 'getAreas').returns($q.when(areas));
    controller = $controller('AreaController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Area controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Area', function() {
        expect(controller.title).to.equal('Areas');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });

      it('should have at least 1 Area', function() {
        expect(controller.areas).to.have.length.above(0);
      });

      it('should have people count of 14', function() {
        expect(controller.areas).to.have.length(14);
      });
    });
  });
});
