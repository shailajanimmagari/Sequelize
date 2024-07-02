const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres', 'shailaja', '1121', {
    host: 'localhost',
    dialect: 'postgres' , 
    port: 5432     
  });
 
//Creating customer model
const Customer= sequelize.define('Customer',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  firstName:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  lastName:{
    type:DataTypes.STRING,
    allowNull:false
  },
  phone:{
    type:DataTypes.STRING
  }
},{
  tableName:'Customers',
  timestamps: true,

});
module.exports = Customer;
//Creating product model 
const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'products',  
  timestamps: true    
});
module.exports = Product;
// Address model
const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  customer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Customer',
      key: 'id'
    }
  }
}, {
  tableName: 'addresses', 
  timestamps: true    
});
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database sync successful');
    // Other application logic
  })
  .catch(err => {
    console.error('Database sync failed:', err);
  });
