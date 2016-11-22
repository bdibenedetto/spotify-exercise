class NavbarController {
    constructor(NavbarService) {
      this.navbarService = NavbarService;
    }
    search(value) {
      if (value.length > 3)
      {
        this.navbarService.search(value);
      }
    }
  }

NavbarController.$inject = ['NavbarService'];
export default NavbarController; 
