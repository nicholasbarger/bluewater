var Currency = require('../common/currency');
var Status = require('../common/status');
var UOM = require('../common/uom');

/// A discount on price based on the quantity of item being purchased
function BulkDiscount() {
    this.id = 0;
    
    // the primary currency the price is in
    this.currency = new Currency();
    
    // the maximum threshold quantity
    this.maximumQuantity = null;
    
    // the minimum threshold quantity
    this.minimumQuantity = null;
    
    // the price for one unit given the specified currency
    this.pricePerUnit = 0.00;
    
    // the status of the bulk discount
    this.status = new Status();
    
    // the unit of measure for the quantity of items
    this.uom = new UOM();
    
    this.created = null;
    this.modified = null;
}

module.exports = BulkDiscount;