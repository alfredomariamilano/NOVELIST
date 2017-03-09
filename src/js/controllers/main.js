angular
.module("theNovelists")
.controller("mainCtrl", mainCtrl);

mainCtrl.$inject = ["$rootScope", "CurrentUserService", "$state", 'RandomImage'];
function mainCtrl($rootScope, CurrentUserService, $state, RandomImage) {
  const vm = this;

  vm.user = CurrentUserService.getUser();

  vm.logout = () => {
    event.preventDefault();
    CurrentUserService.clearUser();
  };

  $rootScope.$on("loggedIn", () => {
    vm.user = CurrentUserService.getUser();
    $state.go("novelIndex");
  });

  $rootScope.$on("loggedOut", () => {
    vm.user = null;
    $state.go("home");
  });

  RandomImage
  .query()
  .$promise
  .then(data => {
    vm.fallbackImage = data.urls.custom;
  });
}
