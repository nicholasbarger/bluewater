var Currency = require('../common/currency');
var ShippingMethod = require('../shipping/shippingMethod');
var Status = require('../common/status');
var UOM = require('../common/uom');

/// A line item in a sales order
function LineItem() {
    this.id = 0;
    
    // the actual shipped date
    this.actualShippedDate = null;
    
    // the expected shipping date
    this.expectedShippingDate = null;
    
    // the item being ordered
    this.item = new Item();
    
    // the actual price charged
    this.priceCharged = new Price();
    
    // the quantity in the specified unit of measure
    this.quantity = 0;
    
    // the shipping method for this individual line item
    this.shippingMethod = new ShippingMethod();
    
    // the status of the line item (tracking backorder, individual shipment, etc.)
    this.status = new Status();
    
    // the unit of measure for the quantity of items
    this.uom = new UOM();
    
    this.created = null;
    this.modified = null;
}

module.exports = LineItem;