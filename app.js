// set up NodeJS Express server
var express = require('express');
var mongoose = require('mongoose');
var url = require('url');

var app = express();
var port = process.env.PORT || 9000;

var mock = require('./mockdata.js');
mock = mock.sort(function(a, b){
  return a['name'] - b['name'];
});
// console.log(mock);

var rangeHandler = function(req, res, params){
  
};

var types = {
  population: rangeHandler,
  area:rangeHandler,
  density:rangeHandler,
  name:rangeHandler
};

app.use(express.static(__dirname + '/client'));

app.get('/canton', function(req, res){
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log(query);

  var searchType = query['type'];

  if(!searchType || !types[searchType]){
    res.send(mock);    
  } else if (searchType === 'name'){
    if(query['name'] === 'ALL') {
      res.send(mock);
    } else {
      var name_filtered = mock.filter(function(el) {
        return el.name === query['name'];
      });
      res.send(name_filtered);
    }
  } else {
      var min = query.min || 0 ;
      var max = query.max || Infinity;
      var numFiltered = mock.filter(function(el){
        return (el[searchType] > min && el[searchType] < max);
      });
      res.send(numFiltered);
  }
});



app.listen(port);
console.log('Live on port 9000');

