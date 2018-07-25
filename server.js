
// dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// parse various different custom JSON  types as JSON
app.use(bodyParser.json({ type: 'application/*+json'}))

// parse some custom thing into a buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

// parse an HTMl body into a string
app.use(bodyParser.text({type: 'text/html'}))


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);





app.listen(PORT,function (){
    console.log('listening on port:' + PORT);
})