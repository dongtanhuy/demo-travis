var chai = require('chai')
var shoudl = chai.should()
var add = require('./index')
// Start testing add function
describe('ADD Function', function () {
  it('should return 3 when params = (1,2)', function () {
    add(1, 2).should.eql(4)
  })
})
