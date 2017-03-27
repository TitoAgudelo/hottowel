(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getPeople: getPeople,
      getMessageCount: getMessageCount,
      getAreas: getAreas,
      getArea: getArea,
      editArea: editArea
    };

    return service;

    function getMessageCount() { return $q.when(72); }

    function getPeople() {
      return $http.get('/api/people')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }

    function getAreas() {
      return $http.get('http://201.184.70.154:8282/EclipseLisServices/areas')
        .then(sucess)
        .catch(fail);

      function sucess(response) {
        return response;
      }

      function fail() {
        return exception.catcher('XHR Failed for getAreas')(e);
      }
    }

    function getArea(id) {
      return $http.get('http://201.184.70.154:8282/EclipseLisServices/areas/' + id)
        .then(sucess)
        .catch(fail);

      function sucess(response) {
        return response;
      }

      function fail() {
        return exception.catcher('XHR Failed for getAreas')(e);
      }
    }

    function editArea(area) {

      var promise = $http({
          method: 'PUT',
          url: 'http://201.184.70.154:8282/EclipseLisServices/areas/' + area.id,
          data: area
      });

      return promise.success(function (data, status) {
          return data;
      });

    }
  }
})();
