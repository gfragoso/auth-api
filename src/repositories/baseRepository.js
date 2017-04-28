'use strict';

class BaseRepository {

	constructor(modelName) {
		this.modelName = modelName;
		this.dbContext = require('../database/models');
	}

	async findAll() {
		return await this.dbContext[this.modelName].findAll();
	}

	async findById(id) {
		return await this.dbContext[this.modelName].findById(id);
	}

	async findOne(options) {
		return await this.dbContext[this.modelName].findOne(options);
	}
}

module.exports = BaseRepository;