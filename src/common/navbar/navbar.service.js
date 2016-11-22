class NavbarService {  
  constructor ($http) {
    this.$http = $http;
  }
 
  search(value) {
    return this.$http.get('/search?q='+value)
    .then(response => this.results = response.data)
  }
}

NavbarService.$inject = ['$http'];
export default NavbarService;  
