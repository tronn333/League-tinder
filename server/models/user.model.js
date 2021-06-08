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

    static async getUserByValue(value, name) {
        const getUser = await db.query(`SELECT * FROM users WHERE ${name}=?`,[value]);
        return getUser[0];
    }
    

    static async addUser(nickname,email,password) {
        const addUser = await db.query('INSERT INTO users (nickname,email,password) values (?,?,?)',[nickname,email,password]);
        const newUser = User.getUserById(addUser.insertId);
       
        return newUser;
    }

    static async getRoles(userid) {
        const roles = await db.query('select user_roles.role from user_roles left join users on user_roles.user = users.id where user_roles.user = ?',[userid]);
        return roles;
    }
    

    static async setRoles(roles,userId) {

        const currentRoles = await db.query('select user_roles.role from user_roles left join users on user_roles.user = users.id where user_roles.user = ?',[userId]);
        
        currentRoles.forEach(el => {
            if (roles.indexOf(el.role) > -1) {
                roles.splice(roles.indexOf(el.role),1);
            }
        });

        if (roles) {
            await Promise.all(roles.map(async el=>{
                return db.query('INSERT INTO user_roles (user,role) values (?,?)',[userId,el])
            }))
            const changedRoles = User.getRoles(userId);
            return changedRoles;
        }else {
            return {message:"roles aren't changed"}
        }
 
        
    }
    
}


module.exports = User;