var Status = require('../common/status');

/// A routing step 
function RoutingStep() {
    this.id = 0;
    
    // available alternate operations
    this.alternateOperations = [];
    
    // a human-readable code for the routing step
    this.code = '';
    
    // the operation number
    this.operation = 0;
    
    this.created = null;
    this.modified = null;
}

module.exports = RoutingStep;