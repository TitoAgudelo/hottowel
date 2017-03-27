(function() {
  'use strict';

  angular
    .module('app.test')
    .controller('TestController', TestController);

  TestController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function TestController($q, dataservice, logger) {
    var vm = this;
    vm.title = 'Test';

    activate();

    function activate() {
      var promises = [getPeople()];
      return $q.all(promises).then(function() {
        logger.info('Activated Test View');
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }
  }
})();
