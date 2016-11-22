import angular from 'angular';
import { DashboardModule } from './dashboard/dashboard.module';
import { AlbumModule } from './album/album.module';

export const ComponentsModule = angular
  .module('components', [
    DashboardModule,
    AlbumModule
  ])
  .name;