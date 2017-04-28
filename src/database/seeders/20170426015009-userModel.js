'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {

		const moment = require('moment');
		const EncryptionHelper = require('../../helpers/encryptionHelper');

		return queryInterface
			.bulkInsert('Users', [{
				name: 'Gustavo Fragoso',
				email: 'gustavo.fragoso@gmail.com',
				password: EncryptionHelper.getHash('123456'),
				active: true,
				createdAt: moment().format('YYYY-MM-DD'),
				updatedAt: moment().format('YYYY-MM-DD')
			}]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('User', null, {});
	}
};