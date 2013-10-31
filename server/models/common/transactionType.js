var TransactionTypeGroup = require('./transactionTypeGroup');

/// A categorization of transaction types
function TransactionType() {
    this.id = 0;
    
    // a human readable identifier for the transaction type group
    this.code = '';
    
    // a language specific text name of the transaction type group
    this.name = '';
    
    // the collection of language specific descriptors
    this.descriptors = [];
    
    // the transaction type group the transaction belongs to
    this.transactionTypeGroup = new TransactionTypeGroup();
    
    this.created = null;
    this.modified = null;
}

module.exports = TransactionType;