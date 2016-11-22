class AlbumController {  
  constructor(AlbumService, $stateParams) {
    this.albumService = AlbumService;
    this.currentAlbum = $stateParams.id;
    this.creating = false;
  }

  $onInit() {
    this.albumService.getComments(this.currentAlbum)
    .then(response => this.comments = response);  
  }  

  toggleForm() {
    this.creating = !this.creating;
  } 

  add() {
    this.albumService.addComment({  	
                        "email": this.email,
                        "albumId": this.currentAlbum,
                        "text": this.comment
                      })
    .then(response => response);  
    this.email = '';
    this.comment = '';
    
    this.albumService.getComments(this.currentAlbum)
    .then(response => this.comments = response);      
  }  
}

AlbumController.$inject = ['AlbumService', '$stateParams'];
export default AlbumController;  
