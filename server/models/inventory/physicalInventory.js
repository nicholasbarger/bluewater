var Location = require('./location');
var Item = require('./item');

/// The location and quantities of a rev-specific item.
function PhysicalInventory() {
    this.id = 0;
    
    // the physical item
    this.item = new Item();
    
    // the inventory location
    this.location = new Location();
    
    // the quantity available (able to be sold)
    this.quantityAvailable = 0;
    
    // the quantity on hand (still in inventory but includes sold items not yet picked)
    this.quantityOnHand = 0;
    
    this.created = null;
    this.modified = null;
}

module.exports = PhysicalInventory;