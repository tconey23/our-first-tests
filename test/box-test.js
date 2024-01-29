const chai = require('chai');
const expect = chai.expect;
const {createBox, calculateArea} = require('../box');

describe('check if true function', function() {
    it('should always return true', () => {
        expect(true).to.equal(true);
    });
});
