const fs = require('fs');

// Asynchronous read
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:');
        return;
    }
    console.log('File content:', data);
});