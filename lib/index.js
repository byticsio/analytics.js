'use strict';
/**
 * Analytics.js
 *
 * (C) 2015 Segment.io Inc.
 */

var analytics = require('@segment/analytics.js-core');
var Integrations = require('./integrations');

/**
 * Expose `VERSION`.
 */

exports.VERSION = require('../package.json').version;

/**
 * Expose the `analytics` singleton.
 */

module.exports = exports = analytics;

/**
 * Add integrations.
 */

Object.keys(Integrations).forEach(function(name) {
  analytics.use(Integrations[name]);
});

require('./snippet');
