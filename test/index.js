var assert = require('chai').assert
var abcd = require('../index.js')

describe('some checks', function () {
  it('check equality', function (done) {
    assert.equal(abcd.digits, '0123456789')
    assert.equal(abcd.lowercase, 'abcdefghijklmnopqrstuvwxyz')
    done()
  })
})
