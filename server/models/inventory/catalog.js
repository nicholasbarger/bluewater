var Status = require('../common/status');

/// An item catalog
function Catalog() {
    this.id = 0;
    
    // a human readable identifier for the catalog
    this.code = '';
    
    // the name of the catalog in various languages
    this.descriptors = [];
    
    // the end date/time for the catalog to be in effect
    this.effectiveEnd = null;
    
    // the start date/time for the catalog to be in effect
    this.effectiveStart = null;
    
    // a collection of items included in the catalog
    this.items = [];

    // the name of the catalog
    this.name = '';
    
    // the status of the catalog
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = Catalog;