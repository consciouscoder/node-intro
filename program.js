// PROBLEM 1

// console.log('HELLO WORLD')

// PROBLEM 2

// var args = process.argv
// var argValue = 0
// var total = 0

// for (var i=2; i < args.length; i++) {
//     argValue = parseInt(args[i])
//     // console.log(argValue)
//     total += argValue
// }
// console.log(total)

// PROBLEM 3

// var fileName = process.argv[2]
// var fs = require('fs')

// var file = fs.readFileSync(fileName)

// console.log(file.toString().split('\n').length - 1)

// PROBLEM 4

var fileName = process.argv[2]
var fs = require('fs')

var file = fs.readFile(fileName)

// Asyncronous - requires callback function
fs.readFile(process.argv[2], function (err, data) {
    if(err) {
        throw err
    }
    console.log(data.toString().split('\n').length - 1)
})