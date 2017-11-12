class CommandExecutor {

    constructor(text,command){

        this.command = command;
        this.text = text;
    }
 
    executeCommand(){
       let pharams = this.command.split(' ');
       let cmd = pharams.shift();
       try {
           if(cmd === 'delete') { cmd = 'deleteIndex'}
           let actionResult =  require(`./${cmd}`)[cmd](this.text,pharams)
           return actionResult;
       }
     catch (Error){
          console.log('Error: invalid command');
     }
    }
}

module.exports =  CommandExecutor;