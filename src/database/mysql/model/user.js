import crypto from 'crypto';
export default (sequelize, datatypes) => sequelize.define('user', {
    id: {
        primaryKey: true,
        type: datatypes.UUID,
        defaultValue: datatypes.UUIDV4,
        allowNull: false
    },

    email:{
        type: datatypes.STRING(256),
        allowNull: false
    },

    name:{
        type: datatypes.STRING(256),
        allowNull: false
    },

    hash:{
        type: datatypes.STRING(64),
        allowNull: false
    },

    salt:{
        type: datatypes.STRING(16)
    }

}, {
    tableName: "users" 
});