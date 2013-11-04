var BillOfMaterial = require('../manufacturing/billOfMaterial');
var Status = require('../common/status');
var UOM = require('../common/uom');

/// The definition of an item which can be sold, built or purchased.
function Item() {
    this.id = 0;
    
    // the bill of material
    this.billOfMaterial = new BillOfMaterial();
    
    // a short description of the item
    this.briefDescription = '';
    
    // a human readable code associated with the item (sku)
    this.code = '';
    
    // user comments about an item
    this.comments = [];
    
    // a collection of descriptors in various languages (name, brief description, long description, html content)
    this.descriptors = [];
    
    // a collection of distributors for this item
    this.distributors = [];
    
    // specifies when this product is available
    this.effectiveStart = null;
    
    // specifies when this product is no longer available
    this.effectiveEnd = null;
    
    // the generic height of the item
    this.height = 0;
    
    // the unit of measure for the height
    this.heightUom = new UOM();
    
    // the html content/description for the item
    this.htmlContent = '';
    
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
    
    // a collection of inventory locations for this item
    this.inventoryLocations = [];
    
    // the generic length of the item
    this.length = 0;
    
    // the unit of measure for the length
    this.lengthUom = new UOM();
    
    // a detailed description of the item
    this.longDescription = '';
    
    // a collection of manufacturers for this item
    this.manufacturers = [];
    
    // the name of the item
    this.name = '';
    
    // the price for this item in the default currency
    // calculations on price occur due to quantity ordered, sales, etc.
    this.price = new Price();
    
    // a collection of user ratings for this item
    this.ratings = [];
    
    // a collection of recommended or similar items
    this.recommendedItems = [];
    
    // a collection of replacement items (for obsolescing)
    this.replacementItems = [];
    
    // the current revision
    this.revision = '';
    
    // a collection of routings to define how to make this item
    this.routings = [];
    
    // the status the item is currently in (new, backordered, available, etc.)
    this.status = new Status();
    
    // the default unit of measure the item is sold in
    this.uom = new UOM();
    
    // a collection of vendors for this item
    this.vendors = [];
    
    // the average weight of the item
    this.weight = 0;
    
    // the unit of measure for the weight
    this.weightUom = new UOM();
    
    // the generic width of the item
    this.width = 0;
    
    // the unit of measure for the width
    this.widthUom = new UOM();
    
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