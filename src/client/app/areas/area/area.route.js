(function() {
  'use strict';

  angular
    .module('app.area')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'area',
        config: {
          url: '/area/:areaId',
          templateUrl: 'app/areas/area/area.html',
          controller: 'AreaByIdController',
          controllerAs: 'vm',
          title: 'area'
        }
      }
    ];
  }
})();
