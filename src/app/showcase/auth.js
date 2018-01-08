'use strict';

module.exports = auth;

/**
 * @ngInject
 */
function auth($rootScope, $state, UserService) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
        if (!next.authenticate) {
            return;
        }

        if (UserService.isLoggedIn()) {
            return;
        }

        event.preventDefault();
        $state.go('login');
    });
}
