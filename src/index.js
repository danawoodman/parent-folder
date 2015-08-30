import path from 'path'

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
export default function parentFolder(fullPath = module.parent.filename) {
  const pathObj = path.parse(fullPath)

  // Passed in path is a folder so use the name
  // as the parent
  if (fullPath.slice(-1) === path.sep) {
    return pathObj.name
  }

  return pathObj.dir.split(path.sep).slice(-1)[0]
}
