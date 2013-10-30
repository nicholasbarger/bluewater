var Status = require('../common/status');
var UOM = require('../common/uom');

/// The definition of an item which can be sold, built or purchased.
function Item() {
    this.id = 0;
    
    // the status the item is currently in (new, backordered, available, etc.)
    this.status = new Status();
    
    // the default unit of measure the item is sold in
    this.uom = new UOM();
    
    // a human readable code associated with the item (sku)
    this.code = '';
    
    // the current revision
    this.revision = '';
    
    // specifies whether the item is able to be purchased from a vendor
    this.isPurchased = false;
    
    // specifies whether the item is able to be manufactured
    this.isManufacured = false;
    
    // specifies whether the item is able to be sold as a finished good
    this.isSaleable = false;
    
    // specifies whether the item is digital (non-physical product)
    this.isDigital = false;
    
    // specifies whether the item is available in unlimited quantities
    this.isUnlimitedQuantity = false;
    
    this.created = null;
    this.modified = null;
}

// Copy the item to a new item
Item.prototype.copy = function() {
    // todo
};

// Delete the item from the database
Item.prototype.delete = function() {
    // todo
};

// Deactivate the item
Item.prototype.deactivate = function() {
    // todo
};

// Save changes to the item to the database
Item.prototype.save = function() {
    // todo
};

module.exports = Item;