var Currency = require('../common/currency');

/// A price in a specified currencies
function Price() {
    this.id = 0;
    
    // bulk discounts that adjust the price
    this.bulkDiscounts = [];
    
    // bundled items that may affect price
    this.bundledItems = [];
    
    // the primary currency the price is in
    this.currency = new Currency();
    
    // the price for one unit given the specified currency
    this.pricePerUnit = 0.00;
    
    this.created = null;
    this.modified = null;
}

// the calculated price given bundles, quantities, and any applicable sales
Price.prototype.calculatedPrice = function() {
    // todo
};

module.exports = Price;