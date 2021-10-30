const MySqli = require( 'mysqli');

let conn = new MySqli({
    Host: 'localhost', // IP/domain name 
    post: 3306, // port, default 3306 
    user: 'naveen', // username 
    passwd: '1234567890', // password 
    db: 'mega_shop'
});

let db = conn.emit(false , '');

module.exports ={
    database:db
};