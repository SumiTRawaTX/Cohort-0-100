const fs = require('fs');

 function rawatReadFile(cb) {
   fs.readFile("a.txt", "utf-8", function(err, data) {
     cb(data);
   });
 }

//callback function to call the function
function onDone(data) {
  console.log(data);
}

rawatReadFile(onDone);