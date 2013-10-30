var Status = require('./status');

/// A company that participates in some phase of business
function Company() {
    this.id = 0;
    
    // a collection of addresses associated with this company
    this.addresses = [];
    
    // specifies whether this company is a distributor
    this.isDistributor = false;
    
    // specifies whether this company is a manufacturer
    this.isManufacturer = false;
    
    // specifies whether this company is a vendor
    this.isVendor = false;
    
    // the name of the company
    this.name = '';
    
    // a collection of people associated with this company
    this.people = [];
    
    // a collection of relationships to other companies
    this.relationships = [];
    
    // the status of the company
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = Company;