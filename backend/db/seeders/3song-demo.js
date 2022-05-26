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
    await queryInterface.bulkInsert('Songs', [
      {
        userId: 1,
        albumId: 1,
        title: 'Song 1',
        description: 'description of Song 1',
        audioUrl: 'URL of Song 1',
        imageUrl: 'URL of Song 1',
      },
      {
        userId: 1,
        albumId: 1,
        title: 'Song 2',
        description: 'description of Song 2',
        audioUrl: 'URL of Song 2',
        imageUrl: 'URL of Song 2',
      },
      {
        userId: 2,
        albumId: 2,
        title: 'Song 3',
        description: 'description of Song 3',
        audioUrl: 'URL of Song 3',
        imageUrl: 'URL of Song 3',
      },
      {
        userId: 2,
        albumId: 2,
        title: 'Song 4',
        description: 'description of Song 4',
        audioUrl: 'URL of Song 4',
        imageUrl: 'URL of Song 4',
      },
      {
        userId: 3,
        albumId: 3,
        title: 'Song 5',
        description: 'description of Song 5',
        audioUrl: 'URL of Song 5',
        imageUrl: 'URL of Song 5',
      },
      {
        userId: 3,
        albumId: 3,
        title: 'Song 6',
        description: 'description of Song 6',
        audioUrl: 'URL of Song 6',
        imageUrl: 'URL of Song 6',
      },
      {
        userId: 4,
        albumId: 4,
        title: 'Crank That (Soulja Boy)',
        description: 'superman',
        audioUrl: 'URL of Song',
        imageUrl: 'URL of Song',
      },
      {
        userId: 4,
        albumId: 4,
        title: 'Kiss Me Thru The Phone',
        description: '678-999-8212',
        audioUrl: 'URL of Song',
        imageUrl: 'URL of Song',
      },
      {
        userId: 5,
        albumId: 5,
        title: 'Complicated',
        description: 'why',
        audioUrl: 'URL of Song',
        imageUrl: 'URL of Song',
      },
      {
        userId: 5,
        albumId: 5,
        title: 'Sk8er Boi',
        description: 'rawr xD',
        audioUrl: 'URL of Song',
        imageUrl: 'URL of Song',
      },
      {
        userId: 6,
        albumId: 6,
        title: 'Move',
        description: 'please',
        audioUrl: 'URL of Song',
        imageUrl: 'URL of Song',
      },
      {
        userId: 6,
        albumId: 6,
        title: 'Area Codes',
        description: 'funky',
        audioUrl: 'URL of Song',
        imageUrl: 'URL of Song',
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
    await queryInterface.bulkDelete('Songs', {
      title: ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5', 'Song 6']
    })
  }
};
