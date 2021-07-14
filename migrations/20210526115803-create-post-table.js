'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_tables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        allowNull:false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'User_Registrations'
          },
          key:"id"
        },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'

        
      },
      total_likes: {
        type: Sequelize.BIGINT,
        defaultValue: '0'
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
    await queryInterface.dropTable('post_tables');
  }
};