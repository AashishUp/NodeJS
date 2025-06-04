const db = require('../db');
class User{
    static create(name,email,callback){
        const query = 'INSERT INTO users (name,email) VALUES(?,?)';
        db.query(query, [name,email], callback);
    }

    static findAll(callback){
        db.query('SELECT * FROM users', callback);
    }

    static findById(id, callback){
        db.query('SELECT * FROM users WHERE id = ?', [id], this.callback);
    }
}

module.exports = User;