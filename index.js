const express = require('express')
const app = express()
const routes = require('./routes');
const config = require('./configs')
const bodyParser = require('body-parser')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use('/', routes) 


app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))