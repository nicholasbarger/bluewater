var City = require('./city');
var Country = require('./country');
var State = require('./state');
var Status = require('./status');

/// Any address stored in the system
function Address() {
    this.id = 0;
    
    // the city (referred as a typed list)
    this.city = new City();
    
    // the country
    this.country = new Country();
    
    // specifies whether this address can be used for billing
    this.isBilling = false;
    
    // specifies whether this address can be used for shipping
    this.isShipping = false;
    
    // postal or zip code
    this.postalCode = '';
    
    // province, if state is not applicable
    this.province = '';
    
    // the state (us and canadian only)
    this.state = new State();
    
    // the current status of the address
    this.status = new Status();
    
    // street line 1
    this.street1 = '';
    
    // street line 2
    this.street2 = '';
    
    this.created = null;
    this.modified = null;
}

module.exports = Address;