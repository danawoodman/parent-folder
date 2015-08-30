/* eslint no-unused-expressions:0 */

import parentFolder from '../src'

describe('parentFolder', () => {
  it('should default to current directory of call', () => {
    expect(parentFolder()).to.eql('test')
  })

  it('should return parent folder of file', () => {
    expect(parentFolder('/some/path/to/index.html')).to.eql('to')
  })

  it('should return last folder if passed a list of directories', () => {
    expect(parentFolder('/foo/bar/baz/')).to.eql('baz')
  })
})
