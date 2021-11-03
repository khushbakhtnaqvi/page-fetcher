const request = require('request');
var fs = require('fs');
let args = process.argv;
let array = args.slice(2);
let website = array[0];
let path = array[1]; 
const fetch = function(website, path) {
  request(website, (error, response, body) => {
    fs.writeFile(path, body, function (err) {
      if (err) throw err;
      console.log(`Downloaded and saved ${body.length} to ${path}!`);
    });
  });
    
}
  fetch (website, path);

  