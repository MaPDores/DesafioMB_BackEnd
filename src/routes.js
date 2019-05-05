import express from 'express';
const routes = express.Router();
import * as sensor_controller from './controllers/sensor_controller.js';
import * as user_controller from './controllers/user_controller.js';


routes.post('/register', user_controller.register);

routes.post('/login', user_controller.login);

routes.get('/profile/:id', user_controller.profile);

routes.get('/sensor/:id', sensor_controller.findSensor);


export default routes;