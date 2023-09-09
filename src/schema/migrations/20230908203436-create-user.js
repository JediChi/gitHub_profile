'use strict';
const moment = require('moment-timezone');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      slack_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      track: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      current_day: {
        type: Sequelize.STRING,
        defaultValue:  moment().tz('UTC').format('dddd'),
        allowNull: false,
      },
      utc_time: {
        type: Sequelize.STRING,
        defaultValue: new Date().toISOString().split('.')[0] + 'Z',
        allowNull: false,
      },
      github_file_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      github_repo_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
