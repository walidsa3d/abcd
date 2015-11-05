var assert = require('chai').assert
var abc = require('../index.js')

describe('check digit', function () {
  it('check if integer', function (done) {
    assert.equal(abc.digits, '0123456789')
    done()
  })
})
