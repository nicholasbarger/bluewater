/// A shipping carrier such as UPS, FedEx, DHL, etc.
function ShippingCarrier() {
    this.id = 0;
    
    // the human readable identifier for this shipping carrier
    this.code = '';
    
    // the collection of language specific descriptors
    this.descriptors = [];
    
    // the name of the shipping carrier
    this.name = '';
    
    // a collection of shipping methods this carrier supports
    this.shippingMethods = [];
    
    // the status of the shipping carrier
    this.status = new Status();
    
    this.created = null;
    this.modified = null;
}

module.exports = ShippingCarrier;