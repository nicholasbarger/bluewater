var Status = require('./status');

/// A monetary currency
function Currency() {
    this.id = 0;
    
    // the human readable identifier for this currency
    this.code = '';
    
    // the name of the currency
    this.name = '';
    
    // the collection of language specific descriptors
    this.descriptors = [];
    
    // the status of the currency
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = Currency;