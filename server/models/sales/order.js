var Company = require('../common/company');
var Currency = require('../common/currency');
var Invoice = require('./invoice');
var Status = require('../common/status');

/// A sales order
function Order() {
    this.id = 0;
    
    // the primary currency for the order
    this.currency = new Currency();
    
    // the customer placing the order
    this.customer = new Company();
    
    // the collection of line items for this order
    this.lineItems = [];
    
    // these are actually line items but separated out and are a catch all for any additional fees or charges
    this.miscellaneousCharges = [];
    
    // the display order number (each client should be able to configure how this is generated
    this.number = null;
    
    // the status of the order (each line item also has a status)
    this.status = new Status();
    
    // these are actually line items but separated out and are dependent on shipping destination, shipping method, and item size/weight
    this.shippingCharges = [];
    
    // these are actually line items but separated out and are dependent on product, location, and various other tax rules
    this.taxes = []
    
    this.created = null;
    this.modified = null;
}

// Cancel an order (if it is in a valid state to cancel)
Order.prototype.cancel = function() {
    // todo
};

// Copy this order to create a new one
Order.prototype.copy = function() {
    // todo
};

// Generate an invoice and optionally send to customer
Order.invoice = function() {
    // todo
    return new Invoice();
};

// Save the order to the db
Order.prototype.save = function() {
    // todo
};

// Get the total charged amount for the order including line items, taxes, shipping, and any additional charges
Order.prototype.total = function() {
    // todo, the total amount for all line items, taxes, shipping, and any additional charges
};

// Get the total charged amount for just the line items
Order.prototype.totalFromLineItems = function() {
    // todo
};

// Get the total charged amount for all miscellaneous charges
Order.prototype.totalFromMiscellaneousCharges = function() {
    // todo
};

// Get the total charged amount for all taxes
Order.prototype.totalFromTaxes = function() {
    // todo
};

module.exports = Order;