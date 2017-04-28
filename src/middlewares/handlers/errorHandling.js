'use strict';

module.exports = () => {
	return async(ctx, next) => {
		try {
			await next();
		} catch (err) {
			
			console.error(err);

			ctx.status = err.status || 500;
			ctx.body = {
				success: false,
				err: err.message
			};
		}
	};
};