/// A shipping method such as UPS Ground, FedEx Air, etc.
function ShippingMethod() {
    this.id = 0;
    
    // the human readable identifier for this shipping method
    this.code = '';
    
    // the collection of language specific descriptors
    this.descriptors = [];
    
    // the name of the shipping method
    this.name = '';
    
    // the status of the shipping method
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = ShippingMethod;