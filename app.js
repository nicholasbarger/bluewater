// setup express
var express = require('express');
var app = express();

// configure render

// api routes
app.get('/api/items/:id', api.items.byId(id));
app.get('/api/items/', api.items.all());
app.get('/api/items/:searchTerms', api.items.search(searchTerms));
app.post('/api/items/', api.items.save());

// web routes
app.get('/', function(req, res) {
    res.render('public/index');
});

app.listen(3000);
console.log('Ripples server is running on port 3000.');