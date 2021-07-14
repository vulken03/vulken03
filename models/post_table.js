'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //console.log(models);

      post_table.belongsTo(models.User_Registration,{foreignKey: 'user_id'});
     
      post_table.hasMany(models.post_media,{onDelete:'CASCADE',onUpdate:'CASCADE',foreignKey:'post_id'});

      post_table.hasMany(models.post_likes,{onDelete:'CASCADE',onUpdate:'CASCADE',foreignKey:'post_id'});

    }
  };
  post_table.init({
    description: {type:DataTypes.STRING,
          allowNull:false
    },
    user_id: DataTypes.INTEGER,
    total_likes: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'post_table',
  });
  return post_table;
};