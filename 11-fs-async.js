const{readFile, writeFile}  = require('fs')

readFile('./content/one.text','utf-8', (err,result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/one.text', 'utf-8', (err,result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/write-filesync.text',`Here is the result  ${first} ${second}`, (err,result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})


