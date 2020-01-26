'use strict';

const fs = require('fs');

const util = require('util');
let file = `${__dirname}/data/person.json`;

//  read file with fs 

let readFileData = util.promisify(fs.readFile);
readFileData(file)
    .then(data => {
        return JSON.parse(data)
    })
    .then(data => writeData(file, data))
    .catch(error => console.error('ERROR', error));

// write a new data into file 

const writeNewData = util.promisify(fs.writeFile);

const writeFile= (file, data) => {
    data.lastName = 'swalqah';
    data.hair.type = 'wavy';
    let newData = JSON.stringify(data);
    writeNewData(file, newData)
}
module.exports={readFileData,writeData} ;