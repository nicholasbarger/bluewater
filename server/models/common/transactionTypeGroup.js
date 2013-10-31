/// A categorization of transaction types
function TransactionTypeGroup() {
    this.id = 0;
    
    // a human readable identifier for the transaction type group
    this.code = '';
    
    // a language specific text name of the transaction type group
    this.name = '';
    
    // the collection of language specific descriptors
    this.descriptors = [];
    
    this.created = null;
    this.modified = null;
}

module.exports = TransactionTypeGroup;