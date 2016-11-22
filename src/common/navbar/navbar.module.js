import angular from 'angular';
import { NavbarComponent } from './navbar.component';
import  NavbarService  from './navbar.service';

export const NavbarModule = angular
  .module('navbar', [])
  .service( 'NavbarService' , NavbarService)
  .component('navbar', NavbarComponent)
  .name;


