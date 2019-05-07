module.exports = (sequelize, datatypes) => sequelize.define('sensor', {
    id: {
        primaryKey: true,
        type: datatypes.NUMBER,
        allowNull: false
    },
    coordenate_n: {
        type: datatypes.DOUBLE,
        defaultValue: null,
        allowNull: true
    },
    coordenate_l: {
        type: datatypes.DOUBLE,
        defaultValue: null,
        allowNull: true
    },
    user_id:{
        type: datatypes.UUID,
        defaultValue: null,
        allowNull: true
    }

}, {
    tableName: "sensors",
    timestamps: false
});