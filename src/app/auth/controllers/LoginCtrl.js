'use strict';

module.exports = LoginCtrl;

/**
 * @ngInject
 */
function LoginCtrl(UserService, $state) {
    var vm = this;

    vm.login = function(form) {
        vm.submitted = true;
        if (!form.$valid) {
            return;
        }

        UserService.login(vm.user)
        .then(function() {
            $state.go('dashboard');
        })
        .catch(function(data) {
            vm.error = data.error;
        });
    };
}
