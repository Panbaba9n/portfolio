'use strict';

const path = require('path');
const _ = require('lodash');

var localConfig;

try {
  localConfig = require('../local.env');
} catch (e) {
  localConfig = {};
}

//special test env
if (process.env.NODE_ENV === 'test') {
  localConfig = {};
}

// All configurations will extend these options
// ============================================
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

var all = {
  env: process.env.NODE_ENV,
  // Root path of server
  root: path.normalize(__dirname + '/../..'),

  // Server port
  PORT: process.env.PORT || 9000,
  url: process.env.SERVER_URL,
  testVar: process.env.TEST_VAR
};

const resultConfig = _.merge(
  all,
  localConfig);

module.exports = resultConfig;
