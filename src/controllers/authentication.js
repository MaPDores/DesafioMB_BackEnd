import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export function setUser(payload){

    const Salt = crypto.randomBytes(16).toString('hex');
    const Hash = crypto.pbkdf2Sync(payload.password, Salt, 1000, 64, 'sha512').toString('hex');

    const user = {
        
        email: payload.email,
        
        name: payload.name,

        hash: Hash,
        
        salt: Salt
    
    }

    return user;
}

export function validatePassword(password, user){
    const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');  

    return user.hash === hash;
}

export function generateJwt(payload){
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    
    return jwt.sign({
    
        id: payload.id,

        email: payload.email,
        
        name: payload.name,
        
        exp: parseInt(expiry.getTime())
        
    }, process.env.SECRET);
}