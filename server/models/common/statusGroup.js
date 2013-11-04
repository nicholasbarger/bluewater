/// A group of statuses that work together to form a workflow
function StatusGroup() {
    this.id = 0;
    
    // a human readable code for the status group
    this.code = '';
    
    // the collection of language specific descriptors
    this.descriptors = [];
    
    // a language specific text name of the status
    this.name = '';
    
    this.created = null;
    this.modified = null;
}

module.exports = StatusGroup;