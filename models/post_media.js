'use strict';
const {
  Model
} = require('sequelize');
const post_table = require('./post_table');
module.exports = (sequelize, DataTypes) => {
  class post_media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      post_media.belongsTo(models.post_table,{foreignKey:'post_id'});
    }
  };
  post_media.init({
    url: DataTypes.STRING,
    type: {type:DataTypes.ENUM,
      values:['image','video']
    },
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post_media',
  });
  return post_media;
};