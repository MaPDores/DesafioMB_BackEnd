import jwt from 'jsonwebtoken';

export function setUser(payload){
    const Salt = crypto.randomBytes(16).toString(16);
    const Hash =    crypto.pbkdf2Sync(payload.password, Salt, 1000, 64, 'sha512').toString(16);

    const user = {
        
        id: payload.id,
        
        email: payload.email,
        
        name: payload.name,

        hash: Hash,
        
        salt: Salt
    
    }
    return user;
}

export function validatePassword(auth, user){
    const hash = crypto.pbkdf2Sync(auth.password, user.salt, 1000, 64, 'sha512').toString('hex');  

    return user.hash === hash;
}

export function generateJwt(user){

    return jwt.sign({
    
        id: user.id,

        email: user.email,
        
        name: user.name
    
    }, process.env.SECRET, {
        expiresIn: "12h"
    });
}