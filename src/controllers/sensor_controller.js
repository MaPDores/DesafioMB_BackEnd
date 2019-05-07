import mysql from '../database/mysql/database';
import * as mysqlRepository from '../database/mysql/repository';
import sensor from '../database/mongodb/model/sensor';
import * as mongodbRepository from '../database/mongodb/repository';

export async function updateSensorData(req, res){ 
    try{
        const { id } = req.params;
        const sensor_data = req.body;

        const mongo = await mongodbRepository.updateOne(sensor, { id }, sensor_data );
        if(mongo.nModified){
            return res.status(200).json({ mongo });
        }
        const sql = await mysqlRepository.create(mysql.sensor, { id });

        const upToDate = {
            mongo,
            sql
        }

        res.status(201).json(upToDate);
    }catch(err){
        res.status(500).json({ status: 'Internal Server Error!' });
    }
}

export async function updateSensorCredentials(req, res){
    try{
        const user_id = req.payload.id;
        const sensor_id = req.params.id;
        
        if(!user_id){
            return res.status(401).json({ error: "UnauthorizedError" });
        }

        const findUserId = await mysqlRepository.findOne(mysql.sensor, { 
            attributes: ['user_id'],
            where: { id: sensor_id } 
        });

        if(findUserId.user_id){
            return res.status(400).json({ status: "Sensor already have a User!" });
        }
        const { coordenate_n } = req.body;
        const { coordenate_l } = req.body;

        const upToDate = await mysqlRepository.update(mysql.sensor, {
            coordenate_n,
            coordenate_l,
            user_id
        }, {
            where: { id: sensor_id }
        });
        
        res.status(200).json(upToDate);
    }catch(err){
        res.status(500).json({ status: 'Internal Server Error!' });
    }
}

export async function getSensor(req, res){
    try{
        const user_id = req.payload.id;
        const { id } = req.params;

        if(!user_id){
            return res.status(401).json({ error: "UnauthorizedError" });
        }
        const sensor_data = await mongodbRepository.findOne(sensor, { id });

        res.status(200).json(sensor_data);
    }catch(err){
        res.status(500).json({ status: 'Internal Server Error!' });
    }
}

export async function retrieveSensors(req, res){
    try{
        const user_id = req.payload.id;

        if(!user_id){
            return res.status(401).json({ error: "UnauthorizedError" });
        }
        const sensor_data_array = await mongodbRepository.find(sensor, { id: { $in: req.body.sensor_id_array }});

        res.status(200).json(sensor_data_array);

    }catch(err){
        console.log(err);
        res.status(500).json({ status: 'Internal Server Error!' });
    }
}