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
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Number+song+1-20+for+children+_+Counting+numbers+_+The+Singing+Walrus.mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/1.png'
      },
      {
        userId: 1,
        albumId: 1,
        title: 'Song 2',
        description: 'description of Song 2',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Number+song+1-20+for+children+_+Counting+numbers+_+The+Singing+Walrus.mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/2.png'
      },
      {
        userId: 2,
        albumId: 2,
        title: 'Song 3',
        description: 'description of Song 3',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Number+song+1-20+for+children+_+Counting+numbers+_+The+Singing+Walrus.mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/3.png'
      },
      {
        userId: 2,
        albumId: 2,
        title: 'Song 4',
        description: 'description of Song 4',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Number+song+1-20+for+children+_+Counting+numbers+_+The+Singing+Walrus.mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/4.png'
      },
      {
        userId: 3,
        albumId: 3,
        title: 'Song 5',
        description: 'description of Song 5',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Number+song+1-20+for+children+_+Counting+numbers+_+The+Singing+Walrus.mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/5.png'
      },
      {
        userId: 3,
        albumId: 3,
        title: 'Song 6',
        description: 'description of Song 6',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Number+song+1-20+for+children+_+Counting+numbers+_+The+Singing+Walrus.mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/6.png'
      },
      {
        userId: 4,
        albumId: 4,
        title: 'Crank That (Soulja Boy)',
        description: 'superman',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Crank+That+-+Soulja+Boy+(Dirty).mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/crank-dat.jpeg'
      },
      {
        userId: 4,
        albumId: 4,
        title: 'Kiss Me Thru The Phone',
        description: '678-999-8212',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Kiss+Me+Thru+The+Phone+Lyrics+Soulja+Boy.mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/crank-dat.jpeg'
      },
      {
        userId: 5,
        albumId: 5,
        title: 'Complicated',
        description: 'why',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Avril+Lavigne+-+Complicated+(Audio+).mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/complicated.jpeg'
      },
      {
        userId: 5,
        albumId: 5,
        title: 'Sk8er Boi',
        description: 'rawr xD',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Avril+Lavigne+-+Sk8ter+Boi+(Audio).mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/complicated.jpeg'
      },
      {
        userId: 6,
        albumId: 6,
        title: 'Move',
        description: 'please',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Ludacris+-+Move+Bitch+(dirty).mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/luda-move.jpeg'
      },
      {
        userId: 6,
        albumId: 6,
        title: 'Area Codes',
        description: 'funky',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Ludacris+Ft.+Nate+Dogg-Area+Codes(Lyrics).mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/luda-move.jpeg'
      },
      {
        userId: 7,
        albumId: 7,
        title: 'I Know You Know',
        description: 'what you want',
        audioUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/I+Know+You+Know.mp3',
        imageUrl: 'https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/I-know-dolo.jpeg'
      },
      {
        userId: 7,
        albumId: 7,
        title: "M's",
        description: 'groovy',
        audioUrl: "https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/M's.mp3",
        imageUrl: "https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/M's-cover.jpeg"
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
      title: ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5', 'Song 6', 'Crank That (Soulja Boy)', 'Kiss Me Thru The Phone', 'Complicated', 'Sk8er Boi', 'Move', 'Area Codes', 'I Know You Know', "M's"]
    })
  }
};
