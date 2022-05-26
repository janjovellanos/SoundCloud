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
    await queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: 'Album 1',
        description: 'description of Album 1',
        imageUrl: 'URL of Album 1',
      },
      {
        userId: 2,
        title: 'Album 2',
        description: 'description of Album 2',
        imageUrl: 'URL of Album 2',
      },
      {
        userId: 3,
        title: 'Album 3',
        description: 'description of Album 3',
        imageUrl: 'URL of Album 3',
      },
      {
        userId: 4,
        title: 'souljaboytellem.com',
        description: 'description of the album',
        imageUrl: 'URL of the Album',
      },
      {
        userId: 5,
        title: 'Let Go',
        description: 'description of the album',
        imageUrl: 'URL of the Album',
      },
      {
        userId: 6,
        title: 'Word of Mouf',
        description: 'description of the album',
        imageUrl: 'URL of the Album',
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
    await queryInterface.bulkDelete('Albums', {
      title: ['Album 1', 'Album 2', 'Album 3', 'souljaboytellem.com', 'Let Go', 'Word of Mouf']
    });
  }
};
