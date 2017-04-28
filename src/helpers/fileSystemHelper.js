'use strict';

const fs = require('fs-extra');
const Q = require('q');
const _ = require('lodash');
const path = require('path');
const moment = require('moment');

class FileSystemHelper {

	static exists(path, throwError) {
		const deferred = Q.defer();

		fs.exists(path, (exists) => {

			if (!exists && throwError)
				return deferred.reject(`file: ${path} not found.`);

			deferred.resolve(exists);
		});

		return deferred.promise;
	}

	static readFile(filePath, encoding) {
		const deferred = Q.defer();

		if (encoding === undefined) encoding = 'utf-8';

		fs.readFile(filePath, encoding, (err, content) => {
			if (err) return deferred.reject(err);

			deferred.resolve(content);
		});

		return deferred.promise;
	}

	static readJson(filePath) {
		const deferred = Q.defer();

		fs.readJson(filePath, 'utf-8', (err, content) => {

			if (err) return deferred.reject(err);

			deferred.resolve(content);
		});

		return deferred.promise;
	}

	static readJsonSync(filePath) {
		return fs.readJson(filePath, 'utf-8');
	}

	static writeJson(fileName, content) {
		const deferred = Q.defer();

		fs.writeJson(fileName, content, (err) => {
			if (err) return deferred.reject(err);

			deferred.resolve(content);
		});

		return deferred.promise;
	}

	static writeFile(fileName, content) {
		const deferred = Q.defer();

		fs.writeFile(fileName, content, (err) => {
			if (err) return deferred.reject(err);
			deferred.resolve(content);
		});

		return deferred.promise;
	}

	static rename(oldPath, newPath) {
		const deferred = Q.defer();

		fs.rename(oldPath, newPath, (err) => {
			if (err) return deferred.reject(err);

			deferred.resolve(newPath);
		});

		return deferred.promise;
	}

	static readdir(path) {
		const deferred = Q.defer();

		fs.readdir(path, (err, files) => {
			if (err) return deferred.reject(err);

			deferred.resolve(files);
		});

		return deferred.promise;
	}

	static move(src, dist) {
		const deferred = Q.defer();

		fs.move(src, dist, err => {
			if (err) return deferred.reject(err);

			deferred.resolve();
		});

		return deferred.promise;
	}

	static remove(path) {
		const deferred = Q.defer();

		fs.remove(path, (err) => {

			if (err) return deferred.reject(err);

			deferred.resolve(true);
		});

		return deferred.promise;
	}

	static copy(src, dist) {
		const deferred = Q.defer();

		fs.copy(src, dist, err => {
			if (err) return deferred.reject(err)

			deferred.resolve();
		});

		return deferred.promise;
	}

	static ensureDir(path) {
		const deferred = Q.defer();

		fs.ensureDir(path, err => {
			if (err) return deferred.reject(err);

			deferred.resolve();
		});

		return deferred.promise;
	}

	static ensureFileSync(path) {
		fs.ensureFileSync(path);
	}

	static ensureDirSync(path) {
		fs.ensureDirSync(path);
	}

	static removeSync(path) {
		return fs.removeSync(path);
	}

	static existsSync(path) {
		return fs.existsSync(path);
	}

	static readdirSync(dirPath, encoding) {
		return fs.readdirSync(dirPath, encoding);
	}

	static lstatSync(path) {
		return fs.lstatSync(path);
	}

	static isDirectorySync(path) {
		const stats = FileSystemHelper.lstatSync(path);
		return stats.isDirectory();
	}

	static readFileSync(filePath, encoding) {
		return fs.readFileSync(filePath, encoding);
	}
}

module.exports = FileSystemHelper;