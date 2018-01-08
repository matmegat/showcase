'use strict';

module.exports = DashboardCtrl;

/**
 * @ngInject
 */
function DashboardCtrl(UserService, RandomDataService, $state) {
    var vm = this;

    vm.username = UserService.getCurrentUser();


    vm.loadData = function() {
        RandomDataService.get()
        .then(function(results) {
            vm.users = results.data;
        })
        .catch(function(data){
            vm.error = 'Found error while pulling data.';
        })
    };

    vm.logout = function() {
        UserService.logout()
        .then(function() {
            $state.go('login');
        });
    };

    vm.loadData();
}
