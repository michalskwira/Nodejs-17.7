var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, data) {
    console.log(data);
    fs.writeFile('./tek.txt', data, function(err) {
        if (err) throw err;
    });
});