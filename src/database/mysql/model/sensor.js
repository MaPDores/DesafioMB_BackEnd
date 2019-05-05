export default (sequelize, datatypes) => sequelize.define('sensor', {
    id: {
        primaryKey: true,
        type: datatypes.NUMBER,
        defaultValue: datatypes.NUMBER,
        allowNull: false
    },

    coordenate_n: {
        type: datatypes.DOUBLE,
        allowNull: true
    },

    coordenate_l: {
        type: datatypes.DOUBLE,
        allowNull: true
    }

}, {
    tableName: "sensor"
});