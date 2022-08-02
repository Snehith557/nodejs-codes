// OS Modules
const os = require('os')


// info abt the curnt usr

const user =os.userInfo()
console.log(user)

// method returns the uptime in secs
console.log(`The System uptime is ${os.uptime()} in seconds`)
console.log(os.networkInterfaces());


const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)