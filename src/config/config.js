'use strict';

const _ = require('lodash');
const database = require('../database/database.json');

const config = {
	default: {
		secretKey: "gustavo-dias-fragoso",
		blobUrl: "https://blobpoint.blob.core.windows.net/"
	},
	production: {
		database: database.production
	},
	development: {
		database: database.development
	}
};

let _config = null;

const current = {

	get config() {

		if (_config == null) {
			_config = _.assign({},
				config[process.env.NODE_ENV || 'development'], config.default);
		}

		return _config;
	}
}

module.exports = current.config;
