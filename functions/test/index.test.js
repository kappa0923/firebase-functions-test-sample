const test = require('firebase-functions-test')();
const chai = require('chai');
const expect = chai.expect;
var assert = chai.assert;

const targetFunctions = require('../index.js');
const wrappedFunction = test.wrap(targetFunctions.makeLowercase);

const snap = test.firestore.makeDocumentSnapshot({original: 'ABCDEFG'}, 'posts/hoge');

return assert.equal(wrappedFunction(snap), true);

// describe('オフラインテスト', () => {
//   it('makeLowercaseのテスト', () => {
//     expect(wrappedFunction(snap)).to.be.a(true);
//   });
// });
