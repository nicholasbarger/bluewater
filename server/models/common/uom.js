var Status = require('./status');

/// A unit of measure
function UOM() {
    this.id = 0;
    
    // a human-readable reference code for the status
    this.code = '';
    
    // a language specific text name of the status
    this.name = '';
    
    // the collection of language specific descriptors 
    this.descriptors = [];
    
    // the status of the unit of measure
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = UOM;