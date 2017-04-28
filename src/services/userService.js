'use strict';

const JWTHelper = require('../helpers/jwtHelper.js');
const EncryptionHelper = require('../helpers/encryptionHelper');
const UserRepository = require('../repositories/userRepository');

class UserService {

	constructor() {
		this.userRepository = new UserRepository();
	}

	async findAll() {
		var users = await this.userRepository.findAll();
		return users;
	}

	async findById(id) {
		return await this.userRepository.findById(id);
	}

	async login(email, password) {

		const user = await this.userRepository.findOneByEmail(email);

		if (!EncryptionHelper.validateHash(password, user.password))
			throw { status: 401, message: 'Usuário ou senha incorretos.' };

		return user;		
	}
}

module.exports = UserService;