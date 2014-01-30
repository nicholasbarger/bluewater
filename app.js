// setup express
var express = require('express');
var app = express();

// configure render
var jade = require('jade');
app.engine('.html', require('jade').__express);
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/client'));

// api routes
var itemService = require('./server/api/itemService.js');
//app.get('/api/items/:id', api.items.byId(id));
app.get('/api/items', function(req, res) {
    itemService.all(req, res);
});
app.post('/api/addItem', function(req, res) {
    itemService.addItem(req, res);
});
//app.get('/api/items/:searchTerms', api.items.search(searchTerms));
//app.post('/api/items/', api.items.save());

// web routes
app.get('/app', function(req, res) {
  res.render('app');
});
app.get('/', function(req, res) {
    res.render('web');
});
app.get('/web', function(req, res) {
    res.render('web'); 
});

app.listen(process.env.PORT);
console.log('Bluewater server is running on c9 with port: ' + process.env.PORT + ' and ip: ' + process.env.IP + '.');