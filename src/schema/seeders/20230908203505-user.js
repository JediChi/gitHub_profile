'use strict';
const moment = require('moment-timezone');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        slack_name: 'Adanma Akanno',
        password: 'Queen98#',
        current_day: moment().tz('UTC').format('dddd'),
        utc_time: moment().tz('UTC').format(),
        track: 'Backend',
        github_file_url:
          'https://github.com/JediChi/gitHub_profile/blob/main/src/main.ts',
        github_repo_url: 'https://github.com/JediChi/gitHub_profile',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};