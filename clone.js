let exec = require('child_process').exec;
const execSync = require('child_process').execSync; //同步子进程

let url = process.argv[2];

function cloneCode(){
    exec(`git clone ${url}`, function(err, stdout, stderr){
        if(err){
            console.log(err);
            cloneCode();
        }
        console.log(stdout, stderr)
    })
}

cloneCode();
