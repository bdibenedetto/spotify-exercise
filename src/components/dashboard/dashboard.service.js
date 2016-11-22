export class DashboardService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }
  getData() {
    return '';//this.$http.get('/api/todos').then(response => response.data);
  }
}