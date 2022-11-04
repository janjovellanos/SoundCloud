'use strict';
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Users';     // define table name in options object
    // await queryInterface.bulkInsert('Users', [
    await queryInterface.bulkInsert(options, [
      {
        firstName: 'Tester',
        lastName: 'Test',
        email: 'demo@user.io',
        username: 'Demo-lition',
        imageUrl: 'Artist IMG',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Tester2',
        lastName: 'Test2',
        email: 'user1@user.io',
        username: 'FakeUser1',
        imageUrl: 'Artist IMG',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName: 'Tester3',
        lastName: 'Test3',
        email: 'user2@user.io',
        username: 'FakeUser2',
        imageUrl: 'Artist IMG',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        firstName: 'DeAndre',
        lastName: 'Cortes Way',
        email: 'soulja@gmail.com',
        username: 'Soulja Boy Tell Em',
        imageUrl: '-_"."_-',
        hashedPassword: bcrypt.hashSync('superman')
      },
      {
        firstName: 'Avril Ramona',
        lastName: 'Lavigne',
        email: 'avril@gmail.com',
        username: 'Arvil Lavigne',
        imageUrl: ':D',
        hashedPassword: bcrypt.hashSync('ironman')
      },
      {
        firstName: 'Christopher',
        lastName: 'Bridges',
        email: 'luda@gmail.com',
        username: 'Ludacris',
        imageUrl: '>:|',
        hashedPassword: bcrypt.hashSync('batman')
      },
      {
        firstName: 'Jan Michael',
        lastName: 'Jovellanos',
        email: 'jan@jan.jan',
        username: 'Han Dolo',
        imageUrl: '-.-',
        hashedPassword: bcrypt.hashSync('jan12345')
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    options.tableName = 'Users'; // define table name in options object
    // await queryInterface.bulkDelete('Users', {
    await queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'Soulja Boy Tell Em', 'Avril Lavigne', 'Ludacris', 'Han Dolo'] }
    }, {
      truncate: true
    })
  }
};
