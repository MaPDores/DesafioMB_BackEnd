import express from 'express';
import jwt from 'express-jwt';
import * as sensor_controller from './controllers/sensor_controller.js';
import * as user_controller from './controllers/user_controller.js';
const routes = express.Router();
require('dotenv-extended').load();
const auth = jwt({

    secret: process.env.SECRET,
    
    userProperty: 'payload'

});

routes.post('/register', user_controller.register);
routes.post('/login', user_controller.login);
routes.post('/sensor/:id', sensor_controller.updateSensorData);

routes.get('/profile', auth, user_controller.getProfile);
routes.get('/sensor/:id', auth, sensor_controller.getSensor); //PEGAR SENSOR POR SENSOR
routes.get('/profile/sensor', auth, sensor_controller.retrieveSensors); //PEGA TODOS JUNTOS NO LOAD DA PÁG

routes.put('/sensor/:id', auth, sensor_controller.updateSensorCredentials);

export default routes;