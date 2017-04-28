'use strict';

const jwtHelper = require('../helpers/jwtHelper');
const UserService = require('../services/userService');

module.exports = {

	authenticate: async(ctx, next) => {
		const userService = new UserService();

		const user = await userService
			.login(ctx.request.body.email, ctx.request.body.password);

		const token = jwtHelper.sign(user);

		ctx.body = { token, success: true };
	},

	verify: async(ctx, next) => {
		try {		
				
			const token = ctx.req.headers['authorization'];
			const userDecoded = jwtHelper.verify(token);

			ctx.status = 200;
		} catch (err) {
			throw { status: 401, message: 'Failed to authenticate token.' };
		}
	}

};