lets create an memory hospital

you need to create a 4 routes(4 this can hospital can do) 

get - user can check how many kidney they have and their health.
post - user can add new kidney
put - user can replace a new kidney, make it healthy
delete- user can remove a kidney



// creating an in memory array

const express = require('express');
const app = express();


const port = 3000;

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}];


app.get('/', function(req, res) {
    // code logic
});

app.post('/', function(req, res) {
    // code sone logic
});

app.put('/', function(req, res) {
    // code some logic
});

app.delete('/', function(res, req) {
    // code some logic
});

app.listen(port);