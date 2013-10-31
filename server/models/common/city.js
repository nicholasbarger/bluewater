var Country = require('./country');
var Status = require('./status');

/// A geographical city
function City() {
    this.id = 0;
    
    // a country
    this.country = new Country();
    
    // the name of the city
    this.name = '';
    
    // a geographical state
    this.state = null;
    
    // the status of the city
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = City;