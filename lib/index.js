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
 * @returns {String} The parent folder's name
 */

function parentFolder() {
  var fullPath = arguments.length <= 0 || arguments[0] === undefined ? module.parent.filename : arguments[0];

  var pathObj = _path2['default'].parse(fullPath);

  // Passed in path is a folder so use the name
  // as the parent
  if (fullPath.slice(-1) === _path2['default'].sep) {
    return pathObj.name;
  }

  return pathObj.dir.split(_path2['default'].sep).slice(-1)[0];
}

module.exports = exports['default'];
