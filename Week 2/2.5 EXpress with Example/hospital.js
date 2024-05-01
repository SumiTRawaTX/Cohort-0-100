// creating an in memory array
const express = require('express');
const app = express();


// patient details-
var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

// user can check how many kidney they have and their health

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

// // app.post is used to add a new kidney
app.post('/', function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    
    res.json({
        msg: "done!"
    });
});


// // user can replace a kidney, make it healthy
app.put('/', function(req, res) {
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
});


// user can remove a kidneys
app.delete('/', function(req, res) {
    if(isThereAtLeastOneUnhealthyKidneys()) {
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                });
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"});
    }
    else {
        res.status(411).json({
            msg: "bhaiya kidneys kha hai"
        });
    }

});

// only if atleast one unhealthy kidney is there so do this
function isThereAtLeastOneUnhealthyKidneys() {
    let atLeastOneUnhealthyKidneys = false;
    for(let i=0; i<users[0].kidneys.kidneys.lengthp; i++) {
        if(!users[0].kidneys[i].healthy) {
            atLeastOneUnhealthyKidneys = true;
        }
    }
    return atLeastOneUnhealthyKidneys;
}


app.listen(3000);
  