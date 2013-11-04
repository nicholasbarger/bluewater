var Status = require('../common/status');

/// A routing describing the steps to take when building an item
function Routing() {
    this.id = 0;
    
    // a human readable identifier for the bill of material
    this.code = '';
    
    // a priority in comparison with similar routings for this item
    this.priority = 1;
    
    // the steps on the router
    this.steps = [];
    
    // the status of the catalog
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = Routing;