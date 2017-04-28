'use strict';

const UserService = require('../services/userService');

module.exports = {
	findAll: async(ctx, next) => {
		const userService = new UserService();
		ctx.body = await userService.findAll();
	},

	findById: async(ctx, next) => {
		const userService = new UserService();
		ctx.body = await userService.findById(ctx.params.id);
	}
};