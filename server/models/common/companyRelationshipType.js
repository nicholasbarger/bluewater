/// A type of company relationship such as vendor, customer, consultant, etc.
function City() {
    this.id = 0;
    
    // a language specific text name of the relationship
    this.name = '';
    
    // the collection of language specific descriptors for the name of the relationship
    this.nameDescriptors = [];
    
    this.created = null;
    this.modified = null;
}

module.exports = UOM;