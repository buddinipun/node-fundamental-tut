const{readFileSync, writeFileSync}  = require('fs')

const first = readFileSync('./content/one.text','utf-8')
const second = readFileSync('./content/two.text','utf-8')

console.log(first,second)

writeFileSync('./content/write-filesync.text',`Here is the content of the writefile as ${first} ${second}`)