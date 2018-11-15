var fs = require("fs")

// 同步方法
// var data =  fs.readFileSync('input.txt')

// console.log(data.toString())
// console.log('end!!!')

// 异步方法
fs.readFile('input.txt', function(err, data){
  if(err) 
    return console.log(err)
  console.log(data.toString())
})

console.log('finish.')