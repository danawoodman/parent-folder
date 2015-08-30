'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = parentFolder;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

/**
 * Get the name of the parent folder. If given a directory
 * as a path, return the last directory. If given a path
 * with a file, return the parent of that file. Default
 * to the parent folder of the call path.
 *
 * @module parentFolder
 * @param {String} [fullPath=module.parent.filename] The full path to find the parent folder from
 * @param {Boolean} [isFile=false] Flag to indicate passed in path is to a file not a folder
 * @returns {String} The parent folder's name
 */

function parentFolder(fullPath) {
  var isFile = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  // If no path passed in, use the file path of the
  // caller.
  if (!fullPath) {
    fullPath = module.parent.filename;
    isFile = true;
  }

  var pathObj = _path2['default'].parse(fullPath);

  if (isFile) {
    return pathObj.dir.split(_path2['default'].sep).slice(-1)[0];
  }

  return pathObj.name;
}

module.exports = exports['default'];
