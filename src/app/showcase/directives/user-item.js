'use strict';

module.exports = userItem;

function userItem() {
	return {
		restrict: 'A',
		scope: {
			value: '='
		},
		template: require('../templates/user-item.tpl.jade')
	};
}
