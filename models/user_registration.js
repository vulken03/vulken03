'use strict';
const bcrypt = require('bcrypt');
const sequelize = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Registration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     User_Registration.hasMany(models.post_table,{foreignKey: 'user_id'});
     User_Registration.hasMany(models.post_likes,{foreignKey:'user_id'});
    }
  };
  User_Registration.init({
    media: {type:DataTypes.STRING
    },
    type: {type:DataTypes.ENUM,

           values:['image','video']
           
    },
    first_name: {type:DataTypes.STRING,
               allowNull:false
    },
    last_name: {type:DataTypes.STRING,
    allowNull:false    
    },
    user_name: {type:DataTypes.STRING,
             unique: true,
             allowNull:false
    },
    email: {type:DataTypes.STRING,
         isEmail:true,
         allowNull:false
    },
    password: {type:DataTypes.STRING,
               allowNull:false,
            // set(value){

   //           const hash=bcrypt.hashSync(value,10)
    
     //          this.setDataValue('password',hash);
       //      }
    }
  }, {
    sequelize,
    modelName: 'User_Registration',
  });
  return User_Registration;
};