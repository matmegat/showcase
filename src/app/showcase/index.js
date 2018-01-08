'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),

        /* Custom */
        require('../auth')
    ])
    .directive('passwordMatch', require('./directives/password-match.js'))
    .directive('userItem', require('./directives/user-item.js'))
    .config(require('./config'))
    .config(require('./route'))
    .controller('DashboardCtrl', require('./controllers/DashboardCtrl'))
    .factory('RandomDataService', require('./services/RandomDataService'))
    .run(require('./auth'));
