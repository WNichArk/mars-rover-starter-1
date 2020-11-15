class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }

}

//commandTypes will be 'MODE_CHANGE', 'MOVE', or "STATUS_CHECK"
//values will be related to command ex. new Command('MOVE', 12000);
                                  //ex. new Command('MODE_CHANGE', 'LOW_POWER')
module.exports = Command;