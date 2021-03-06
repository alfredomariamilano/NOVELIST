angular
.module("theNovelists")
.controller("usersIndexCtrl", usersIndexCtrl);

usersIndexCtrl.$inject = ["User"];
function usersIndexCtrl(User){
  const vm = this;
  User
    .query()
    .$promise
    .then(data => {
      vm.users = data.users;
    });
}
