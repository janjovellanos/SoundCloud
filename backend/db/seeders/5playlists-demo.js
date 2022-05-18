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
    await queryInterface.bulkInsert('Playlists', [
      {
        userId: 1,
        name: 'Playlist 1',
        imageUrl: 'URL of Playlist 1',
      },
      {
        userId: 2,
        name: 'Playlist 2',
        imageUrl: 'URL of Playlist 2',
      },
      {
        userId: 3,
        name: 'Playlist 3',
        imageUrl: 'URL of Playlist 3',
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
    await queryInterface.bulkDelete('Playlists', {
      name: ['Playlist 1', 'Playlist 2', 'Playlist 3']
    })
  }
};
