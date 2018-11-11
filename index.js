var fs = require('fs');
var colors = require('colors');

fs.readdir('./tekst.txt', 'utf-8', function(err, data) {
    console.log(data);
    fs.writeFile('./tek.txt', '\nZapis!', function(err) {
        if (err) throw err;
    });
});