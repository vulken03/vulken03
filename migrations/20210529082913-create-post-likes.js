'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_id: {
        type: Sequelize.INTEGER,
          references:{
            model:{
              tableName:"post_tables"
            },
            
            key:"id"
          },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
        
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"User_Registrations"
          },
          key:"id"
        },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
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
    await queryInterface.dropTable('post_likes');
  }
};