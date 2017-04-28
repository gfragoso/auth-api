'use strict';

module.exports = app => {

	const Router = require('koa-router');
	const userRouter = new Router({ prefix: '/users' });

	userRouter
		.get('/', app.middlewares.userMiddleware.findAll)
		.get('/:id', app.middlewares.userMiddleware.findById);		

	app.use(userRouter.routes());

};