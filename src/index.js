import path from 'path'

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
export default function parentFolder(fullPath, isFile = false) {
  // If no path passed in, use the file path of the
  // caller.
  if (!fullPath) {
    fullPath = module.parent.filename
    isFile = true
  }

  const pathObj = path.parse(fullPath)

  if (isFile) {
    return pathObj.dir.split(path.sep).slice(-1)[0]
  }

  return pathObj.name
}
