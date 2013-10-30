var Company = require('./company');

/// The relationship between two companies
function City() {
    this.id = 0;
    
    // the type of relationship
    this.relationshipType = new CompanyRelationshipType();
    
    // source company
    this.sourceCompany = new Company();
    
    // target company
    this.targetCompany = new Company();
    
    this.created = null;
    this.modified = null;
}

module.exports = UOM;