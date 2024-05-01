// Practice

const express = require('express');
const app = express();


// this is not a exact method to store a user data we database , insteed of it but we not learn mongodb so that it is what it is
var users = [{
    name: 'john', 
    kidneys: [{
        healths: false
    }]
}]

app.get('/', function(req, res) {
    const johnKidneys = users[0].kidneys;
    // console.log(JohnKidneys);
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});
// code run hoga port 3000 per - localhost:3000
app.listen(3000);
