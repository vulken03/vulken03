'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post_likes.belongsTo(models.post_table,{foreignKey:'post_id'});
      post_likes.belongsTo(models.User_Registration,{foreignKey:'user_id'});


    }
  };
  post_likes.init({
    post_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post_likes',
  });
  return post_likes;
};