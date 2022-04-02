"use strict";// eslint-disable-next-line import/no-import-module-exports

const bcryptjs = require('bcryptjs');

module.exports = {

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'USERS_1',
        email: 'USER1@EMAIL.COM',
        password_hash: await bcryptjs.hash('senha123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'USERS_2',
        email: 'USER2@EMAIL.COM',
        password_hash: await bcryptjs.hash('senha123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'USERS_3',
        email: 'USER3@EMAIL.COM',
        password_hash: await bcryptjs.hash('senha123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },
};
