const getDb = require('../db.js');
const db = getDb.getDb();


class User {
    
    static async getUserById(id) {
        const getUser = await db.query('SELECT * FROM users WHERE id=?',[id]);
        return getUser[0];
    }

    static async getUserByEmail(email) {
        const getUser = await db.query('SELECT * FROM users WHERE email=?',[email])
        return getUser[0];
    }

    

    static async addUser(nickname,email,password) {
        const addUser = await db.query('INSERT INTO users (nickname,email,password) values (?,?,?)',[nickname,email,password]);
        const newUser = User.getUserById(addUser.insertId);
        console.log(newUser);
        return newUser;
    }
    
}


module.exports = User;