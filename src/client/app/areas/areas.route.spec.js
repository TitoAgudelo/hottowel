/* jshint -W117, -W030 */
describe('areas routes', function() {
  describe('state', function() {
    var view = 'app/areas/areas.html';

    beforeEach(function() {
      module('app.areas', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should map state areas to url /areas ', function() {
      expect($state.href('areas', {})).to.equal('/areas');
    });

    it('should map /areas route to test View template', function() {
      expect($state.get('areas').templateUrl).to.equal(view);
    });

    it('of test should work with $state.go', function() {
      $state.go('areas');
      $rootScope.$apply();
      expect($state.is('areas'));
    });
  });
});
