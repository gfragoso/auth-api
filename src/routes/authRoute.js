'use strict';

module.exports = app => {

	const Router = require('koa-router');
	const authRouter = new Router({ prefix: '/auth' });

	authRouter
		.get('/', app.middlewares.authMiddleware.verify)
		.post('/', app.middlewares.authMiddleware.authenticate);

	app.use(authRouter.routes());
	
};