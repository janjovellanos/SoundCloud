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

    options.tableName = 'Albums';     // define table name in options object
    await queryInterface.bulkInsert(options, [
      {
        userId: 1,
        title: 'Album 1',
        description: 'description of Album 1',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/fakecover1.png',
      },
      {
        userId: 2,
        title: 'Album 2',
        description: 'description of Album 2',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/fakecover2.jpeg',
      },
      {
        userId: 3,
        title: 'Album 3',
        description: 'description of Album 3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/fakecover3.jpeg',
      },
      {
        userId: 4,
        title: 'souljaboytellem.com',
        description: 'description of the album',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/crank-dat.jpeg',
      },
      {
        userId: 5,
        title: 'Let Go',
        description: 'description of the album',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/complicated.jpeg',
      },
      {
        userId: 6,
        title: 'Word of Mouf',
        description: 'description of the album',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/luda-move.jpeg',
      },
      {
        userId: 7,
        title: 'Dolo',
        description: 'description of the dolo',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/dolo-dont-slap.jpeg',
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

    options.tableName = 'Albums';     // define table name in options object
    await queryInterface.bulkDelete(options, {
      title: ['Album 1', 'Album 2', 'Album 3', 'souljaboytellem.com', 'Let Go', 'Word of Mouf', 'Dolo']
    });
  }
};
