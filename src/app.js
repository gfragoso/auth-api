'use strict';

const Koa = require('koa');
const path = require('path');
const cors = require('kcors');
const consign = require('consign');
const logger = require('koa-logger');
const helmet = require('koa-helmet');
const compress = require('koa-compress');
const cwd = path.join(process.cwd(), 'src');
const bodyParser = require('koa-bodyparser');
const errorHandling = require('./middlewares/handlers/errorHandling');

const app = new Koa();

app.use(cors());
app.use(helmet());
app.use(logger());
app.use(compress());
app.use(bodyParser());
app.use(errorHandling());

consign({ cwd })
	.include('middlewares')
	.then('routes')
	.into(app);

module.exports = app;