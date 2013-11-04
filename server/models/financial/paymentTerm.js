var Status = require('./status');

/// A payment term (conditions of payment)
function PaymentTerm() {
    this.id = 0;
    
    // the human readable code for this payment term
    this.code = '';
    
    // the collection of language specific descriptors 
    this.descriptors = [];
    
    // a language specific text name of the payment term
    this.name = '';
    
    // the status of the payment term
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = PaymentTerm;