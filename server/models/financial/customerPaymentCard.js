var Address = require('../common/address');
var PaymentCard = require('./paymentCard');
var Status = require('./status');

/// A customer specific payment card
function CustomerPaymentCard() {
    this.id = 0;
    
    // the address associated with the card
    this.billingAddress = new Address();
    
    // the expiration date
    this.expiration = null;
    
    // the masked number
    this.maskedNumber = '';
    
    // the type of card
    this.paymentCard = new PaymentCard();
    
    // the status of the customer card
    this.status = new Status();
    
    // a token referencing the sensitive information
    this.token = null;
    
    this.created = null;
    this.modified = null;
}

module.exports = CustomerPaymentCard;