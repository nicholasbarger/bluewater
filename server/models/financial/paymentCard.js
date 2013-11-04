var Status = require('./status');

/// A type of payment or credit card
function PaymentCard() {
    this.id = 0;
    
    // the collection of language specific descriptors 
    this.descriptors = [];
    
    // a language specific text name of the card
    this.name = '';
    
    // the status of the payment card
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = PaymentCard;