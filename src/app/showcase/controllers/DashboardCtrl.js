'use strict';

module.exports = DashboardCtrl;

/**
 * @ngInject
 */
function DashboardCtrl(UserService, $state) {
    var vm = this;

    vm.username = UserService.getCurrentUser();

    vm.logout = function() {
        UserService.logout()
        .then(function() {
            $state.go('login');
        });
    };
}
