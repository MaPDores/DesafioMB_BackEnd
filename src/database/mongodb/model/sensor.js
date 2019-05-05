import mongoose from 'mongoose';

const sensor_data = new mongoose.Schema({

    id: {
        type: String,
        
        unique: true,
        
        required: true
    },

    pressure: {
        type: Number,
        
        required: true
    },

    temperature: {
        type: Number,
        
        required: true
    },

    humidity: {
        type: Number,
    
        required: true
    },

    release_date: {
        type: Number,
    
        required: true
    }

});

export default mongoose.model('sensor', sensor_data);