#!/usr/bin/env node
'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');

var chevron = {
  'node': '├── ',
  'pipe': '│   ',
  'last': '└── ',
  'indent': '    '
};
var defaults = {
  all: false,
  directories: false,
  level: null,
  prune: false,
  noreport: false
};
var dotRegex = /^\.$/;
var hiddenRegex = /^\./;
var newlineRegex = /[\n\r]*/g;


// -----------------------------------------------------------------------------
/**
 * List contents of directories in a tree-like format.
 * @method  Nodetree
 */
function Nodetree(basepath, opts) {
  // Setup vars
  // ---------------------------------------------------------------------------
  var dirCount = 0;
  var fileCount = 0;
  var isWalking = 0;
  var options = _.extend(defaults, opts);
  var startpath = '';

  normalizeStartpath(basepath);


  // Start tree walking
  // ---------------------------------------------------------------------------
  if (fs.existsSync(startpath) && fs.statSync(startpath).isDirectory()) {
    console.log(basepath);
    walk(startpath, []);
  } else {
    console.log(basepath, '[error opening dir]');
  }


  // Helper functions
  // ---------------------------------------------------------------------------
  /**
   * Outputs results when nodetree has completed it's recursive walk.
   * @method  checkIfComplete
   */
  function checkIfComplete() {
    isWalking -= 1;
    if (isWalking <= 0) {
      printResults();
    }
  }


  /**
   * Log to stdout the current branch of the tree walk.
   * @method  log
   * @param   {String}   file                  The file or folder name of this branch.
   * @param   {Array}    depth                 The current depth relative to the startpath.
   * @param   {Boolean}  parentHasNextSibling  Does the parent folder have a next sibling.
   */
  function log(file, depth, parentHasNextSibling) {
    if (!parentHasNextSibling && depth.length > 1) {
      // Replace a pipe with an indent if the parent does not have a next sibling.
      depth[depth.length-2] = chevron.indent;
    }
    console.log(depth.join('') + file);
  }


  /**
   * Normalizes the basepath.
   * @method  normalizeStartpath
   */
  function normalizeStartpath() {
    startpath = basepath;
    if (typeof basepath !== 'string') {
      throw new TypeError('Expected a string');
    }
    if (!!startpath.match(dotRegex)) {
      // Set startpath to options.cwd if basepath is '.'
      startpath = options.cwd;
    }
    // Remove newline characters
    startpath = startpath.replace(newlineRegex, '');
  }


  /**
   * Print to stdout the results of the tree walk and the total directories and files found.
   * @method  printResults
   */
  function printResults() {
    var results = [];
    if (!options.noreport) {
      results.push('\n' + dirCount + ' directories');
      if (!options.directories) {
        results.push(', ' + fileCount + ' files');
      }
    }
    console.log(results.join(''));
  }


  // Walker functions
  // ---------------------------------------------------------------------------
  /**
   * Filter out the direct children of basepath based on the configured options.
   * @method  filterChildren
   * @param   {String}        basepath  The parent directory to filter.
   * @return  {Array}         An array of filtered file and folder names.
   */
  function filterChildren(basepath) {
    var children = fs.readdirSync(basepath);

    if (!options.all) {
      // Show hidden files
      children = children.filter(function optionAll(child) {
        return !child.match(hiddenRegex);
      });
    }

    if (options.directories) {
      // Only show directories
      children = children.filter(function optionDirectories(child) {
        return fs.statSync(path.join(basepath, child)).isDirectory();
      });
    }

    if (options.prune) {
      // Exclude empty directories
      children = children.filter(function optionPrune(child) {
        var childpath = path.join(basepath, child);
        if (fs.statSync(childpath).isDirectory()) {
          return (fs.readdirSync(childpath).length > 0);
        }
        return true;
      });
    }

    return children;
  }


  /**
   * Walk the basepath and log the results to stdout.
   * @method  walk
   * @param   {String}   basepath              The directory to walk.
   * @param   {Array}    depth                 An array of chevrons that represets the current depth of this branch.
   * @param   {Boolean}  parentHasNextSibling  Does the parent folder have a next sibling.
   */
  function walk(basepath, depth, parentHasNextSibling) {
    isWalking += 1;
    var children = filterChildren(basepath);
    var childrenLen = children.length-1;
    var shouldContinue = true;

    if (!!options.level && depth.length >= options.level) {
      // Only walk options.level deep.
      shouldContinue = false;
    }

    if (shouldContinue) {
      children.forEach(function walkChildren(child, index) {
        var newdepth = !!depth ? depth.slice(0) : [];
        var isLast = (index >= childrenLen);
        var childpath = path.join(basepath, child);
        var stats = fs.statSync(childpath);

        if (isLast) {
          newdepth.push(chevron.last);
        } else {
          newdepth.push(chevron.node);
        }

        log(child, newdepth, parentHasNextSibling);

        if (stats.isDirectory()) {
          dirCount += 1;
          if (!isLast) {
            newdepth.pop();
            newdepth.push(chevron.pipe);
          }
          walk(childpath, newdepth, !isLast);
        } else {
          fileCount += 1;
        }
      });
    }
    checkIfComplete();
  }
}

module.exports = Nodetree;
