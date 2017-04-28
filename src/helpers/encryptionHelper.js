'use strict';

const bcrypt = require('bcryptjs');

class EncryptionHelper {

	static getHash(text) {
		const salt = bcrypt.genSaltSync(8);
		return bcrypt.hashSync(text, salt);
	}

	static validateHash(text, hash) {
		return bcrypt.compareSync(text, hash);
	}
}

module.exports = EncryptionHelper;