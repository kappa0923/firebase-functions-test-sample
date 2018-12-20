const test = require('firebase-functions-test')();
const chai = require('chai');
const sinon = require('sinon');

const assert = chai.assert;

const targetFunctions = require('../index.js');
const wrappedFunction = test.wrap(targetFunctions.makeLowercase);

const setParam = { converted: 'abcdefg' };
const setStub = sinon.stub();

const snap = {
  data: function () {
    return { original: 'ABCDEFG' }
  },
  ref: {
    update: setStub
  }
};

setStub.withArgs(setParam).returns(true);

describe('オフラインテスト', () => {
  it('makeLowercaseのテスト', () => {
    assert.equal(wrappedFunction(snap), true);
  });
});
