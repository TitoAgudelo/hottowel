(function() {
  'use strict';

  angular
    .module('app.area')
    .controller('AreaByIdController', AreaByIdController);

  AreaByIdController.$inject = ['$q', 'dataservice', 'logger', '$state'];
  /* @ngInject */
  function AreaByIdController($q, dataservice, logger, $state) {
    var vm = this;
    vm.title = 'Area';
    vm.submitForm = submitForm;

    function activate() {
      var promises = [getAreas()];
      return $q.all(promises).then(function() {
        logger.info('Activated Areas View');
      });
    }

    function formatDates(area) {
      area.registerDate = moment(area.registerDate).format('MMMM Do YYYY, h:mm:ss a');
      return area;
    }

    function getAreas() {
      if(vm.areaId) {
        return dataservice.getArea(vm.areaId).then(function(data) {
          if(data.statusText == 'OK') {
            vm.area = formatDates(data.data);
            return vm.area;
          }
        });
      }
    }

    function submitForm() {
      if(vm.area) {
        return dataservice.editArea(vm.area).then(function(data) {
          if(data.statusText == 'OK') {
            vm.message = data.data;
            logger.info('Area was updated');
            return vm.message;
          }
        });
      }
    }

    function init() {
      vm.areaId = $state.params.areaId;
      activate();
    }

    init();

  }
})();
