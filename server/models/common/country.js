var Status = require('./status');

/// A geographical country
function Country() {
    this.id = 0;
    
    // the two letter abbreviation for a country
    this.code2 = '';
    
    // the three letter abbreviation for a country
    this.code3 = '';
    
    // the status of the country
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = Country;