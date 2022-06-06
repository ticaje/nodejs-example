const express = require("express");
const { palindrome } = require("./palindrome");

let app = express();

app.get('/number/:no', (req, res) => {
    if (isNaN(req.params.no)){
        res.end("No number param is passed, please provide!!!");
    } else {
        treshhold = req.params.no;
        const result = palindrome(treshhold);
        res.end(JSON.stringify(result));            
    }
})

app.get('/', (req, res) => {
    res.end("Please provide number argument in the form /number/:value");
})

app.listen(3000);
