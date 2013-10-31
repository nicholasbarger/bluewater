var User = require('../membership/user');

/// A rating for anything in the system by a user
function Rating() {
    this.id = 0;
    
    // a rating, generally 0-5
    this.rating = 0;
    
    // the user creating the rating (may be anonymous)
    this.user = null;
    
    this.created = null;
    this.modified = null;
}

module.exports = Rating;