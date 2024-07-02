const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres', 'shailaja', '1121', {
    host: 'localhost',
    dialect: 'postgres' , 
    port: 5432     
  });
  sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  }); 
