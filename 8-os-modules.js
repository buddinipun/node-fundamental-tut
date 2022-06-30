const os = require('os')
const user = os.userInfo

console.log(user)



// get the system uptime

console.log(`System uptime is : ${os.uptime} seconds`)

const currentOs = {

    name: os.type(),
    release: os.release(),
    totalMemory:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs)