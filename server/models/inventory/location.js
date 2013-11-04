var Status = require('../common/status');
var Warehouse = require('../common/warehouse');

/// The location in a warehouse (or any container) of items.
function Location() {
    this.id = 0;
    
    // a human readable code associated with the inventory location
    this.code = '';
    
    // a description of this location
    this.description = '';
    
    // a collection of descriptions in various languages
    this.descriptors = [];
    
    // the status the item is currently in (new, backordered, available, etc.)
    this.status = new Status();
    
    // a warehouse that holds this location
    this.warehouse = new Warehouse();
    
    this.created = null;
    this.modified = null;
}

module.exports = Location;