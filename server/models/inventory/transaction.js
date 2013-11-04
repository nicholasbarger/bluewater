var Status = require('../common/status');
var Location = require('../common/location');
var TransactionType = require('../common/transactionType');

/// An inventory transaction to move between locations.
function Transaction() {
    this.id = 0;
    
    // the item being transacted
    this.item = new Item();
    
    // an associated order if applicable
    this.order = null;
    
    // the quantity of the item being transacted
    this.quantity = 0;
    
    // the source inventory location
    this.sourceLocation = new Location();
    
    // the status the item is currently in (new, backordered, available, etc.)
    this.status = new Status();
    
    // the target inventory location
    this.targetLocation = new Location();
    
    // the type of transaction
    this.transactionType = new TransactionType();
    
    this.created = null;
    this.modified = null;
}

module.exports = Transaction;