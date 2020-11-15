//Test 7 - Constructor sets position and default values for mode and generatorWatts

let assert = require('assert');
let Rover = require('../rover.js')
let Message = require('../message.js')
let Command = require('../command.js')

//Test 7 - Constructor sets position and default values for mode and generatorWatts
describe("Rover class", function(){

  it("Constructor sets position and default values for mode and generatorWatts.", function(){
    let expected = new Rover(14000);
    expect(new Rover(14000)).toEqual(expected);
    assert.strictEqual(new Rover(15000).position, 15000);
    assert.strictEqual(new Rover(18000).generatorWatts, 110)
  })
})

//Test 8 
describe("Rover class", function(){

  it("response returned by receiveMessage contains name of message", function(){
    let commsArr = [new Command('MOVE', 15000), new Command('STATUS_CHECK')];
    let mess = new Message("MessageName", commsArr);
    assert.strictEqual(new Rover(15000).receiveMessage(mess).message, "MessageName")
    
  })
})

//Test 9 - "response returned by receiveMessage includes two results if two commands are sent in the message"
describe("Rover class", function(){

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let commsArr = [new Command('MOVE', 15000), new Command('STATUS_CHECK')];
    let mess = new Message("MessageName", commsArr);
    assert.strictEqual(new Rover(15000).receiveMessage(mess).results.length, 2)
    
  })
})

//Test 10 - "responds correctly to status check command"
describe("Rover class", function(){

  it("should respond correctly to STATUS_CHECK command", function(){
    let commsArr = [new Command('MOVE', 15000), new Command('STATUS_CHECK')];
    let mess = new Message("MessageName", commsArr);
    let expected = new Rover(15000);
    expect(new Rover(15000).receiveMessage(mess).results[1].roverStatus).toEqual({
      mode: expected.mode,
      generatorWatts: expected.generatorWatts,
      position: expected.position
    })
  })
})


//Test 11 - "responds correctly to mode change command"
describe("Rover class", function(){

  it("responds correctly to mode change command", function(){
    let commsArr = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let mess = new Message("MessageName", commsArr);
    let actual = new Rover(15000);
    actual.receiveMessage(mess);
    expect(actual.mode).toEqual("LOW_POWER")
})
})

//Test 12 - "responds with false completed value when attempting to move in LOW_POWER mode"
describe("Rover class", function(){

  it("responds with false completed value when attempting to move in LOW_POWER mode", function(){
    let commsArr = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 16000)];
    let mess = new Message("MessageName", commsArr);
    let rover = new Rover();
    let actualResult = rover.receiveMessage(mess);
    expect(actualResult.results[1].completed).toEqual(false);
  })
})

describe("Rover class", function(){

  it("responds with position for move command", function(){
    let commsArr = [new Command('MOVE', 16000)];
    let mess = new Message("MessageName", commsArr);
    let rover = new Rover();
    rover.receiveMessage(mess);
    assert.strictEqual(rover.position, 16000);
  })
})



