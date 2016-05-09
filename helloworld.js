// console.log('Hello World')

// for(var i=0; i < 10; i++) {
//     console.log(i)
// }

var fs = require('fs') // Requires the fs module and stores in a varible

// console.log(fs)

// console.log(fs.readFileSync('./notes.txt', {encoding : 'utf-8'}))

// console.log(process.argv)

// var fileToRead = process.argv[2]

// var file = fs.readFileSync(fileToRead, {encoding : 'utf-8'})
// console.log(file)

var string = process.argv[2]

function reverse(s) {
  return s.split('').reverse().join('');
}

console.log(reverse(string))


