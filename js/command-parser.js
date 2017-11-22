function processCommands(commands) {
    
        if(commands.length === 0){
            throw new Error('Error: invalid command parameters')
        }
    
        let initialText = commands.shift();
        print(initialText);
    
        for (let cmd of commands) {
            let CommandExecutor = require('./command-executor');
            let executor = new CommandExecutor(initialText,cmd)
            if(executor.executeCommand() !== undefined){
                initialText = executor.executeCommand();
                print(initialText)
            }
        }
    
        function print(message) {
            console.log(message)
        }
    }
    
    processCommands(['alpha', 'append beta', 'append testDeleteCommand', 'prepend 00', 'delete 3'])
    
    