import db from '../config/config-db';
import User from '../Dto/UserDto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO ticket (email, nombres, apellidos, password, documento) VALUES (?, ?, ?, ?, ?)';
        const values = [user.email, user.nombres, user.apellidos, user.password,  user.documento];
        return db.execute(sql, values);
    }

    static async login(email : string){
        const sql = 'SELECT password FROM ticket WHERE email=?'; 
        const values = [email];
        return db.execute(sql,values)
    }
}


export default UserRepository;