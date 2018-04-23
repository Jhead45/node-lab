const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

const dataPath = path.join(__dirname, 'downloads');

rp('https://reddit.com/r/popular.json')
    .then((res) => {
        let resParsed = JSON.parse(res);
        let articles = resParsed.data.children.map(item => {
            if (path.extname(item.data.url) === '.jpg' || path.extname(item.data.url) === '.png' || path.extname(item.data.url) === '.gifv'){
                fs.writeFile((`${dataPath}/${item.data.title}`), item.data.url, (err) => {
                  if (err)  console.log(err);   
               })
            }
        });                
        
       
    })
   .catch((err) => {
        console.log(err);
    });



