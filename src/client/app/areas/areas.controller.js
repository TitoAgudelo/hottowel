(function() {
  'use strict';

  angular
    .module('app.areas')
    .controller('AreaController', AreaController);

  AreaController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function AreaController($q, dataservice, logger) {
    var vm = this;
    vm.title = 'Area';

    activate();

    function activate() {
      var promises = [getAreas()];
      return $q.all(promises).then(function() {
        logger.info('Activated Areas View');
      });
    }

    function formatDates(areas) {
      areas.forEach(function(area, index) {
        area.registerDate = moment(area.registerDate).format('MMMM Do YYYY, h:mm:ss a');
      })
      return areas;
    }

    function getAreas() {
      return dataservice.getAreas().then(function(data) {
        if(data.statusText == 'OK') {
          vm.areas = formatDates(data.data);
          return vm.areas;
        }
      });
    }

  }
})();
