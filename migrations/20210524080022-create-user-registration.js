'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_Registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      media: {
        type: Sequelize.STRING,

      },
      type: {
        type: Sequelize.ENUM,
         
         values:['image','video']

      },
      first_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      email: {
        type: Sequelize.STRING,
        isEmail:true,
        allowNull:false

      },
      password: {
        type: Sequelize.STRING ,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User_Registrations');
  }
};