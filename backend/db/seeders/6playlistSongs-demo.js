'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

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

    options.tableName = 'PlaylistSongs';     // define table name in options object
    await queryInterface.bulkInsert(options, [
      {
        playlistId: 1,
        songId: 6,
      },
      {
        playlistId: 1,
        songId: 5,
      },
      {
        playlistId: 2,
        songId: 4,
      },
      {
        playlistId: 2,
        songId: 3,
      },
      {
        playlistId: 3,
        songId: 2,
      },
      {
        playlistId: 3,
        songId: 1,
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

    options.tableName = 'PlaylistSongs';     // define table name in options object
    await queryInterface.bulkDelete(options, {
      playlistId: [3, 2, 1]
    })
  }
};
