class CommandExecutor {

    constructor(text,command){

        this.command = command;
        this.text = text;
    }
 
    executeCommand(){
       let params = this.command.split(' ');
       let cmd = params.shift();
       try {
            if(cmd === 'delete') { cmd = 'deleteIndex'}
           let actionResult =  require(`./${cmd}`)[cmd](this.text,params)
           return actionResult;
       }
     catch (Error){
          console.log('Error: invalid command');
     }
    }
}

module.exports =  CommandExecutor;