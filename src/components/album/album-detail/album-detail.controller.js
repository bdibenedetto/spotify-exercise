class AlbumDetailController {  
  constructor(AlbumService, $stateParams) {
    this.albumService = AlbumService;
    this.currentAlbum = $stateParams.id;
  }

  $onInit() {
    this.albumService.getAlbum(this.currentAlbum)
    .then(response => this.album = response);  
  }  
}

AlbumDetailController.$inject = ['AlbumService', '$stateParams'];
export default AlbumDetailController;  