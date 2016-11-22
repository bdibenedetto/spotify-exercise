import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { DashboardComponent } from './dashboard.component';
import  NavbarService  from '../../common/navbar/navbar.service';

export const DashboardModule = angular
  .module('dashboard', [
    uiRouter,
  ])
  .service( 'NavbarService' , NavbarService )
  .component('dashboard', DashboardComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('dashboard', {
        url: '/',
        template: '<dashboard></dashboard>'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;


