class DashboardController {
    constructor(NavbarService) {
      this.service = NavbarService;
    }
  }

DashboardController.$inject = ['NavbarService'];
export default DashboardController; 
