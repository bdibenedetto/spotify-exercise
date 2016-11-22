import angular from 'angular'
import { AlbumComponent} from './album.component'; 
import { AlbumDetailComponent } from './album-detail/album-detail.component'  
import AlbumService from './album.service'
import { CommentList } from './comment-list/comment-list.directive' 
import { CommentCreate } from './comment-create/comment-create.directive' 

export const AlbumModule = angular  
  .module('album', [])
  .service('AlbumService', AlbumService)
  .component('albumDetail', AlbumDetailComponent)
  .component('album', AlbumComponent)
  .directive('commentList', () => new CommentList())
  .directive('commentCreate', () => new CommentCreate())
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('album', {
        url: '/album/:id',
        component: 'album',
        template: '<album></album>'
      })
    $urlRouterProvider.otherwise('/');
  })
  .name
