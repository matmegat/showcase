'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService($q) {
    var UserService = {
        create: create,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn,
        getCurrentUser: getUser
    };

    return UserService;

    //////////

    function create(user) {
        return $q(function(resolve, reject) {
            if (user && user.username) {
                saveUser(user);
                resolve();
            } else {
                reject({
                    error: 'Not enough data to create a user.'
                });
            }
        });
    }

    function login(user) {
        return $q(function(resolve, reject) {
            if (user && user.username === 'bookbottles' && user.password === 'showcase') {
                saveUser(user);
                resolve();
            } else {
                reject({
                    error: 'Invalid credentials, try bookbottles/showcase'
                });
            }
        });
    }

    function logout() {
        return $q(function(resolve) {
            clearUser();
            resolve();
        });
    }

    function saveUser(user) {
        sessionStorage.currentUser = user.username;
    }

    function clearUser() {
        delete sessionStorage.currentUser;
    }

    function getUser() {
        return sessionStorage.currentUser;
    }

    function isLoggedIn() {
        var currentUser = getUser();

        return currentUser;
    }
}
