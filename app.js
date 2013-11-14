// setup express
var express = require('express');
var app = express();

// configure render
var jade = require('jade');
app.engine('.html', require('jade').__express);
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

// api routes
//app.get('/api/items/:id', api.items.byId(id));
//app.get('/api/items/', api.items.all());
//app.get('/api/items/:searchTerms', api.items.search(searchTerms));
//app.post('/api/items/', api.items.save());

// web routes
app.get('/', function(req, res) {
   res.render('app');
});
app.get('/web', function(req, res) {
    res.render('web');
});

app.listen(3001);
console.log('Bluewater server is running on port 3001.');