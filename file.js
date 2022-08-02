//FIlE SYSTEM Module
// can be done unsynchronously (non blocking )
// synchronously (blocking)

const fs = require('fs')
// read two file 
const first = fs.readFileSync('osModule.js','utf-8')
const second = fs.readFileSync('file.js','utf-8')

// console.log(`${first} ,${second}`)

//writing to a file

fs.writeFileSync("./writeFile.txt",`Here is the result${first} ${second}`)


//appending to a file make append object true
fs.writeFileSync("./writeFile.txt",
    `Here is the result${first} ${second}`
    ,{flag :'a'}

)


// Asynchronous
// func(path,encoding,callback)

fs.readFile('./osModule.js','utf-8',(error,result)=>{
    if(error)
    {
        console.log(error)
        return
    }
    // console.log(result)
    const first = result

    fs.readFile('./path.js','utf-8',(err,res)=>{
        if(err){
            console.log(err)
        }
        const second = res
    })

   fs.writeFile("./async.txt",`${first} ,${second}`,(err,res)=>{
        if(err){
            throw err
            return
        }
        else{
            console.log(res)
        }
        
   })
   // asynchronous functs always needs a call back
})




// differences btwn synchronous and asynchronous fs
