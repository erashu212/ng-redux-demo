import angular from 'angular';
import DiningRoomController from './dining-room-controller';
import diningRoomTemplate from './dining-room-tpl.html';

export default angular
  .module('app.components.tables', [])
  .directive('tables', () => {
    return {
      restrict: 'E',
      controller: DiningRoomController,
      controllerAs: 'diningRoom',
      bindToController: true,
      template: diningRoomTemplate,
      scope: {}
    };
  })
  .name;
