const assert = require('assert');
const Command = require('../command.js');


//Test 1 - "throws error if command type is NOT passed into constructor as the first parameter"
describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: 'Command type required.'
      }
    );
  });
});

//Test 2 - "constructor sets command type"

describe("Command class", function(){

  it("constructor sets command type", function(){
    assert.strictEqual(new Command('MOVE').commandType, 'MOVE');
  });
});

//Test 3 - constructor sets value

describe("Command class", function(){

  it("constructor sets a value passed in as 2nd argument", function(){
    assert.strictEqual(new Command('MOVE', 12000).value, 12000);
  });
});


