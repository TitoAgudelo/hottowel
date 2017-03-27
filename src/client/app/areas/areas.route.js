(function() {
  'use strict';

  angular
    .module('app.areas')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'areas',
        config: {
          url: '/areas',
          templateUrl: 'app/areas/areas.html',
          controller: 'AreaController',
          controllerAs: 'vm',
          title: 'areas',
          settings: {
            nav: 4,
            content: '<i class="fa fa-dashboard"></i> Areas'
          }
        }
      }
    ];
  }
})();
