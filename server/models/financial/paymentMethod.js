var Status = require('./status');

/// A payment method (way to pay)
function PaymentMethod() {
    this.id = 0;
    
    // the human readable code for this payment method
    this.code = '';
    
    // the collection of language specific descriptors 
    this.descriptors = [];
    
    // a language specific text name of the payment method
    this.name = '';
    
    // the status of the payment method
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = PaymentMethod;