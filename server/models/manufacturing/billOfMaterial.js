var Status = require('../common/status');

/// A bill of material for creating an item
function BillOfMaterial() {
    this.id = 0;
    
    // a human readable identifier for the bill of material
    this.code = '';
    
    // a collection of items that are components to make the items
    this.components = [];
    
    // the status of the catalog
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = BillOfMaterial;