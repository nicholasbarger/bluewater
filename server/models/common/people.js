/// A person within the system
function Person() {
    this.id = 0;
    
    // a collection of addresses associated to this person
    this.addresses = [];

    // the first name of the person
    this.firstName = '';
    
    // specifies whether this person is a customer
    this.isCustomer = false;
    
    // specifies whether this person is an employee
    this.isEmployee = false;
    
    // specifies whether this person is a prospect
    this.isProspect = false;
    
    // specifies whether this person is a sales rep
    this.isSalesRep = false;
    
    // the last name of the person
    this.lastName = '';
    
    // the middle name of the person
    this.middleName = '';
    
    this.created = null;
    this.modified = null;
}

module.exports = People;