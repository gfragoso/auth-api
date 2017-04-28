'use strict';

const _ = require('lodash');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../database.json')[env];
const FileSystemHelper = require('../../helpers/fileSystemHelper');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = _
  .chain(FileSystemHelper.readdirSync(__dirname))
  .filter(file => !file.startsWith(basename))
  .map(file => new Object({ model: sequelize.import(path.join(__dirname, file)) }))
  .keyBy('model.name')
  .mapValues('model')
  .value();

_.each(_.keys(db), modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;