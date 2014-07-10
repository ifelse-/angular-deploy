'use strict';

/**
 * @ngdoc function
 * @name yeoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeoAppApp
 */
angular.module('yeoAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
