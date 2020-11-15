const assert = require('assert');
const Message = require('../message.js')
const Command = require('../command.js')

//Test 4 - throws error if object created without name in constructor
describe("Message class", function(){

  it("throws an error if a name is not passed into the constructor", function(){
    assert.throws(function(){
      new Message()
    }, {
      message: "Name required."
    }
    )
  })
})

//Test 5 - confirms that constructor sets name
describe("Message class", function(){

  it("confirms that NAME is set via constructor", function(){
    assert.strictEqual(new Message('MessageName').name, "MessageName")
  })
})

//Test 6 - Contains a commands array passed into the construct as 2nd argument
describe("Message class", function(){
  
  it("should accept name and commands array", function(){
    let comms = [new Command("MOVE", 12000), new Command("MOVE", 15000)];
    assert.strictEqual(new Message("MessageName", comms).commands, comms)
  })
});

//Test 7 - 