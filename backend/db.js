const Sequelize = require('sequelize');
const sequelize = new Sequelize('crudGraphQL', 'root', 'm@leav3l', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;