//Rover receives a message object, updates its properties from the message, and returns the results
let Messsage = require('./message.js');
let Command = require('./command.js')

class Rover{
  constructor(position){
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }
  receiveMessage(messageIn){
    let commArr = messageIn.commands;
    let resultsArr = [];
    for(let i = 0; i < messageIn.commands.length; i++){

      if(messageIn.commands[i].commandType == 'MOVE'){
        if(this.mode === "LOW_POWER"){
          resultsArr.push(
            {
              completed: false
            }
          )
        }else{
        this.position = messageIn.commands[i].value;
        resultsArr.push(
          {
            completed: true
          }
        )
      }
    }

      if(messageIn.commands[i].commandType == 'STATUS_CHECK'){
        let roverS = {
          completed: true,
           roverStatus: {
        mode: this.mode,
        generatorWatts: this.generatorWatts,
        position: this.position
          }
        }
        resultsArr.push(roverS);
      }

      if(messageIn.commands[i].commandType == 'MODE_CHANGE'){
        this.mode = messageIn.commands[i].value;
        resultsArr.push({
          completed: true
        })
      }
    }
    return {
      message: messageIn.name,
      results: resultsArr
    }
  }

}

module.exports = Rover;