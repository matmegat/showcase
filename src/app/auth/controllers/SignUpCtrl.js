'use strict';

module.exports = SignUpCtrl;

/**
 * @ngInject
 */
function SignUpCtrl(UserService, $state) {
    var vm = this;

    vm.signUp = function(form) {
        vm.submitted = true;
        if (!form.$valid) {
            return;
        }

        UserService.create(vm.user)
        .then(function() {
            $state.go('dashboard');
        })
        .catch(function(data) {
            vm.error = data.error;
        });
    };
}
