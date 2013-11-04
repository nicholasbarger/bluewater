/// A type of company relationship such as vendor, customer, consultant, etc.
function CompanyRelationshipType() {
    this.id = 0;
    
    // a human readable identifier for the relationship
    this.code = '';
    
    // the collection of language specific descriptors
    this.descriptors = [];
    
    // a language specific text name of the relationship
    this.name = '';
    
    this.created = null;
    this.modified = null;
}

module.exports = CompanyRelationshipType;