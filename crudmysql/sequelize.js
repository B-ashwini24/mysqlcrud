// Sequelize connection 
const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const DbConnect=(database,username,password,host)=>{
    const sequelize = new Sequelize(database, username, password, {
        host: host,
        dialect: 'mysql'
      });

      return sequelize;
}

module.exports=DbConnect