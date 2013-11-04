var Language = require('./language');
var Status = require('./status');
var User = require('../membership/user');

/// A comment by a user
function Comment() {
    this.id = 0;
    
    // the language the comment is made in
    this.language = new Language();
    
    // the actual comment
    this.text = '';
    
    // the status of the city
    this.status = new Status();
    
    // the user making the comment (may be anonymous)
    this.user = null;
    
    this.created = null;
    this.modified = null;
}

module.exports = Comment;