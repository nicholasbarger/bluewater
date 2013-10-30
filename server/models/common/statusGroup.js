// A group of statuses that work together to form a workflow
function StatusGroup() {
    this.id = 0;
    
    // a human readable code for the status group
    this.code = '';
    
    // a language specific text name of the status
    this.name = '';
    
    // the collection of language specific descriptors for the name of the status
    this.nameDescriptors = [];
    
    this.created = null;
    this.modified = null;
}

module.exports = StatusGroup;