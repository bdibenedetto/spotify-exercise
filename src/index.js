import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';

angular
  .module('spotifyzier', [
    CommonModule,
    ComponentsModule,
    uiRouter
  ])
  .config(($urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/');
  });

