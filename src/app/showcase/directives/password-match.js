'use strict';

module.exports = passwordMatch;

function passwordMatch() {
    return {
        require: 'ngModel',
        link: function(scope, element, attributes, ctrl) {
            element.on('keyup', function() {
                scope.$apply(function() {
                    ctrl.$setValidity('pwmatch', element.val() === document.getElementById(attributes.passwordMatch).value);
                });
            });
        }
    };
}
