import mysql from '../database/mysql/database';
import * as mysqlRepository from '../database/mysql/repository';
import * as auth from './authentication';

export async function register (req, res){
    try{
    const found = await mysqlRepository.findOne(mysql.user, { where: { email: req.body.email } });
    
    if(found){
        return res.status(400).json({ error: 'User Already Exists'});
    }
    const user = auth.setUser({

        email: req.body.email,
        
        name: req.body.name,
        
        password: req.body.password
    
    });

    const newUser = await mysqlRepository.create(mysql.user, user);    
    
    const { dataValues } = newUser;

    const token = auth.generateJwt(dataValues);

    res.status(200).json({ token });

    }catch(err){
        res.status(500).json({ status: 'Internal Server Error!'});
    }
}

export async function login (req, res){
    try{
        const user = await mysqlRepository.findOne(mysql.user, { where: { email: req.body.email } });

        if(!user){
            return res.status(404).json({ error: "User Not Found!"});
        }

        const { dataValues } = user;

        const { password } = req.body;

        const isValid = auth.validatePassword(password, dataValues);
        
        if(isValid){
            const token = auth.generateJwt(dataValues);
            
            return res.status(200).json({ token });
        }else{
            return res.status(403).json({ error: "Password is Wrong!" });
        }

    }catch(err){
        res.status(500).json({ status: "Internal Server Error!"});
    }
}

export async function getProfile (req, res){
    try{
        const { payload } = req;
        const user_id = payload.id;

        if(!user_id){
            return res.status(401).json({ error: 'UnauthorizedError'});
        }
        const user = await mysqlRepository.findOne(mysql.user, { where: { id: user_id } });
        
        if(payload.email === user.email && payload.name === user.name){

            payload.sensors = await mysqlRepository.findAll(mysql.sensor, { 
                attributes: ['id', 'coordenate_n', 'coordenate_l'],
                where: { user_id } 
            });
            
            return res.status(200).json(payload);
        }else{
            return res.status(401).json({ error: 'UnauthorizedError'});
        }

    }catch(err){
        res.status(500).json({ status: "Internal Server Error!"});
    }
}