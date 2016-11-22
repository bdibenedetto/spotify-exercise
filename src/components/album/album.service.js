class AlbumService {  
  constructor ($http) {
    this.$http = $http
  }

  getComments(id) {
    return this.$http.get("/comments/"+id)
    .then(response => response.data)
  }

  getAlbum(id) {
    return this.$http.get("/search/"+id)
    .then(response => response.data)
  }

  addComment(comment) {
    return this.$http.post("/comments",comment).then(response => response.data);
  }
}

AlbumService.$inject = ['$http'];
export default AlbumService;  


