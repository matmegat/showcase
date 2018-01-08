'use strict';

module.exports = RandomDataService;

/**
 * @ngInject
 */
function RandomDataService($http) {
    var RandomDataService = {
        get: get
    };

    return RandomDataService;

    //////////

    function get() {
        return $http.get('https://uinames.com/api/?amount=12&ext');
    }
}
