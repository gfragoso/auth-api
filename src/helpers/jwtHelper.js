'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config/config');

class JWTHelper {

	static sign(user) {
		return jwt.sign(user, config.secretKey);
	}

	static verify(token) {
		return jwt.verify(token, config.secretKey);
	}

	static decode(token) {
		return jwt.decode(token);
	}
}

module.exports = JWTHelper;