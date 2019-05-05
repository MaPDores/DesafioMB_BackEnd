const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_projetoiot', 'root', 'LDbm4hGzFRHxM5y2', {
    host: '35.247.204.17',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{
    console.log('Connected to MySQL!');
})
.catch((err)=>{
    console.log(err);
});

const user = require('./model/user')(sequelize, Sequelize);

const sensor = require('./model/sensor')(sequelize, Sequelize);

const database = {
    Sequelize,
    sequelize,
    user,
    sensor
}

export default database;