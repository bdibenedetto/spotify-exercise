import angular from 'angular';
import { NavbarModule } from './navbar/navbar.module';

export const CommonModule = angular
  .module('common', [
    NavbarModule
  ])
  .name;
