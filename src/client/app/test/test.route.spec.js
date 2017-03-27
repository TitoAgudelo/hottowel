/* jshint -W117, -W030 */
describe('test routes', function() {
  describe('state', function() {
    var view = 'app/test/test.html';

    beforeEach(function() {
      module('app.test', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should map state test to url /test ', function() {
      expect($state.href('test', {})).to.equal('/test');
    });

    it('should map /test route to test View template', function() {
      expect($state.get('test').templateUrl).to.equal(view);
    });

    it('of test should work with $state.go', function() {
      $state.go('test');
      $rootScope.$apply();
      expect($state.is('test'));
    });
  });
});
