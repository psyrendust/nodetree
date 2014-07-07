#!/usr/bin/env node
'use strict';

var _ = require('lodash');
var nodetree = require('./');
var nopt = require('nopt');
var pkg = require('./package.json');
var stdin = require('get-stdin');

var knownOpts = {
  'all': Boolean,
  'directories': Boolean,
  'help': Boolean,
  'level': Number,
  'noreport': Boolean,
  'version': Boolean
};
var shortHands = {
  'a': ['--all'],
  'd': ['--directories'],
  'h': ['--help'],
  'L': ['--level'],
  'v': ['--version']
};

var parsed = nopt(knownOpts, shortHands, process.argv, 2);
var basepath = parsed.argv.remain[0];
var options = _.extend({}, parsed);
options = _.extend(options, { cwd: process.cwd() });
delete options.argv;

function help() {
  console.log([
    'man nodetree'
  ].join('\n'));
}

function init(basepath, options) {
  if (!basepath) {
    // Default to cwd if no path is given.
    basepath = '.';
  }
  return nodetree(basepath, options);
}

if (options.help) {
  help();
  return;
}

if (options.version) {
  console.log(pkg.version);
  return;
}

if (process.stdin.isTTY) {
  init(basepath, options);
} else {
  // Accept basepath from stdin.
  // Example:
  //    $ echo $(pwd) | nodetree
  stdin(init);
}
