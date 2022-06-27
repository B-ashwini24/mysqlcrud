const {  DataTypes  } = require('sequelize');


const DbConnect =require("../sequelize");

const sequelize=DbConnect("ifsc","root","1234","localhost");
const asyncConnect=async()=>{

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}

asyncConnect();

/*
  */
const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
});

module.exports=User;