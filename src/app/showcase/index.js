'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),

        /* Custom */
        require('../auth')
    ])
    .directive('passwordMatch', require('./directives/password-match.js'))
    .config(require('./config'))
    .config(require('./route'))
    .controller('DashboardCtrl', require('./controllers/DashboardCtrl'))
    .run(require('./auth'));
