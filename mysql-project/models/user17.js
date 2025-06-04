const db = require('../db17');

class User{
    static async create(name, email){
        const [result]= await db.execute('INSERT INTO users (name, email) VALUES (?,?)', [name, email]);
        return {id: result.insertId, name, email};
    }

    static async findAll(){
       const [rows] = await db.execute('SELECT * FROM users');
        return rows;
    }

    static async findById(id){
        const [rows]= await db.execute('SELECT * FROM users WHERE ID =?', [id]);
        return rows[0];
    }

    static async update(id, name, email){
        await db.execute('UPDATE users SET name = ?, email = ?, WHERE id = ?', [name,email,id]);
        return {id, name, email};
    }

    static async delete(id){
        await db.execute('DELETE FROM users WHERE id = ?', [id]);
        return {id};
    }
}

module.exports = User;
