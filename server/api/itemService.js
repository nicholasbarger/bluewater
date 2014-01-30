var Item = require('../models/inventory/item.js');


exports.addItem = function(req, res) {
    
    // map appropriate fields
  
    // save to db
    var item = new Item();
    item.save();
  
    // return result
};

exports.all = function(req, res) {
    var item = new Item();
    item.code = 'ABC';
    res.send(item);
};