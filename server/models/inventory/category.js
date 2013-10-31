var Status = require('../common/status');

/// An item category
function Category() {
    this.id = 0;
    
    // a human readable identifier for the catalog
    this.code = '';
    
    // a collection of items included in the catalog
    this.items = [];

    // the name of the catalog
    this.name = '';
    
    // the name of the catalog in various languages
    this.descriptors = [];
    
    // the status of the catalog
    this.status = new Status();
    
    // sub categories (children)
    this.subcategories = [];
    
    this.created = null;
    this.modified = null;
}

module.exports = Category;