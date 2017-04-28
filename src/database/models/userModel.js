'use strict';

module.exports = (sequelize, DataTypes) => {

	const User = sequelize.define('User', {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		active: DataTypes.BOOLEAN,
	}, {
		classMethods: {
			associate: models => {}
		}
	}, {
		id: "Id",
		name: "Name",
		email: "Email",
		password: "Password",
		active: "Active",
		createdAt: "CreatedAt",
		updatedAt: "UpdatedAt"
	});

	return User;
};