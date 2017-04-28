'use strict';

const BaseRepository = require('./baseRepository');

class UserRepository extends BaseRepository {
	constructor() { super("User"); }

	async findOneByEmail(email) {
		let user = null;

		const data = await super.findOne({ where: { email } });

		if (data && data.dataValues)
			user = data.dataValues;

		return user;
	}
}

module.exports = UserRepository;