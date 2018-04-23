const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../chirps.json');

let chirpArray = [
    { userName: 'Justin', chipText: 'Hello'},
    { userName: 'David', chipText: 'Hey!'},
    { userName: 'James', chipText: 'Chirp!'},
    { userName: 'Cameron', chipText: 'Chirp!'},
    { userName: 'Devon', chipText: 'Chirp!'}
]

let data = JSON.stringify(chirpArray);

fs.writeFile(dataPath, data, (err) => {
    console.log(err);   
})

