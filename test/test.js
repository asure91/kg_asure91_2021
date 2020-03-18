var expect = require('chai').expect;
var checkForOneToOneMapping = require('../checkForOneToOneMapping');

describe('checkForOneToOneMapping()', function () {
  it('should return false for unequal string lengths', function () {

    let left = "foo";
    let right = "baar";
    expect(checkForOneToOneMapping(left, right)).to.be.equal(false);
  });

  it('should return true for mapping left string uniquely to the right string', function () {
    let left = "bar";
    let right = "foo";
    expect(checkForOneToOneMapping(left, right)).to.be.equal(true);
  });

  it('should return false when character on left maps to mutliple char on right', function () {
    let left = "foo";
    let right = "bar";
    expect(checkForOneToOneMapping(left, right)).to.be.equal(false);
  });

  it('should return true when left is " "(string with single space) and maps to right with single character', function () {
    let left = " ";
    let right = "a";
    expect(checkForOneToOneMapping(left, right)).to.be.equal(true);
  });

  it('should return false when left is a long string with repeated character', function () {
    let left = "abcd efg hi";
    let right = "abcdefghijk";
    expect(checkForOneToOneMapping(left, right)).to.be.equal(false);
  });

  it('should return true when left is equal to right', function () {
    let left = "abcdefghijk";
    let right = "abcdefghijk";
    expect(checkForOneToOneMapping(left, right)).to.be.equal(true);
  });

  it('should return true when a character in string 1 has been mapped to the same character in string 2',function(){
    let left = "foo";
    let right ="baa";
    expect(checkForOneToOneMapping(left,right)).to.be.equal(true); 
  });
});