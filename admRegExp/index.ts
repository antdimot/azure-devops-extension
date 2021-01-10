import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const inputValue: string | undefined = tl.getInput('value', true);
        const inputPattern: string | undefined = tl.getInput('pattern', true);
        const outVariableName: string | undefined = tl.getInput('output', true);
        
        console.log('Input value is ', inputValue);
        console.log('Input pattern is ', inputPattern);

        const regex = new RegExp( inputPattern! );
        const result = regex.exec( inputValue! );
        
        console.log('The result task is ' + result![0]);

        tl.setVariable(outVariableName!, result![0]);
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();