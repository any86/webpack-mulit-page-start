const port = 8080;
var path = require('path')
var express = require('express')
var app = express()
app.use('/mock', express.static(__dirname + '/mock'));

module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }

})
