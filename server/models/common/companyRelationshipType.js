/// A type of company relationship such as vendor, customer, consultant, etc.
function CompanyRelationshipType() {
    this.id = 0;
    
    // a human readable identifier for the relationship
    this.code = '';
    
    // a language specific text name of the relationship
    this.name = '';
    
    // the collection of language specific descriptors
    this.descriptors = [];
    
    this.created = null;
    this.modified = null;
}

module.exports = CompanyRelationshipType;