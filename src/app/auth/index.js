'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.signup', [
        require('angular-ui-router')
    ])
    .config(require('./route'))
    .controller('SignUpCtrl', require('./controllers/SignUpCtrl'))
    .controller('LoginCtrl', require('./controllers/LoginCtrl'))
    .factory('UserService', require('./services/UserService'))
    .name;
