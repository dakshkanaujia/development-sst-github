const fs = require('fs');

// Asynchronous read
const data = fs.readFileSync('file.txt', 'utf8');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:');
//         return;
//     }
//     // console.log('File content: is as follows', data);
// });

// console.log('Asynchronous read: ' + data);

// fs.appendFile('file.txt', 'Hello content!', (err) => {
//     if (err) {
//         console.error('Error writing to file:');
//         return;
//     }
    // console.log('File write successful');
// }
// );

// append file function
// fs.appendFileSync('file.txt', "class is going on");

// Make Directory Function
// fs.mkdir('dir1', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log("Succesfull")
// })

// Remove Directory Function
// fs.rmdir('dir1', (err) => {
//     console.log("Successfully Removed")
// })

// Rename Function
// fs.rename('file1.txt', 'file.txt', (err) => {
//     console.log("Successfully renamed");
// });

const path = require("path");

const p = "/home/daksh/Desktop/SST-ALL/Trimester-4/Development/Development-SST-Github/sst-backend/filereader.js";
const dir = "/home/daksh/Desktop/SST-ALL/Trimester-4/Development/Development-SST-Github/sst-backend/dir1";

const dirname = path.dirname(p);
const moveDirname = path.dirname(dir);
const extension = path.extname(p);

console.log([dirname, extension]);

try {
    fs.copyFileSync(dirname, moveDirname);
    console.log("Successfully copied");
} catch (err) {
    console.log(err);
}
