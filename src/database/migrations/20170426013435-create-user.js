'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Users', {
			Id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			Name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			Email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true
				}
			},
			Password: {
				type: Sequelize.STRING,
				allowNull: false
			},
			Active: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			CreatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			UpdatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		}, {
			indexes: [{
				unique: true,
				fields: ['Email']
			}]
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('Users');
	}
};