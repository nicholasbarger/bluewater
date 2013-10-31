var StatusGroup = require('./statusGroup');

/// Any status within the system, categorized by status groups
function Status() {
    this.id = 0;
    
    // a human-readable reference code for the status
    this.code = '';
    
    // a language specific text name of the status
    this.name = '';
    
    // the collection of language specific descriptors 
    this.descriptors = [];
    
    // the categorization of the status to be used with other similar statuses in a workflow
    this.statusGroup = new StatusGroup();
    
    this.created = null;
    this.modified = null;
}

module.exports = Status;