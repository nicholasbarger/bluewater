var Country = require('./country');
var Status = require('./status');

/// A geographical state
function State() {
    this.id = 0;
    
    // the 2 letter abbreviation for the state
    this.code2 = '';
    
    // the 3 letter abbreviation for the state
    this.code3 = '';
    
    // a country
    this.country = new Country();
    
    // the name of the state
    this.name = '';
    
    // the status of the state
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = State;