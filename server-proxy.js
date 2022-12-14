const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({
    limit: '20mb', type: 'application/json'
}));
app.use(bodyParser.urlencoded({
    parameterLimit: 10000,
    limit: '20mb',
    extended: true
}));
app.use(express.static(path.join(__dirname, "build")));
app.get('/api/getdata', function (req, res) {
    res.json({"hi":"hello"});
    res.end();
});
app.get('/*', function(req, res) {
    res.header("Content-Type",'*/*');
    res.header("Access-Control-Allow-Origin", "*");
     res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
       if (err) {
         res.status(500).send(err)
       }
     })
   });
app.listen(3004, async () => {
    console.log('listening on port 3004');
});