const Sequelize = require('sequelize');

const FilmModel = require('./models/films');

const sequelize = new Sequelize('filmBD', 'manbago', 'rostro', {
    host: 'localhost',
    dialect: 'mysql',
});

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({ force: true })
.then(() => {
    console.log('Database & tables created!');
});

module.exports = {
    Film 
};