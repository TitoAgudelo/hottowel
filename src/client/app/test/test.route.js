(function() {
  'use strict';

  angular
    .module('app.test')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'test',
        config: {
          url: '/test',
          templateUrl: 'app/test/test.html',
          controller: 'TestController',
          controllerAs: 'vm',
          title: 'test',
          settings: {
            nav: 3,
            content: '<i class="fa fa-dashboard"></i> Test'
          }
        }
      }
    ];
  }
})();
