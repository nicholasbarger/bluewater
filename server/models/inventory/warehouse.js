var Address = require('../common/address');
var Company = require('../common/company');
var Status = require('../common/status');

/// A warehouse (physical location) to store inventory
function Warehouse() {
    this.id = 0;
    
    // the geographical address to the warehouse
    this.address = new Address();
    
    // the owner (company) of the warehouse
    this.owner = new Company();
    
    // the status the item is currently in (new, backordered, available, etc.)
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = Location;