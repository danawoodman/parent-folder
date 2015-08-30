# parent-folder

[![Travis CI build status](https://img.shields.io/travis/danawoodman/parent-folder.svg)](https://travis-ci.org/danawoodman/parent-folder)
[![Dependency Status](https://img.shields.io/david/danawoodman/parent-folder.svg)](https://david-dm.org/danawoodman/parent-folder)
[![View on npm](https://img.shields.io/npm/dm/parent-folder.svg)](https://www.npmjs.com/package/parent-folder)
[![View on npm](https://img.shields.io/npm/v/parent-folder.svg)](https://www.npmjs.com/package/parent-folder)

> Get the name of the parent folder.

For the given path return the name of the most immediate parent folder. Useful for scripts and generators where you want to use the parent folder name in some way (project naming, etc).


## Install

```
npm install --save parent-folder
```


## Usage

```js
var parentFolder = require('parent-folder');

// Assuming we're currently in:  /foo/bar/index.js

// Defaults to current folder of call:
parentFolder()
//=> 'bar'

// Passing in a path to a folder:
parentFolder('/some/path/here')
//=>  'here'

// If using in a path to a file, make sure to
// pass in `true` flag as the second parameter.
parentFolder('/path/to/project/file.js', true)
//=> 'project'
```


## API

See [the API docs](api.md) for full documentation.


## Contributing

Pull requests welcome! 

Please use the `.editorconfig`, `.eslintrc` configurations in your editor to ensure proper formatting.

Run the test suite with `npm test` and linting with `npm run lint`, make sure tests are passing and that you write tests for new features.


## License

[MIT](license) &copy; [Dana Woodman][author]


[author]: https://github.com/danawoodman
