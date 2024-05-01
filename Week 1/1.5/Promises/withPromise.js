const fs = require('fs');

function rawatReadFile () {
    return new Promise(function(resolve) {
      fs.readFile("a.txt", "utf-8", function(err, data) {
        resolve(data);
      })
    })
  }
  
  //callback function to call
  function onDone(data) {
    console.log(data)
  }
  
  rawatReadFile().then(onDone);