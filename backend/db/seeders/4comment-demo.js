'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        songId: 3,
        body: 'nice!',
      },
      {
        userId: 1,
        songId: 5,
        body: 'clean!',
      },
      {
        userId: 2,
        songId: 1,
        body: 'cool!',
      },
      {
        userId: 2,
        songId: 6,
        body: 'awesome!',
      },
      {
        userId: 3,
        songId: 2,
        body: 'yessir!',
      },
      {
        userId: 3,
        songId: 4,
        body: 'wow!',
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', {
      body: ['nice!', 'clean!', 'cool!', 'awesome!', 'yessir!', 'wow!']
    })
  }
};
